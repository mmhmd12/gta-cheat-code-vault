
import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gta-accent/20 bg-gta">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-4 py-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="font-gta text-xl tracking-wide text-white">
            GTA CHEAT CODE <span className="text-gta-accent">VAULT</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0 sm:mr-4">
            &copy; {new Date().getFullYear()} GTA Cheat Code Vault. Not affiliated with Rockstar Games.
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gta-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
