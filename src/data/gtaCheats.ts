
export interface CheatCode {
  title: string;
  description: string;
  code: {
    ps?: string;
    xbox?: string;
    pc?: string;
    mobile?: string;
  };
  game: GameTitle;
  category: string;
}

export type GameTitle = 
  | "GTA V" 
  | "GTA IV" 
  | "GTA San Andreas" 
  | "GTA Vice City" 
  | "GTA III";

export type Platform = "ps" | "xbox" | "pc" | "mobile";

export interface GameInfo {
  id: string;
  title: GameTitle;
  releaseYear: string;
  image: string;
  description: string;
  platforms: Platform[];
}

export const games: GameInfo[] = [
  {
    id: "gta5",
    title: "GTA V",
    releaseYear: "2013",
    image: "/gta5.jpg",
    description: "Grand Theft Auto V is a 2013 action-adventure game set in the fictional state of San Andreas.",
    platforms: ["ps", "xbox", "pc"]
  },
  {
    id: "gta4",
    title: "GTA IV",
    releaseYear: "2008",
    image: "/gta4.jpg",
    description: "Grand Theft Auto IV follows Niko Bellic, an Eastern European immigrant who comes to Liberty City to pursue the American Dream.",
    platforms: ["ps", "xbox", "pc"]
  },
  {
    id: "gtasa",
    title: "GTA San Andreas",
    releaseYear: "2004",
    image: "/gtasa.jpg",
    description: "Grand Theft Auto: San Andreas follows Carl Johnson's return to San Andreas after learning about his mother's murder.",
    platforms: ["ps", "xbox", "pc", "mobile"]
  },
  {
    id: "gtavc",
    title: "GTA Vice City",
    releaseYear: "2002",
    image: "/gtavc.jpg",
    description: "Grand Theft Auto: Vice City is set in 1986 within the fictional Vice City, based on Miami.",
    platforms: ["ps", "xbox", "pc", "mobile"]
  },
  {
    id: "gta3",
    title: "GTA III",
    releaseYear: "2001",
    image: "/gta3.jpg",
    description: "Grand Theft Auto III follows Claude, a silent protagonist who was betrayed by his girlfriend in a bank heist and left for dead.",
    platforms: ["ps", "xbox", "pc", "mobile"]
  }
];

