
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-md inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:translate-y-0.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 shadow-sm focus:ring-navy-500",
    secondary: "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 shadow-sm focus:ring-teal-400",
    outline: "border-2 border-navy-300 text-navy-800 hover:bg-navy-50 focus:ring-navy-300",
    ghost: "text-navy-800 hover:bg-navy-50 focus:ring-navy-300",
    link: "text-navy-600 underline-offset-4 hover:underline focus:ring-navy-300"
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-7 py-3.5"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
