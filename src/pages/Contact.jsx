import { useState } from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name.trim() || 'Website Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim() || 'N/A'}\nEmail: ${email.trim() || 'N/A'}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:nazif.h45@gmail.com?subject=${subject}&body=${body}`;
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 focus-visible:ring-2 focus-visible:ring-teal-500/40 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 focus-visible:ring-2 focus-visible:ring-teal-500/40 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 focus:border-zinc-500 focus:ring-0 focus-visible:ring-2 focus-visible:ring-teal-500/40 rounded-lg px-4 py-3 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none outline-none"
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
                  <GitHubIcon className="w-6 h-6" />
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
                  <LinkedInIcon className="w-6 h-6" />
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
                  <Mail className="w-6 h-6" aria-hidden="true" />
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
