import { useState, useEffect } from 'react';
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

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 1600 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
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
        <span className="inline-flex items-center gap-1.5 text-teal-300 font-medium">
          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
          <span>{val}</span>
        </span>
      );
    }
    if (val === 'Limited') {
      return (
        <span className="inline-flex items-center gap-1.5 text-amber-300/90">
          <MinusCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Limited</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-500">
        <XCircle className="w-4 h-4 text-zinc-600 shrink-0" />
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
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects Directory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 sm:p-10 mb-8 hover:border-zinc-700 transition-all duration-300 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  Smart India Hackathon (SIH)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                  Adaptive Multimodal Sensing
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  Hybrid Cloud/Edge AI
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4 leading-tight">
                Smart Blind Stick
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-light mb-4">
                Adaptive Multimodal Sensing &amp; Conditional AI Vision Assistance Platform
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A cooperative two-subsystem assistive mobility architecture pairing a sensor-fused smart cane with event-driven smart goggles. Engineered with dual-level Time-of-Flight (ToF) ranging, hardware-interrupt head hazard triggers, IMU orientation calibration, GSM-to-RF failover alerting, and a conditional ESP32-CAM pipeline backed by Google Gemini Cloud AI and an offline ONNX fallback model.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
              <a
                href="https://github.com/Nazif47/SmartBlindStick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub Repository
              </a>
              <a
                href="#live-demo"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-900/90 text-zinc-200 border border-zinc-700/80 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-teal-400" />
                View Live Demo
              </a>
            </div>
          </div>

          {/* Animated Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-800/80">
            <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">ToF Sensing Planes</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-100">
                <AnimatedCounter end={2} suffix="x" />
              </p>
              <p className="text-xs text-teal-400/90 mt-1">Foot (VL53L5CX) + Head (VL53L0X)</p>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Inactivity Auto-Off</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-100">
                <AnimatedCounter end={20} suffix=" sec" />
              </p>
              <p className="text-xs text-sky-400/90 mt-1">555 Timer + Touch Relay Control</p>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">AI Inference Paths</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-100">
                <AnimatedCounter end={2} suffix="-Stage" />
              </p>
              <p className="text-xs text-teal-400/90 mt-1">Gemini API Cloud + Local ONNX</p>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">SOS Failover Links</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-100">
                <AnimatedCounter end={2} suffix=" Channels" />
              </p>
              <p className="text-xs text-sky-400/90 mt-1">SIM800L GSM &rarr; NRF24L01 RF</p>
            </div>
          </div>
        </div>

        {/* Studio Obsidian Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Bento Card 1: Dual-Level ToF Sensing (Spans 2 Columns) */}
          <div className="md:col-span-2 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  <Layers className="w-4 h-4" />
                  Dual-Level Time-of-Flight Ranging
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                  I2C + GPIO25 Interrupt
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 mb-3">
                Isolated Foot-Level &amp; Head-Level Obstacle Architecture
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Conventional ultrasonic canes only scan ground level and suffer from wide-cone acoustic reflections. Our architecture splits spatial awareness across two dedicated laser Time-of-Flight planes: a <span className="text-zinc-200 font-medium">VL53L5CX multi-zone ToF imager</span> on the primary I2C bus mapping foot-level obstacles and terrain drop-offs, paired with a <span className="text-zinc-200 font-medium">VL53L0X single-point ToF sensor</span> dedicated to head-height hazards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/70">
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-zinc-200">VL53L5CX ToF Imager</span>
                  <span className="text-xs font-mono text-teal-400">Foot Plane</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Interfaces directly with the main ESP32 MCU over I2C to evaluate nearby scene depth, curbs, and ground-level obstructions in real time.
                </p>
              </div>
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-zinc-200">VL53L0X + Arduino Nano</span>
                  <span className="text-xs font-mono text-sky-400">Head Plane</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Offloaded to an Arduino Nano co-processor that asserts a hardware trigger (<code className="text-zinc-300">D7 &rarr; ESP32 GPIO25</code>) for zero-polling upper-body protection.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Card 2: MPU6050 Tilt & Power Management (Spans 1 Column) */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  <Compass className="w-4 h-4" />
                  Inertial &amp; Power Logic
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                  MPU6050 + 555 IC
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                Orientation Gating &amp; Auto-Shutdown
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                An <span className="text-zinc-200 font-medium">MPU6050 IMU</span> tracks X and Y tilt angles so software can verify whether the cane is held in an active walking orientation before firing false obstacle warnings.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800/70">
              <div className="flex items-start gap-3 bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5">
                <BatteryCharging className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                    20s Touch Inactivity Cutoff
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    A capacitive touch sensor, potentiometer-tuned 555 timer IC, and stick power relay cut off main rail draw if the handle is released for 20 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Custom Native SVG Architecture Diagram (Full Width 3 Columns) */}
          <div className="md:col-span-3 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  Event-Driven Hardware &amp; AI Signal Flow
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                  Conditional Vision &amp; Multi-Path Failover Architecture
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                  Primary Trigger / Vision Path
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                  Failover / Redundant Link
                </span>
              </div>
            </div>

            {/* Responsive Custom SVG Diagram */}
            <div className="w-full overflow-x-auto bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4 sm:p-6">
              <svg
                viewBox="0 0 1080 390"
                className="w-full h-auto min-w-[760px]"
                role="img"
                aria-label="Smart Blind Stick conditional architecture diagram from ToF sensors to ESP32, ESP32-CAM, and Mobile App Hybrid AI"
              >
                <defs>
                  <linearGradient id="sih-teal-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="sih-node-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#18181b" />
                    <stop offset="100%" stopColor="#09090b" />
                  </linearGradient>
                  <marker
                    id="arrow-teal"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2dd4bf" />
                  </marker>
                  <marker
                    id="arrow-sky"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
                  </marker>
                  <marker
                    id="arrow-zinc"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#71717a" />
                  </marker>
                </defs>

                {/* Subtle Background Grid */}
                <g stroke="#27272a" strokeWidth="1" strokeDasharray="3,6" opacity="0.45">
                  <line x1="20" y1="60" x2="1060" y2="60" />
                  <line x1="20" y1="195" x2="1060" y2="195" />
                  <line x1="20" y1="330" x2="1060" y2="330" />
                  <line x1="265" y1="20" x2="265" y2="370" />
                  <line x1="535" y1="20" x2="535" y2="370" />
                  <line x1="805" y1="20" x2="805" y2="370" />
                </g>

                {/* STAGE LABELS */}
                <text x="130" y="28" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="1.2" textAnchor="middle">
                  1. DUAL-LEVEL TOF SENSING
                </text>
                <text x="395" y="28" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="1.2" textAnchor="middle">
                  2. STICK CORE CONTROLLER
                </text>
                <text x="665" y="28" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="1.2" textAnchor="middle">
                  3. CONDITIONAL VISION
                </text>
                <text x="940" y="28" fill="#a1a1aa" fontSize="11" fontWeight="600" letterSpacing="1.2" textAnchor="middle">
                  4. HYBRID AI &amp; VOICE
                </text>

                {/* NODE 1A: VL53L5CX Foot ToF */}
                <rect x="25" y="55" width="210" height="82" rx="12" fill="url(#sih-node-bg)" stroke="#14b8a6" strokeWidth="1.5" />
                <text x="42" y="80" fill="#2dd4bf" fontSize="11" fontFamily="monospace" fontWeight="600">
                  FOOT-LEVEL DEPTH (I2C)
                </text>
                <text x="42" y="102" fill="#f4f4f5" fontSize="14" fontWeight="700">
                  VL53L5CX ToF Imager
                </text>
                <text x="42" y="121" fill="#a1a1aa" fontSize="11">
                  Multi-zone ground &amp; curb hazard map
                </text>

                {/* NODE 1B: VL53L0X + Arduino Nano Head ToF */}
                <rect x="25" y="155" width="210" height="86" rx="12" fill="url(#sih-node-bg)" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="42" y="180" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
                  HEAD-LEVEL TRIGGER (D7)
                </text>
                <text x="42" y="202" fill="#f4f4f5" fontSize="14" fontWeight="700">
                  VL53L0X + Arduino Nano
                </text>
                <text x="42" y="221" fill="#a1a1aa" fontSize="11">
                  Isolated single-point interrupt stage
                </text>

                {/* NODE 1C: MPU6050 + Touch Sensor */}
                <rect x="25" y="260" width="210" height="82" rx="12" fill="url(#sih-node-bg)" stroke="#52525b" strokeWidth="1.5" />
                <text x="42" y="284" fill="#a1a1aa" fontSize="11" fontFamily="monospace" fontWeight="600">
                  ORIENTATION &amp; POWER
                </text>
                <text x="42" y="305" fill="#f4f4f5" fontSize="14" fontWeight="700">
                  MPU6050 + Touch Relay
                </text>
                <text x="42" y="324" fill="#a1a1aa" fontSize="11">
                  X/Y tilt check &amp; 20s auto-shutdown
                </text>

                {/* CONNECTIONS STAGE 1 -> STAGE 2 */}
                <path
                  d="M 235 96 L 265 96 L 265 145 L 292 145"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  markerEnd="url(#arrow-teal)"
                />
                <path
                  d="M 235 198 L 265 198 L 265 168 L 292 168"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  markerEnd="url(#arrow-sky)"
                />
                <text x="263" y="135" fill="#2dd4bf" fontSize="10" fontFamily="monospace" textAnchor="end">
                  I2C
                </text>
                <text x="263" y="214" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="end">
                  GPIO25 INT
                </text>
                <path
                  d="M 235 300 L 265 300 L 265 190 L 292 190"
                  fill="none"
                  stroke="#71717a"
                  strokeWidth="1.75"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrow-zinc)"
                />

                {/* NODE 2A: ESP32 Main Controller */}
                <rect x="295" y="105" width="205" height="115" rx="14" fill="url(#sih-node-bg)" stroke="url(#sih-teal-line)" strokeWidth="2" />
                <text x="315" y="132" fill="#2dd4bf" fontSize="11" fontFamily="monospace" fontWeight="600">
                  MAIN CONTROLLER UNIT
                </text>
                <text x="315" y="156" fill="#f4f4f5" fontSize="16" fontWeight="700">
                  ESP32 MCU
                </text>
                <text x="315" y="177" fill="#d4d4d8" fontSize="11">
                  • Threshold &amp; Tilt Validation
                </text>
                <text x="315" y="194" fill="#d4d4d8" fontSize="11">
                  • Haptic / Buzzer Local Alert
                </text>
                <text x="315" y="211" fill="#99f6e4" fontSize="11" fontFamily="monospace">
                  Event Confirmed &rarr; Wake CAM
                </text>

                {/* NODE 2B: Emergency Telemetry & Failover */}
                <rect x="295" y="255" width="205" height="92" rx="12" fill="url(#sih-node-bg)" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="313" y="278" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
                  MULTI-PATH SOS &amp; GPS
                </text>
                <text x="313" y="299" fill="#f4f4f5" fontSize="13.5" fontWeight="700">
                  SIM800L GSM &rarr; NRF24L01
                </text>
                <text x="313" y="318" fill="#a1a1aa" fontSize="11">
                  Primary UART GSM SMS/Call alert
                </text>
                <text x="313" y="334" fill="#7dd3fc" fontSize="11">
                  SPI RF fallback + NEO-M8N GPS
                </text>

                {/* ESP32 -> SOS Failover Arrow */}
                <path
                  d="M 397 220 L 397 251"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.75"
                  strokeDasharray="4,3"
                  markerEnd="url(#arrow-sky)"
                />

                {/* CONNECTION STAGE 2 -> STAGE 3 (Conditional Trigger) */}
                <path
                  d="M 500 162 L 560 162"
                  fill="none"
                  stroke="url(#sih-teal-line)"
                  strokeWidth="2.75"
                  markerEnd="url(#arrow-teal)"
                />
                <rect x="504" y="128" width="52" height="20" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" />
                <text x="530" y="142" fill="#5eead4" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
                  /capture
                </text>

                {/* NODE 3: ESP32-CAM Smart Goggles */}
                <rect x="565" y="95" width="205" height="135" rx="14" fill="url(#sih-node-bg)" stroke="#14b8a6" strokeWidth="2" />
                <text x="585" y="122" fill="#2dd4bf" fontSize="11" fontFamily="monospace" fontWeight="600">
                  GOGGLES VISION MODULE
                </text>
                <text x="585" y="146" fill="#f4f4f5" fontSize="15.5" fontWeight="700">
                  ESP32-CAM (OV2640)
                </text>
                <text x="585" y="168" fill="#d4d4d8" fontSize="11">
                  • Deep-sleep in normal navigation
                </text>
                <text x="585" y="186" fill="#d4d4d8" fontSize="11">
                  • Triggered only on hazard event
                </text>
                <text x="585" y="204" fill="#5eead4" fontSize="11" fontFamily="monospace">
                  Local Wi-Fi Hotspot / LAN
                </text>

                {/* Head-level direct interrupt line to CAM */}
                <path
                  d="M 130 241 L 130 368 L 667 368 L 667 234"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  markerEnd="url(#arrow-sky)"
                />
                <text x="400" y="382" fill="#7dd3fc" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
                  Direct Head-Level Trigger Signal Bypass (VL53L0X &rarr; Instant Frame Capture)
                </text>

                {/* CONNECTION STAGE 3 -> STAGE 4 */}
                <path
                  d="M 770 162 L 828 162"
                  fill="none"
                  stroke="url(#sih-teal-line)"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-teal)"
                />
                <text x="799" y="150" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
                  WLAN Frame
                </text>

                {/* NODE 4: Mobile App & Hybrid AI Pipeline */}
                <rect x="832" y="55" width="225" height="275" rx="14" fill="url(#sih-node-bg)" stroke="#38bdf8" strokeWidth="1.75" />
                <text x="850" y="82" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
                  MOBILE APP BRIDGE
                </text>
                <text x="850" y="104" fill="#f4f4f5" fontSize="15" fontWeight="700">
                  Hybrid AI Router &amp; TTS
                </text>

                {/* Sub-box 4A: Primary Gemini API */}
                <rect x="848" y="120" width="193" height="64" rx="9" fill="#042f2e" stroke="#14b8a6" strokeWidth="1.25" />
                <text x="862" y="141" fill="#5eead4" fontSize="10.5" fontFamily="monospace" fontWeight="600">
                  PRIMARY CLOUD PATH
                </text>
                <text x="862" y="159" fill="#f4f4f5" fontSize="13" fontWeight="700">
                  Google Gemini Vision API
                </text>
                <text x="862" y="174" fill="#99f6e4" fontSize="10.5">
                  Rich scene &amp; object recognition
                </text>

                {/* Failover Arrow inside Mobile App */}
                <path
                  d="M 944 184 L 944 204"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  markerEnd="url(#arrow-sky)"
                />
                <text x="954" y="198" fill="#7dd3fc" fontSize="9.5" fontFamily="monospace">
                  Offline Failover
                </text>

                {/* Sub-box 4B: Fallback Local ONNX */}
                <rect x="848" y="208" width="193" height="64" rx="9" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.25" />
                <text x="862" y="229" fill="#7dd3fc" fontSize="10.5" fontFamily="monospace" fontWeight="600">
                  FALLBACK EDGE MODEL
                </text>
                <text x="862" y="247" fill="#f4f4f5" fontSize="13" fontWeight="700">
                  On-Device ONNX Runtime
                </text>
                <text x="862" y="262" fill="#bae6fd" fontSize="10.5">
                  Zero-internet local inference
                </text>

                {/* Sub-box 4C: Real-Time Spoken Output */}
                <rect x="848" y="284" width="193" height="32" rx="7" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                <text x="944" y="304" fill="#e4e4e7" fontSize="11" fontWeight="600" textAnchor="middle">
                  Real-Time Spoken Audio Output
                </text>
              </svg>
            </div>
          </div>

          {/* Bento Card 4: Conditional ESP32-CAM Vision */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  <Eye className="w-4 h-4" />
                  Event-Driven Vision
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                  ESP32-CAM OV2640
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                Conditional Camera Awakening
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Continuous video streaming rapidly depletes wearable batteries. In our architecture, the goggles-mounted <span className="text-zinc-200 font-medium">ESP32-CAM</span> remains dormant until the stick&apos;s ToF array confirms an obstacle threshold breach.
              </p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300 mb-1">
                <Wifi className="w-3.5 h-3.5" />
                <span>GET /capture over Local Hotspot</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Both ESP modules share the user&apos;s mobile hotspot for zero-data-cost LAN communication, reserving cellular data strictly for cloud AI requests.
              </p>
            </div>
          </div>

          {/* Bento Card 5: Hybrid AI Vision Pipeline */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  <Sparkles className="w-4 h-4" />
                  Hybrid AI Inference
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                  Cloud + Edge ONNX
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                Gemini Cloud to Local ONNX Failover
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Captured frames are dispatched to the companion smartphone app, which attempts high-context visual understanding via the <span className="text-zinc-200 font-medium">Google Gemini API</span> first. If network connectivity drops or times out, inference seamlessly fails over to an embedded <span className="text-zinc-200 font-medium">local ONNX model</span>.
              </p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-300 mb-1">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Real-Time Spoken Synthesis</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Recognition outputs are converted into natural voice prompts alongside distance telemetry (Head &amp; Ground meters) and live GPS coordinates.
              </p>
            </div>
          </div>

          {/* Bento Card 6: Redundant GSM to RF Failover */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  <Radio className="w-4 h-4" />
                  Fail-Safe Telemetry
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                  SIM800L + NRF24L01
                </span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                Dual-Path Emergency Escalation
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                During an SOS event, location coordinates from the <span className="text-zinc-200 font-medium">NEO-M8N GPS</span> (with mobile location fallback) are transmitted via the <span className="text-zinc-200 font-medium">SIM800L GSM module</span>. In cellular dead zones, the controller automatically switches to an <span className="text-zinc-200 font-medium">NRF24L01 SPI RF link</span>.
              </p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dual-Source Geolocation</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Combines hardware UART NEO-M8N satellite lock with smartphone GPS fallback for indoor/urban-canyon continuity.
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Architecture Breakdown & Comparative Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hardware Module Specification List */}
          <div className="lg:col-span-1 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <Zap className="w-4 h-4" />
              Hardware Bill of Materials
            </div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
              Subsystem Module Roles
            </h2>
            <div className="space-y-3">
              {hardwareModules.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950/60 border border-zinc-800/70 rounded-xl p-3.5 hover:border-zinc-700/80 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-zinc-100">{item.module}</span>
                    <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {item.bus}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Analysis Table from Report */}
          <div className="lg:col-span-2 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  <ShieldAlert className="w-4 h-4" />
                  Benchmarking &amp; Novelty Verification
                </span>
                <span className="text-xs text-zinc-500 font-mono">SIH Technical Report — Table II</span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                Comparative Analysis vs. Existing Assistive Systems
              </h2>
              <p className="text-sm text-zinc-400 mb-6">
                Evaluated across eight critical reliability, sensing, and power-efficiency dimensions against traditional white canes, ultrasonic smart sticks, and continuous camera-based wearables.
              </p>

              <div className="overflow-x-auto border border-zinc-800/80 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-zinc-950/90 border-b border-zinc-800 text-zinc-300">
                      <th className="py-3.5 px-4 font-semibold">Feature</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-400">Traditional Stick</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-400">Ultrasonic Stick</th>
                      <th className="py-3.5 px-3 font-medium text-zinc-400">Camera Systems</th>
                      <th className="py-3.5 px-4 font-semibold text-teal-300 bg-teal-950/20">
                        Proposed System
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-zinc-800/30 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-zinc-200">{row.feature}</td>
                        <td className="py-3 px-3">{renderBadge(row.traditional)}</td>
                        <td className="py-3 px-3">{renderBadge(row.ultrasonic)}</td>
                        <td className="py-3 px-3">{renderBadge(row.camera)}</td>
                        <td className="py-3 px-4 bg-teal-950/10">{renderBadge(row.proposed)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-200">
                  State-Driven Embedded Firmware Architecture
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Operates across discrete <code className="text-zinc-300">IDLE</code> &rarr; <code className="text-zinc-300">WARNING</code> &rarr; <code className="text-zinc-300">VISION (/capture)</code> &rarr; <code className="text-zinc-300">AI RECOGNITION</code> &rarr; <code className="text-zinc-300">FAIL-SAFE ALERT</code> states rather than continuous full-load polling.
                </p>
              </div>
              <Link
                to="/projects/final-year"
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 hover:text-teal-300 shrink-0"
              >
                Explore Aura-x9 Safety Network &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIHProject;
