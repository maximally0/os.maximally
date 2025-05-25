
import React from 'react';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  youtubeId: string;
  tags: string[];
  creator: string;
  instagram?: string;
  github?: string;
  website?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <PixelCard className="h-full flex flex-col">
      <div className="aspect-video mb-4 overflow-hidden border border-gray-300">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="font-pixel text-xl text-blue-600 mb-2">{project.title}</h3>
      <p className="text-gray-700 text-sm mb-3 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-gray-100 text-green-600 text-xs font-pixel border border-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        by <span className="text-purple-600">{project.creator}</span>
      </div>
      
      <div className="flex gap-2">
        {project.instagram && (
          <PixelButton 
            variant="accent" 
            size="sm"
            href={`https://instagram.com/${project.instagram}`}
          >
            IG
          </PixelButton>
        )}
        {project.github && (
          <PixelButton 
            variant="outline" 
            size="sm"
            href={`https://github.com/${project.github}`}
          >
            Code
          </PixelButton>
        )}
        {project.website && (
          <PixelButton 
            variant="secondary" 
            size="sm"
            href={`https://${project.website}`}
          >
            Live
          </PixelButton>
        )}
      </div>
    </PixelCard>
  );
};

export default ProjectCard;
