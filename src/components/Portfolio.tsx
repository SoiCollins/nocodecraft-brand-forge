import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

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
    <section id="portfolio" className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Explore Our <span className="gradient-text">Creative Works</span></h2>
          <p className="text-lg text-slate-600">
            Discover our portfolio of successful projects delivered with excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-navy-800 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-navy-50'
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
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-slate-600">No projects found in this category.</p>
          </div>
        )}
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="hover:bg-navy-100">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
