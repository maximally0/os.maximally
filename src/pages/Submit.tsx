
import React from 'react';
import PixelCard from '@/components/PixelCard';
import PixelButton from '@/components/PixelButton';

const Submit = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="font-pixel text-4xl md:text-5xl text-center mb-8 gradient-text">
          📩 Submit Your Project
        </h1>
        
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Built something amazing? We want to showcase your work to the world.
        </p>

        <div className="max-w-3xl mx-auto">
          <PixelCard className="mb-8" glowColor="green">
            <h3 className="font-pixel text-xl text-neon-green mb-4">What We're Looking For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-pixel text-neon-blue mb-2">✨ Project Types</h4>
                <ul className="space-y-1">
                  <li>• Web/Mobile Apps</li>
                  <li>• AI/ML Projects</li>
                  <li>• Hardware Builds</li>
                  <li>• Social Impact Projects</li>
                  <li>• Creative Tech</li>
                </ul>
              </div>
              <div>
                <h4 className="font-pixel text-neon-pink mb-2">🎯 Requirements</h4>
                <ul className="space-y-1">
                  <li>• Ages 13-19</li>
                  <li>• Working demo/prototype</li>
                  <li>• 60-second video walkthrough</li>
                  <li>• Original work</li>
                  <li>• Clear explanation</li>
                </ul>
              </div>
            </div>
          </PixelCard>

          {/* Embedded Google Form - Replace with your actual form */}
          <PixelCard glowColor="blue">
            <h3 className="font-pixel text-xl text-neon-blue mb-6 text-center">Submit Your Project</h3>
            
            <div className="bg-dark-bg p-6 border border-dark-border min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚧</div>
                <p className="font-pixel text-neon-yellow mb-4">Form Coming Soon!</p>
                <p className="text-gray-300 mb-6">
                  We're setting up our submission system. For now, reach out directly!
                </p>
                <div className="space-y-3">
                  <PixelButton variant="neon-blue" href="mailto:submit@maximally.in">
                    Email Your Project
                  </PixelButton>
                  <div className="text-sm text-gray-400">
                    Include: Project name, description, demo link, and 60s video
                  </div>
                </div>
              </div>
            </div>
          </PixelCard>

          <div className="mt-8 text-center">
            <PixelCard glowColor="pink">
              <h3 className="font-pixel text-lg text-neon-pink mb-3">What Happens Next?</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>1. Our team reviews your submission (usually within 48 hours)</p>
                <p>2. If selected, we'll reach out for any additional details</p>
                <p>3. Your project gets featured on the showcase with full credit</p>
                <p>4. You join our exclusive builders community!</p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
