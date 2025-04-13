
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  Gamepad, Monitor, Smartphone, Playstation, 
  Xbox, Filter 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheatCard from '@/components/CheatCard';
import { 
  getGameById, getCheatsByGame, getCategories, 
  searchCheats, CheatCode, GameInfo, Platform 
} from '@/data/gtaCheats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const platformIcons: Record<Platform, React.ReactNode> = {
  ps: <Playstation className="h-5 w-5" />,
  xbox: <Xbox className="h-5 w-5" />,
  pc: <Monitor className="h-5 w-5" />,
  mobile: <Smartphone className="h-5 w-5" />
};

const GameDetails = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!gameId) {
    return <Navigate to="/" />;
  }

  const game = getGameById(gameId);
  
  if (!game) {
    return <Navigate to="/" />;
  }
  
  const allCheats = getCheatsByGame(game.title);
  const categories = ['All', ...getCategories(game.title)];
  
  let displayedCheats = allCheats;
  
  // Filter by search query
  if (searchQuery) {
    displayedCheats = searchCheats(searchQuery).filter(
      cheat => cheat.game === game.title
    );
  }
  
  // Filter by category
  if (selectedCategory !== 'All') {
    displayedCheats = displayedCheats.filter(
      cheat => cheat.category === selectedCategory
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchQuery} />
      
      <main className="flex-grow">
        {/* Game Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${game.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} 
          />
          <div className="relative z-20 container mx-auto px-4 py-16">
            <h1 className="gta-title mb-2">{game.title}</h1>
            <p className="text-xl text-gray-200 mb-4">{game.description}</p>
            <div className="flex flex-wrap items-center">
              <div className="mr-6 mb-2">
                <span className="text-gray-400 block text-sm">Release Year</span>
                <span className="text-white font-bold">{game.releaseYear}</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-400 block text-sm">Available On</span>
                <div className="flex space-x-2">
                  {game.platforms.map(platform => (
                    <div key={platform} className="text-white">
                      {platformIcons[platform]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cheat Codes Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            <h2 className="gta-subtitle mb-4 lg:mb-0">CHEAT CODES</h2>
            
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    {selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    {categories.map(category => (
                      <DropdownMenuRadioItem key={category} value={category}>
                        {category}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Platform Tabs */}
          <Tabs defaultValue={game.platforms[0]} className="w-full">
            <TabsList className="mb-8">
              {game.platforms.map(platform => (
                <TabsTrigger key={platform} value={platform} className="flex items-center">
                  {platformIcons[platform]}
                  <span className="ml-2 hidden sm:inline">
                    {platform === 'ps' ? 'PlayStation' : 
                     platform === 'xbox' ? 'Xbox' : 
                     platform === 'pc' ? 'PC' : 'Mobile'}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {game.platforms.map(platform => (
              <TabsContent key={platform} value={platform}>
                {displayedCheats.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCheats
                      .filter(cheat => cheat.code[platform])
                      .map((cheat, index) => (
                        <CheatCard key={`${cheat.title}-${index}`} cheat={cheat} />
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Gamepad className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">No Cheats Found</h3>
                    <p className="text-gray-400">
                      {searchQuery 
                        ? `No cheats match "${searchQuery}" for ${platform === 'ps' ? 'PlayStation' : platform === 'xbox' ? 'Xbox' : platform === 'pc' ? 'PC' : 'Mobile'}`
                        : `No ${selectedCategory} cheats available for ${platform === 'ps' ? 'PlayStation' : platform === 'xbox' ? 'Xbox' : platform === 'pc' ? 'PC' : 'Mobile'}`
                      }
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GameDetails;
