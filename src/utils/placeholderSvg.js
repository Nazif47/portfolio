export const createPlaceholderDataUri = (
  label,
  sublabel,
  accentHex,
  { width = 800, height = 520 } = {}
) => {
  const isTall = height >= 600;
  const frameInset = isTall ? 40 : 36;
  const frameWidth = width - frameInset * 2;
  const frameHeight = height - frameInset * 2;
  const frameRx = isTall ? 20 : 18;
  const textX = isTall ? 72 : 68;
  const sublabelY = isTall ? 488 : 390;
  const labelY = isTall ? 524 : 426;
  const sublabelSize = isTall ? 15 : 14;
  const labelSize = isTall ? 26 : 24;
  const glowOpacity = isTall ? '0.22' : '0.25';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181b" />
        <stop offset="100%" stop-color="#09090b" />
      </linearGradient>
      <radialGradient id="glow" cx="75%" cy="25%" r="60%">
        <stop offset="0%" stop-color="${accentHex}" stop-opacity="${glowOpacity}" />
        <stop offset="100%" stop-color="${accentHex}" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#3f3f46" opacity="0.55" />
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />
    <rect width="${width}" height="${height}" fill="url(#dots)" />
    <rect x="${frameInset}" y="${frameInset}" width="${frameWidth}" height="${frameHeight}" rx="${frameRx}" fill="none" stroke="#27272a" stroke-width="1.5" />
    <text x="${textX}" y="${sublabelY}" fill="${accentHex}" font-family="monospace" font-size="${sublabelSize}" font-weight="600" letter-spacing="2">${sublabel}</text>
    <text x="${textX}" y="${labelY}" fill="#f4f4f5" font-family="sans-serif" font-size="${labelSize}" font-weight="700">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
