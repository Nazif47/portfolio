import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  FileText,
  Server,
  Cpu,
  ShieldCheck,
  Flame,
  KeyRound,
  Activity,
  Zap,
  Network,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import AnimatedCounter from '../../components/AnimatedCounter';

const FinalYearProject = () => {
  const protocolMetrics = [
    {
      protocol: 'HTTP (Client-Server Polling)',
      payload: 'Moderate',
      latency: '> 500 ms',
      jitter: 'High',
      suitability: 'Poor (High overhead)',
      highlight: false
    },
    {
      protocol: 'WebSocket (Persistent)',
      payload: 'Small to Large',
      latency: '~41.5 ms',
      jitter: 'Moderate',
      suitability: 'Moderate (Dashboard Stream)',
      highlight: false
    },
    {
      protocol: 'MQTT over TCP (QoS 0)',
      payload: 'Small',
      latency: '~8 – 10 ms',
      jitter: 'Low',
      suitability: 'Good (Unreliable delivery)',
      highlight: false
    },
    {
      protocol: 'MQTT over TCP (QoS 1)',
      payload: 'Small',
      latency: '~11 – 15 ms',
      jitter: 'Very Low',
      suitability: 'Optimal (Guaranteed delivery)',
      highlight: true
    }
  ];

  const priorWorkComparison = [
    {
      system: 'Traditional Lab Alarms',
      focus: 'Manual Lab Safety',
      protocol: 'Wired / Standalone',
      hub: 'None (Isolated Beep Boxes)',
      accountability: 'None',
      latency: 'High (Manual Observation)'
    },
    {
      system: 'IoT Biosafety Lab [10]',
      focus: 'Biosafety Monitoring',
      protocol: 'Wi-Fi / Cloud HTTP',
      hub: 'Third-Party Cloud',
      accountability: 'None',
      latency: 'Medium (~650 ms Cloud RTT)'
    },
    {
      system: 'Industrial Safety WSN [1]',
      focus: 'Factory Hazard',
      protocol: 'ESP-MESH / Wi-Fi',
      hub: 'ThingSpeak / Blynk',
      accountability: 'None',
      latency: '~2.0 seconds'
    },
    {
      system: 'RFID Storage Prototype [3]',
      focus: 'Chemical Storage',
      protocol: 'Wi-Fi (IoT Interface)',
      hub: 'ESP32 Controller',
      accountability: 'RFID (Zonal Validation)',
      latency: '2.37 seconds'
    },
    {
      system: 'Aura-x9 (Proposed System)',
      focus: 'Distributed Lab Safety',
      protocol: 'MQTT over Local WLAN',
      hub: 'Raspberry Pi (Mosquitto)',
      accountability: 'RC522 RFID (n-Zone Forensic)',
      latency: '< 200 ms (<100 ms Relay)',
      highlight: true
    }
  ];

  return (
    <div className="w-full flex-grow pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 min-h-[44px] py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects Directory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-10 mb-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  Final Year Engineering Project
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  MQTT + Edge Computing
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight pb-1">
                SmartLab Safety System
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-light mb-4">
                Scalable, Distributed Laboratory Safety &amp; Forensic Accountability Network Utilizing MQTT and Edge Nodes
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A decentralized multi-node edge computing architecture engineered around custom ESP32 microcontrollers across four physical laboratory zones. Telemetry streams via lightweight MQTT over local WLAN to a central Raspberry Pi Eclipse Mosquitto broker, driving dual-output mitigation: a headless Python daemon actuating 100W industrial relays in sub-200ms alongside an asynchronous WebSockets real-time dashboard.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
              <a
                href="https://github.com/Nazif47/SmartLabSafetySystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm dark:hover:bg-white hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub Repository
              </a>
              <a
                href="/SmartLab_Research_Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 py-3 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200 hover:bg-zinc-200/80 hover:border-zinc-300 dark:bg-zinc-900/90 dark:text-zinc-200 dark:border-zinc-700/80 font-medium text-sm dark:hover:bg-zinc-800 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                Read Research Paper
              </a>
            </div>
          </div>

          {/* Animated Telemetry Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">End-to-End Actuation</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter prefix="< " end={200} suffix=" ms" />
              </p>
              <p className="text-xs text-cyan-600 dark:text-cyan-400/90 mt-1">Sub-100ms Python Relay Trigger</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">MQTT QoS 1 Latency</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter prefix="~" end={15} suffix=" ms" />
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400/90 mt-1">11–15ms Guaranteed Delivery</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Monitored Lab Zones</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={4} suffix=" Zones" />
              </p>
              <p className="text-xs text-cyan-600 dark:text-cyan-400/90 mt-1">Zero-Code 5th Node Expansion</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Industrial Power Bus</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <AnimatedCounter end={100} suffix="W SMPS" />
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400/90 mt-1">Series Glass Fuse Per Edge Node</p>
            </div>
          </div>
        </div>

        {/* Studio Obsidian Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Bento Card 1: Custom SVG Bar Chart - Latency Comparison (Spans 2 Columns) */}
          <div className="md:col-span-2 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    Benchmark Telemetry — Conference Paper Fig. 4
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                    System Response Latency Comparison (ms)
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 self-start">
                  Lower is Better (ms)
                </span>
              </div>

              {/* Native Tailwind SVG Bar Chart */}
              <div className="w-full bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4 sm:p-6">
                <svg
                  viewBox="0 0 760 340"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Bar chart comparing system response latency: Cloud System (~650ms), Generic Local System (~300ms), and Aura x9 (<200ms)"
                >
                  <defs>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#0f766e" stopOpacity="0.75" />
                    </linearGradient>
                    <linearGradient id="cloud-bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#64748b" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#334155" stopOpacity="0.85" />
                    </linearGradient>
                    <linearGradient id="local-bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Y-Axis Grid Lines & Labels (0 to 700ms) */}
                  <g className="text-zinc-400" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4,4">
                    <line x1="85" y1="30" x2="700" y2="30" />
                    <line x1="85" y1="65" x2="700" y2="65" />
                    <line x1="85" y1="100" x2="700" y2="100" />
                    <line x1="85" y1="135" x2="700" y2="135" />
                    <line x1="85" y1="170" x2="700" y2="170" />
                    <line x1="85" y1="205" x2="700" y2="205" />
                    <line x1="85" y1="240" x2="700" y2="240" />
                  </g>

                  {/* Solid X & Y Axes */}
                  <line x1="85" y1="25" x2="85" y2="275" stroke="#71717a" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="85" y1="275" x2="700" y2="275" stroke="#71717a" strokeWidth="1.5" strokeOpacity="0.5" />

                  {/* Y-Axis Text Labels */}
                  <g className="fill-zinc-600 dark:fill-zinc-400" fontSize="11.5" fontFamily="monospace" textAnchor="end">
                    <text x="75" y="34">700 ms</text>
                    <text x="75" y="69">600 ms</text>
                    <text x="75" y="104">500 ms</text>
                    <text x="75" y="139">400 ms</text>
                    <text x="75" y="174">300 ms</text>
                    <text x="75" y="209">200 ms</text>
                    <text x="75" y="244">100 ms</text>
                    <text x="75" y="279">0 ms</text>
                  </g>

                  {/* 200ms Real-Time Safety Threshold Line */}
                  <line
                    x1="85"
                    y1="205"
                    x2="700"
                    y2="205"
                    stroke="#0891b2"
                    strokeWidth="1.25"
                    strokeDasharray="6,4"
                    strokeOpacity="0.75"
                  />
                  <rect x="520" y="185" width="172" height="17" rx="4" fill="#083344" stroke="#06b6d4" strokeWidth="0.75" />
                  <text x="606" y="197" fill="#67e8f9" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
                    200ms Safety Actuation Target
                  </text>

                  {/* BAR 1: Cloud System (~650ms) */}
                  <g>
                    <rect
                      x="140"
                      y="47.5"
                      width="110"
                      height="227.5"
                      rx="8"
                      fill="url(#cloud-bar-gradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                    />
                    <text x="195" y="38" className="fill-zinc-700 dark:fill-zinc-300" fontSize="13" fontWeight="700" fontFamily="monospace" textAnchor="middle">
                      ~650 ms
                    </text>
                    <text x="195" y="298" className="fill-zinc-800 dark:fill-zinc-200" fontSize="12.5" fontWeight="600" textAnchor="middle">
                      Cloud System
                    </text>
                    <text x="195" y="315" className="fill-zinc-500" fontSize="10.5" textAnchor="middle">
                      HTTP GET/POST Polling
                    </text>
                  </g>

                  {/* BAR 2: Generic Local System (~300ms) */}
                  <g>
                    <rect
                      x="335"
                      y="170"
                      width="110"
                      height="105"
                      rx="8"
                      fill="url(#local-bar-gradient)"
                      stroke="#0284c7"
                      strokeOpacity="0.75"
                      strokeWidth="1.5"
                    />
                    <text x="390" y="159" className="fill-sky-700 dark:fill-sky-300" fontSize="13" fontWeight="700" fontFamily="monospace" textAnchor="middle">
                      ~300 ms
                    </text>
                    <text x="390" y="298" className="fill-zinc-800 dark:fill-zinc-200" fontSize="12.5" fontWeight="600" textAnchor="middle">
                      Generic Local
                    </text>
                    <text x="390" y="315" className="fill-zinc-500" fontSize="10.5" textAnchor="middle">
                      Standard Local Broker
                    </text>
                  </g>

                  {/* BAR 3: Aura x9 System (<200ms) */}
                  <g>
                    <rect
                      x="530"
                      y="210"
                      width="110"
                      height="65"
                      rx="8"
                      className="fill-[url(#cyan-gradient)]"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                    <text x="585" y="177" className="fill-cyan-700 dark:fill-cyan-400" fontSize="13.5" fontWeight="700" fontFamily="monospace" textAnchor="middle">
                      &lt;200 ms
                    </text>
                    <text x="585" y="298" className="fill-cyan-700 dark:fill-cyan-400" fontSize="13" fontWeight="700" textAnchor="middle">
                      Aura x9
                    </text>
                    <text x="585" y="315" className="fill-teal-700 dark:fill-teal-300" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
                      MQTT + Headless Relay (&lt;100ms)
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              By decoupling the front-end visualization client from physical mitigation via a central <span className="text-zinc-900 dark:text-zinc-200 font-medium">Raspberry Pi Eclipse Mosquitto broker</span>, Aura-x9 achieves <span className="text-cyan-700 dark:text-cyan-300 font-medium">sub-100ms edge-to-relay actuation</span> and <span className="text-cyan-700 dark:text-cyan-300 font-medium">&lt;200ms end-to-end safety response</span>—over 3.2&times; faster than cloud-dependent IoT architectures.
            </p>
          </div>

          {/* Bento Card 2: Central Broker & Dual-Output Mitigation (Spans 1 Column) */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Server className="w-4 h-4 shrink-0" />
                  Central Hub Architecture
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  Raspberry Pi
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Dual-Output Zero-Latency Mitigation
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                The Raspberry Pi hosts an <span className="text-zinc-900 dark:text-zinc-200 font-medium">Eclipse Mosquitto broker</span> that fans out incoming ESP32 topic payloads simultaneously to two independent subscribers:
              </p>

              <div className="space-y-3">
                <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide mb-1">
                    <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    1. Headless Python Relay Daemon
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Runs independently in the background, latching Raspberry Pi GPIO pins to actuate <span className="text-zinc-900 dark:text-zinc-200 font-medium">two 100W industrial relays</span> (high-decibel buzzers &amp; bright tower lamps) the instant a threshold is crossed.
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wide mb-1">
                    <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    2. WebSockets Live Dashboard
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Mosquitto listens on <code className="text-zinc-800 dark:text-zinc-300">Port 9001</code> for Paho MQTT JS WebSocket connections, subscribing to <code className="text-zinc-800 dark:text-zinc-300">lab/#</code> for zero-reload card updates and pulse-danger animations (<code className="text-zinc-800 dark:text-zinc-300">MQ-2 &gt; 2000</code>).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/70 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <span>Offline-First Local WLAN</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400">Zero Cloud Dependency</span>
            </div>
          </div>

          {/* Bento Card 3: 4-Sensor Edge Node & Forensic Accountability */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  <KeyRound className="w-4 h-4 shrink-0" />
                  Forensic Accountability
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  RC522 SPI (3.3V)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                RFID Personnel &amp; Hazard Correlation
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                Unlike passive gas alarms that merely sound a siren, each Aura-x9 edge node integrates an <span className="text-zinc-900 dark:text-zinc-200 font-medium">RC522 RFID reader over SPI</span> capturing 8- or 16-digit personnel ID strings in real time.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <p className="text-xs text-zinc-900 dark:text-zinc-300 font-medium mb-1">
                Targeted Emergency Rescue Telemetry
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Correlates environmental anomalies with zone access logs to immediately identify both the exact chemical/thermal hazard and the specific researchers present in that zone.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Environmental & Security Sensor Array */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Flame className="w-4 h-4 shrink-0" />
                  Edge Sensor Suite
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  GPIO 34 ADC + Digital
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Multi-Modal Zonal Telemetry
              </h2>
              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/70">
                  <span className="text-zinc-900 dark:text-zinc-200 font-medium block mb-0.5">MQ-2 Gas/Smoke Sensor (GPIO 34)</span>
                  Detects volatile &amp; combustible gases via a voltage-divided ADC input to protect the ESP32 logic rail.
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/70">
                  <span className="text-zinc-900 dark:text-zinc-200 font-medium block mb-0.5">DHT22 Climate + Digital PIR Motion</span>
                  Monitors bio-store temperature/humidity stability and restricted-hours laboratory intrusion.
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Custom PCB Thermal/RF Zoning & Power Protection */}
          <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  <Cpu className="w-4 h-4 shrink-0" />
                  Hardware Fabrication
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                  Thermal &amp; RF Zones
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                PCB Isolation &amp; Short-Circuit Containment
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                Nodes are fabricated on custom perfboards with central <code className="text-zinc-800 dark:text-zinc-300">5V</code> and <code className="text-zinc-800 dark:text-zinc-300">GND</code> copper spine traces. Dedicated <span className="text-zinc-900 dark:text-zinc-200 font-medium">Thermal Zones</span> physically separate the heat-dissipating MQ-2 coil from the temperature-sensitive DHT22, eliminating false thermal positives, while <span className="text-zinc-900 dark:text-zinc-200 font-medium">RF Zones</span> preserve ESP32 Wi-Fi antenna gain.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <p className="text-xs text-teal-700 dark:text-teal-300 font-mono mb-1">
                100W SMPS + Series Panel-Mount Glass Fuse
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Power enters each sunboard-enclosed node through a 2-pin terminal block wired in series with a glass fuse, isolating any short-circuit strictly to that single node.
              </p>
            </div>
          </div>
        </div>

        {/* MQTT Routing & Protocol / Literature Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table I: IoT Protocol Latency Metrics + Hierarchical Topic Routing */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
                <Network className="w-4 h-4 shrink-0" />
                Conference Paper — Table I
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                IoT Protocol Latency Metrics
              </h2>
              <div className="space-y-3 mb-6">
                {protocolMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-3.5 border transition-colors ${
                      item.highlight
                        ? 'bg-cyan-50/70 dark:bg-cyan-950/25 border-cyan-500/40'
                        : 'bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800/70'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.protocol}</span>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${
                          item.highlight
                            ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                            : 'bg-zinc-200/70 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800'
                        }`}
                      >
                        {item.latency}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                      <span>Jitter: {item.jitter}</span>
                      <span className={item.highlight ? 'text-teal-700 dark:text-teal-300 font-medium' : ''}>
                        {item.suitability}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Hierarchy Box */}
            <div className="bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Hierarchical Topic Tree
                </span>
                <span className="text-[11px] font-mono text-zinc-500">Unique Boot Client ID</span>
              </div>
              <pre className="text-xs font-mono text-zinc-700 dark:text-zinc-300 space-y-1 overflow-x-auto">
                <div>lab/node1/temperature</div>
                <div>lab/node2/gas</div>
                <div>lab/node3/access</div>
                <div className="text-cyan-600 dark:text-cyan-400 font-semibold">lab/# (WebSocket Wildcard)</div>
              </pre>
            </div>
          </div>

          {/* Table II: Comparison with Previous Related Papers */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Literature Benchmarking — Table II
                </span>
                <span className="text-xs font-mono text-zinc-500">IEEE Conference Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Comparison With Previous Safety Architectures
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Aura-x9 is the only evaluated system combining localized sub-200ms MQTT edge-to-relay mitigation with multi-zone RC522 RFID forensic personnel accountability.
              </p>

              <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800/80 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-zinc-100/80 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300">
                      <th className="py-3.5 px-3.5 font-semibold">System / Authors</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Protocol</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Central Hub</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-600 dark:text-zinc-400">Accountability</th>
                      <th className="py-3.5 px-3.5 font-semibold text-cyan-700 dark:text-cyan-300 whitespace-nowrap">Response Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
                    {priorWorkComparison.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          row.highlight
                            ? 'bg-cyan-50/60 dark:bg-cyan-950/20 hover:bg-cyan-100/50 dark:hover:bg-cyan-950/30 transition-colors'
                            : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors'
                        }
                      >
                        <td className="py-3.5 px-3.5 font-medium text-zinc-900 dark:text-zinc-100">
                          <div className="flex items-center gap-2">
                            {row.highlight && <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />}
                            <span>{row.system}</span>
                          </div>
                          <span className="block text-[11px] text-zinc-500 font-normal mt-0.5">
                            {row.focus}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-zinc-700 dark:text-zinc-300 font-mono text-xs">{row.protocol}</td>
                        <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-400">{row.hub}</td>
                        <td className="py-3.5 px-3">
                          <span
                            className={
                              row.highlight
                                ? 'text-teal-700 dark:text-teal-300 font-medium'
                                : 'text-zinc-600 dark:text-zinc-400'
                            }
                          >
                            {row.accountability}
                          </span>
                        </td>
                        <td className="py-3.5 px-3.5 font-mono text-xs whitespace-nowrap">
                          <span
                            className={
                              row.highlight
                                ? 'inline-block whitespace-nowrap text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-500/15 px-2.5 py-1 rounded border border-cyan-500/30'
                                : 'inline-block whitespace-nowrap text-zinc-600 dark:text-zinc-400'
                            }
                          >
                            {row.latency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Fault-Tolerant Plug-and-Play Scalability
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                Because edge telemetry and backend relay controls are decoupled via MQTT topics, failure of any single node never compromises the rest of the network, and a 5th zone node can join with zero backend or frontend code changes.
              </p>
            </div>
          </div>
        </div>

        {/* Standalone Bottom Project Navigation Link */}
        <div className="flex justify-end">
          <Link
            to="/projects/sih"
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors py-6 sm:py-8"
          >
            &larr; View Smart Blind Stick (SIH)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalYearProject;
