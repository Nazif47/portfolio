import { Link } from 'react-router-dom';
import { Cpu, Briefcase, Gamepad2, Sparkles, GraduationCap, MapPin } from 'lucide-react';

const createPlaceholderDataUri = (label, sublabel, accentHex) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181b" />
        <stop offset="100%" stop-color="#09090b" />
      </linearGradient>
      <radialGradient id="glow" cx="75%" cy="25%" r="60%">
        <stop offset="0%" stop-color="${accentHex}" stop-opacity="0.22" />
        <stop offset="100%" stop-color="${accentHex}" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#3f3f46" opacity="0.55" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#bg)" />
    <rect width="800" height="600" fill="url(#glow)" />
    <rect width="800" height="600" fill="url(#dots)" />
    <rect x="40" y="40" width="720" height="520" rx="20" fill="none" stroke="#27272a" stroke-width="1.5" />
    <text x="72" y="488" fill="${accentHex}" font-family="monospace" font-size="15" font-weight="600" letter-spacing="2">${sublabel}</text>
    <text x="72" y="524" fill="#f4f4f5" font-family="sans-serif" font-size="26" font-weight="700">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const photoGalleryItems = [
  {
    src: '/images/labsafety-working-prototype.jpg',
    alt: 'Hardware prototyping and embedded systems workbench',
    caption: 'Embedded Systems & Sensor Fusion Lab',
    fallback: createPlaceholderDataUri('Embedded Hardware Workbench', 'ECE · HARDWARE LAB', '#14b8a6')
  },
  {
    src: '/images/nazif-formal-image.png',
    alt: 'Full-stack engineering and AI workflow architecture',
    caption: 'Nazif Gangawali',
    fallback: createPlaceholderDataUri('AI & Full-Stack Dev', 'GULF INFOTECH', '#0ea5e9')
  },
  {
    src: '/images/assistive-mobility.png',
    alt: 'Smart India Hackathon and field testing prototypes',
    caption: 'Assistive Mobility Hardware Prototype',
    fallback: createPlaceholderDataUri('IoT Field Prototypes', 'EDGE TO CLOUD', '#14b8a6')
  }
];

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Story Behind the Systems</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
            Where Silicon Meets Software.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            An engineer shaped by circuit boards, real-time production web apps, and the architecture of high-concurrency community platforms.
          </p>
        </div>

        {/* Main 2-Column Desktop Grid: Story Cards (Left) + Bento Photo Grid (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1: Academic Roots */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Cpu className="w-4 h-4" />
                  Academic Roots
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  B.Tech ECE &apos;26
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Appreciating &ldquo;The Metal&rdquo;
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                I graduated with a <span className="font-medium text-zinc-900 dark:text-zinc-100">B.Tech in Electronics and Communication Engineering in August 2026</span>. Spending four years immersed in signal processing, microcontrollers, and circuit design instilled in me a deep appreciation for &ldquo;the metal&rdquo;—understanding how electrons, sensors, and interrupts actually behave under real-world constraints. Yet early on, I realized my true passion lies right at the intersection of hardware and software: giving physical edge devices a voice through intelligent cloud backends and clean, modern interfaces.
              </p>
            </div>

            {/* Card 2: Professional Experience */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <Briefcase className="w-4 h-4" />
                  Professional Experience
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  Gulf Infotech
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Engineering Production AI &amp; Web Systems
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                After completing a successful internship, I transitioned into my current role as a part-time <span className="font-medium text-zinc-900 dark:text-zinc-100">AI and Full-Stack Developer at Gulf Infotech</span>. Today, I spend my time architecting and shipping robust web applications alongside intelligent automation pipelines—turning complex operational workflows and LLM capabilities into reliable, high-performance tools that teams depend on every day.
              </p>
            </div>

            {/* Card 3: Community & Bot Architecture */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Gamepad2 className="w-4 h-4" />
                  Community &amp; Bot Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                  <svg
                    viewBox="0 0 127.14 96.36"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-3.5 h-3.5 shrink-0"
                  >
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                  Discord Dev
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Scalable Server &amp; Custom Bot Engineering
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                When I&apos;m not architecting cloud-to-edge solutions, I focus on developing scalable Discord servers and custom administration bots. Managing complex server architectures taught me the nuances of real-time event handling, asynchronous state, and API rate limits.
              </p>
              <Link
                to="/projects/discord-bots"
                className="mt-4 inline-block font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Explore Custom Bots →
              </Link>
            </div>
          </div>

          {/* Right Column: Bento-Style Photo Grid */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-5 sm:p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
                  Visual Snapshots
                </span>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Lab, Desk &amp; Beyond
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                4 Frames
              </span>
            </div>

            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {photoGalleryItems.map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden group break-inside-avoid rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-100 dark:bg-zinc-800/50 shadow-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="eager"
                    onError={(e) => {
                      if (e.currentTarget.src !== photo.fallback) {
                        e.currentTarget.src = photo.fallback;
                      }
                    }}
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                    <p className="text-sm font-medium text-white shadow-sm">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Frame 4: Official Discord Branding Card */}
              <div className="group relative overflow-hidden break-inside-avoid rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-100 dark:bg-zinc-800/50 shadow-sm h-48 flex flex-col items-center justify-center p-6 text-center">
                <svg
                  viewBox="0 0 127.14 96.36"
                  fill="currentColor"
                  aria-label="Discord Official Logo"
                  className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
                <span className="relative z-10 mt-3 text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Discord - Developing Custom Bots
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
