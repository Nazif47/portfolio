import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full pb-safe px-safe border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 text-zinc-900 dark:text-zinc-100 backdrop-blur-md mt-auto transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            &copy; 2026 Nazif. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://github.com/Nazif47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazif-hussain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:nazif.h45@gmail.com"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
