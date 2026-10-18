import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Eye,
  Radio,
  BatteryCharging,
  Compass,
  ShieldAlert,
  Sparkles,
  Volume2,
  MapPin,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Zap,
  Layers,
  Wifi
} from 'lucide-react';
import AnimatedCounter from '../../components/AnimatedCounter';

const ARCHIFY_NODES = [
  {
    id: 'tof_head',
    label: 'Head-Level ToF',
    sublabel: 'VL53L0X + Nano',
    tag: 'GPIO25 INT',
    kind: 'security',
    kindLabel: 'Security / Trigger',
    subsystem: 'Smart Cane Hardware Subsystem',
    x: 40,
    y: 45,
    w: 155,
    h: 64,
    step: 1,
    summary: 'Dedicated single-point laser ToF sensor isolated on an Arduino Nano co-processor that fires a hardware interrupt (D7 -> ESP32 GPIO25) on upper-body hazards.'
  },
  {
    id: 'tof_foot',
    label: 'Dual-Level ToF',
    sublabel: 'VL53L5CX Foot Depth',
    tag: 'I2C Bus',
    kind: 'frontend',
    kindLabel: 'Frontend / Sensor',
    subsystem: 'Smart Cane Hardware Subsystem',
    x: 40,
    y: 160,
    w: 155,
    h: 64,
    step: 0,
    summary: 'Multi-zone Time-of-Flight depth imager on the primary I2C bus scanning ground-plane obstacles, curbs, and terrain drop-offs in real time.'
  },
  {
    id: 'imu_power',
    label: 'MPU6050 + Touch',
    sublabel: 'Tilt & 20s Relay',
    tag: 'Power Gate',
    kind: 'external',
    kindLabel: 'External / Power',
    subsystem: 'Smart Cane Hardware Subsystem',
    x: 40,
    y: 275,
    w: 155,
    h: 64,
    step: 2,
    summary: 'Tracks real-time X/Y stick orientation to suppress false alerts and gates main rail draw via a 20-second capacitive touch + 555 timer relay.'
  },
  {
    id: 'esp32_mcu',
    label: 'ESP32 MCU',
    sublabel: 'Stick Core Controller',
    tag: 'Sensor Fusion',
    kind: 'backend',
    kindLabel: 'Backend / Controller',
    subsystem: 'Smart Cane Hardware Subsystem',
    x: 300,
    y: 160,
    w: 155,
    h: 64,
    step: 1,
    summary: 'Primary controller fusing dual-plane ToF depth and IMU orientation, driving local haptic/buzzer warnings, and issuing conditional /capture requests.'
  },
  {
    id: 'sos_failover',
    label: 'SIM800L / NRF24L01',
    sublabel: 'GSM + SPI RF Failover',
    tag: 'NEO-M8N GPS',
    kind: 'messagebus',
    kindLabel: 'Message Bus / Comms',
    subsystem: 'Smart Cane Hardware Subsystem',
    x: 300,
    y: 285,
    w: 155,
    h: 64,
    step: 4,
    summary: 'Multi-path emergency telemetry transmitting NEO-M8N GPS coordinates over primary SIM800L GSM SMS/Call with automatic NRF24L01 SPI RF failover.'
  },
  {
    id: 'esp32_cam',
    label: 'ESP32-CAM',
    sublabel: 'OV2640 Smart Goggles',
    tag: 'Dormant Until Trigger',
    kind: 'frontend',
    kindLabel: 'Frontend / Vision',
    subsystem: 'Wearable Vision & Hybrid AI Subsystem',
    x: 575,
    y: 160,
    w: 155,
    h: 64,
    step: 5,
    summary: 'Goggles-mounted OV2640 vision module kept in low-power standby and awakened over the shared mobile Wi-Fi LAN strictly when a hazard is confirmed.'
  },
  {
    id: 'ai_router',
    label: 'Hybrid AI Router',
    sublabel: 'Mobile App + TTS Voice',
    tag: 'Spoken Audio',
    kind: 'backend',
    kindLabel: 'Backend / AI Router',
    subsystem: 'Wearable Vision & Hybrid AI Subsystem',
    x: 845,
    y: 160,
    w: 160,
    h: 64,
    step: 6,
    summary: 'Companion smartphone bridge orchestrating cloud-to-edge AI vision failover and synthesizing real-time spoken audio guidance.'
  },
  {
    id: 'gemini_cloud',
    label: 'Gemini Vision API',
    sublabel: 'Primary Cloud AI',
    tag: 'Scene Context',
    kind: 'cloud',
    kindLabel: 'Cloud AI',
    subsystem: 'Wearable Vision & Hybrid AI Subsystem',
    x: 845,
    y: 35,
    w: 160,
    h: 64,
    step: 7,
    summary: 'Primary multimodal cloud inference path delivering rich scene understanding and contextual object descriptions over HTTPS.'
  },
  {
    id: 'onnx_edge',
    label: 'Local ONNX Model',
    sublabel: 'Offline Edge Fallback',
    tag: 'Zero-Internet',
    kind: 'database',
    kindLabel: 'Edge Runtime',
    subsystem: 'Wearable Vision & Hybrid AI Subsystem',
    x: 845,
    y: 285,
    w: 160,
    h: 64,
    step: 8,
    summary: 'Embedded on-device ONNX runtime providing deterministic, zero-internet object recognition whenever cellular connectivity is unavailable.'
  }
];

