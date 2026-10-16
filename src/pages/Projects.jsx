import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/80 text-zinc-300 border border-zinc-800 mb-4">
            Hardware-Software Systems &amp; Edge AI
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">
            Project Directory
          </h1>
          <p className="mt-4 text-zinc-400 max-w-2xl text-lg font-light">
            A deep dive into my flagship embedded systems, distributed IoT telemetry, and hybrid edge-cloud AI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SIH Project: Smart Blind Stick */}
          <div className="h-full flex flex-col">
            <ProjectCard
              title="SIH Project: Smart Blind Stick"
              description="An adaptive multimodal assistive mobility platform featuring dual-level Time-of-Flight (VL53L5CX foot + VL53L0X/Arduino Nano head interrupt) sensing, MPU6050 tilt tracking, conditional ESP32-CAM vision activation, a hybrid Gemini Cloud to local ONNX AI pipeline, and SIM800L GSM to NRF24L01 RF emergency failover."
              tags={[
                'ESP32 & ESP32-CAM',
                'VL53L5CX / VL53L0X ToF',
                'Gemini API + Local ONNX',
                'GSM & NRF24L01 Failover',
                'MPU6050 IMU'
              ]}
              link="/projects/sih"
            />
            <div className="mt-4 text-right">
              <Link
                to="/projects/sih"
                className="text-zinc-400 hover:text-zinc-100 font-medium text-sm inline-flex items-center transition-colors"
              >
                Read full case study
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Final Year Project: Aura-x9 IoT Lab Safety Network */}
          <div className="h-full flex flex-col">
            <ProjectCard
              title="Final Year Project: Aura-x9 IoT Lab Safety Network"
              description="A scalable, distributed 4-zone laboratory safety and forensic accountability network utilizing custom ESP32 edge nodes (MQ-2, DHT22, PIR, RC522 RFID) streaming MQTT telemetry to a central Raspberry Pi Eclipse Mosquitto broker for sub-200ms industrial relay actuation and live WebSockets visualization."
              tags={[
                'ESP32 Edge Nodes',
                'MQTT & Mosquitto',
                'Raspberry Pi',
                'RC522 RFID Accountability',
                'Sub-200ms Actuation'
              ]}
              link="/projects/final-year"
            />
            <div className="mt-4 text-right">
              <Link
                to="/projects/final-year"
                className="text-zinc-400 hover:text-zinc-100 font-medium text-sm inline-flex items-center transition-colors"
              >
                Read full case study
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
