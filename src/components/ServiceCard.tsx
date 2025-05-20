
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover-lift group",
      className
    )}>
      <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-navy-50 text-navy-800 mb-5 group-hover:bg-navy-800 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
