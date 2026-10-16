import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import profilePic from '../assets/Nazif_Fromal_Image.png';

const Home = () => {
  const skills = [
    "React", "Node.js", "Python", "C++", 
    "Anthropic Claude API", "Google Cloud Console", 
    "Make.com Automation", "ESP32-CAM", "Arduino", "MQ2 gas sensors", "IoT"
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-zinc-100">
            Hi, I'm a Developer & Engineer
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl lg:text-2xl text-zinc-400 mx-auto font-light leading-relaxed">
            Electronics & Communication Engineer with a passion for building intelligent systems. 
            I specialize as an AI & Full Stack Developer, bridging the gap between hardware and modern web applications.
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

      {/* Skills Section */}
      <section className="py-20 border-t border-zinc-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-10">Technical Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-zinc-800/80 text-zinc-400 text-sm px-4 py-2 rounded-md hover:border-zinc-700 hover:text-zinc-200 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-20 border-t border-zinc-800/40 bg-zinc-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Featured Highlights</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">A glimpse into some of my most impactful engineering and software projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Smart Blind Stick"
              description="Adaptive multimodal sensing cane & smart goggles featuring dual-level ToF ranging (VL53L5CX/VL53L0X), conditional ESP32-CAM AI vision (Gemini API + local ONNX fallback), and GSM-to-RF emergency failover."
              tags={["ESP32-CAM", "ToF Sensors", "Hybrid AI (Gemini/ONNX)", "NRF24L01"]}
              link="/projects/sih"
            />
            <ProjectCard 
              title="Aura-x9 IoT Lab Safety Network"
              description="Decentralized 4-zone ESP32 edge telemetry network with MQTT Mosquitto broker on Raspberry Pi, correlating MQ-2/DHT22 environmental hazards with RC522 RFID accountability for sub-200ms industrial relay mitigation."
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