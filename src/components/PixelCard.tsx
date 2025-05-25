
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
    blue: 'hover:border-neon-blue',
    green: 'hover:border-neon-green',
    pink: 'hover:border-neon-pink',
    purple: 'hover:border-neon-purple'
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
