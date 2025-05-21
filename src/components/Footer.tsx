
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              <span className="text-white">Nocode</span>
              <span className="text-teal-400">Craft</span>
            </h3>
            <p className="mb-6">
              Creating exceptional no-code experiences for modern businesses, with a focus on design, functionality, and user experience.
            </p>
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
