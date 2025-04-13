
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gta-accent/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link to="/" className="mr-4 flex items-center space-x-2">
          <span className="font-gta text-2xl tracking-wider text-gta-accent animate-pulse-neon">
            GTA CHEATS
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          {onSearch && (
            <div className="flex-1 mr-4 relative max-w-sm hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cheat codes..."
                onChange={handleSearchChange}
                className="pl-8 bg-secondary border-gta-accent/20 focus:border-gta-accent"
              />
            </div>
          )}
          <nav className="ml-auto flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium hover:text-gta-accent transition-colors">
              Home
            </Link>
            <Link to="/search" className="text-sm font-medium hover:text-gta-accent transition-colors md:hidden">
              Search
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-gta-accent transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
