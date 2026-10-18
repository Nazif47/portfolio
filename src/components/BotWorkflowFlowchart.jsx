import { useState } from 'react';

const ARCHIFY_NODES = [
  {
    id: 'user_app',
    label: 'User Application',
    sublabel: 'Trigger · Select Menu UI',
    tag: 'INTERACTION CREATE',
    kind: 'frontend',
    kindLabel: 'Frontend / Trigger',
    subsystem: 'Stateless Onboarding & Ticket Gate',
    x: 40,
    y: 55,
    w: 225,
    h: 66,
    step: 0,
    summary: 'Dispatches an interactive Discord onboarding payload when an applicant selects an organization tier, spawning an isolated ticket channel.'
  },
  {
    id: 'stateless_flag',
    label: 'Stateless Metadata Flagging',
    sublabel: 'CreateInstantInvite: false',
    tag: 'BITFLAG OVERWRITE',
    kind: 'security',
    kindLabel: 'Security / Bitflags',
    subsystem: 'Stateless Onboarding & Ticket Gate',
    x: 405,
    y: 55,
    w: 245,
    h: 66,
    step: 1,
    summary: 'Encodes primary applicant ownership directly into channel permission overwrite bitflags (CreateInstantInvite: false) for O(1) resolution with zero database queries.'
  },
  {
    id: 'mod_modal',
    label: 'Moderator Approval Modal',
    sublabel: 'Interactive Review Gate',
    tag: 'RBAC VERIFIED',
    kind: 'external',
    kindLabel: 'External / Moderation',
    subsystem: 'Stateless Onboarding & Ticket Gate',
    x: 785,
    y: 55,
    w: 235,
    h: 66,
    step: 2,
    summary: 'Presents authorized staff with a structured verification modal to validate player credentials, assign roster tiers, or trigger archival closure.'
  },
  {
    id: 'auto_role',
    label: 'Auto-Role & Name Sync',
    sublabel: 'REST Patch & Nickname',
    tag: 'DISCORD REST v14',
    kind: 'backend',
    kindLabel: 'Backend / Sync',
    subsystem: 'Automated Provisioning & Cloud Archiving',
    x: 785,
    y: 205,
    w: 235,
    h: 66,
    step: 3,
    summary: 'Synchronizes approved member nicknames, applies hierarchical role bitsets across the internal Discord node, and triggers ticket teardown.'
  },
  {
    id: 'html_hydration',
    label: 'HTML Transcript Hydration',
    sublabel: 'discord-html-transcripts',
    tag: 'IN-MEMORY BUFFER',
    kind: 'messagebus',
    kindLabel: 'Message Bus / Serializer',
    subsystem: 'Automated Provisioning & Cloud Archiving',
    x: 405,
    y: 205,
    w: 245,
    h: 66,
    step: 4,
    summary: 'Serializes the complete channel message history, embeds, and attachments into a self-contained hydrated HTML buffer using discord-html-transcripts.'
  },
  {
    id: 'firebase_upload',
    label: 'Firebase Storage Upload',
    sublabel: 'Private Cloud Storage',
    tag: 'GCS BUCKET STREAM',
    kind: 'cloud',
    kindLabel: 'Cloud Storage',
    subsystem: 'Automated Provisioning & Cloud Archiving',
    x: 40,
    y: 205,
    w: 225,
    h: 66,
    step: 5,
    summary: 'Streams the hydrated HTML buffer via Firebase Admin SDK into a Private Cloud Storage bucket and logs an immutable audit reference before channel deletion.'
  }
];

