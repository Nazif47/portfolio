import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({
  title,
  badge,
  description,
  highlights = [],
  tags = [],
  link,
  ctaText = 'View Architecture'
}) => {
  const isExternal = link && (link.startsWith('http') || link.startsWith('mailto:'));

  const cardInner = (
    <>
      {/* Subtle Hover Gradient Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/[0.06] via-transparent to-cyan-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-zinc-300/60 dark:from-zinc-700/40 via-teal-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {badge && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
              {badge}
            </span>
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors mb-2.5">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Key Highlights List */}
        {highlights && highlights.length > 0 && (
          <div className="mb-6 space-y-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/70 p-4 group-hover:bg-white dark:group-hover:bg-zinc-950/70 transition-colors">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
              Key Highlights
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-zinc-800 dark:text-zinc-200"
                  >
                    {IconComponent && (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-teal-600 dark:text-teal-400 group-hover:border-teal-500/30 group-hover:bg-teal-500/10 transition-colors">
                        <IconComponent className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Technology Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-neutral-800/50 border border-zinc-200 dark:border-neutral-700/40 text-xs px-3 py-1.5 rounded-md transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-neutral-800 group-hover:border-zinc-300 dark:group-hover:border-neutral-700 group-hover:text-zinc-800 dark:group-hover:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Single Elegant CTA Footer */}
        {link && (
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/60 mt-auto flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </>
  );

  const containerClasses =
    'relative group block h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700/90 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:shadow-xl';

  if (link && isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
      >
        {cardInner}
      </a>
    );
  }

  if (link && !isExternal) {
    return (
      <Link to={link} className={containerClasses}>
        {cardInner}
      </Link>
    );
  }

  return <div className={containerClasses}>{cardInner}</div>;
};

export default ProjectCard;
