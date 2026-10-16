import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Get In Touch
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-lg font-light">
            Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 shadow-sm transition-colors duration-300">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:nazif.h45@gmail.com';
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 font-medium px-5 py-2.5 rounded-lg dark:hover:bg-white transition-all shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <a 
              href="https://github.com/Nazif47" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">GitHub</h3>
                  <p className="text-zinc-500 text-sm">Check out my repositories</p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/nazif-hussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">LinkedIn</h3>
                  <p className="text-zinc-500 text-sm">Connect with me professionally</p>
                </div>
              </div>
            </a>

            <a 
              href="mailto:nazif.h45@gmail.com" 
              className="block bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">Email</h3>
                  <p className="text-zinc-500 text-sm">Send me a direct email</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