const ARCHIFY_EDGES = [
  {
    key: '0',
    from: 'user_app',
    to: 'stateless_flag',
    label: 'Spawn Ticket',
    style: 'emphasis',
    path: 'M 265 88 L 405 88',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#bot-arrowhead-emphasis)',
    labelBox: { x: 296, y: 69, w: 78, h: 15, textX: 335, textY: 79.5 }
  },
  {
    key: '1',
    from: 'stateless_flag',
    to: 'mod_modal',
    label: 'Bitflag Locked',
    style: 'security',
    path: 'M 650 88 L 785 88',
    underlayWidth: 5.5,
    strokeWidth: 1.6,
    marker: 'url(#bot-arrowhead-security)',
    labelBox: { x: 675.5, y: 69, w: 84, h: 15, textX: 717.5, textY: 79.5 }
  },
  {
    key: '2',
    from: 'mod_modal',
    to: 'auto_role',
    label: 'Modal Submit',
    style: 'emphasis',
    path: 'M 902.5 121 L 902.5 205',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#bot-arrowhead-emphasis)',
    labelBox: { x: 861.5, y: 155, w: 82, h: 15, textX: 902.5, textY: 165.5 }
  },
  {
    key: '3',
    from: 'auto_role',
    to: 'html_hydration',
    label: 'Close & Serialize',
    style: 'emphasis',
    path: 'M 785 238 L 650 238',
    underlayWidth: 5.8,
    strokeWidth: 1.8,
    marker: 'url(#bot-arrowhead-emphasis)',
    labelBox: { x: 669.5, y: 219, w: 96, h: 15, textX: 717.5, textY: 229.5 }
  },
  {
    key: '4',
    from: 'html_hydration',
    to: 'firebase_upload',
    label: 'HTML Buffer',
    style: 'dashed',
    path: 'M 405 238 L 265 238',
    underlayWidth: 5.5,
    strokeWidth: 1.6,
    marker: 'url(#bot-arrowhead-dashed)',
    labelBox: { x: 296, y: 219, w: 78, h: 15, textX: 335, textY: 229.5 }
  },
  {
    key: '5',
    from: 'stateless_flag',
    to: 'html_hydration',
    label: 'O(1) Owner Lookup',
    style: 'default',
    path: 'M 527.5 121 L 527.5 205',
    underlayWidth: 5.5,
    strokeWidth: 1.5,
    marker: 'url(#bot-arrowhead)',
    labelBox: { x: 477.5, y: 155, w: 100, h: 15, textX: 527.5, textY: 165.5 }
  }
];

const ARCHIFY_LEGEND = [
  { kind: 'frontend', label: 'Trigger / UI', x: 40 },
  { kind: 'security', label: 'Stateless Bitflag', x: 170 },
  { kind: 'external', label: 'Moderation Gate', x: 325 },
  { kind: 'backend', label: 'Role & Name Sync', x: 485 },
  { kind: 'messagebus', label: 'HTML Hydration', x: 645 },
  { kind: 'cloud', label: 'Cloud Archive', x: 795 }
];

const renderSigil = (kind, x, y) => {
  const transform = `translate(${x + 7} ${y + 7}) scale(0.7)`;
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
    default:
      return null;
  }
};