const ARCHIFY_EDGES = [
  {
    key: '0',
    from: 'tof_foot',
    to: 'esp32_mcu',
    label: 'I2C',
    style: 'emphasis',
    path: 'M 195 190.95 L 300 190.95',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#arrowhead-emphasis)',
    labelBox: { x: 232.5, y: 170.95, w: 30, h: 14, textX: 247.5, textY: 180.95 }
  },
  {
    key: '1',
    from: 'tof_head',
    to: 'esp32_mcu',
    label: 'GPIO/INT',
    style: 'security',
    path: 'M 195 77 L 354.45 77 Q 362.45 77 362.45 85 L 362.45 160',
    underlayWidth: 5.5,
    strokeWidth: 1.5,
    marker: 'url(#arrowhead-security)',
    labelBox: { x: 338.25, y: 98.5, w: 48.4, h: 14, textX: 362.45, textY: 108.5 }
  },
  {
    key: '2',
    from: 'imu_power',
    to: 'esp32_mcu',
    label: 'I2C Tilt',
    style: 'default',
    path: 'M 195 307 L 239.5 307 Q 247.5 307 247.5 299 L 247.5 214 Q 247.5 206 255.5 206 L 300 206',
    underlayWidth: 5.5,
    strokeWidth: 1.5,
    marker: 'url(#arrowhead)',
    labelBox: { x: 223.3, y: 236.5, w: 48.4, h: 14, textX: 247.5, textY: 246.5 }
  },
  {
    key: '3',
    from: 'esp32_mcu',
    to: 'sos_failover',
    label: 'UART / SPI',
    style: 'dashed',
    path: 'M 377.5 224 L 377.5 285',
    underlayWidth: 5.5,
    strokeWidth: 1.5,
    marker: 'url(#arrowhead-dashed)',
    labelBox: { x: 313.5, y: 247.5, w: 58, h: 14, textX: 342.5, textY: 257.5 }
  },
  {
    key: '4',
    from: 'esp32_mcu',
    to: 'esp32_cam',
    label: 'WLAN /capture',
    style: 'emphasis',
    path: 'M 455 192 L 575 192',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#arrowhead-emphasis)',
    labelBox: { x: 478.8, y: 172, w: 72.4, h: 14, textX: 515, textY: 182 }
  },
  {
    key: '5',
    from: 'esp32_cam',
    to: 'ai_router',
    label: 'WLAN Frame',
    style: 'emphasis',
    path: 'M 730 192 L 845 192',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#arrowhead-emphasis)',
    labelBox: { x: 758.5, y: 172, w: 58, h: 14, textX: 787.5, textY: 182 }
  },
  {
    key: '6',
    from: 'ai_router',
    to: 'gemini_cloud',
    label: 'HTTPS Primary',
    style: 'emphasis',
    path: 'M 925 160 L 925 99',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#arrowhead-emphasis)',
    labelBox: { x: 888.8, y: 140, w: 72.4, h: 14, textX: 925, textY: 150 }
  },
  {
    key: '7',
    from: 'ai_router',
    to: 'onnx_edge',
    label: 'Offline Failover',
    style: 'dashed',
    path: 'M 925 224 L 925 285',
    underlayWidth: 5.5,
    strokeWidth: 1.5,
    marker: 'url(#arrowhead-dashed)',
    labelBox: { x: 832.2, y: 247.5, w: 86.8, h: 14, textX: 875.6, textY: 257.5 }
  }
];

const ARCHIFY_LEGEND = [
  { kind: 'frontend', label: 'Frontend', x: 40 },
  { kind: 'backend', label: 'Backend', x: 155 },
  { kind: 'database', label: 'Database', x: 264 },
  { kind: 'cloud', label: 'Cloud', x: 379 },
  { kind: 'security', label: 'Security', x: 475 },
  { kind: 'messagebus', label: 'Message bus', x: 590 },
  { kind: 'external', label: 'External', x: 724 }
];

const renderSigil = (kind, x, y) => {
  const transform = `translate(${x + 6} ${y + 6}) scale(0.6875)`;
  switch (kind) {
    case 'frontend':
      return (
        <g aria-hidden="true" data-semantic-sigil="frontend" className="semantic-sigil s-frontend" transform={transform}>
          <rect x="2" y="3" width="12" height="10" rx="2" />
          <path d="M2 6.5h12" />
          <circle cx="4.1" cy="4.8" r=".7" className="sigil-fill" />
          <circle cx="6.3" cy="4.8" r=".7" className="sigil-fill" />
        </g>
      );
    case 'security':
      return (
        <g aria-hidden="true" data-semantic-sigil="security" className="semantic-sigil s-security" transform={transform}>
          <path d="M8 2.2 13 4v3.5c0 3.1-1.8 5.4-5 6.5-3.2-1.1-5-3.4-5-6.5V4Z" />
          <path d="m5.8 8 1.5 1.5 3-3" />
        </g>
      );
    case 'external':
      return (
        <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform={transform}>
          <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
          <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
        </g>
      );
    case 'backend':
      return (
        <g aria-hidden="true" data-semantic-sigil="backend" className="semantic-sigil s-backend" transform={transform}>
          <path d="M6 3 3 8l3 5M10 3l3 5-3 5" />
        </g>
      );
    case 'messagebus':
      return (
        <g aria-hidden="true" data-semantic-sigil="messagebus" className="semantic-sigil s-messagebus" transform={transform}>
          <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
          <circle cx="5" cy="4.5" r="1" className="sigil-fill" />
          <circle cx="10.5" cy="8" r="1" className="sigil-fill" />
          <circle cx="7" cy="11.5" r="1" className="sigil-fill" />
        </g>
      );
    case 'cloud':
      return (
        <g aria-hidden="true" data-semantic-sigil="cloud" className="semantic-sigil s-cloud" transform={transform}>
          <path d="M4.3 12.5h7.3a2.4 2.4 0 0 0 .2-4.8 4 4 0 0 0-7.5-1.3A3.1 3.1 0 0 0 4.3 12.5Z" />
        </g>
      );
    case 'database':
      return (
        <g aria-hidden="true" data-semantic-sigil="database" className="semantic-sigil s-database" transform={transform}>
          <ellipse cx="8" cy="4" rx="5" ry="2" />
          <path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" />
        </g>
      );
    default:
      return null;
  }
};

