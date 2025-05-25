
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import PixelButton from '@/components/PixelButton';
import projectsData from '@/data/projects.json';

const Showcase = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  const allTags = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.tags)))];
  
  const filteredProjects = selectedTag === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="font-pixel text-4xl md:text-5xl text-center mb-8 gradient-text">
          🚀 Project Showcase
        </h1>
        
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover amazing projects built by ambitious teens from around the world.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 font-pixel text-sm border transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-neon-blue text-black border-neon-blue'
                  : 'text-gray-300 border-gray-600 hover:border-neon-blue hover:text-neon-blue'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            <p className="font-pixel text-xl mb-4">No projects found for "{selectedTag}"</p>
            <PixelButton variant="outline" onClick={() => setSelectedTag('All')}>
              Show All Projects
            </PixelButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
