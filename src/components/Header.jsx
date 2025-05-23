
import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border sticky top-0 z-10 backdrop-blur-md bg-background/90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-skill-blue to-skill-purple rounded-lg flex items-center justify-center">
            <BarChart2 className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skill-blue via-skill-purple to-skill-pink">
            SkillTrackr
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
