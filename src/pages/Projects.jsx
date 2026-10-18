import { Cpu, Eye, Wifi, Zap, ShieldCheck } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Blind Stick',
      badge: 'SIH Flagship Project',
      description:
        'An adaptive assistive mobility platform combining sensor-fused hardware with conditional edge-to-cloud AI.',
      highlights: [
        { icon: Cpu, label: 'Dual-Level ToF Ranging' },
        { icon: Eye, label: 'Gemini + ONNX Vision' },
        { icon: Wifi, label: 'GSM & RF Failover' }
      ],
      tags: [
        'ESP32 & ESP32-CAM',
        'VL53L5CX / VL53L0X ToF',
        'Gemini API + Local ONNX',
        'GSM & NRF24L01 Failover',
        'MPU6050 IMU'
      ],
      link: '/projects/sih'
    },
    {
      title: 'SmartLab Safety System',
      badge: 'Final Year Project',
      description:
        'A distributed, edge-computing IoT safety network featuring real-time RFID spatial accountability and zero-latency mitigation.',
      highlights: [
        { icon: Zap, label: 'Sub-200ms Actuation' },
        { icon: Wifi, label: 'MQTT Edge Telemetry' },
        { icon: ShieldCheck, label: 'RFID Spatial Tracking' }
      ],
      tags: [
        'ESP32 Edge Nodes',
        'MQTT & Mosquitto',
        'Raspberry Pi',
        'RC522 RFID Accountability',
        'Sub-200ms Actuation'
      ],
      link: '/projects/final-year'
    }
  ];

  return (
    <div className="w-full pt-24 pb-16 min-h-[100dvh]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200/70 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 mb-4">
            Hardware-Software Systems &amp; Edge AI
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Project Directory
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg font-light">
            A deep dive into my flagship embedded systems, distributed IoT telemetry, and hybrid edge-cloud AI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.link}
              title={project.title}
              badge={project.badge}
              description={project.description}
              highlights={project.highlights}
              tags={project.tags}
              link={project.link}
              ctaText="View Architecture"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
