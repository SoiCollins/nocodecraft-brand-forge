
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-teal-100 opacity-60 blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-navy-100 opacity-50 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-navy-50 opacity-30 blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTE4MjciIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptNiAwaDF2NGgtMXYtNHptMiAyaDR2MWgtNHYtMXptLTE3IDNoMXY0aC0xdi00em0yaDF2NGgtMXYtNHptMiAwaDF2NGgtMXYtNHptMiAxaDR2MWgtNHYtMXptLTYtOGg0djFoLTR2LTF6bTIgMmgxdjRoLTF2LTR6bTIgMGgxdjRoLTF2LTR6bTIgMmg0djFoLTR2LTF6bS0xNyAzaDR2MWgtNHYtMXptMCAyaDF2NGgtMXYtNHptMiAwaDF2NGgtMXYtNHptMiAwaDF2NGgtMXYtNHptMiAxaDR2MWgtNHYtMXptLTggMmg0djFoLTR2LTF6bTIgMmgxdjRoLTF2LTR6bTIgMGgxdjRoLTF2LTR6bTIgMmg0djFoLTR2LTF6bS0xNyAzaDR2MWgtNHYtMXptMCAyaDF2NGgtMXYtNHptMiAwaDF2NGgtMXYtNHptMiAwaDF2NGgtMXYtNHptMiAxaDR2MWgtNHYtMXptLTggM2gxdjRoLTF2LTR6bTIgMGgxdjRoLTF2LTR6bTIgMGgxdjRoLTF2LTR6bTIgMWg0djFoLTR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl animate-slide-in">
          <span className="inline-block px-4 py-1 rounded-full bg-navy-800 text-white text-sm font-medium mb-6">Premium No-Code Agency</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
            We craft exceptional <span className="gradient-text">no-code</span> experiences
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            NocodeCraft creates beautiful, functional digital products that solve real problems. 
            We blend strategic design with powerful no-code solutions to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button size="lg" className="group">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">Our Services</Button>
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 pt-10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">8+</p>
              <p className="text-slate-500 mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">15+</p>
              <p className="text-slate-500 mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">5+</p>
              <p className="text-slate-500 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">99%</p>
              <p className="text-slate-500 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
