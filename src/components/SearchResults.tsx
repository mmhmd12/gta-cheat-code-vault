
import React from 'react';
import { CheatCode } from '@/data/gtaCheats';
import CheatCard from './CheatCard';

interface SearchResultsProps {
  results: CheatCode[];
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query }) => {
  if (!query) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-2">Enter a search term</h2>
        <p className="text-gray-400">
          Search for cheat codes by name, description, or game
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-2">No results found</h2>
        <p className="text-gray-400">
          Try a different search term or browse all games
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((cheat, index) => (
          <div key={`${cheat.game}-${cheat.title}-${index}`}>
            <CheatCard cheat={cheat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
