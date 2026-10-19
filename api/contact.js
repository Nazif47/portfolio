const ALLOWED_ORIGINS = [
  'https://nazif-gangawali.com',
  'https://www.nazif-gangawali.com',
];

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

// In-memory store for IP-based rate limiting across warm serverless invocations
const rateLimitStore = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }
  if (Array.isArray(forwardedFor) && forwardedFor.length > 0) {
    return forwardedFor[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Clean up expired entries periodically to prevent unbounded memory growth
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now - value.windowStart >= RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { limited: false, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetMs: RATE_LIMIT_WINDOW_MS };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const resetMs = RATE_LIMIT_WINDOW_MS - (now - entry.windowStart);
    return { limited: true, remaining: 0, resetMs };
  }

  entry.count += 1;
  const resetMs = RATE_LIMIT_WINDOW_MS - (now - entry.windowStart);
  return {
    limited: false,
    remaining: MAX_REQUESTS_PER_WINDOW - entry.count,
    resetMs,
  };
}

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // Strict CORS validation: only allow explicitly permitted origins
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden: Origin not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // IP-based Rate Limiting (max 3 requests per 15 minutes per IP)
  const clientIp = getClientIp(req);
  const rateLimit = isRateLimited(clientIp);

  res.setHeader('X-RateLimit-Limit', String(MAX_REQUESTS_PER_WINDOW));
  res.setHeader('X-RateLimit-Remaining', String(rateLimit.remaining));
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(rateLimit.resetMs / 1000)));

  if (rateLimit.limited) {
    res.setHeader('Retry-After', String(Math.ceil(rateLimit.resetMs / 1000)));
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
    });
  }

  const { name, email, message, website } = req.body || {};

  // Honeypot check
  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  return res.status(200).json({
    ok: true,
    message: 'Contact submission received.',
  });
}
