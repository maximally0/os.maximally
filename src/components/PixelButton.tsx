
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps {
  children: React.ReactNode;
  variant?: 'neon-blue' | 'neon-green' | 'neon-pink' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const PixelButton = ({ 
  children, 
  variant = 'neon-blue', 
  size = 'md',
  onClick,
  href,
  className 
}: PixelButtonProps) => {
  const baseClasses = "pixel-button font-pixel inline-flex items-center justify-center transition-all duration-300 hover:scale-110 transform border-4 font-bold uppercase tracking-wider";
  
  const variantClasses = {
    'neon-blue': 'text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-black hover:shadow-[0_0_40px_rgba(0,245,255,0.8)] bg-black/80 backdrop-blur-sm',
    'neon-green': 'text-neon-green border-neon-green hover:bg-neon-green hover:text-black hover:shadow-[0_0_40px_rgba(57,255,20,0.8)] bg-black/80 backdrop-blur-sm',
    'neon-pink': 'text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-[0_0_40px_rgba(255,20,147,0.8)] bg-black/80 backdrop-blur-sm',
    'outline': 'text-white border-white hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] bg-black/80 backdrop-blur-sm'
  };

  const sizeClasses = {
    'sm': 'text-sm px-4 py-2',
    'md': 'text-lg px-6 py-3',
    'lg': 'text-xl px-8 py-4'
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
