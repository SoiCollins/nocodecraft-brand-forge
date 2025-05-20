
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-teal-100 opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-navy-100 opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
            We craft exceptional <span className="text-teal-500">no-code</span> experiences
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            NocodeCraft creates beautiful, functional digital products that solve real problems. 
            We blend strategic design with powerful no-code solutions to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">View Our Work</Button>
            <Button variant="outline" size="lg">Our Services</Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">8+</p>
              <p className="text-slate-500">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">15+</p>
              <p className="text-slate-500">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">5+</p>
              <p className="text-slate-500">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">99%</p>
              <p className="text-slate-500">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-slate-500 mb-2 text-sm">Scroll Down</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
