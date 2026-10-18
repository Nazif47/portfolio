import { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, X } from 'lucide-react';

const Experience = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  const tags = [
    'Backend Development',
    'API Integrations',
    'Zoho Books',
    'Data Synchronization',
    'AI/LLM',
    'Full-Stack Web'
  ];

  const responsibilities = [
    'Transitioned from AI & Full-Stack Developer Intern (April 2026 – May 2026) into a part-time AI & Full-Stack Developer role supporting production business systems.',
    'Spearheaded automated data synchronization workflows and REST API integrations across enterprise operations platforms, including Zoho Books.',
    'Architected and deployed AI-driven internal tools and LLM workflows to automate complex business logic and accelerate team productivity.'
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Career Timeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Professional Experience
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
            Production full-stack engineering, enterprise ERP integrations, and AI automation pipelines.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {/* Timeline Entry: Gulf Infotech */}
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
                    <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                      AI &amp; Full-Stack Developer
                    </h2>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                      Gulf Infotech FZCO · Part-Time &amp; Internship
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                    April 2026 – Present
                  </span>
                  <span className="inline-flex items-center gap-1 px-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                    Remote
                  </span>
                </div>
              </div>

              {/* Description & Key Contributions */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
                Focused on robust backend software development, full-stack web interfaces, and seamless enterprise API integrations—bridging LLM capabilities with day-to-day operational pipelines.
              </p>

              <ul className="space-y-3 mb-6">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60">
                {tags.map((tag) => (
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700/70 hover:border-teal-500/60 dark:hover:border-teal-400/60 hover:text-teal-600 dark:hover:text-teal-300 shadow-sm transition-all duration-300"
                >
                  <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span>View Internship Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Certificate Modal */}
      {isCertOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setIsCertOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Internship Certificate"
        >
          <div
            className="w-full max-w-4xl h-[85vh] bg-zinc-900 rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              aria-label="Close certificate modal"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700 transition-colors shadow-md"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <iframe
              src="/Nazif_Internship_Certificate.pdf"
              className="w-full h-full border-0"
              title="Internship Certificate"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
