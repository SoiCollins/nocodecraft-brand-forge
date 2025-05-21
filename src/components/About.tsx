
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-navy-950 text-white">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About NocodeCraft</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              NocodeCraft is a premier no-code agency founded in 2020 by a team of designers, developers, 
              and strategists passionate about creating exceptional digital experiences without traditional coding.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We believe in the power of no-code tools to democratize software creation and empower businesses of all sizes 
              to bring their digital visions to life quickly, efficiently, and beautifully.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-teal-400 mb-2">Our Mission</h4>
                <p className="text-slate-300">
                  To empower businesses with beautiful digital solutions that drive growth and success.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-400 mb-2">Our Vision</h4>
                <p className="text-slate-300">
                  To revolutionize digital creation through accessible, powerful no-code solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-800 to-navy-500 opacity-80"></div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80" 
                alt="NocodeCraft Team" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="text-6xl font-bold text-white mb-4">4+</span>
                <p className="text-2xl text-white font-medium">Years of Excellence</p>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-md bg-teal-500 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-md border-4 border-navy-700 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