const BotWorkflowFlowchart = () => {
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
    <div className="archify-bot-surface w-full">
      <style>{`
        .archify-bot-surface {
          --bg: #f8fafc;
          --grid: #e2e8f0;
          --canvas-dot: #cbd5e1;
          --text: #0f172a;
          --text-muted: #475569;
          --text-dim: #94a3b8;
          --panel: rgba(255, 255, 255, 0.78);
          --panel-border: #e2e8f0;
          --lane-fill: rgba(248, 250, 252, 0.75);
          --lane-stroke: #cbd5e1;
          --arrow: #64748b;
          --arrow-emphasis: #0d9488;
          --mask: #ffffff;
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
          --external-fill: rgba(99, 102, 241, 0.15);
          --external-stroke: #4f46e5;
        }
        .dark .archify-bot-surface {
          --bg: #09090b;
          --grid: #1e293b;
          --canvas-dot: rgba(148, 163, 184, 0.16);
          --text: #f8fafc;
          --text-muted: #94a3b8;
          --text-dim: #64748b;
          --panel: rgba(9, 9, 11, 0.65);
          --panel-border: rgba(39, 39, 42, 0.8);
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
          --external-fill: rgba(49, 46, 129, 0.5);
          --external-stroke: #818cf8;
        }
        .archify-bot-canvas-wrap {
          background:
            radial-gradient(circle at 1px 1px, var(--canvas-dot) 1px, transparent 1.4px) 0 0 / 20px 20px,
            var(--panel);
          border: 1px solid var(--panel-border);
        }
        .archify-bot-svg {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        .archify-bot-svg .c-grid { stroke: transparent; fill: none; }
        .archify-bot-svg .c-mask { fill: var(--mask); stroke: none; }
        .archify-bot-svg .c-frontend { fill: var(--frontend-fill); stroke: var(--frontend-stroke); }
        .archify-bot-svg .c-backend { fill: var(--backend-fill); stroke: var(--backend-stroke); }
        .archify-bot-svg .c-database { fill: var(--database-fill); stroke: var(--database-stroke); }
        .archify-bot-svg .c-cloud { fill: var(--cloud-fill); stroke: var(--cloud-stroke); }
        .archify-bot-svg .c-security { fill: var(--security-fill); stroke: var(--security-stroke); }
        .archify-bot-svg .c-messagebus { fill: var(--messagebus-fill); stroke: var(--messagebus-stroke); }
        .archify-bot-svg .c-external { fill: var(--external-fill); stroke: var(--external-stroke); }
        .archify-bot-svg .c-region {
          fill: color-mix(in srgb, var(--frontend-stroke) 3%, transparent);
          stroke: color-mix(in srgb, var(--frontend-stroke) 42%, var(--lane-stroke));
        }
        .archify-bot-svg .c-security-group {
          fill: color-mix(in srgb, var(--cloud-stroke) 3%, transparent);
          stroke: color-mix(in srgb, var(--cloud-stroke) 50%, var(--lane-stroke));
          stroke-dasharray: 4 3;
        }
        .archify-bot-svg [data-graph-role="structural-frame-label-mask"] {
          rx: 5px;
          fill: color-mix(in srgb, var(--frontend-stroke) 10%, var(--mask));
          stroke: color-mix(in srgb, var(--frontend-stroke) 38%, var(--mask));
          stroke-width: 0.8px;
        }
        .archify-bot-svg [data-composition-frame-kind="security-group"] > [data-graph-role="structural-frame-label-mask"] {
          fill: color-mix(in srgb, var(--cloud-stroke) 10%, var(--mask));
          stroke: color-mix(in srgb, var(--cloud-stroke) 38%, var(--mask));
        }
        .archify-bot-svg .t-primary { fill: var(--text); }
        .archify-bot-svg .t-muted { fill: var(--text-muted); }
        .archify-bot-svg .t-frontend { fill: var(--frontend-stroke); }
        .archify-bot-svg .t-backend { fill: var(--backend-stroke); }
        .archify-bot-svg .t-database { fill: var(--database-stroke); }
        .archify-bot-svg .t-cloud { fill: var(--cloud-stroke); }
        .archify-bot-svg .t-security { fill: var(--security-stroke); }
        .archify-bot-svg .t-messagebus { fill: var(--messagebus-stroke); }
        .archify-bot-svg .t-external { fill: var(--external-stroke); }
        .archify-bot-svg .a-default { stroke: var(--arrow); fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .archify-bot-svg .a-emphasis { stroke: var(--arrow-emphasis); fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .archify-bot-svg .a-security { stroke: var(--security-stroke); fill: none; stroke-dasharray: 5,5; stroke-linecap: round; stroke-linejoin: round; }
        .archify-bot-svg .a-dashed { stroke: var(--cloud-stroke); fill: none; stroke-dasharray: 4,4; stroke-linecap: round; stroke-linejoin: round; }
        .archify-bot-svg .m-default { fill: var(--arrow); }
        .archify-bot-svg .m-emphasis { fill: var(--arrow-emphasis); }
        .archify-bot-svg .m-security { fill: var(--security-stroke); }
        .archify-bot-svg .m-dashed { fill: var(--cloud-stroke); }
        .archify-bot-svg .t-edge-default { fill: var(--arrow); }
        .archify-bot-svg .t-edge-emphasis { fill: var(--arrow-emphasis); }
        .archify-bot-svg .t-edge-security { fill: var(--security-stroke); }
        .archify-bot-svg .t-edge-dashed { fill: var(--cloud-stroke); }
        .archify-bot-svg g[data-edge-from] > rect.c-mask {
          rx: 6px;
          stroke: var(--lane-stroke);
          stroke-width: 0.75px;
        }
        .archify-bot-svg .semantic-sigil {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.35;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.82;
          pointer-events: none;
        }
        .archify-bot-svg .semantic-sigil .sigil-fill { fill: currentColor; stroke: none; }
        .archify-bot-svg .s-frontend { color: var(--frontend-stroke); }
        .archify-bot-svg .s-backend { color: var(--backend-stroke); }
        .archify-bot-svg .s-database { color: var(--database-stroke); }
        .archify-bot-svg .s-cloud { color: var(--cloud-stroke); }
        .archify-bot-svg .s-security { color: var(--security-stroke); }
        .archify-bot-svg .s-messagebus { color: var(--messagebus-stroke); }
        .archify-bot-svg .s-external { color: var(--external-stroke); }
        .archify-bot-svg [data-node-id] {
          cursor: pointer;
          transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), filter 0.18s ease;
        }
        .archify-bot-svg [data-node-id]:hover {
          transform: translateY(-1.5px);
          filter: drop-shadow(0 4px 10px rgba(13, 148, 136, 0.22));
        }
      `}</style>

      <div className="archify-bot-canvas-wrap w-full overflow-x-auto rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-sm transition-colors duration-300">
        <svg
          viewBox="0 0 1060 355"
          role="img"
          lang="en"
          aria-labelledby="archify-bot-diagram-title archify-bot-diagram-desc"
          data-animation="trace"
          data-preset="classic"
          data-quality-profile="showcase"
          className="archify-bot-svg w-full h-auto min-w-[780px] block select-none"
        >
          <title id="archify-bot-diagram-title">Multi-Tiered Ticket &amp; Cloud Archiving Workflow</title>
          <desc id="archify-bot-diagram-desc">
            Interactive architecture flowchart compiled with Archify mapping User Application, Stateless Metadata Flagging, Moderator Approval Modal, Auto-Role Assignment &amp; Name Sync, HTML Transcript Hydration, and Firebase Storage Upload.
          </desc>

          <defs>
            <marker id="bot-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-default" />
            </marker>
            <marker id="bot-arrowhead-emphasis" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-emphasis" />
            </marker>
            <marker id="bot-arrowhead-security" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-security" />
            </marker>
            <marker id="bot-arrowhead-dashed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="m-dashed" />
            </marker>
            <pattern id="bot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" className="c-grid" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect
            width="100%"
            height="100%"
            fill="url(#bot-grid)"
            onClick={() => {
              setSelectedNodeId(null);
              setActiveLensKind(null);
            }}
          />

          {/* Subsystem Frame 1: Stateless Onboarding & Ticket Gate */}
          <rect
            data-graph-role="structural-frame"
            data-composition-frame-kind="region"
            data-composition-frame-id="0"
            data-composition-frame-label="Stateless Onboarding & Ticket Gate"
            x="16"
            y="18"
            width="1028"
            height="122"
            rx="12"
            className="c-region"
            strokeWidth="1"
          />

          {/* Subsystem Frame 2: Automated Provisioning & Cloud Archiving */}
          <rect
            data-graph-role="structural-frame"
            data-composition-frame-kind="security-group"
            data-composition-frame-id="1"
            data-composition-frame-label="Automated Provisioning & Cloud Archiving"
            x="16"
            y="168"
            width="1028"
            height="122"
            rx="12"
            className="c-security-group"
            strokeWidth="1"
          />

          {/* Connection Paths */}
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
                aria-label={`Focus ${node.label}, ${node.sublabel}`}
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
                <title>{`${node.label} · ${node.sublabel} · ${node.tag}`}</title>
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
                  y={node.y + 27}
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
                  y={node.y + 56}
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

          {/* Connection Labels */}
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
            data-composition-frame-label="Stateless Onboarding & Ticket Gate"
          >
            <rect
              data-graph-role="structural-frame-label-mask"
              x="28"
              y="10"
              width="210"
              height="16"
              rx="3"
              className="c-mask"
            />
            <text data-boundary-label="" x="36" y="21.5" className="t-frontend" fontSize="9" fontWeight="600">
              Tier 1 · Stateless Onboarding &amp; Ticket Gate
            </text>
          </g>

          <g
            data-graph-role="structural-frame-label"
            data-composition-frame-id="1"
            data-composition-frame-kind="security-group"
            data-composition-frame-label="Automated Provisioning & Cloud Archiving"
          >
            <rect
              data-graph-role="structural-frame-label-mask"
              x="28"
              y="160"
              width="242"
              height="16"
              rx="3"
              className="c-mask"
            />
            <text data-boundary-label="" x="36" y="171.5" className="t-cloud" fontSize="9" fontWeight="600">
              Tier 2 · Role Sync &amp; Cloud Transcript Archiving
            </text>
          </g>

          {/* Interactive Semantic Legend */}
          <g data-legend="" data-legend-bridge="">
            <text x="40" y="318" className="t-primary" fontSize="11" fontWeight="650">
              Workflow Legend (Click role or node to trace execution path)
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
                    y="328"
                    width="16"
                    height="10"
                    rx="2.5"
                    className={`c-${item.kind}`}
                    strokeWidth={isLensActive ? '2' : '1'}
                  />
                  <text
                    x={item.x + 22}
                    y="337"
                    className={isLensActive ? 't-primary' : 't-muted'}
                    fontSize="9.5"
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

      {/* Interactive Semantic Inspector Bar */}
      <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 text-xs transition-colors">
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
              <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Interactive Archify Diagram:</strong> Hover or click any workflow node to isolate execution transitions and inspect payload behavior.
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

export default BotWorkflowFlowchart;
