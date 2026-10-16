import { useEffect, useRef } from 'react';

/**
 * Bespoke hardware-accelerated background canvas combining:
 * 1. Slowly evolving mathematical topographical isolines / harmonic wave contours
 * 2. Interactive constellation telemetry nodes with orthogonal/geodesic traces
 * 3. Architectural blueprint micro-grid + SVG film grain overlay
 * Automatically adapts stroke contrast for both Light and Dark themes.
 */
const AtmosphericBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const pointer = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const nodeCount = Math.min(38, Math.max(20, Math.floor((width * height) / 48000)));
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: ((i * 197) % 100) * 0.01 * width,
      y: ((i * 313) % 100) * 0.01 * height,
      vx: (Math.sin(i * 1.7) * 0.18) || 0.12,
      vy: (Math.cos(i * 2.3) * 0.18) || -0.1,
      phase: i * 0.85,
      accent: i % 3 === 0 ? 'teal' : i % 3 === 1 ? 'cyan' : 'zinc'
    }));

    let time = 0;

    const render = () => {
      time += 0.0045;
      const isDark = document.documentElement.classList.contains('dark');

      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Topographical Harmonic Contour Waves
      const contourCount = 7;
      for (let c = 0; c < contourCount; c++) {
        const normalizedC = c / (contourCount - 1);
        const baseY = height * (0.14 + normalizedC * 0.74);

        ctx.beginPath();
        const step = 28;
        for (let x = 0; x <= width + step; x += step) {
          const dx = x - pointer.x;
          const dy = baseY - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const cursorInfluence = Math.max(0, 1 - dist / 460) * 26;

          const wave1 = Math.sin(x * 0.0022 + time + c * 0.55) * 34;
          const wave2 = Math.cos(x * 0.0051 - time * 0.7 + c * 1.1) * 16;
          const wave3 = Math.sin((x + baseY) * 0.0014 + time * 0.4) * 22;

          const y =
            baseY +
            wave1 +
            wave2 +
            wave3 +
            (dy > 0 ? cursorInfluence : -cursorInfluence) * 0.45;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const baseAlpha = isDark ? 0.028 : 0.075;
        const alpha = baseAlpha + Math.sin(time + c) * 0.01;
        ctx.strokeStyle =
          c % 2 === 0
            ? isDark
              ? `rgba(20, 184, 166, ${alpha.toFixed(3)})`
              : `rgba(13, 148, 136, ${alpha.toFixed(3)})`
            : isDark
              ? `rgba(56, 189, 248, ${(alpha * 0.85).toFixed(3)})`
              : `rgba(2, 132, 199, ${(alpha * 0.85).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 2. Update & Draw Geometric Telemetry Web Nodes
      const connectionRadius = Math.min(240, Math.max(160, width * 0.14));

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -40) n.x = width + 40;
        if (n.x > width + 40) n.x = -40;
        if (n.y < -40) n.y = height + 40;
        if (n.y > height + 40) n.y = -40;

        const pdx = pointer.x - n.x;
        const pdy = pointer.y - n.y;
        const pDist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pDist < 280 && pDist > 1) {
          const factor = (1 - pDist / 280) * 0.065;
          n.x -= (pdx / pDist) * factor;
          n.y -= (pdy / pDist) * factor;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const distSq = dx * dx + dy * dy;
          const maxSq = connectionRadius * connectionRadius;

          if (distSq < maxSq) {
            const dist = Math.sqrt(distSq);
            const strength = (1 - dist / connectionRadius) * (isDark ? 0.085 : 0.14);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = isDark
              ? `rgba(161, 161, 170, ${strength.toFixed(3)})`
              : `rgba(82, 82, 91, ${strength.toFixed(3)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        const pulse = 0.45 + 0.35 * Math.sin(time * 2.2 + n.phase);
        const mult = isDark ? 1 : 1.45;
        ctx.fillStyle =
          n.accent === 'teal'
            ? `rgba(13, 148, 136, ${(pulse * 0.32 * mult).toFixed(3)})`
            : n.accent === 'cyan'
              ? `rgba(2, 132, 199, ${(pulse * 0.28 * mult).toFixed(3)})`
              : isDark
                ? `rgba(212, 212, 216, ${(pulse * 0.22).toFixed(3)})`
                : `rgba(82, 82, 91, ${(pulse * 0.32).toFixed(3)})`;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Cursor-tracked subtle ambient spotlight
      const radial = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        10,
        pointer.x,
        pointer.y,
        420
      );
      radial.addColorStop(0, isDark ? 'rgba(20, 184, 166, 0.042)' : 'rgba(20, 184, 166, 0.065)');
      radial.addColorStop(0.45, isDark ? 'rgba(14, 165, 233, 0.018)' : 'rgba(14, 165, 233, 0.03)');
      radial.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base Deep Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,184,166,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(14,165,233,0.06),transparent_70%)]" />

      {/* Architectural Micro-Grid with Radial Mask */}
      <div
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(113, 113, 122, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(113, 113, 122, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 85% 75% at 50% 35%, #000 25%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 75% at 50% 35%, #000 25%, transparent 85%)'
        }}
      />

      {/* Interactive Topographical & Geometric Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Subtle Anodized Film Grain Overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.024] mix-blend-overlay">
        <filter id="studio-obsidian-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#studio-obsidian-noise)" />
      </svg>
    </div>
  );
};

export default AtmosphericBackground;
