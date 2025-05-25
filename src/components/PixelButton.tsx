
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
  const baseClasses = "pixel-button font-pixel inline-flex items-center justify-center transition-all duration-200 hover:scale-105";
  
  const variantClasses = {
    'neon-blue': 'text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]',
    'neon-green': 'text-neon-green border-neon-green hover:bg-neon-green hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]',
    'neon-pink': 'text-neon-pink border-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-[0_0_20px_rgba(255,20,147,0.5)]',
    'outline': 'text-white border-gray-400 hover:bg-white hover:text-black'
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