const ArchifyArchitectureFlow = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [activeLensKind, setActiveLensKind] = useState(null);

  const activeNodeId = hoveredNodeId || selectedNodeId;
  const focusedNode = ARCHIFY_NODES.find((n) => n.id === activeNodeId) || null;

  const isEdgeHighlighted = (edge) => {
    if (activeNodeId) {
      return edge.from === activeNodeId || edge.to === activeNodeId;
    }
    if (activeLensKind) {
      const fromNode = ARCHIFY_NODES.find((n) => n.id === edge.from);
      const toNode = ARCHIFY_NODES.find((n) => n.id === edge.to);
      return fromNode?.kind === activeLensKind || toNode?.kind === activeLensKind;
    }
    return true;
  };

  const isNodeHighlighted = (node) => {
    if (activeNodeId) {
      if (node.id === activeNodeId) return true;
      return ARCHIFY_EDGES.some(
        (e) => (e.from === activeNodeId && e.to === node.id) || (e.to === activeNodeId && e.from === node.id)
      );
    }
    if (activeLensKind) {
      return node.kind === activeLensKind;
    }
    return true;
  };

  const hasFilter = Boolean(activeNodeId || activeLensKind);

  return (
    <div className="archify-surface w-full">
      <style>{`
        .archify-surface {
          --bg: #f8fafc;
          --grid: #e2e8f0;
          --canvas-dot: #cbd5e1;
          --text: #0f172a;
          --text-muted: #475569;
          --text-dim: #94a3b8;
          --panel: #f8fafc;
          --panel-border: #e2e8f0;
          --lane-fill: rgba(248, 250, 252, 0.75);
          --lane-stroke: #cbd5e1;
          --arrow: #64748b;
          --arrow-emphasis: #0d9488;
          --mask: #f8fafc;
          --frontend-fill: rgba(6, 182, 212, 0.14);
          --frontend-stroke: #0891b2;
          --backend-fill: rgba(16, 185, 129, 0.16);
          --backend-stroke: #059669;
          --database-fill: rgba(139, 92, 246, 0.16);
          --database-stroke: #7c3aed;
          --cloud-fill: rgba(245, 158, 11, 0.16);
          --cloud-stroke: #d97706;
          --security-fill: rgba(244, 63, 94, 0.14);
          --security-stroke: #e11d48;
          --messagebus-fill: rgba(249, 115, 22, 0.15);
          --messagebus-stroke: #ea580c;
          --external-fill: rgba(100, 116, 139, 0.16);
          --external-stroke: #475569;
        }
        .dark .archify-surface {
          --bg: #09090b;
          --grid: #1e293b;
          --canvas-dot: rgba(148, 163, 184, 0.16);
          --text: #f8fafc;
          --text-muted: #94a3b8;
          --text-dim: #64748b;
          --panel: rgba(9, 9, 11, 0.75);
          --panel-border: #27272a;
          --lane-fill: rgba(15, 23, 42, 0.28);
          --lane-stroke: #334155;
          --arrow: #94a3b8;
          --arrow-emphasis: #2dd4bf;
          --mask: #09090b;
          --frontend-fill: rgba(8, 51, 68, 0.55);
          --frontend-stroke: #22d3ee;
          --backend-fill: rgba(6, 78, 59, 0.55);
          --backend-stroke: #34d399;
          --database-fill: rgba(76, 29, 149, 0.5);
          --database-stroke: #a78bfa;
          --cloud-fill: rgba(120, 53, 15, 0.45);
          --cloud-stroke: #fbbf24;
          --security-fill: rgba(136, 19, 55, 0.5);
          --security-stroke: #fb7185;
          --messagebus-fill: rgba(154, 52, 18, 0.45);
          --messagebus-stroke: #fb923c;
          --external-fill: rgba(30, 41, 59, 0.65);
          --external-stroke: #94a3b8;
        }
        .archify-canvas-wrap {
          background:
            radial-gradient(circle at 1px 1px, var(--canvas-dot) 1px, transparent 1.4px) 0 0 / 20px 20px,
            var(--panel);
          border: 1px solid var(--panel-border);
        }
        .archify-svg {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        .archify-svg .c-grid { stroke: transparent; fill: none; }
        .archify-svg .c-mask { fill: var(--mask); stroke: none; }
        .archify-svg .c-frontend { fill: var(--frontend-fill); stroke: var(--frontend-stroke); }
        .archify-svg .c-backend { fill: var(--backend-fill); stroke: var(--backend-stroke); }
        .archify-svg .c-database { fill: var(--database-fill); stroke: var(--database-stroke); }
        .archify-svg .c-cloud { fill: var(--cloud-fill); stroke: var(--cloud-stroke); }
        .archify-svg .c-security { fill: var(--security-fill); stroke: var(--security-stroke); }
        .archify-svg .c-messagebus { fill: var(--messagebus-fill); stroke: var(--messagebus-stroke); }
        .archify-svg .c-external { fill: var(--external-fill); stroke: var(--external-stroke); }
        .archify-svg .c-region {
          fill: color-mix(in srgb, var(--cloud-stroke) 4%, transparent);
          stroke: color-mix(in srgb, var(--cloud-stroke) 45%, var(--lane-stroke));
        }
        .archify-svg .c-security-group {
          fill: color-mix(in srgb, var(--security-stroke) 3%, transparent);
          stroke: color-mix(in srgb, var(--security-stroke) 55%, var(--lane-stroke));
          stroke-dasharray: 4 3;
        }
        .archify-svg [data-graph-role="structural-frame-label-mask"] {
          rx: 5px;
          fill: color-mix(in srgb, var(--cloud-stroke) 10%, var(--mask));
          stroke: color-mix(in srgb, var(--cloud-stroke) 38%, var(--mask));
          stroke-width: 0.8px;
        }
        .archify-svg [data-composition-frame-kind="security-group"] > [data-graph-role="structural-frame-label-mask"] {
          fill: color-mix(in srgb, var(--security-stroke) 10%, var(--mask));
          stroke: color-mix(in srgb, var(--security-stroke) 38%, var(--mask));
        }
        .archify-svg .t-primary { fill: var(--text); }
        .archify-svg .t-muted { fill: var(--text-muted); }
        .archify-svg .t-frontend { fill: var(--frontend-stroke); }
        .archify-svg .t-backend { fill: var(--backend-stroke); }
        .archify-svg .t-database { fill: var(--database-stroke); }
        .archify-svg .t-cloud { fill: var(--cloud-stroke); }
        .archify-svg .t-security { fill: var(--security-stroke); }
        .archify-svg .t-messagebus { fill: var(--messagebus-stroke); }
        .archify-svg .t-external { fill: var(--external-stroke); }
        .archify-svg .a-default { stroke: var(--arrow); fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .archify-svg .a-emphasis { stroke: var(--arrow-emphasis); fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .archify-svg .a-security { stroke: var(--security-stroke); fill: none; stroke-dasharray: 5,5; stroke-linecap: round; stroke-linejoin: round; }
        .archify-svg .a-dashed { stroke: var(--database-stroke); fill: none; stroke-dasharray: 4,4; stroke-linecap: round; stroke-linejoin: round; }
        .archify-svg .m-default { fill: var(--arrow); }
        .archify-svg .m-emphasis { fill: var(--arrow-emphasis); }
        .archify-svg .m-security { fill: var(--security-stroke); }
        .archify-svg .m-dashed { fill: var(--database-stroke); }
        .archify-svg .t-edge-default { fill: var(--arrow); }
        .archify-svg .t-edge-emphasis { fill: var(--arrow-emphasis); }
        .archify-svg .t-edge-security { fill: var(--security-stroke); }
        .archify-svg .t-edge-dashed { fill: var(--database-stroke); }
        .archify-svg g[data-edge-from] > rect.c-mask {
          rx: 6px;
          stroke: var(--lane-stroke);
          stroke-width: 0.75px;
        }
        .archify-svg .semantic-sigil {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.35;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.82;
          pointer-events: none;
        }
        .archify-svg .semantic-sigil .sigil-fill { fill: currentColor; stroke: none; }
        .archify-svg .s-frontend { color: var(--frontend-stroke); }
        .archify-svg .s-backend { color: var(--backend-stroke); }
        .archify-svg .s-database { color: var(--database-stroke); }
        .archify-svg .s-cloud { color: var(--cloud-stroke); }
        .archify-svg .s-security { color: var(--security-stroke); }
        .archify-svg .s-messagebus { color: var(--messagebus-stroke); }
        .archify-svg .s-external { color: var(--external-stroke); }
        .archify-svg [data-node-id] {
          cursor: pointer;
          transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), filter 0.18s ease;
        }
        .archify-svg [data-node-id]:hover {
          transform: translateY(-1.5px);
          filter: drop-shadow(0 4px 10px rgba(13, 148, 136, 0.22));
        }
      `}</style>

      <div className="archify-canvas-wrap w-full overflow-x-auto rounded-xl p-4 sm:p-6 transition-colors duration-300">
        <svg
          viewBox="0 0 1075 437"
          role="img"
          lang="en"
          aria-labelledby="archify-diagram-title archify-diagram-description"
          data-animation="trace"
          data-preset="classic"
          data-quality-profile="showcase"
          data-node-ui=""
          className="archify-svg w-full h-auto min-w-[780px] block select-none"
        >
          <title id="archify-diagram-title">Conditional Vision &amp; Multi-Path Failover Architecture</title>
          <desc id="archify-diagram-description">
            Interactive architecture diagram compiled with Archify showing the Smart Cane Hardware Subsystem and Wearable Vision &amp; Hybrid AI Subsystem.
          </desc>

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-default" />
            </marker>
            <marker id="arrowhead-emphasis" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-emphasis" />
            </marker>
            <marker id="arrowhead-security" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-security" />
            </marker>
            <marker id="arrowhead-dashed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-dashed" />
            </marker>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" className="c-grid" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            onClick={() => {
              setSelectedNodeId(null);
              setActiveLensKind(null);
            }}
          />

          {/* Subsystem Boundaries */}
          <rect
            data-graph-role="structural-frame"
            data-composition-frame-kind="region"
            data-composition-frame-id="0"
            data-composition-frame-label="Smart Cane Hardware Subsystem"
            x="10"
            y="15"
            width="475"
            height="354"
            rx="12"
            className="c-region"
            strokeWidth="1"
          />

          <rect
            data-graph-role="structural-frame"
            data-composition-frame-kind="security-group"
            data-composition-frame-id="1"
            data-composition-frame-label="Wearable Vision & Hybrid AI Subsystem"
            x="545"
            y="5"
            width="490"
            height="364"
            rx="8"
            className="c-security-group"
            strokeWidth="1"
          />

          {/* Connection Paths (with Archify automatic halo crossover underlays) */}
          {ARCHIFY_EDGES.map((edge) => {
            const highlighted = isEdgeHighlighted(edge);
            return (
              <g
                key={edge.key}
                data-graph-role="automatic-crossover"
                style={{
                  opacity: hasFilter ? (highlighted ? 1 : 0.16) : 1,
                  transition: 'opacity 180ms ease'
                }}
              >
                <path
                  data-graph-role="automatic-crossover-underlay"
                  d={edge.path}
                  fill="none"
                  stroke="var(--mask)"
                  strokeWidth={edge.underlayWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pointerEvents="none"
                />
                <path
                  data-edge-from={edge.from}
                  data-edge-to={edge.to}
                  data-edge-label={edge.label}
                  data-edge-key={edge.key}
                  d={edge.path}
                  className={`a-${edge.style}`}
                  strokeWidth={highlighted && hasFilter ? edge.strokeWidth + 0.5 : edge.strokeWidth}
                  markerEnd={edge.marker}
                />
              </g>
            );
          })}

          {/* Semantic Nodes */}
          {ARCHIFY_NODES.map((node) => {
            const highlighted = isNodeHighlighted(node);
            const isSelected = selectedNodeId === node.id;
            const centerX = node.x + node.w / 2;
            return (
              <g
                key={node.id}
                id={`node-${node.id}`}
                data-node-id={node.id}
                data-node-label={node.label}
                data-node-kind={node.kind}
                tabIndex={0}
                role="button"
                aria-label={`Focus ${node.label}, ${node.sublabel}, ${node.subsystem}`}
                aria-pressed={isSelected}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLensKind(null);
                  setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveLensKind(null);
                    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                  }
                }}
                style={{
                  opacity: hasFilter ? (highlighted ? 1 : 0.18) : 1
                }}
              >
                <title>{`${node.label} · ${node.sublabel} · ${node.subsystem} · ${node.tag}`}</title>
                <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8" className="c-mask" />
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx="8"
                  className={`c-${node.kind}`}
                  strokeWidth={isSelected ? '2.25' : '1.5'}
                />
                {renderSigil(node.kind, node.x, node.y)}
                <text
                  data-node-label=""
                  x={centerX}
                  y={node.y + 28}
                  className="t-primary"
                  fontSize="11"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {node.label}
                </text>
                <text
                  data-detail="context"
                  x={centerX}
                  y={node.y + 43}
                  className="t-muted"
                  fontSize="8.8"
                  textAnchor="middle"
                >
                  {node.sublabel}
                </text>
                <text
                  data-detail="fine"
                  x={centerX}
                  y={node.y + 55}
                  className={`t-${node.kind}`}
                  fontSize="7.4"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {node.tag}
                </text>
              </g>
            );
          })}

          {/* Connection Labels (with Archify foreground masks so routes never cross text) */}
          {ARCHIFY_EDGES.map((edge) => {
            const highlighted = isEdgeHighlighted(edge);
            return (
              <g
                key={`label-${edge.key}`}
                data-detail="context"
                data-edge-from={edge.from}
                data-edge-to={edge.to}
                data-edge-label={edge.label}
                data-edge-key={edge.key}
                style={{
                  opacity: hasFilter ? (highlighted ? 1 : 0.16) : 1,
                  transition: 'opacity 180ms ease'
                }}
              >
                <rect
                  x={edge.labelBox.x}
                  y={edge.labelBox.y}
                  width={edge.labelBox.w}
                  height={edge.labelBox.h}
                  rx="3"
                  className="c-mask"
                />
                <text
                  x={edge.labelBox.textX}
                  y={edge.labelBox.textY}
                  className={`t-edge-${edge.style}`}
                  fontSize="8"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {edge.label}
                </text>
              </g>
            );
          })}

          {/* Boundary Labels */}
          <g
            data-graph-role="structural-frame-label"
            data-composition-frame-id="0"
            data-composition-frame-kind="region"
            data-composition-frame-label="Smart Cane Hardware Subsystem"
          >
            <rect
              data-graph-role="structural-frame-label-mask"
              x="14"
              y="25"
              width="174"
              height="16"
              rx="3"
              className="c-mask"
            />
            <text data-boundary-label="" x="20" y="36.5" className="t-cloud" fontSize="9" fontWeight="600">
              Smart Cane Hardware Subsystem
            </text>
          </g>

          <g
            data-graph-role="structural-frame-label"
            data-composition-frame-id="1"
            data-composition-frame-kind="security-group"
            data-composition-frame-label="Wearable Vision & Hybrid AI Subsystem"
          >
            <rect
              data-graph-role="structural-frame-label-mask"
              x="549"
              y="15"
              width="216"
              height="16"
              rx="3"
              className="c-mask"
            />
            <text data-boundary-label="" x="555" y="26.5" className="t-security" fontSize="9" fontWeight="600">
              Wearable Vision &amp; Hybrid AI Subsystem
            </text>
          </g>

          {/* Interactive Semantic Legend */}
          <g data-legend="" data-legend-bridge="">
            <text x="40" y="401" className="t-primary" fontSize="11.5" fontWeight="650">
              Legend (Click role or node to trace)
            </text>
            {ARCHIFY_LEGEND.map((item) => {
              const isLensActive = activeLensKind === item.kind;
              return (
                <g
                  key={item.kind}
                  data-legend-semantic-kind={item.kind}
                  data-legend-kind={item.kind}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNodeId(null);
                    setActiveLensKind((prev) => (prev === item.kind ? null : item.kind));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedNodeId(null);
                      setActiveLensKind((prev) => (prev === item.kind ? null : item.kind));
                    }
                  }}
                  style={{
                    cursor: 'pointer',
                    opacity: activeLensKind && !isLensActive ? 0.4 : 1
                  }}
                >
                  <rect
                    x={item.x}
                    y="412"
                    width="16"
                    height="10"
                    rx="2.5"
                    className={`c-${item.kind}`}
                    strokeWidth={isLensActive ? '2' : '1'}
                  />
                  <text
                    x={item.x + 22}
                    y="421"
                    className={isLensActive ? 't-primary' : 't-muted'}
                    fontSize="10"
                    fontWeight={isLensActive ? '700' : '500'}
                  >
                    {item.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Archify Semantic Passport Inspector Bar */}
      <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 text-xs transition-colors">
        {focusedNode ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded font-mono font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                {focusedNode.label}
              </span>
              <span className="font-mono text-zinc-500 dark:text-zinc-400">
                [{focusedNode.tag}]
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {focusedNode.summary}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0" />
            <span>
              <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Interactive Architecture:</strong> Hover or select any node to isolate signal paths and inspect component data flow.
            </span>
          </div>
        )}

        {(selectedNodeId || activeLensKind) && (
          <button
            type="button"
            onClick={() => {
              setSelectedNodeId(null);
              setActiveLensKind(null);
            }}
            className="self-start sm:self-auto shrink-0 px-2.5 py-1 rounded-lg font-mono text-[11px] bg-zinc-200/80 hover:bg-zinc-300/80 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 transition-colors"
          >
            Reset Focus
          </button>
        )}
      </div>
    </div>
  );
};

