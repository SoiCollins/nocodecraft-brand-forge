
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      title: "Website Design & Development",
      description: "Beautiful, functional websites built with modern no-code tools that deliver exceptional user experiences."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
          <path d="m15 5 4 4"></path>
        </svg>
      ),
      title: "UI/UX Design",
      description: "User-centered design that focuses on intuitive interfaces, seamless experiences, and beautiful aesthetics."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="M5 12h14"></path>
        </svg>
      ),
      title: "App Development",
      description: "Custom application development using no-code platforms that solve complex business challenges."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="8" x="2" y="2" rx="2"></rect>
          <rect width="8" height="8" x="14" y="2" rx="2"></rect>
          <rect width="8" height="8" x="2" y="14" rx="2"></rect>
          <rect width="8" height="8" x="14" y="14" rx="2"></rect>
        </svg>
      ),
      title: "Automation Solutions",
      description: "Streamline your business operations with custom automation workflows that save time and reduce errors."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-9"></path>
          <path d="M14 17H5"></path>
          <circle cx="17" cy="17" r="3"></circle>
          <circle cx="7" cy="7" r="3"></circle>
        </svg>
      ),
      title: "Integration Services",
      description: "Seamless integration between different platforms and tools to create cohesive digital ecosystems."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"></path>
          <path d="M8 16h12"></path>
          <path d="M12 12h8"></path>
          <path d="M16 8h4"></path>
        </svg>
      ),
      title: "Content Strategy",
      description: "Strategic content planning and development to engage your audience and drive meaningful conversions."
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">
            We offer comprehensive no-code solutions to bring your digital ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
