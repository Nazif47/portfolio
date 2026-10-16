const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            About Me
          </h1>
        </div>
        
        <div className="space-y-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 shadow-sm transition-colors duration-300">
            <p className="mb-6">
              I am an Electronics and Communication Engineering (ECE) student, anticipating graduation in <span className="font-medium text-zinc-900 dark:text-zinc-200">2026</span>. My academic journey has instilled in me a deep understanding of core engineering principles, but my true passion lies at the intersection of hardware and software.
            </p>
            <p className="mb-6">
              I thrive on hardware-software integration—building systems where physical sensors and microcontrollers communicate seamlessly with cloud backends and responsive user interfaces. A testament to this is my hobby of creating and maintaining custom Discord administration bots, which taught me the nuances of real-time event handling, API rate limits, and community management automation.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">My Daily Routine</h3>
            <p>
              In my professional endeavors, discipline is key. My typical day involves rigorously managing complex codebases, pulling the latest Git changes to stay synced with the team, and crafting well-documented pull requests. I conclude each day by compiling and submitting detailed end-of-day reports to senior management, ensuring transparency and continuous momentum on all project deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