const SIHProject = () => {
  const hardwareModules = [
    {
      module: 'ESP32 Dev Module',
      bus: 'Main MCU',
      role: 'Primary controller coordinating multi-sensor fusion, interrupt handling, and emergency alert routing.'
    },
    {
      module: 'Arduino Nano',
      bus: 'GPIO25 Interrupt (D7)',
      role: 'Dedicated co-processor isolating single-point head-level ToF sensing and firing hardware triggers to ESP32.'
    },
    {
      module: 'VL53L5CX ToF Imager',
      bus: 'I2C Bus',
      role: 'Multi-zone Time-of-Flight depth imager detecting foot-level hazards, potholes, and ground-plane obstacles.'
    },
    {
      module: 'VL53L0X ToF Sensor',
      bus: 'I2C Bus (via Nano)',
      role: 'Single-point laser ranging sensor dedicated to upper-body and head-level obstacle detection.'
    },
    {
      module: 'MPU6050 IMU',
      bus: 'I2C Bus',
      role: 'Tracks real-time stick tilt angle across X and Y axes to validate user posture and calibrate ranging.'
    },
    {
      module: 'ESP32-CAM (OV2640)',
      bus: 'Wi-Fi Hotspot / LAN',
      role: 'Goggles-mounted vision module awakened conditionally via "/capture" only when ToF confirms an obstacle.'
    },
    {
      module: 'SIM800L GSM + NRF24L01',
      bus: 'UART / SPI',
      role: 'Dual-path emergency alerting: primary cellular SMS/Call notifications with local RF transceiver failover.'
    },
    {
      module: 'NEO-M8N GPS + Touch',
      bus: 'UART / 555 Relay',
      role: 'Captures live lat/long coordinates alongside a 20s capacitive touch inactivity auto-shutdown circuit.'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Foot-Level Detection',
      traditional: 'Yes',
      ultrasonic: 'Yes',
      camera: 'Yes',
      proposed: 'Yes (VL53L5CX Depth Imager)'
    },
    {
      feature: 'Head-Level Detection',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'Yes',
      proposed: 'Yes (VL53L0X + Nano Trigger)'
    },
    {
      feature: 'Multi-Sensor Fusion',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'Limited',
      proposed: 'Yes (Dual ToF + IMU + GPS)'
    },
    {
      feature: 'AI-Based Recognition',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'Yes',
      proposed: 'Yes (Scene & Object Context)'
    },
    {
      feature: 'Conditional Camera Usage',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'No',
      proposed: 'Yes (Event-Driven /capture)'
    },
    {
      feature: 'Offline AI Fallback',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'No',
      proposed: 'Yes (Gemini Cloud -> Local ONNX)'
    },
    {
      feature: 'Communication Fallback',
      traditional: 'No',
      ultrasonic: 'No',
      camera: 'No',
      proposed: 'Yes (SIM800L GSM -> NRF24L01 RF)'
    },
    {
      feature: 'Power Optimization',
      traditional: 'No',
      ultrasonic: 'Limited',
      camera: 'No',
      proposed: 'Yes (20s Touch Auto-Shutdown)'
    }
  ];

  const renderBadge = (val) => {
    if (val.startsWith('Yes')) {
      return (
        <span className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-300 font-medium">
          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <span>{val}</span>
        </span>
      );
    }
    if (val === 'Limited') {
      return (
        <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-300/90">
          <MinusCircle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
          <span>Limited</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-500">
        <XCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0" />
        <span>No</span>
      </span>
    );
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects Directory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-10 mb-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  Smart India Hackathon (SIH)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  Adaptive Multimodal Sensing
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                  Hybrid Cloud/Edge AI
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
                Smart Blind Stick
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-light mb-4">
                Adaptive Multimodal Sensing &amp; Conditional AI Vision Assistance Platform
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A cooperative two-subsystem assistive mobility architecture pairing a sensor-fused smart cane with event-driven smart goggles. Engineered with dual-level Time-of-Flight (ToF) ranging, hardware-interrupt head hazard triggers, IMU orientation calibration, GSM-to-RF failover alerting, and a conditional ESP32-CAM pipeline backed by Google Gemini Cloud AI and an offline ONNX fallback model.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
              <a
                href="https://github.com/Nazif47/SmartBlindStick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm dark:hover:bg-white hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub Repository
              </a>
              <a
                href="#live-demo"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200 hover:bg-zinc-200/80 hover:border-zinc-300 dark:bg-zinc-900/90 dark:text-zinc-200 dark:border-zinc-700/80 font-medium text-sm dark:hover:bg-zinc-800 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                View Live Demo
              </a>
            </div>
          </div>

          {/* Animated Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">ToF Sensing Planes</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={2} suffix="x" />
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400/90 mt-1">Foot (VL53L5CX) + Head (VL53L0X)</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Inactivity Auto-Off</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={20} suffix=" sec" />
              </p>
              <p className="text-xs text-sky-600 dark:text-sky-400/90 mt-1">555 Timer + Touch Relay Control</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">AI Inference Paths</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={2} suffix="-Stage" />
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400/90 mt-1">Gemini API Cloud + Local ONNX</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">SOS Failover Links</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={2} suffix=" Channels" />
              </p>
              <p className="text-xs text-sky-600 dark:text-sky-400/90 mt-1">SIM800L GSM &rarr; NRF24L01 RF</p>
            </div>
          </div>
        </div>

        {/* Studio Obsidian Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Bento Card 1: Dual-Level ToF Sensing (Spans 2 Columns) */}
          <div className="md:col-span-2 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Layers className="w-4 h-4" />
                  Dual-Level Time-of-Flight Ranging
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  I2C + GPIO25 Interrupt
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Isolated Foot-Level &amp; Head-Level Obstacle Architecture
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Conventional ultrasonic canes only scan ground level and suffer from wide-cone acoustic reflections. Our architecture splits spatial awareness across two dedicated laser Time-of-Flight planes: a <span className="text-zinc-900 dark:text-zinc-200 font-medium">VL53L5CX multi-zone ToF imager</span> on the primary I2C bus mapping foot-level obstacles and terrain drop-offs, paired with a <span className="text-zinc-900 dark:text-zinc-200 font-medium">VL53L0X single-point ToF sensor</span> dedicated to head-height hazards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/70">
              <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">VL53L5CX ToF Imager</span>
                  <span className="text-xs font-mono text-teal-600 dark:text-teal-400">Foot Plane</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Interfaces directly with the main ESP32 MCU over I2C to evaluate nearby scene depth, curbs, and ground-level obstructions in real time.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">VL53L0X + Arduino Nano</span>
                  <span className="text-xs font-mono text-sky-600 dark:text-sky-400">Head Plane</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Offloaded to an Arduino Nano co-processor that asserts a hardware trigger (<code className="text-zinc-800 dark:text-zinc-300">D7 &rarr; ESP32 GPIO25</code>) for zero-polling upper-body protection.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Card 2: MPU6050 Tilt & Power Management (Spans 1 Column) */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <Compass className="w-4 h-4" />
                  Inertial &amp; Power Logic
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  MPU6050 + 555 IC
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Orientation Gating &amp; Auto-Shutdown
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                An <span className="text-zinc-900 dark:text-zinc-200 font-medium">MPU6050 IMU</span> tracks X and Y tilt angles so software can verify whether the cane is held in an active walking orientation before firing false obstacle warnings.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/70">
              <div className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-3.5">
                <BatteryCharging className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wide">
                    20s Touch Inactivity Cutoff
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    A capacitive touch sensor, potentiometer-tuned 555 timer IC, and stick power relay cut off main rail draw if the handle is released for 20 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Archify Interactive Architecture Diagram (Full Width 3 Columns) */}
          <div className="md:col-span-3 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  Event-Driven Hardware &amp; AI Signal Flow
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Conditional Vision &amp; Multi-Path Failover Architecture
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                  Primary Trigger / Vision Path
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500 dark:bg-violet-400"></span>
                  Failover / Redundant Link
                </span>
              </div>
            </div>

            <ArchifyArchitectureFlow />
          </div>

          {/* Bento Card 4: Conditional ESP32-CAM Vision */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Eye className="w-4 h-4" />
                  Event-Driven Vision
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  ESP32-CAM OV2640
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Conditional Camera Awakening
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                Continuous video streaming rapidly depletes wearable batteries. In our architecture, the goggles-mounted <span className="text-zinc-900 dark:text-zinc-200 font-medium">ESP32-CAM</span> remains dormant until the stick&apos;s ToF array confirms an obstacle threshold breach.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-300 mb-1">
                <Wifi className="w-3.5 h-3.5" />
                <span>GET /capture over Local Hotspot</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Both ESP modules share the user&apos;s mobile hotspot for zero-data-cost LAN communication, reserving cellular data strictly for cloud AI requests.
              </p>
            </div>
          </div>

          {/* Bento Card 5: Hybrid AI Vision Pipeline */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <Sparkles className="w-4 h-4" />
                  Hybrid AI Inference
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  Cloud + Edge ONNX
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Gemini Cloud to Local ONNX Failover
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                Captured frames are dispatched to the companion smartphone app, which attempts high-context visual understanding via the <span className="text-zinc-900 dark:text-zinc-200 font-medium">Google Gemini API</span> first. If network connectivity drops or times out, inference seamlessly fails over to an embedded <span className="text-zinc-900 dark:text-zinc-200 font-medium">local ONNX model</span>.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-700 dark:text-sky-300 mb-1">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Real-Time Spoken Synthesis</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Recognition outputs are converted into natural voice prompts alongside distance telemetry (Head &amp; Ground meters) and live GPS coordinates.
              </p>
            </div>
          </div>

          {/* Bento Card 6: Redundant GSM to RF Failover */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Radio className="w-4 h-4" />
                  Fail-Safe Telemetry
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  SIM800L + NRF24L01
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Dual-Path Emergency Escalation
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                During an SOS event, location coordinates from the <span className="text-zinc-900 dark:text-zinc-200 font-medium">NEO-M8N GPS</span> (with mobile location fallback) are transmitted via the <span className="text-zinc-900 dark:text-zinc-200 font-medium">SIM800L GSM module</span>. In cellular dead zones, the controller automatically switches to an <span className="text-zinc-900 dark:text-zinc-200 font-medium">NRF24L01 SPI RF link</span>.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-300 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dual-Source Geolocation</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Combines hardware UART NEO-M8N satellite lock with smartphone GPS fallback for indoor/urban-canyon continuity.
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Architecture Breakdown & Comparative Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hardware Module Specification List */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              <Zap className="w-4 h-4" />
              Hardware Bill of Materials
            </div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Subsystem Module Roles
            </h2>
            <div className="space-y-3">
              {hardwareModules.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/70 rounded-xl p-3.5 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.module}</span>
                    <span className="text-[11px] font-mono text-teal-700 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {item.bus}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Analysis Table from Report */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <ShieldAlert className="w-4 h-4" />
                  Benchmarking &amp; Novelty Verification
                </span>
                <span className="text-xs text-zinc-500 font-mono">SIH Technical Report — Table II</span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Comparative Analysis vs. Existing Assistive Systems
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Evaluated across eight critical reliability, sensing, and power-efficiency dimensions against traditional white canes, ultrasonic smart sticks, and continuous camera-based wearables.
              </p>

              <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800/80 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-zinc-100/80 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300">
                      <th className="py-3.5 px-4 font-semibold">Feature</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Traditional Stick</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Ultrasonic Stick</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Camera Systems</th>
                      <th className="py-3.5 px-4 font-semibold text-teal-700 dark:text-teal-300 bg-teal-50/80 dark:bg-teal-950/20">
                        Proposed System
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-200">{row.feature}</td>
                        <td className="py-3 px-3">{renderBadge(row.traditional)}</td>
                        <td className="py-3 px-3">{renderBadge(row.ultrasonic)}</td>
                        <td className="py-3 px-3">{renderBadge(row.camera)}</td>
                        <td className="py-3 px-4 bg-teal-50/40 dark:bg-teal-950/10">{renderBadge(row.proposed)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                State-Driven Embedded Firmware Architecture
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                Operates across discrete <code className="text-zinc-800 dark:text-zinc-300">IDLE</code> &rarr; <code className="text-zinc-800 dark:text-zinc-300">WARNING</code> &rarr; <code className="text-zinc-800 dark:text-zinc-300">VISION (/capture)</code> &rarr; <code className="text-zinc-800 dark:text-zinc-300">AI RECOGNITION</code> &rarr; <code className="text-zinc-800 dark:text-zinc-300">FAIL-SAFE ALERT</code> states rather than continuous full-load polling.
              </p>
            </div>
          </div>
        </div>

        {/* Standalone Bottom Project Navigation Link */}
        <div className="flex justify-end">
          <Link
            to="/projects/final-year"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors py-8"
          >
            Explore Aura-x9 Safety Network &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SIHProject;
