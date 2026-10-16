import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, link }) => {
  const isExternal = link && (link.startsWith('http') || link.startsWith('mailto:'));

  const linkContent = (
    <>
      View Details
      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </>
  );

  return (
    <div className="relative group rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/60 shadow-sm hover:shadow-xl">
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">{title}</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base flex-grow">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-zinc-900 border border-zinc-800/80 text-zinc-400 text-xs px-3 py-1.5 rounded-md transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          {link && isExternal && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {linkContent}
            </a>
          )}
          {link && !isExternal && (
            <Link
              to={link}
              className="inline-flex items-center text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {linkContent}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
