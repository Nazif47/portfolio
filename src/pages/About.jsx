import { Cpu, Briefcase, Gamepad2, Sparkles, GraduationCap, MapPin, Terminal } from 'lucide-react';

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
    src: '/images/LabSafety_WorkingPrototype.jpg',
    alt: 'Hardware prototyping and embedded systems workbench',
    tag: '01 // THE METAL',
    caption: 'Embedded Systems & Sensor Fusion Lab',
    spanClass: 'sm:col-span-2 aspect-[16/10]',
    positionClass: 'object-center',
    fallback: createPlaceholderDataUri('Embedded Hardware Workbench', '01 // THE METAL · ECE', '#14b8a6')
  },
  {
    src: '/images/Nazif_Fromal_Image.png',
    alt: 'Full-stack engineering and AI workflow architecture',
    hideOverlay: true,
    spanClass: 'sm:col-span-1 aspect-[4/5]',
    positionClass: 'object-top',
    fallback: createPlaceholderDataUri('AI & Full-Stack Dev', '02 // GULF INFOTECH', '#0ea5e9')
  },
  {
    src: '/images/assistive-mobility.png',
    alt: 'Smart India Hackathon and field testing prototypes',
    tag: '03 // FIELD TESTING',
    caption: 'Assistive Mobility & IoT Prototypes',
    spanClass: 'sm:col-span-1 aspect-[4/5]',
    positionClass: 'object-center',
    fallback: createPlaceholderDataUri('IoT Field Prototypes', '03 // EDGE TO CLOUD', '#14b8a6')
  },
  {
    src: '/images/discord-bot.png',
    alt: 'Discord bot architecture and community management',
    tag: '04 // BEYOND CODE',
    caption: 'Discord Bot Ops & Gaming Communities',
    spanClass: 'sm:col-span-2 aspect-[16/9]',
    positionClass: 'object-center',
    fallback: createPlaceholderDataUri('Discord Bots & Community Ops', '04 // BEYOND THE CODE', '#38bdf8')
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
            An engineer shaped by circuit boards, real-time production web apps, and the unexpected lessons of running large-scale gaming communities.
          </p>
        </div>

        {/* Main 2-Column Desktop Grid: Story Cards (Left) + Bento Photo Grid (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1: The Foundation */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Cpu className="w-4 h-4" />
                  01 // The Foundation
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

            {/* Card 2: The Present */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <Briefcase className="w-4 h-4" />
                  02 // The Present
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

            {/* Card 3: Beyond the Code */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <Gamepad2 className="w-4 h-4" />
                  03 // Beyond the Code
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                  <Terminal className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Discord API &amp; Bots
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Clash of Clans &amp; Accidental Distributed Systems
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                When I&apos;m not architecting cloud-to-edge solutions, you&apos;ll usually find me managing <span className="font-medium text-zinc-900 dark:text-zinc-100">Clash of Clans gaming communities</span>. Coordinating war schedules and player rosters across time zones is actually where I first learned the nuances of real-time event handling, asynchronous state, and <span className="font-medium text-zinc-900 dark:text-zinc-100">API rate limits</span>—by building and maintaining custom Discord administration bots from scratch to automate community operations.
              </p>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photoGalleryItems.map((photo, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-100 dark:bg-zinc-950/60 shadow-sm ${photo.spanClass}`}
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
                    className={`w-full h-full object-cover ${photo.positionClass || 'object-center'} rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out`}
                  />
                  {!photo.hideOverlay && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 inset-x-0 p-3.5 pointer-events-none">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-teal-300">
                          {photo.tag}
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-white truncate">
                          {photo.caption}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
