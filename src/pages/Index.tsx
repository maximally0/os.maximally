
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '@/components/PixelButton';
import PixelCard from '@/components/PixelCard';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const Index = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-6 gradient-text animate-float">
            THE OS FOR AMBITIOUS TEENS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-pixel">
            Projects. People. Internships. Mentors. All in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/showcase">
              <PixelButton variant="neon-blue" size="lg">
                🚀 View Projects
              </PixelButton>
            </Link>
            <Link to="/guilds">
              <PixelButton variant="neon-green" size="lg">
                🎯 Join a Guild
              </PixelButton>
            </Link>
            <Link to="/submit">
              <PixelButton variant="neon-pink" size="lg">
                📩 Submit Your Work
              </PixelButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '500+', label: 'Teen Builders' },
            { number: '120+', label: 'Projects Built' },
            { number: '50+', label: 'Mentors' },
            { number: '25+', label: 'Internships' }
          ].map((stat, index) => (
            <PixelCard key={index} className="text-center" glowColor="purple">
              <div className="font-pixel text-2xl md:text-3xl text-neon-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </PixelCard>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="font-pixel text-3xl md:text-4xl text-center mb-8 text-neon-green">
          🌟 Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/showcase">
            <PixelButton variant="outline">
              View All Projects →
            </PixelButton>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 text-center">
        <PixelCard className="max-w-2xl mx-auto" glowColor="pink">
          <h3 className="font-pixel text-2xl text-neon-pink mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of ambitious teens who are building the future, one project at a time.
          </p>
          <Link to="/bootcamp">
            <PixelButton variant="neon-pink" size="lg">
              Join the Bootcamp 🎓
            </PixelButton>
          </Link>
        </PixelCard>
      </div>
    </div>
  );
};

export default Index;
