
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheatCode, Platform } from '@/data/gtaCheats';
import { Badge } from '@/components/ui/badge';

interface CheatCardProps {
  cheat: CheatCode;
}

const platformLabels: Record<Platform, string> = {
  ps: "PlayStation",
  xbox: "Xbox",
  pc: "PC",
  mobile: "Mobile"
};

const CheatCard: React.FC<CheatCardProps> = ({ cheat }) => {
  const platforms = Object.keys(cheat.code) as Platform[];

  return (
    <Card className="cheat-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{cheat.title}</CardTitle>
          <Badge variant="outline" className="bg-gta-accent/10 text-gta-accent border-gta-accent/20">
            {cheat.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300 mb-4">{cheat.description}</p>
        <div className="space-y-3">
          {platforms.map((platform) => (
            <div key={platform} className="flex items-start">
              <Badge className={`platform-badge ${platform}`}>
                {platformLabels[platform]}
              </Badge>
              <code className="text-sm px-3 py-1 bg-black/30 rounded flex-1 text-green-400 font-mono tracking-wider overflow-x-auto">
                {cheat.code[platform]}
              </code>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CheatCard;
