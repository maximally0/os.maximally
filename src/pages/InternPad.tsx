
import React from 'react';
import PixelCard from '@/components/PixelCard';
import PixelButton from '@/components/PixelButton';

const InternPad = () => {
  const internships = [
    {
      id: 1,
      role: "Junior Frontend Developer",
      company: "TechStart AI",
      description: "Early-stage AI startup building the future of personalized learning",
      skills: ["React", "JavaScript", "UI/UX"],
      location: "Remote",
      type: "Paid Internship",
      applyLink: "mailto:careers@techstart.ai"
    },
    {
      id: 2,
      role: "Marketing Intern",
      company: "EcoFlow",
      description: "Sustainable energy company focused on solar solutions for homes",
      skills: ["Social Media", "Content Creation", "Analytics"],
      location: "San Francisco, CA",
      type: "Summer Internship",
      applyLink: "https://forms.google.com/ecoflow-intern"
    },
    {
      id: 3,
      role: "Product Design Intern",
      company: "HealthTech Labs",
      description: "Digital health platform connecting patients with personalized care",
      skills: ["Figma", "User Research", "Prototyping"],
      location: "New York, NY",
      type: "Part-time",
      applyLink: "mailto:design@healthtechlabs.com"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="font-pixel text-4xl md:text-5xl text-center mb-8 gradient-text">
          🎯 InternPad
        </h1>
        
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover internship opportunities at startups that value young talent and fresh perspectives.
        </p>

        <div className="space-y-6">
          {internships.map((internship) => (
            <PixelCard key={internship.id} glowColor="pink">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="font-pixel text-xl text-neon-pink mb-2">{internship.role}</h3>
                  <h4 className="text-neon-blue font-pixel text-lg mb-3">{internship.company}</h4>
                  <p className="text-gray-300 mb-4">{internship.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-dark-bg text-neon-green text-xs font-pixel border border-neon-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="text-gray-400">Location:</span> 
                      <span className="text-white ml-1">{internship.location}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Type:</span> 
                      <span className="text-neon-green ml-1 font-pixel">{internship.type}</span>
                    </div>
                  </div>
                  
                  <PixelButton 
                    variant="neon-pink"
                    href={internship.applyLink}
                  >
                    Apply Now
                  </PixelButton>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <PixelCard className="max-w-2xl mx-auto" glowColor="blue">
            <h3 className="font-pixel text-2xl text-neon-blue mb-4">
              🚀 Want to Post an Internship?
            </h3>
            <p className="text-gray-300 mb-6">
              Are you a startup looking for ambitious teen talent? We'd love to feature your opportunities.
            </p>
            <PixelButton variant="neon-blue" href="mailto:internships@maximally.in">
              Contact Us
            </PixelButton>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};

export default InternPad;
