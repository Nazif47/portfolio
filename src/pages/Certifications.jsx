import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, X } from 'lucide-react';

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
    title: 'SIH 2024 Internal Hackathon',
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
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800/70 pb-8">
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

        {/* Vertical List of Certificate Cards */}
        <div className="flex flex-col space-y-5">
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
              className="group w-full flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 hover:border-teal-500/60 dark:hover:border-teal-400/60 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer text-left"
            >
              {/* Left: Certificate Preview Image */}
              <div className="w-full sm:w-48 md:w-56 aspect-[16/11] shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Center: Generated Title Text */}
              <div className="flex-1 min-w-0 text-center sm:text-left px-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                  {cert.title}
                </h2>
              </div>

              {/* Right: Corresponding Event or University Logo */}
              <div className="shrink-0 flex items-center justify-center w-36 sm:w-44 h-16 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-white/95 border border-zinc-200/80 dark:border-zinc-700/60 shadow-xs">
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  loading="lazy"
                  className="max-h-11 max-w-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Pop-Up Modal */}
      {selectedCert && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[60] inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 bg-zinc-900/75 hover:bg-zinc-900 text-white rounded-full backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90dvh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[88dvh] object-contain"
            />

            {/* Overlaid Title Text on Top of Pop-Up Image */}
            <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-sm px-5 py-4 border-t border-white/10">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-white text-center drop-shadow-sm">
                {selectedCert.title}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Certifications;
