
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠', name: 'Home' },
    { path: '/showcase', label: '🚀', name: 'Showcase' },
    { path: '/internpad', label: '🎯', name: 'InternPad' },
    { path: '/guilds', label: '🤝', name: 'Guilds' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-card border-t-2 border-dark-border z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center p-2 transition-all duration-200",
              location.pathname === item.path
                ? "text-neon-blue"
                : "text-gray-400 hover:text-white"
            )}
          >
            <span className="text-2xl mb-1">{item.label}</span>
            <span className="font-pixel text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
