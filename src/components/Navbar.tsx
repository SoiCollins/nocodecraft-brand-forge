
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-2xl font-display font-bold text-navy-900">
            <span className="text-navy-800">Nocode</span>
            <span className="text-teal-500">Craft</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-600 hover:text-navy-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="md">Get in Touch</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-navy-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-navy-900 transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-full'}`}></span>
            <span className={`h-0.5 w-full bg-navy-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-width py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-medium text-slate-600 hover:text-navy-800 py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="md" className="w-full">Get in Touch</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
