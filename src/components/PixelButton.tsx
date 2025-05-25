
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const PixelButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  className 
}: PixelButtonProps) => {
  const baseClasses = "pixel-button font-pixel inline-flex items-center justify-center font-bold uppercase tracking-wider";
  
  const variantClasses = {
    'primary': 'text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-black bg-black/80',
    'secondary': 'text-neon-green border-neon-green hover:bg-neon-green hover:text-black bg-black/80',
    'accent': 'text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black bg-black/80',
    'outline': 'text-white border-white hover:bg-white hover:text-black bg-black/80'
  };

  const sizeClasses = {
    'sm': 'text-sm px-3 py-2',
    'md': 'text-base px-4 py-2',
    'lg': 'text-lg px-6 py-3'
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default PixelButton;
