import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu,
  Eye,
  Wifi,
  Zap,
  ShieldCheck,
  MonitorSmartphone,
  Workflow,
  Layout,
  Database,
  Radio,
  Terminal,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import profilePic from '../assets/Nazif_Fromal_Image.png';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const heroAvatarVariants = {
  hidden: {
    opacity: 0,
    scale: 0.86,
    y: 20,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 0.9
    }
  }
};

const heroItemSpringVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 0.85
    }
  }
};

const sectionHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 22
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_OUT_EXPO
    }
  }
};

const valueCardDelays = [0.04, 0.15, 0.28];
const techCardDelays = [0.04, 0.12, 0.22, 0.34];

const Home = () => {
  const MotionDiv = motion.div;
  const MotionH1 = motion.h1;
  const MotionH2 = motion.h2;
  const MotionP = motion.p;

  const heroMetrics = [
    {
      value: '< 200ms',
      label: 'Edge-to-Relay Latency',
      detail: 'MQTT + Headless Hardware'
    },
    {
      value: 'Hybrid AI',
      label: 'Vision Inference Pipeline',
      detail: 'Gemini Cloud + ONNX Edge'
    },
    {
      value: '4-Layer',
      label: 'System Architecture',
      detail: 'MCU • Broker • API • UI'
    },
    {
      value: 'Zero-Touch',
      label: 'Business Automation',
      detail: 'n8n • Make.com • ERP Sync'
    }
  ];

  const valuePropositions = [
    {
      index: '01 // EDGE-AI',
      icon: Cpu,
      title: 'Edge-to-Cloud AI',
      description:
        'Integrating AI models (Gemini, ONNX) directly with physical hardware and sensors.',
      specs: ['Conditional Vision Awakening', 'Offline ONNX Failover', 'Multi-Sensor Fusion']
    },
    {
      index: '02 // FULL-STACK',
      icon: MonitorSmartphone,
      title: 'Full-Stack Web & Mobile',
      description:
        'Developing responsive applications using React, Tailwind, Node.js, and Flutter.',
      specs: ['Real-Time WebSockets UI', 'Cross-Platform Flutter', 'REST & Event APIs']
    },
    {
      index: '03 // AUTOMATION',
      icon: Workflow,
      title: 'Workflow Automation',
      description:
        'Architecting seamless business integrations and ERP pipelines using n8n and Make.com.',
      specs: ['Zoho Books & ERP Sync', 'Autonomous LLM Agents', 'Webhook Orchestration']
    }
  ];

  const coreTechnologies = [
    {
      layer: 'LAYER 01',
      category: 'Frontend & App',
      icon: Layout,
      skills: [
        { name: 'React', meta: 'UI Architecture' },
        { name: 'Tailwind CSS', meta: 'Design System' },
        { name: 'Vite', meta: 'Build Toolchain' },
        { name: 'Flutter', meta: 'Mobile Companion' }
      ]
    },
    {
      layer: 'LAYER 02',
      category: 'Backend & AI',
      icon: Database,
      skills: [
        { name: 'Node.js', meta: 'Event Runtime' },
        { name: 'Express', meta: 'API Layer' },
        { name: 'Python', meta: 'Automation & Daemons' },
        { name: 'Google Gemini API', meta: 'Multimodal AI' }
      ]
    },
    {
      layer: 'LAYER 03',
      category: 'Embedded & IoT',
      icon: Radio,
      skills: [
        { name: 'ESP32', meta: 'Edge Microcontrollers' },
        { name: 'Arduino', meta: 'Hardware Interrupts' },
        { name: 'Raspberry Pi 5', meta: 'Central Broker Hub' },
        { name: 'MQTT', meta: 'Low-Latency Pub/Sub' }
      ]
    },
    {
      layer: 'LAYER 04',
      category: 'DevOps & Tools',
      icon: Terminal,
      skills: [
        { name: 'Docker', meta: 'Containerization' },
        { name: 'Git', meta: 'Version Control' },
        { name: 'n8n', meta: 'Workflow Engine' },
        { name: 'Make.com', meta: 'Cloud Pipelines' }
      ]
    }
  ];

  return (
    <div className="flex flex-col flex-grow w-full pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl px-6 py-12 sm:px-12 sm:py-16 shadow-[0_0_80px_-20px_rgba(20,184,166,0.12)] overflow-hidden"
          >
            {/* Top Specular Accent Line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-64 bg-teal-500/[0.06] rounded-full blur-3xl"
              aria-hidden="true"
            />

            {/* Corner Architectural Crosshairs */}
            <span className="pointer-events-none absolute top-4 left-5 font-mono text-xs text-zinc-700 select-none">+</span>
            <span className="pointer-events-none absolute top-4 right-5 font-mono text-xs text-zinc-700 select-none">+</span>

            <div className="relative z-10 text-center flex flex-col items-center">
              {/* Live Status Telemetry Pill */}
              <MotionDiv
                variants={heroItemSpringVariants}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/90 text-xs text-zinc-300 mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                </span>
                <span className="font-mono uppercase tracking-wider text-[11px] text-zinc-300">
                  Available for Engineering Roles &amp; Systems Architecture
                </span>
              </MotionDiv>

              {/* 1. Profile Image Entrance (CRITICAL: Exact preserved image rendering & hover effect) */}
              <MotionDiv variants={heroAvatarVariants} className="relative">
                <img 
                  src={profilePic} 
                  alt="Nazif" 
                  className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover object-top border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 mb-8"
                />
              </MotionDiv>

              {/* 2. Main Heading Entrance */}
              <MotionH1
                variants={heroItemSpringVariants}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-zinc-100"
              >
                Hi, I&apos;m Nazif.
              </MotionH1>

              {/* 3. Gradient Sub-Heading Entrance */}
              <MotionH2
                variants={heroItemSpringVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-teal-300 to-cyan-400"
              >
                Full-Stack Engineer &amp; IoT Solutions Architect
              </MotionH2>

              {/* 4. Bio Entrance */}
              <MotionP
                variants={heroItemSpringVariants}
                className="mt-1 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 mx-auto font-light leading-relaxed"
              >
                I build intelligent, end-to-end systems—bridging the gap between distributed edge hardware, business automation, and high-performance modern web applications.
              </MotionP>

              {/* 5. CTA Buttons Entrance */}
              <MotionDiv
                variants={heroItemSpringVariants}
                className="mt-9 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
              >
                <MotionDiv
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-100 text-zinc-950 font-medium px-7 py-3.5 text-base rounded-xl hover:bg-white transition-all shadow-sm"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MotionDiv>
                <MotionDiv
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-zinc-950/70 border border-zinc-800 text-zinc-200 px-7 py-3.5 text-base rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all"
                  >
                    Contact Me
                  </Link>
                </MotionDiv>
              </MotionDiv>

              {/* Architectural Telemetry Ribbon inside Hero */}
              <MotionDiv
                variants={heroItemSpringVariants}
                className="w-full mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left"
              >
                {heroMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-zinc-950/60 border border-zinc-800/70 px-4 py-3.5 hover:border-zinc-700/80 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100 font-mono">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-zinc-300 mt-0.5">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-teal-400/80 font-mono mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* What I Build Section (Value Proposition) */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>01 // Engineering Domains</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                What I Build
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm sm:text-base">
              Cohesive hardware-to-cloud architectures that connect physical telemetry with modern web interfaces and automated workflows.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropositions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: valueCardDelays[idx] ?? idx * 0.12,
                    ease: EASE_OUT_EXPO
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: 'spring', stiffness: 260, damping: 20 }
                  }}
                  className="group relative rounded-2xl bg-zinc-900/55 backdrop-blur-xl border border-zinc-800/80 p-6 sm:p-7 hover:border-zinc-700 hover:bg-neutral-800/50 transition-colors duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Hover Specular Highlight */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 group-hover:text-teal-400/80 transition-colors">
                        {item.index}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/70 space-y-2">
                    {item.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-xs text-zinc-300 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/70" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>02 // Production Stack Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                Core Technologies
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm sm:text-base">
              Categorized tools, frameworks, and embedded hardware platforms engineered to ship resilient end-to-end systems.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTechnologies.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 28, scale: 0.975 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.68,
                    delay: techCardDelays[index] ?? index * 0.1,
                    ease: EASE_OUT_EXPO
                  }}
                  whileHover={{
                    y: -4,
                    transition: { type: 'spring', stiffness: 280, damping: 22 }
                  }}
                  className="group relative rounded-2xl bg-zinc-900/55 backdrop-blur-xl border border-zinc-800/80 p-6 hover:bg-neutral-800/50 hover:border-zinc-700 transition-colors duration-300 flex flex-col overflow-hidden"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950/90 text-zinc-400 border border-zinc-800 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                      {group.layer}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/30 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight mb-4 pb-3 border-b border-zinc-800/70">
                    {group.category}
                  </h3>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center justify-between gap-2 rounded-lg bg-zinc-950/50 border border-zinc-800/60 px-3 py-2 group-hover:border-zinc-700/70 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {skill.meta}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">
                <span>03 // Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                Featured Highlights
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-teal-300 transition-colors group"
            >
              <span>Explore Full Project Directory</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE_OUT_EXPO }}
            >
              <ProjectCard 
                title="Smart Blind Stick"
                badge="SIH Flagship Project"
                description="An adaptive assistive mobility platform combining sensor-fused hardware with conditional edge-to-cloud AI."
                highlights={[
                  { icon: Cpu, label: "Dual-Level ToF Ranging" },
                  { icon: Eye, label: "Gemini + ONNX Vision" },
                  { icon: Wifi, label: "GSM & RF Failover" }
                ]}
                tags={["ESP32-CAM", "ToF Sensors", "Hybrid AI (Gemini/ONNX)", "NRF24L01"]}
                link="/projects/sih"
              />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_EXPO }}
            >
              <ProjectCard 
                title="SmartLab Safety System"
                badge="Final Year Project"
                description="A distributed, edge-computing IoT safety network featuring real-time RFID spatial accountability and zero-latency mitigation."
                highlights={[
                  { icon: Zap, label: "Sub-200ms Actuation" },
                  { icon: Wifi, label: "MQTT Edge Telemetry" },
                  { icon: ShieldCheck, label: "RFID Spatial Tracking" }
                ]}
                tags={["ESP32", "MQTT / Mosquitto", "Raspberry Pi", "RC522 RFID"]}
                link="/projects/final-year"
              />
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;