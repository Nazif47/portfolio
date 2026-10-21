import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, X } from 'lucide-react';

const UNIVERSITY_RECOGNITION = {
  id: 'letter-of-appreciation',
  title: 'My Recognition by my University',
  description:
    'Led a comprehensive 2-day workshop on "Line-Follower Robots using Arduino Nano" as a designated Resource Person for the university. The program featured in-depth technical lectures followed by an interactive, hands-on session where students successfully built, programmed via the Arduino IDE, and tested their own line-following robots from scratch.',
  image: '/certificates/LetterOfAppreciation.png',
  logo: '/certificates/ACUlogoWithName.png',
  logoAlt: 'Adichunchanagiri University',
  isSplitView: true
};

const RAW_CERTIFICATES = [
  {
    id: 'siddhartha-arduinothon',
    title: 'Arduinothon 3.0 — 24-Hour National Level Competition',
    image: '/certificates/SiddharthaArduinothon.png',
    logo: '/certificates/SiddharthaLogo.png',
    logoAlt: 'Sri Siddhartha Academy of Higher Education',
    sortTimestamp: '2025-11-11'
  },
  {
    id: 'sih-2025-internal',
    title: 'SIH 2025 Internal Hackathon — 1st Place Winner',
    image: '/certificates/SIHinternalHackathon.png',
    logo: '/certificates/SIHlogo.png',
    logoAlt: 'Smart India Hackathon',
    sortTimestamp: '2025-09-26'
  },
  {
    id: 'hack-4-hostel',
    title: 'Hack 4 Hostel Hackathon — 3rd Place Winner',
    image: '/certificates/Hack4HostelHackathon.png',
    logo: '/certificates/ACUlogoWithName.png',
    logoAlt: 'Adichunchanagiri University',
    sortTimestamp: '2025-09-09'
  },
  {
    id: 'jyothy-robothon',
    title: 'National Level Robothon — e-Yantra Lab',
    image: '/certificates/JyothyRobothon.png',
    logo: '/certificates/Jyothy-ITlogo.png',
    logoAlt: 'Jyothy Institute of Technology',
    sortTimestamp: '2025-05-09'
  },
  {
    id: 'ignitex-hackathon',
    title: 'IGNITEX 24-Hour National Level Hardware Hackathon — 3rd Place',
    image: '/certificates/IgnitexHackathon.png',
    logo: '/certificates/ACUlogoWithName.png',
    logoAlt: 'Adichunchanagiri University',
    sortTimestamp: '2025-04-30'
  },
  {
    id: 'advaya-hackathon',
    title: 'ADVAYA — 24-Hour National Level Hackathon',
    image: '/certificates/Advaya.png',
    logo: '/certificates/ACUlogoWithName.png',
    logoAlt: 'Adichunchanagiri University',
    sortTimestamp: '2025-04-12'
  },
  {
    id: 'bgsit-ideathon',
    title: 'BGSIT ECE Ideathon — 1st Prize Winner',
    image: '/certificates/Ideathon.png',
    logo: '/certificates/ACUlogoWithName.png',
    logoAlt: 'Adichunchanagiri University',
    sortTimestamp: '2024-12-11'
  },
  {
    id: 'sih-2024-internal',
    title: 'SIH 2024 Internal Hackathon — 1st Prize Winner',
    image: '/certificates/SIH2024Winner.png',
    logo: '/certificates/SIHlogo.png',
    logoAlt: 'Smart India Hackathon',
    sortTimestamp: '2024-09-10'
  },
  {
    id: 'national-software-hackathon',
    title: 'National Level Software Hackathon — 3rd Prize Winner',
    image: '/certificates/SoftwareHackathon.jpg',
    logo: '/certificates/ACUlogoWithName.png',
    logoAlt: 'Adichunchanagiri University',
    sortTimestamp: '2024-06-12'
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const sortedCertificates = useMemo(() => {
    return [...RAW_CERTIFICATES]
      .filter((item) => !item.image.includes('SIHwinningCertificate.png'))
      .sort((a, b) => new Date(b.sortTimestamp).getTime() - new Date(a.sortTimestamp).getTime());
  }, []);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <div className="w-full flex-grow pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/#hackathons"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Honors &amp; Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Awards &amp; Certifications
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
            Verified recognitions across national hardware buildathons, software sprints, and inter-university engineering competitions.
          </p>
        </div>

        {/* Visual Separator with Theme-Matching Star SVG */}
        <div className="flex items-center justify-center gap-4 my-8" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/40 to-teal-500/60 dark:via-teal-400/30 dark:to-teal-400/50" />
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/30 dark:border-teal-400/30 text-teal-600 dark:text-teal-400 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2l2.92 6.26L22 9.27l-5.12 4.73L18.18 21 12 17.52 5.82 21l1.3-7-5.12-4.73 7.08-1.01L12 2z" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-teal-500/40 to-teal-500/60 dark:via-teal-400/30 dark:to-teal-400/50" />
        </div>

        {/* Highlighted University Recognition Card */}
        <div className="mb-12">
          <div
            onClick={() => setSelectedCert(UNIVERSITY_RECOGNITION)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCert(UNIVERSITY_RECOGNITION);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View certificate for ${UNIVERSITY_RECOGNITION.title}`}
            className="relative group w-full h-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-teal-500/[0.08] via-white/95 to-cyan-500/[0.08] dark:from-teal-500/[0.12] dark:via-zinc-900/85 dark:to-cyan-500/[0.10] backdrop-blur-md border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500 dark:hover:border-teal-400 ring-1 ring-teal-500/15 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left overflow-hidden"
          >
            {/* Subtle Ambient Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/[0.1] via-transparent to-cyan-500/[0.1] opacity-75 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Left: Letter of Appreciation Preview Image */}
            <div className="relative z-10 w-full md:w-64 lg:w-72 aspect-[16/11] shrink-0 overflow-hidden rounded-xl border border-teal-500/30 dark:border-teal-400/30 bg-zinc-100 dark:bg-zinc-950">
              <img
                src={UNIVERSITY_RECOGNITION.image}
                alt={UNIVERSITY_RECOGNITION.title}
                loading="eager"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Center: Highlighted Title */}
            <div className="relative z-10 flex-1 min-w-0 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30 mb-3">
                Featured Recognition
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors leading-snug">
                {UNIVERSITY_RECOGNITION.title}
              </h2>
            </div>

            {/* Right: University Logo */}
            <div className="relative z-10 shrink-0 flex items-center justify-center bg-transparent">
              <img
                src={UNIVERSITY_RECOGNITION.logo}
                alt={UNIVERSITY_RECOGNITION.logoAlt}
                loading="eager"
                className="max-h-16 md:max-h-24 w-auto max-w-[120px] md:max-w-[200px] object-contain bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Vertical List of Certificate Cards */}
        <div className="flex flex-col space-y-6">
          {sortedCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View certificate for ${cert.title}`}
              className="relative group w-full h-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left overflow-hidden"
            >
              {/* Subtle Hover Gradient Glow matching ProjectCard */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/[0.06] via-transparent to-cyan-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Left: Certificate Preview Image */}
              <div className="relative z-10 w-full md:w-64 lg:w-72 aspect-[16/11] shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Center: Generated Title Text */}
              <div className="relative z-10 flex-1 min-w-0 text-center md:text-left">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                  {cert.title}
                </h2>
              </div>

              {/* Right: Corresponding Event or University Logo */}
              <div className="relative z-10 shrink-0 flex items-center justify-center bg-transparent">
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  loading="lazy"
                  className="max-h-16 md:max-h-24 w-auto max-w-[120px] md:max-w-[200px] object-contain bg-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Pop-Up Modal */}
      {selectedCert && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate modal"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 bg-zinc-900/75 hover:bg-zinc-900 text-white rounded-full backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {selectedCert.isSplitView ? (
            <div
              className="relative max-w-6xl w-full max-h-[90dvh] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 p-6 sm:p-8 md:p-10 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Formatted Title & Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                  My Recognition by my University
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal text-zinc-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Right Side: Letter of Appreciation Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[75dvh] object-contain rounded-xl border border-zinc-800 shadow-xl bg-white"
                />
              </div>
            </div>
          ) : (
            <div
              className="relative max-w-5xl w-full max-h-[90dvh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[78dvh] object-contain rounded-2xl shadow-2xl border border-zinc-800 bg-zinc-950"
              />

              <p className="text-white text-xl md:text-2xl font-medium mt-6 text-center">
                {selectedCert.title}
              </p>
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
};

export default Certifications;
