
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '@/components/PixelButton';
import PixelCard from '@/components/PixelCard';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const Index = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="min-h-screen pb-20 overflow-hidden">
      {/* EXPLOSIVE HERO SECTION */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] animate-pulse opacity-30"></div>
        
        <div className="container mx-auto px-4 pt-12 pb-20 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* CHAOTIC EMOJI EXPLOSION */}
            <div className="text-6xl md:text-8xl mb-6 animate-bounce">
              🚀💥⚡🔥🌟💻🎯🎨🤖⭐
            </div>
            
            {/* MASSIVE GLITCHY TITLE */}
            <h1 className="font-pixel text-5xl md:text-8xl lg:text-9xl mb-8 leading-none">
              <span className="block text-neon-blue animate-pulse drop-shadow-[0_0_30px_rgba(0,245,255,1)]">
                THE OS FOR
              </span>
              <span className="block text-neon-green animate-bounce drop-shadow-[0_0_30px_rgba(57,255,20,1)] text-6xl md:text-9xl lg:text-[12rem]">
                AMBITIOUS
              </span>
              <span className="block text-neon-pink animate-pulse drop-shadow-[0_0_30px_rgba(255,20,147,1)]">
                TEENS
              </span>
            </h1>
            
            {/* LOUD SUBTITLE */}
            <div className="text-2xl md:text-4xl lg:text-5xl text-white mb-8 font-pixel font-bold">
              <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink bg-clip-text text-transparent animate-pulse">
                PROJECTS • PEOPLE • INTERNSHIPS • MENTORS
              </span>
            </div>
            
            <div className="text-xl md:text-3xl text-yellow-300 mb-12 font-pixel animate-bounce">
              🔥 ALL IN ONE CHAOTIC PLACE 🔥
            </div>
            
            {/* EXPLOSIVE CTA BUTTONS */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/showcase">
                <PixelButton variant="neon-blue" size="lg" className="text-2xl md:text-3xl px-8 py-6 animate-pulse hover:animate-bounce transform hover:scale-110 shadow-[0_0_50px_rgba(0,245,255,0.8)]">
                  🚀💥 EPIC PROJECTS 💥🚀
                </PixelButton>
              </Link>
              <Link to="/guilds">
                <PixelButton variant="neon-green" size="lg" className="text-2xl md:text-3xl px-8 py-6 animate-pulse hover:animate-bounce transform hover:scale-110 shadow-[0_0_50px_rgba(57,255,20,0.8)]">
                  🎯⚡ JOIN GUILD ⚡🎯
                </PixelButton>
              </Link>
              <Link to="/submit">
                <PixelButton variant="neon-pink" size="lg" className="text-2xl md:text-3xl px-8 py-6 animate-pulse hover:animate-bounce transform hover:scale-110 shadow-[0_0_50px_rgba(255,20,147,0.8)]">
                  💻🔥 SUBMIT NOW 🔥💻
                </PixelButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CHAOTIC STATS EXPLOSION */}
      <div className="bg-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-pink/20 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-pixel text-4xl md:text-6xl text-center mb-12 text-neon-yellow animate-bounce">
            🏆 BUILDING AN EMPIRE 🏆
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'TEEN BUILDERS', emoji: '🔨', color: 'neon-blue' },
              { number: '120+', label: 'PROJECTS BUILT', emoji: '🚀', color: 'neon-green' },
              { number: '50+', label: 'MENTORS', emoji: '🧠', color: 'neon-pink' },
              { number: '25+', label: 'INTERNSHIPS', emoji: '💼', color: 'neon-purple' }
            ].map((stat, index) => (
              <PixelCard key={index} className="text-center bg-gradient-to-br from-gray-900 to-black border-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300" glowColor={stat.color as any}>
                <div className="text-6xl mb-4 animate-bounce">{stat.emoji}</div>
                <div className={`font-pixel text-3xl md:text-4xl text-${stat.color} mb-2 animate-pulse drop-shadow-[0_0_20px_currentColor]`}>
                  {stat.number}
                </div>
                <div className="text-white font-pixel text-sm font-bold">{stat.label}</div>
              </PixelCard>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS CHAOS */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl md:text-8xl mb-4 animate-spin">🌟</div>
            <h2 className="font-pixel text-4xl md:text-6xl text-neon-green mb-4 animate-pulse drop-shadow-[0_0_30px_rgba(57,255,20,1)]">
              🔥 FEATURED PROJECTS 🔥
            </h2>
            <div className="text-2xl font-pixel text-neon-blue animate-bounce">
              💥 BUILT BY LEGENDS 💥
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`transform hover:scale-105 hover:rotate-2 transition-all duration-300 ${index % 2 === 0 ? 'animate-pulse' : 'animate-bounce'}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/showcase">
              <PixelButton variant="outline" className="text-xl px-8 py-4 animate-pulse hover:animate-bounce border-4 border-white text-white hover:bg-white hover:text-black transform hover:scale-110">
                🚀 VIEW ALL EPIC BUILDS 🚀
              </PixelButton>
            </Link>
          </div>
        </div>
      </div>

      {/* FINAL CTA EXPLOSION */}
      <div className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl animate-spin">⚡</div>
          <div className="absolute top-20 right-20 text-4xl animate-bounce">🔥</div>
          <div className="absolute bottom-10 left-20 text-4xl animate-pulse">💥</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-ping">🌟</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <PixelCard className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border-4 border-neon-pink transform hover:scale-105 transition-all duration-300" glowColor="pink">
            <div className="text-6xl mb-6 animate-bounce">🎓💻🚀</div>
            <h3 className="font-pixel text-3xl md:text-5xl text-neon-pink mb-6 animate-pulse drop-shadow-[0_0_30px_rgba(255,20,147,1)]">
              READY TO BUILD SOMETHING EPIC?
            </h3>
            <p className="text-white text-xl md:text-2xl mb-8 font-pixel">
              🔥 JOIN THOUSANDS OF AMBITIOUS TEENS 🔥
            </p>
            <p className="text-neon-green text-lg md:text-xl mb-8 font-pixel animate-pulse">
              💥 BUILDING THE FUTURE, ONE PROJECT AT A TIME 💥
            </p>
            <Link to="/bootcamp">
              <PixelButton variant="neon-pink" size="lg" className="text-2xl md:text-3xl px-10 py-6 animate-bounce hover:animate-pulse transform hover:scale-110 shadow-[0_0_50px_rgba(255,20,147,0.8)]">
                🎓💥 JOIN THE BOOTCAMP 💥🎓
              </PixelButton>
            </Link>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
