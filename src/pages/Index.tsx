
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '@/components/PixelButton';
import PixelCard from '@/components/PixelCard';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const Index = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="content-wrapper text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="block text-neon-blue mb-2">THE OS FOR</span>
              <span className="block text-neon-green text-5xl md:text-7xl lg:text-8xl mb-2">AMBITIOUS</span>
              <span className="block text-neon-pink">TEENS</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-white mb-8 font-pixel">
              Projects • People • Internships • Mentors
            </div>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              The community platform where ambitious teenagers showcase projects, find opportunities, and connect with mentors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/showcase">
                <PixelButton variant="primary" size="lg">
                  🚀 View Projects
                </PixelButton>
              </Link>
              <Link to="/guilds">
                <PixelButton variant="secondary" size="lg">
                  🎯 Join Guild
                </PixelButton>
              </Link>
              <Link to="/submit">
                <PixelButton variant="accent" size="lg">
                  📩 Submit Work
                </PixelButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-16">
        <div className="content-wrapper">
          <h2 className="section-title gradient-text mb-12">
            Building the Future
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Teen Builders', color: 'neon-blue' },
              { number: '120+', label: 'Projects', color: 'neon-green' },
              { number: '50+', label: 'Mentors', color: 'neon-pink' },
              { number: '25+', label: 'Internships', color: 'neon-purple' }
            ].map((stat, index) => (
              <PixelCard key={index} className="text-center" glowColor={stat.color as any}>
                <div className={`font-pixel text-2xl md:text-3xl text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white text-sm font-pixel">{stat.label}</div>
              </PixelCard>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="content-wrapper">
          <h2 className="section-title text-neon-green mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/showcase">
              <PixelButton variant="outline" size="lg">
                View All Projects
              </PixelButton>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black py-20">
        <div className="content-wrapper text-center">
          <PixelCard className="max-w-3xl mx-auto" glowColor="pink">
            <h3 className="font-pixel text-2xl md:text-3xl text-neon-pink mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white text-lg mb-6">
              Join thousands of ambitious teens building the future
            </p>
            <Link to="/bootcamp">
              <PixelButton variant="accent" size="lg">
                Join the Bootcamp
              </PixelButton>
            </Link>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
