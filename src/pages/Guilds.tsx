
import React from 'react';
import PixelCard from '@/components/PixelCard';
import PixelButton from '@/components/PixelButton';
import guildsData from '@/data/guilds.json';

const Guilds = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="font-pixel text-4xl md:text-5xl text-center mb-8 text-gray-900">
          🤝 Join a Guild
        </h1>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with like-minded teens, collaborate on projects, and level up your skills together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guildsData.map((guild) => (
            <PixelCard key={guild.id} className="text-center" glowColor="green">
              <div className="text-6xl mb-4">{guild.emoji}</div>
              <h3 className="font-pixel text-xl text-green-600 mb-2">{guild.name}</h3>
              <p className="text-blue-600 font-pixel text-sm mb-3">{guild.mission}</p>
              <p className="text-gray-700 text-sm mb-4">{guild.description}</p>
              
              <div className="text-gray-500 text-xs mb-4">
                {guild.memberCount} members
              </div>
              
              <PixelButton 
                variant="secondary" 
                size="sm"
                href={guild.discordLink}
              >
                Join Discord
              </PixelButton>
            </PixelCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <PixelCard className="max-w-2xl mx-auto" glowColor="blue">
            <h3 className="font-pixel text-2xl text-blue-600 mb-4">
              Want to Start Your Own Guild?
            </h3>
            <p className="text-gray-700 mb-6">
              Have a unique interest or skill? We support ambitious teens in creating new communities.
            </p>
            <PixelButton variant="primary">
              Propose a Guild
            </PixelButton>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};

export default Guilds;
