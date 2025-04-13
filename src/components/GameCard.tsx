
import React from 'react';
import { Link } from 'react-router-dom';
import { GameInfo } from '@/data/gtaCheats';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameCardProps {
  game: GameInfo;
}

const platformIcons: Record<string, string> = {
  ps: "PlayStation",
  xbox: "Xbox",
  pc: "PC",
  mobile: "Mobile"
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <Card className="cheat-card h-full transition-transform hover:scale-[1.02] duration-200">
        <div className="relative h-60 overflow-hidden rounded-t-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${game.image})`,
              backgroundSize: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="gta-subtitle mb-1">{game.title}</h3>
            <div className="text-xs text-gray-300">{game.releaseYear}</div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-gray-300 mb-3">{game.description}</p>
          <div className="flex flex-wrap">
            {game.platforms.map((platform) => (
              <Badge key={platform} variant="outline" className="mr-2 mb-2">
                {platformIcons[platform]}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
