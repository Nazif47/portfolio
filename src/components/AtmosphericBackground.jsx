import { useEffect, useRef } from 'react';

/**
 * Bespoke hardware-accelerated background canvas combining:
 * 1. Explicitly filled theme canvas (#fafafa in Light mode, #09090b in Dark mode)
 * 2. Slowly evolving mathematical topographical isolines / harmonic wave contours
 * 3. Interactive constellation telemetry nodes with geodesic traces
 * 4. MutationObserver on document.documentElement to detect .dark class changes and force immediate redraw
 */
const AtmosphericBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isDark = document.documentElement.classList.contains('dark');

    const pointer = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35
    };

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

    const drawFrame = (advanceTime = true) => {
      if (advanceTime) {
        time += 0.0045;
        pointer.x += (pointer.targetX - pointer.x) * 0.04;
        pointer.y += (pointer.targetY - pointer.y) * 0.04;
      }

      // 1. Explicit Canvas Background Fill based on current theme
      ctx.fillStyle = isDark ? '#09090b' : '#fafafa';
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Topographical Harmonic Contour Waves
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

        if (isDark) {
          const alpha = 0.032 + Math.sin(time + c) * 0.01;
          ctx.strokeStyle =
            c % 2 === 0
              ? `rgba(20, 184, 166, ${alpha.toFixed(3)})`
              : `rgba(56, 189, 248, ${(alpha * 0.85).toFixed(3)})`;
        } else {
          // Light mode: subtle dark gray & slate-teal contours (rgba(0, 0, 0, 0.05) to 0.10)
          const alpha = 0.065 + Math.sin(time + c) * 0.018;
          ctx.strokeStyle =
            c % 2 === 0
              ? `rgba(0, 0, 0, ${alpha.toFixed(3)})`
              : `rgba(13, 148, 136, ${(alpha * 0.9).toFixed(3)})`;
        }
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 3. Update & Draw Geometric Telemetry Web Nodes
      const connectionRadius = Math.min(240, Math.max(160, width * 0.14));

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (advanceTime) {
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
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const distSq = dx * dx + dy * dy;
          const maxSq = connectionRadius * connectionRadius;

          if (distSq < maxSq) {
            const dist = Math.sqrt(distSq);
            if (isDark) {
              const strength = (1 - dist / connectionRadius) * 0.09;
              ctx.strokeStyle = `rgba(161, 161, 170, ${strength.toFixed(3)})`;
            } else {
              // Light mode: subtle dark gray telemetry lines (up to 0.14 opacity)
              const strength = (1 - dist / connectionRadius) * 0.13;
              ctx.strokeStyle = `rgba(0, 0, 0, ${strength.toFixed(3)})`;
            }
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const pulse = 0.45 + 0.35 * Math.sin(time * 2.2 + n.phase);
        if (isDark) {
          ctx.fillStyle =
            n.accent === 'teal'
              ? `rgba(45, 212, 191, ${(pulse * 0.34).toFixed(3)})`
              : n.accent === 'cyan'
                ? `rgba(56, 189, 248, ${(pulse * 0.3).toFixed(3)})`
                : `rgba(212, 212, 216, ${(pulse * 0.24).toFixed(3)})`;
        } else {
          ctx.fillStyle =
            n.accent === 'teal'
              ? `rgba(13, 148, 136, ${(pulse * 0.45).toFixed(3)})`
              : n.accent === 'cyan'
                ? `rgba(2, 132, 199, ${(pulse * 0.4).toFixed(3)})`
                : `rgba(0, 0, 0, ${(pulse * 0.28).toFixed(3)})`;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Cursor-tracked subtle ambient spotlight
      const radial = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        10,
        pointer.x,
        pointer.y,
        420
      );
      if (isDark) {
        radial.addColorStop(0, 'rgba(20, 184, 166, 0.045)');
        radial.addColorStop(0.45, 'rgba(14, 165, 233, 0.018)');
        radial.addColorStop(1, 'rgba(9, 9, 11, 0)');
      } else {
        radial.addColorStop(0, 'rgba(13, 148, 136, 0.055)');
        radial.addColorStop(0.45, 'rgba(2, 132, 199, 0.025)');
        radial.addColorStop(1, 'rgba(250, 250, 250, 0)');
      }

      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);
    };

    const reducedMotionQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    let isReducedMotion = Boolean(reducedMotionQuery && reducedMotionQuery.matches);

    const renderLoop = () => {
      if (document.hidden || isReducedMotion) {
        animationFrameId = null;
        return;
      }
      drawFrame(true);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const startLoopIfActive = () => {
      if (!document.hidden && !isReducedMotion && !animationFrameId) {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        startLoopIfActive();
      }
    };

    const handleReducedMotionChange = (e) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        drawFrame(false);
      } else {
        startLoopIfActive();
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawFrame(false);
    };

    const handleMouseMove = (e) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    // MutationObserver on document.documentElement to detect .dark class changes and redraw immediately
    const observer = new MutationObserver(() => {
      const nextIsDark = document.documentElement.classList.contains('dark');
      if (nextIsDark !== isDark) {
        isDark = nextIsDark;
        drawFrame(false);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (reducedMotionQuery?.addEventListener) {
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    }

    drawFrame(false);
    startLoopIfActive();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (reducedMotionQuery?.removeEventListener) {
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Interactive Topographical & Geometric Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Top & Bottom Ambient Radial Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,184,166,0.07),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,184,166,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(14,165,233,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(14,165,233,0.06),transparent_70%)]" />

      {/* Architectural Micro-Grid with Radial Mask (Subtle dark gray lines in Light mode, subtle zinc in Dark mode) */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 85% 75% at 50% 35%, #000 25%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 75% at 50% 35%, #000 25%, transparent 85%)'
        }}
      />
    </div>
  );
};

export default AtmosphericBackground;
