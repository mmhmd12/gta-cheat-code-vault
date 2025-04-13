
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchResults from '@/components/SearchResults';
import { searchCheats } from '@/data/gtaCheats';
import { Input } from '@/components/ui/input';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const results = query ? searchCheats(query) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="gta-subtitle text-center mb-8">SEARCH CHEAT CODES</h1>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by cheat name, description, game, or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 py-6 text-lg bg-secondary border-gta-accent/20 focus-visible:ring-gta-accent"
            />
          </div>
          
          <SearchResults results={results} query={query} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
