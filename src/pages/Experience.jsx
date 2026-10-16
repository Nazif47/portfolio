import ProjectCard from '../components/ProjectCard';

const Experience = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Professional Experience
          </h1>
        </div>

        <ProjectCard 
          title="AI & Full Stack Developer Intern"
          description="Gulf Infotech FZCO (Remote, April 2026 - May 2026). Focused on robust backend software development and creating seamless API integrations. Spearheaded data synchronization workflows for various business operations platforms, including Zoho Books. Additionally, contributed heavily to AI-driven application development, leveraging modern LLMs to automate complex business logic and enhance user productivity."
          tags={["Backend Development", "API Integrations", "Zoho Books", "Data Synchronization", "AI/LLM"]}
        />
      </div>
    </div>
  );
};

export default Experience;
