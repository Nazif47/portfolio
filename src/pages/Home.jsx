import { Link } from 'react-router-dom';
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
  Terminal
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import profilePic from '../assets/Nazif_Fromal_Image.png';

const Home = () => {
  const valuePropositions = [
    {
      icon: Cpu,
      title: 'Edge-to-Cloud AI',
      description:
        'Integrating AI models (Gemini, ONNX) directly with physical hardware and sensors.'
    },
    {
      icon: MonitorSmartphone,
      title: 'Full-Stack Web & Mobile',
      description:
        'Developing responsive applications using React, Tailwind, Node.js, and Flutter.'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description:
        'Architecting seamless business integrations and ERP pipelines using n8n and Make.com.'
    }
  ];

  const coreTechnologies = [
    {
      category: 'Frontend & App',
      icon: Layout,
      skills: ['React', 'Tailwind CSS', 'Vite', 'Flutter']
    },
    {
      category: 'Backend & AI',
      icon: Database,
      skills: ['Node.js', 'Express', 'Python', 'Google Gemini API']
    },
    {
      category: 'Embedded & IoT',
      icon: Radio,
      skills: ['ESP32', 'Arduino', 'Raspberry Pi 5', 'MQTT']
    },
    {
      category: 'DevOps & Tools',
      icon: Terminal,
      skills: ['Docker', 'Git', 'n8n', 'Make.com']
    }
  ];

  return (
    <div className="flex flex-col flex-grow w-full pt-16">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center py-12 md:py-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          <img 
            src={profilePic} 
            alt="Nazif" 
            className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover object-top border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 mb-8"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-zinc-100">
            Hi, I&apos;m Nazif.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-teal-300 to-cyan-400">
            Full-Stack Engineer &amp; IoT Solutions Architect
          </h2>
          <p className="mt-2 max-w-3xl text-lg md:text-xl text-zinc-400 mx-auto font-light leading-relaxed">
            I build intelligent, end-to-end systems—bridging the gap between distributed edge hardware, business automation, and high-performance modern web applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/projects" className="bg-zinc-100 text-zinc-950 font-medium px-7 py-3.5 text-base md:text-lg rounded-lg hover:bg-white transition-all shadow-sm text-center">
              View Projects
            </Link>
            <Link to="/contact" className="border border-zinc-800 text-zinc-300 px-7 py-3.5 text-base md:text-lg rounded-lg hover:bg-zinc-900 hover:border-zinc-700 transition-all text-center">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* What I Build Section (Value Proposition) */}
      <section className="py-20 border-t border-zinc-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-zinc-900/80 text-teal-400 border border-zinc-800 mb-3">
              Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              What I Build
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              Architecting cohesive solutions that connect physical telemetry with cloud intelligence and automated workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropositions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 p-6 sm:p-7 hover:border-zinc-700 hover:bg-neutral-800/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-colors mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 border-t border-zinc-800/40 bg-zinc-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-zinc-900/80 text-cyan-400 border border-zinc-800 mb-3">
              Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Core Technologies
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              Categorized tools, frameworks, and embedded platforms I use to ship production-ready systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTechnologies.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 p-6 hover:bg-neutral-800/50 hover:border-zinc-700 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/70">
                    <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/30 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100 tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2.5 text-sm text-zinc-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-20 border-t border-zinc-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Featured Highlights
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse into some of my most impactful engineering and software projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Smart Blind Stick"
              description="An adaptive assistive mobility platform combining sensor-fused hardware with conditional edge-to-cloud AI."
              highlights={[
                { icon: Cpu, label: "Dual-Level ToF Ranging" },
                { icon: Eye, label: "Gemini + ONNX Vision" },
                { icon: Wifi, label: "GSM & RF Failover" }
              ]}
              tags={["ESP32-CAM", "ToF Sensors", "Hybrid AI (Gemini/ONNX)", "NRF24L01"]}
              link="/projects/sih"
            />
            <ProjectCard 
              title="SmartLab Safety System"
              description="A distributed, edge-computing IoT safety network featuring real-time RFID spatial accountability and zero-latency mitigation."
              highlights={[
                { icon: Zap, label: "Sub-200ms Actuation" },
                { icon: Wifi, label: "MQTT Edge Telemetry" },
                { icon: ShieldCheck, label: "RFID Spatial Tracking" }
              ]}
              tags={["ESP32", "MQTT / Mosquitto", "Raspberry Pi", "RC522 RFID"]}
              link="/projects/final-year"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;