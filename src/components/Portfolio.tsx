
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Fence Finance",
      description: "Financial tools and resources platform with intuitive user interface",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://www.fence.finance",
      tags: ["Fintech", "Dashboard", "Web App"],
      category: "finance"
    },
    {
      title: "Koncile.ai",
      description: "AI-powered business intelligence platform with powerful analytics",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://www.koncile.ai",
      tags: ["AI", "Analytics", "Data Visualization"],
      category: "technology"
    },
    {
      title: "Aspire Planning",
      description: "Financial planning application with goal tracking and forecasting",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://app.aspireplanning.io",
      tags: ["Finance", "Planning", "SaaS"],
      category: "finance"
    },
    {
      title: "CompMiner",
      description: "Competitive analysis platform for market research and insights",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://www.compminer.com",
      tags: ["Market Research", "Analytics", "Business"],
      category: "business"
    },
    {
      title: "ReviewTamer",
      description: "Customer feedback management system with sentiment analysis",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://reviewtamer.com",
      tags: ["Customer Feedback", "Analytics", "Management"],
      category: "business"
    },
    {
      title: "M3 Agriculture",
      description: "Modern agriculture management platform with resource tracking",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://www.m3agriculture.com",
      tags: ["Agriculture", "Management", "IoT"],
      category: "other"
    },
    {
      title: "GigoPost",
      description: "Freelance job marketplace connecting professionals with opportunities",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://gigopost.com",
      tags: ["Marketplace", "Jobs", "Platform"],
      category: "technology"
    },
    {
      title: "SybrGig",
      description: "Modern gig economy platform with integrated payment system",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&h=500&q=80",
      link: "https://ybr.app",
      tags: ["Gig Economy", "Payments", "Platform"],
      category: "technology"
    },
  ];
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'technology', label: 'Technology' },
    { id: 'finance', label: 'Finance' },
    { id: 'business', label: 'Business' },
    { id: 'other', label: 'Other' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Work</h2>
          <p className="text-lg text-slate-600">
            Explore our portfolio of successful projects delivered with excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-navy-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
