
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
      "bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 group",
      className
    )}>
      <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-navy-50 to-navy-100 text-navy-800 mb-6 group-hover:bg-gradient-to-br group-hover:from-navy-800 group-hover:to-navy-700 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
