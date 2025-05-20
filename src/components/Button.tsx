
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
  const baseStyles = "font-medium rounded-md inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-navy-800 text-white hover:bg-navy-700 focus:ring-navy-500",
    secondary: "bg-teal-500 text-navy-900 hover:bg-teal-400 focus:ring-teal-400",
    outline: "border border-navy-300 text-navy-800 hover:bg-navy-50 focus:ring-navy-300",
    ghost: "text-navy-800 hover:bg-navy-50 focus:ring-navy-300",
    link: "text-navy-600 underline-offset-4 hover:underline focus:ring-navy-300"
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
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
