
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'green' | 'pink' | 'purple';
  hover?: boolean;
}

const PixelCard = ({ children, className, glowColor = 'blue', hover = true }: PixelCardProps) => {
  const glowClasses = {
    blue: 'hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]',
    green: 'hover:border-neon-green hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]',
    pink: 'hover:border-neon-pink hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]',
    purple: 'hover:border-neon-purple hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]'
  };

  return (
    <div className={cn(
      'pixel-card',
      hover && glowClasses[glowColor],
      className
    )}>
      {children}
    </div>
  );
};

export default PixelCard;