export const cheatCodes: CheatCode[] = [
  // GTA V Cheats
  {
    title: "Max Health and Armor",
    description: "Restores health and armor to maximum levels.",
    code: {
      ps: "◯, L1, △, R2, X, ◯, R1, ◯, ◻",
      xbox: "B, LB, Y, RT, A, B, RB, B, X",
      pc: "TURTLE"
    },
    game: "GTA V",
    category: "Health"
  },
  {
    title: "Invincibility",
    description: "Makes the player invincible for 5 minutes.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, △, ◻, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, Y, X, B, Y",
      pc: "PAINKILLER"
    },
    game: "GTA V",
    category: "Health"
  },
  {
    title: "Wanted Level Decrease",
    description: "Decreases your current wanted level.",
    code: {
      ps: "R1, R1, ◯, R2, ◯, ◯, R2, L2, R1, △, ◯, △",
      xbox: "RB, RB, B, RT, ◯, ◯, RT, LT, RB, Y, B, Y",
      pc: "LAWYERUP"
    },
    game: "GTA V",
    category: "Wanted Level"
  },
  {
    title: "Raise Wanted Level",
    description: "Increases your wanted level by one star.",
    code: {
      ps: "R1, R1, ◯, R2, L1, L2, L1, L1, L2, L1",
      xbox: "RB, RB, B, RT, LB, LT, LB, LB, LT, LB",
      pc: "FUGITIVE"
    },
    game: "GTA V",
    category: "Wanted Level"
  },
  {
    title: "Super Jump",
    description: "Allows the player to jump much higher than normal.",
    code: {
      ps: "L2, L2, ◻, ◯, ◯, L2, ◻, △, △, L1, L1, L1",
      xbox: "LT, LT, X, B, B, LT, X, Y, Y, LB, LB, LB",
      pc: "HOPTOIT"
    },
    game: "GTA V",
    category: "Player Abilities"
  },
  
  // GTA IV Cheats
  {
    title: "Health & Armor",
    description: "Restores health and armor to full.",
    code: {
      ps: "◯, ◯, L1, ◻",
      xbox: "B, B, LB, X",
      pc: "482-555-0100"
    },
    game: "GTA IV",
    category: "Health"
  },
  {
    title: "Weapons Tier 1",
    description: "Provides basic weapons.",
    code: {
      ps: "◯, L1, △, R2, △, X, ◻, ◯",
      xbox: "B, LB, Y, RT, Y, A, X, B",
      pc: "486-555-0150"
    },
    game: "GTA IV",
    category: "Weapons"
  },
  {
    title: "Wanted Level Clear",
    description: "Removes your current wanted level.",
    code: {
      ps: "◯, R1, ◯, R1, ◯, R1, ◻, △, ◯",
      xbox: "B, RB, B, RB, B, RB, X, Y, B",
      pc: "267-555-0100"
    },
    game: "GTA IV",
    category: "Wanted Level"
  },
  
  // GTA San Andreas Cheats
  {
    title: "Full Health",
    description: "Restores health to maximum.",
    code: {
      ps: "R1, R2, L1, ◯, ◁, ▷, ◁, ▷, ◁, ▷",
      xbox: "RB, RT, LB, B, Left, Right, Left, Right, Left, Right",
      pc: "HESOYAM",
      mobile: "HESOYAM"
    },
    game: "GTA San Andreas",
    category: "Health"
  },
  {
    title: "Weapon Set 1",
    description: "Gives you the first tier of weapons.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, △",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up",
      pc: "LXGIWYL",
      mobile: "LXGIWYL"
    },
    game: "GTA San Andreas",
    category: "Weapons"
  },
  {
    title: "Spawn Jetpack",
    description: "Spawns a jetpack in front of you.",
    code: {
      ps: "△, △, L1, L2, ▽, R2, ▽, ▽, L1, L1, L1, L1",
      xbox: "Y, Y, LB, LT, Down, RT, Down, Down, LB, LB, LB, LB",
      pc: "ROCKETMAN",
      mobile: "ROCKETMAN"
    },
    game: "GTA San Andreas",
    category: "Vehicles"
  },
  
  // GTA Vice City Cheats
  {
    title: "Full Health and Armor",
    description: "Gives maximum health and armor.",
    code: {
      ps: "R1, R2, L1, ◯, ◁, ▽, ▷, △, ◁, ▽, ▷, △",
      xbox: "RB, RT, LB, B, Left, Down, Right, Up, Left, Down, Right, Up",
      pc: "ASPIRINE",
      mobile: "ASPIRINE"
    },
    game: "GTA Vice City",
    category: "Health"
  },
  {
    title: "All Weapons",
    description: "Gives all weapons in the game.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, △",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Up",
      pc: "NUTTERTOOLS",
      mobile: "NUTTERTOOLS"
    },
    game: "GTA Vice City",
    category: "Weapons"
  },
  {
    title: "Spawn Tank",
    description: "Spawns a Rhino tank.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, L2, R1, △, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y",
      pc: "PANZER",
      mobile: "PANZER"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  
  // GTA III Cheats
  {
    title: "Full Health",
    description: "Restores health to maximum.",
    code: {
      ps: "R2, ◯, R2, L1, L2, L1, X, ◻",
      xbox: "RT, B, RT, LB, LT, LB, A, X",
      pc: "GESUNDHEIT",
      mobile: "GESUNDHEIT"
    },
    game: "GTA III",
    category: "Health"
  },
  {
    title: "All Weapons",
    description: "Gives all weapons in the game.",
    code: {
      ps: "R2, ◯, R2, R1, L2, L1, X, △",
      xbox: "RT, B, RT, RB, LT, LB, A, Y",
      pc: "GUNSGUNSGUNS",
      mobile: "GUNSGUNSGUNS"
    },
    game: "GTA III",
    category: "Weapons"
  },
  {
    title: "Raise Wanted Level",
    description: "Increases wanted level by 2 stars.",
    code: {
      ps: "R2, R2, L1, R2, ◁, ▷, ◁, ▷",
      xbox: "RT, RT, LB, RT, Left, Right, Left, Right",
      pc: "MOREPOLICEPLEASE",
      mobile: "MOREPOLICEPLEASE"
    },
    game: "GTA III",
    category: "Wanted Level"
  },
];

export const getGameById = (id: string): GameInfo | undefined => {
  return games.find(game => game.id === id);
};

export const getCheatsByGame = (game: GameTitle): CheatCode[] => {
  return cheatCodes.filter(cheat => cheat.game === game);
};

export const getCategories = (game: GameTitle): string[] => {
  const cheats = getCheatsByGame(game);
  const categories = new Set(cheats.map(cheat => cheat.category));
  return Array.from(categories).sort();
};

export const searchCheats = (query: string): CheatCode[] => {
  const lowerQuery = query.toLowerCase();
  return cheatCodes.filter(cheat =>
    cheat.title.toLowerCase().includes(lowerQuery) ||
    cheat.description.toLowerCase().includes(lowerQuery) ||
    cheat.category.toLowerCase().includes(lowerQuery) ||
    cheat.game.toLowerCase().includes(lowerQuery)
  );
};
