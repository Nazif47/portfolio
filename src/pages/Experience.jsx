import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, X } from 'lucide-react';

const Experience = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  const partTimeTags = [
    'Full-Stack Web',
    'AI/LLM',
    'API Integrations',
    'Database Architecture',
    'Cloud Deployments',
    'Solution Design'
  ];

  const partTimeResponsibilities = [
    'Engineer and maintain AI-driven applications and end-to-end full-stack software solutions for enterprise customers.',
    'Manage complete technical lifecycles encompassing frontend interfaces, backend database architecture, API integrations, and cloud deployments.',
    'Lead technical client-facing initiatives, including requirement gathering, solution design demonstrations, and post-delivery troubleshooting.'
  ];

  const internshipTags = [
    'Backend Development',
    'API Integrations',
    'Zoho Books',
    'Data Synchronization',
    'AI/LLM'
  ];

  const internshipResponsibilities = [
    'Focused on robust backend software development and seamless enterprise API integrations.',
    'Spearheaded automated data synchronization workflows across business operations platforms.'
  ];

  return (
    <div className="w-full flex-grow pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Career Timeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Professional Experience
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
            Production full-stack engineering, enterprise ERP integrations, and AI automation pipelines.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {/* Top Card: Gulf Infotech Part-Time Role */}
          <div className="relative group">
            {/* Timeline Node Dot */}
            <span
              className="absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full border-2 border-teal-500 bg-zinc-50 dark:bg-zinc-950 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />

            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              {/* Timeline Header with Adaptive Brand Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/70 gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img 
                      src="/GulfInfotechLogos/gulf-infotech-logo-primary.svg" 
                      alt="Gulf Infotech" 
                      className="h-8 sm:h-10 w-auto object-contain block dark:hidden" 
                    />
                    <img 
                      src="/GulfInfotechLogos/gulf-infotech-logo-primary-white.svg" 
                      alt="Gulf Infotech" 
                      className="h-8 sm:h-10 w-auto object-contain hidden dark:block" 
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                      AI &amp; Full-Stack Developer
                    </h2>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                      Gulf Infotech FZCO - Part-Time
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                    July 2026 - Present
                  </span>
                  <span className="inline-flex items-center gap-1 px-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                    Remote
                  </span>
                </div>
              </div>

              {/* Key Contributions */}
              <ul className="space-y-3 mb-6">
                {partTimeResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60">
                {partTimeTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 text-xs px-3 py-1.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card: Gulf Infotech Internship Role */}
          <div className="relative group">
            {/* Timeline Node Dot */}
            <span
              className="absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full border-2 border-teal-500 bg-zinc-50 dark:bg-zinc-950 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />

            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              {/* Timeline Header with Adaptive Brand Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/70 gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img 
                      src="/GulfInfotechLogos/gulf-infotech-logo-primary.svg" 
                      alt="Gulf Infotech" 
                      className="h-8 sm:h-10 w-auto object-contain block dark:hidden" 
                    />
                    <img 
                      src="/GulfInfotechLogos/gulf-infotech-logo-primary-white.svg" 
                      alt="Gulf Infotech" 
                      className="h-8 sm:h-10 w-auto object-contain hidden dark:block" 
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                      AI &amp; Full-Stack Developer Intern
                    </h2>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                      Gulf Infotech FZCO - Internship
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                    April 2026 - May 2026
                  </span>
                  <span className="inline-flex items-center gap-1 px-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                    Remote
                  </span>
                </div>
              </div>

              {/* Key Contributions */}
              <ul className="space-y-3 mb-6">
                {internshipResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60">
                {internshipTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 text-xs px-3 py-1.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Internship Certificate Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsCertOpen(true)}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700/70 hover:border-teal-500/60 dark:hover:border-teal-400/60 hover:text-teal-600 dark:hover:text-teal-300 shadow-sm transition-all duration-300"
                >
                  <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
                  <span>View Internship Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Certificate Modal */}
      {isCertOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setIsCertOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Internship Certificate"
        >
          <button
            type="button"
            onClick={() => setIsCertOpen(false)}
            aria-label="Close certificate modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[60] inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 bg-zinc-900/60 hover:bg-zinc-900 text-white rounded-full backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <div
            className="w-full max-w-4xl h-[85dvh] bg-zinc-900 rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/Nazif_Internship_Certificate.pdf#toolbar=0"
              className="w-full h-full border-0"
              title="Internship Certificate"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Experience;
