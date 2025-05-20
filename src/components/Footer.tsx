
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              <span className="text-white">Nocode</span>
              <span className="text-teal-400">Craft</span>
            </h3>
            <p className="mb-6">
              Creating exceptional no-code experiences for modern businesses, with a focus on design, functionality, and user experience.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Website Design',
                'No-Code Development',
                'UI/UX Design',
                'App Development',
                'Automation',
                'SEO & Marketing',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '#about' },
                { name: 'Portfolio', link: '#portfolio' },
                { name: 'Careers', link: '#' },
                { name: 'Contact', link: '#contact' },
                { name: 'Privacy Policy', link: '#' },
                { name: 'Terms of Service', link: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Subscribe</h4>
            <p className="mb-4">
              Stay updated with our latest news and projects.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-navy-800 rounded-l-md border border-navy-700 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
              <button
                type="submit"
                className="bg-teal-500 text-navy-900 px-4 py-2 rounded-r-md hover:bg-teal-400 transition-colors"
              >
                <span className="sr-only">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 14 0"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} NocodeCraft. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
