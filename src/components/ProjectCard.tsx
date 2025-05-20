
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  link,
  tags,
  className,
  style
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-md border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-navy-200",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="bg-navy-50 text-navy-700 hover:bg-navy-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-navy-700 font-medium hover:text-teal-600 transition-colors"
        >
          View Project
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
