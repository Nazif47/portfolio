import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
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
  Layers,
  Trophy,
  Award
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { createPlaceholderDataUri } from '../utils/placeholderSvg';

const profilePic = '/images/nazif-formal-image.png';

const sihMarqueeItems = [
  {
    src: '/images/sih-winning-solo.jpg',
    caption: 'Hardware Edition Winners',
    fallback: createPlaceholderDataUri('Hardware Edition Winners', 'SIH // WINNER', '#14b8a6')
  },
  {
    src: '/images/sih-day3-talk.jpg',
    caption: 'Day 3 Mentoring & Evaluation',
    fallback: createPlaceholderDataUri('Day 3 Mentoring & Evaluation', 'SIH // DAY 3', '#0ea5e9')
  },
  {
    src: '/images/sih-day4-explanation.jpg',
    caption: 'Day 4 Hardware Explanation',
    fallback: createPlaceholderDataUri('Day 4 Hardware Explanation', 'SIH // DAY 4', '#14b8a6')
  },
  {
    src: '/images/sih-explanation.jpg',
    caption: 'Prototype & Workbench Demonstration',
    fallback: createPlaceholderDataUri('Prototype & Workbench Demonstration', 'SIH // WORKBENCH', '#38bdf8')
  },
  {
    src: '/images/sih-final-presentation.jpg',
    caption: 'Final Day Jury Presentation',
    fallback: createPlaceholderDataUri('Final Day Jury Presentation', 'SIH // GRAND FINALE', '#14b8a6')
  },
  {
    src: '/images/sih-winning-group.jpg',
    caption: 'Team AURA +999 Joint Winners',
    fallback: createPlaceholderDataUri('Team AURA +999 Joint Winners', 'SIH // AURA +999', '#0ea5e9')
  }
];

const competitiveHackathonItems = [
  {
    src: '/images/advaya.jpg',
    caption: 'ADVAYA Hackathon 2025',
    subtitle: 'Developed "Un-mute", a health literacy app for young adults.',
    spanClass: 'md:col-span-7',
    fallback: createPlaceholderDataUri('ADVAYA Hackathon 2025', '01 // NATIONAL HACKATHON', '#14b8a6')
  },
  {
    src: '/images/ideathon-2025.jpg',
    caption: 'Ideathon - BGS Institute of Technology',
    subtitle: 'Secured 1st Place representing our team in competitive technical prototyping.',
    spanClass: 'md:col-span-5',
    fallback: createPlaceholderDataUri('Ideathon - BGS Institute of Technology', '02 // 1ST PLACE WINNER', '#0ea5e9')
  }
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.06
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

  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeX = useMotionValue(0);
  const marqueeTransform = useTransform(marqueeX, (val) => `${val}%`);

  useAnimationFrame((_, delta) => {
    if (isMarqueePaused) return;
    const step = (delta / 1000) * 1.35;
    let next = marqueeX.get() - step;
    if (next <= -50) {
      next += 50;
    }
    marqueeX.set(next);
  });

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
        { name: 'React', meta: 'UI Component Architecture' },
        { name: 'Tailwind CSS', meta: 'Utility-First Design System' },
        { name: 'Vite', meta: 'High-Performance Bundler' },
        { name: 'Flutter', meta: 'Cross-Platform Mobile' }
      ]
    },
    {
      layer: 'LAYER 02',
      category: 'Backend & AI',
      icon: Database,
      skills: [
        { name: 'Node.js', meta: 'Event-Driven Runtime' },
        { name: 'Express', meta: 'RESTful API Layer' },
        { name: 'Python', meta: 'Automation & Daemons' },
        { name: 'Multimodal LLMs', meta: 'Generative AI Inference' }
      ]
    },
    {
      layer: 'LAYER 03',
      category: 'Embedded & IoT',
      icon: Radio,
      skills: [
        { name: 'ESP32', meta: 'Edge Microcontrollers' },
        { name: 'Arduino', meta: 'Bare-Metal Logic' },
        { name: 'Raspberry Pi 5', meta: 'Edge Compute Node' },
        { name: 'MQTT', meta: 'Event-Driven Pub/Sub' }
      ]
    },
    {
      layer: 'LAYER 04',
      category: 'DevOps & Tools',
      icon: Terminal,
      skills: [
        { name: 'Docker', meta: 'Containerized Workloads' },
        { name: 'Git', meta: 'Distributed VCS' },
        { name: 'n8n', meta: 'Workflow Orchestration' },
        { name: 'Make.com', meta: 'Cloud Integrations' }
      ]
    }
  ];

  return (
    <div className="flex flex-col flex-grow w-full pt-16 overflow-x-hidden">
      {/* Hero Section (Clean, Unboxed Centered Stack) */}
      <section className="min-h-[85dvh] flex flex-col justify-center items-center py-12 md:py-20">
        <MotionDiv
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          {/* 1. Profile Image */}
          <MotionDiv variants={heroAvatarVariants}>
            <img 
              src={profilePic} 
              alt="Nazif" 
              width="240"
              height="240"
              decoding="async"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover object-top border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 mb-8"
            />
          </MotionDiv>

          {/* 2. Main Heading */}
          <MotionH1
            variants={heroItemSpringVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white"
          >
            Hi, I&apos;m Nazif.
          </MotionH1>

          {/* 3. Gradient Sub-Heading */}
          <MotionH2
            variants={heroItemSpringVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-normal pb-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-teal-600 to-cyan-600 dark:from-zinc-100 dark:via-teal-300 dark:to-cyan-400"
          >
            Full-Stack Engineer &amp; IoT Solutions Architect
          </MotionH2>

          {/* 4. Bio */}
          <MotionP
            variants={heroItemSpringVariants}
            className="mt-2 max-w-3xl text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mx-auto font-light leading-relaxed"
          >
            I build intelligent, end-to-end systems—bridging the gap between distributed edge hardware, business automation, and high-performance modern web applications.
          </MotionP>

          {/* 5. CTA Buttons */}
          <MotionDiv
            variants={heroItemSpringVariants}
            className="mt-10 w-full sm:w-auto flex flex-col sm:flex-row justify-center gap-4"
          >
            <MotionDiv
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white font-medium px-7 py-3.5 text-base md:text-lg rounded-lg transition-all shadow-sm text-center"
              >
                View Projects
              </Link>
            </MotionDiv>
            <MotionDiv
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] bg-white dark:bg-transparent border border-zinc-300 text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-300 px-7 py-3.5 text-base md:text-lg rounded-lg dark:hover:bg-zinc-900 dark:hover:border-zinc-700 transition-all text-center shadow-sm dark:shadow-none"
              >
                Contact Me
              </Link>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </section>

      {/* What I Build Section (Value Proposition) */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>01 // Engineering Domains</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                What I Build
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm sm:text-base">
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
                  className="group relative rounded-2xl bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none border border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-7 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Hover Specular Highlight */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 dark:via-teal-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.index}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/70 space-y-2">
                    {item.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400/70 shrink-0" />
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
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>02 // Production Stack Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Core Technologies
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm sm:text-base">
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
                  className="group relative rounded-2xl bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none border border-zinc-200 dark:border-zinc-800/50 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 flex flex-col overflow-hidden"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950/90 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                      {group.layer}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:border-teal-500/30 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800/70">
                    {group.category}
                  </h3>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex flex-wrap items-center justify-between gap-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/60 px-3 py-2 group-hover:bg-white dark:group-hover:bg-zinc-900/70 group-hover:border-zinc-300 dark:group-hover:border-zinc-700/70 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400/80 shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
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
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
                <span>03 // Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Featured Highlights
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 min-h-[44px] py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors group"
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

      {/* Smart India Hackathon (SIH) Uncontained Fluid Marquee Section */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 border-b border-zinc-200 dark:border-zinc-800/70 pb-8"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-3">
                  <Trophy className="w-4 h-4" />
                  <span>04 // NATIONAL RECOGNITION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight pb-1">
                  National Level Hackathon Winner: Smart India Hackathon (SIH)
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-base sm:text-lg leading-relaxed">
                Snapshots from our 5-day national finale—engineering, calibrating, and pitching the Smart Blind Stick architecture with Team AURA +999.
              </p>
            </div>

            {/* Official SIH Partner & Organizer Branding Logo Strip */}
            <div className="mt-7 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/50 flex flex-wrap items-center justify-between gap-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Official National Organizers &amp; Backing
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <img
                  src="/logo/SIH_HardwareBranding.png"
                  alt="Smart India Hackathon Hardware Edition"
                  width="160"
                  height="48"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain dark:bg-white/95 dark:px-3 dark:py-1.5 dark:rounded-xl dark:shadow-sm transition-colors duration-300"
                />
                <img
                  src="/logo/Ministry of Education.png"
                  alt="Ministry of Education, Government of India"
                  width="160"
                  height="48"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain dark:bg-white/95 dark:px-3 dark:py-1.5 dark:rounded-xl dark:shadow-sm transition-colors duration-300"
                />
                <img
                  src="/logo/MoE.png"
                  alt="MoE's Innovation Cell"
                  width="160"
                  height="48"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain dark:bg-white/95 dark:px-3 dark:py-1.5 dark:rounded-xl dark:shadow-sm transition-colors duration-300"
                />
                <img
                  src="/logo/AICTE.png"
                  alt="AICTE"
                  width="160"
                  height="48"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain dark:bg-white/95 dark:px-3 dark:py-1.5 dark:rounded-xl dark:shadow-sm transition-colors duration-300"
                />
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Full-Width Uncontained Ticker Viewport with Soft Gradient Edge Masks */}
        <div
          className="relative w-full py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          <MotionDiv
            className="flex w-max"
            style={{ x: marqueeTransform }}
          >
            {[...sihMarqueeItems, ...sihMarqueeItems].map((item, idx) => (
              <MotionDiv
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group relative w-72 sm:w-96 md:w-[440px] max-w-[85vw] aspect-[16/10] mr-6 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="eager"
                  onError={(e) => {
                    if (e.currentTarget.src !== item.fallback) {
                      e.currentTarget.src = item.fallback;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Minimal Soft Bottom Gradient & Plain White Caption */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-4 right-4 pointer-events-none">
                  <p className="text-sm sm:text-base font-medium text-white drop-shadow-md truncate leading-normal pb-0.5">
                    {item.caption}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Standalone Interactive CTA Pill Below Marquee */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
            <span>TEAM AURA +999 · HARDWARE EDITION WINNER</span>
          </div>
          <MotionDiv
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/projects/sih"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700/80 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-300 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <span>Explore the Smart Blind Stick Architecture →</span>
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* Competitive Engineering & Hackathons Section */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800/70 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>05 // Arena &amp; Sprints</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Competitive Engineering &amp; Hackathons
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm sm:text-base">
              High-pressure technical arenas, 24-hour hardware-software buildathons, and inter-university engineering competitions.
            </p>
          </MotionDiv>

          {/* Clean Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {competitiveHackathonItems.map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: EASE_OUT_EXPO
                }}
                whileHover={{ y: -5 }}
                className={`${item.spanClass} group bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col`}
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="eager"
                    onError={(e) => {
                      if (e.currentTarget.src !== item.fallback) {
                        e.currentTarget.src = item.fallback;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.caption}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;