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
    image: "/images/gta5-cover.jpg",
    description: "Grand Theft Auto V is a 2013 action-adventure game set in the fictional state of San Andreas.",
    platforms: ["ps", "xbox", "pc"]
  },
  {
    id: "gta4",
    title: "GTA IV",
    releaseYear: "2008",
    image: "/images/gta4-cover.jpg",
    description: "Grand Theft Auto IV follows Niko Bellic, an Eastern European immigrant who comes to Liberty City to pursue the American Dream.",
    platforms: ["ps", "xbox", "pc"]
  },
  {
    id: "gtasa",
    title: "GTA San Andreas",
    releaseYear: "2004",
    image: "/images/gtasa-cover.jpg",
    description: "Grand Theft Auto: San Andreas follows Carl Johnson's return to San Andreas after learning about his mother's murder.",
    platforms: ["ps", "xbox", "pc", "mobile"]
  },
  {
    id: "gtavc",
    title: "GTA Vice City",
    releaseYear: "2002",
    image: "/images/gtavc-cover.jpg",
    description: "Grand Theft Auto: Vice City is set in 1986 within the fictional Vice City, based on Miami.",
    platforms: ["ps", "xbox", "pc", "mobile"]
  },
  {
    id: "gta3",
    title: "GTA III",
    releaseYear: "2001",
    image: "/images/gta3-cover.jpg",
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
    title: "Recharge Special Ability",
    description: "Instantly recharges your character's special ability.",
    code: {
      ps: "△, △, ◻, ◯, ◻, ◯, ◻, ◯, ◻",
      xbox: "Y, Y, X, B, X, B, X, B, X",
      pc: "POWERUP"
    },
    game: "GTA V",
    category: "Health"
  },
  {
    title: "Skyfall",
    description: "Spawns the player high in the air for a freefall.",
    code: {
      ps: "L1, L2, R1, R2, ◁, ▷, ◁, ▷, L1, L2, R1, R2, ◁, ▷, ◁, ▷",
      xbox: "LB, LT, RB, RT, Left, Right, Left, Right, LB, LT, RB, RT, Left, Right, Left, Right",
      pc: "SKYFALL"
    },
    game: "GTA V",
    category: "Player Abilities"
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
  {
    title: "Fast Run",
    description: "Increases the player's running speed.",
    code: {
      ps: "△, ◁, ▷, ▷, L2, L1, ◻",
      xbox: "Y, Left, Right, Right, LT, LB, X",
      pc: "CATCHME"
    },
    game: "GTA V",
    category: "Player Abilities"
  },
  {
    title: "Fast Swim",
    description: "Increases the player's swimming speed.",
    code: {
      ps: "◁, ◁, L1, ▷, ▷, R2, ◁, L2, ▷",
      xbox: "Left, Left, LB, Right, Right, RT, Left, LT, Right",
      pc: "GOTGILLS"
    },
    game: "GTA V",
    category: "Player Abilities"
  },
  {
    title: "Explosive Melee Attacks",
    description: "Your melee attacks cause explosions.",
    code: {
      ps: "▷, ◁, △, △, ◻, ◯, ◻",
      xbox: "Right, Left, Y, Y, X, B, X",
      pc: "HOTHANDS"
    },
    game: "GTA V",
    category: "Player Abilities"
  },
  {
    title: "Explosive Bullets",
    description: "Your bullets cause explosions on impact.",
    code: {
      ps: "▷, ◻, X, ◁, R1, R2, ◁, ▷, ◻, L1, L1, L1",
      xbox: "Right, X, A, Left, RB, RT, Left, Right, X, LB, LB, LB",
      pc: "HIGHEX"
    },
    game: "GTA V",
    category: "Weapons"
  },
  {
    title: "Flaming Bullets",
    description: "Your bullets set targets on fire.",
    code: {
      ps: "L1, R1, ◻, R1, ◁, R2, R1, ◁, ◻, ▷, L1, L1",
      xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Right, LB, LB",
      pc: "INCENDIARY"
    },
    game: "GTA V",
    category: "Weapons"
  },
  {
    title: "Spawn Buzzard Attack Helicopter",
    description: "Spawns a Buzzard attack helicopter.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, L2, R1, △, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y",
      pc: "BUZZOFF"
    },
    game: "GTA V",
    category: "Vehicles"
  },
  {
    title: "Spawn Comet",
    description: "Spawns a Comet sports car.",
    code: {
      ps: "R1, ◯, R2, ▷, L1, L2, X, X, ◻, R1",
      xbox: "RB, B, RT, Right, LB, LT, A, A, X, RB",
      pc: "COMET"
    },
    game: "GTA V",
    category: "Vehicles"
  },
  {
    title: "Spawn BMX",
    description: "Spawns a BMX bicycle.",
    code: {
      ps: "◁, ◁, ▷, ▷, ◁, ▷, ◻, ◯, △, R1, R2",
      xbox: "Left, Left, Right, Right, Left, Right, X, B, Y, RB, RT",
      pc: "BANDIT"
    },
    game: "GTA V",
    category: "Vehicles"
  },
  {
    title: "Spawn Sanchez",
    description: "Spawns a Sanchez dirt bike.",
    code: {
      ps: "◯, X, L1, ◯, ◯, L1, ◯, R1, R2, L2, L1, L1",
      xbox: "B, A, LB, B, B, LB, B, RB, RT, LT, LB, LB",
      pc: "OFFROAD"
    },
    game: "GTA V",
    category: "Vehicles"
  },
  {
    title: "Spawn Trashmaster",
    description: "Spawns a Trashmaster garbage truck.",
    code: {
      ps: "◯, R1, ◯, R1, ◁, ◁, R1, L1, ◯, ▷",
      xbox: "B, RB, B, RB, Left, Left, RB, LB, B, Right",
      pc: "TRASHED"
    },
    game: "GTA V",
    category: "Vehicles"
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
    title: "Clear Wanted Level",
    description: "Removes all stars from your wanted level.",
    code: {
      ps: "R1, R1, ◯, R2, ▷, ◁, ▷, ◁, ▷, ◁",
      xbox: "RB, RB, B, RT, Right, Left, Right, Left, Right, Left",
      pc: "CLEANBADBOYS"
    },
    game: "GTA V",
    category: "Wanted Level"
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
    title: "Restore Health",
    description: "Fully restores your health.",
    code: {
      ps: "◯, L2, △, ◻, ◁, X, R1, ◯",
      xbox: "B, LT, Y, X, Left, A, RB, B",
      pc: "468-555-0100"
    },
    game: "GTA IV",
    category: "Health"
  },
  {
    title: "Restore Armor",
    description: "Fully restores your armor.",
    code: {
      ps: "△, △, ◁, ▷, ◯, ◯, L1, L2",
      xbox: "Y, Y, Left, Right, B, B, LB, LT",
      pc: "362-555-0100"
    },
    game: "GTA IV",
    category: "Health"
  },
  {
    title: "Spawn Annihilator",
    description: "Spawns an Annihilator helicopter.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, L2, R1, △, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y",
      pc: "359-555-0100"
    },
    game: "GTA IV",
    category: "Vehicles"
  },
  {
    title: "Spawn Cognoscenti",
    description: "Spawns a Cognoscenti luxury car.",
    code: {
      ps: "◯, L1, ◻, R2, ◁, R1, ◻, ▷, ◯, L2",
      xbox: "B, LB, X, RT, Left, RB, X, Right, B, LT",
      pc: "227-555-0142"
    },
    game: "GTA IV",
    category: "Vehicles"
  },
  {
    title: "Spawn Jetmax",
    description: "Spawns a Jetmax speedboat.",
    code: {
      ps: "◁, ▷, ▷, L1, ▷, R2, ◁, L2, ▷, ◯",
      xbox: "Left, Right, Right, LB, Right, RT, Left, LT, Right, B",
      pc: "938-555-0100"
    },
    game: "GTA IV",
    category: "Vehicles"
  },
  {
    title: "Spawn NRG 900",
    description: "Spawns an NRG 900 motorcycle.",
    code: {
      ps: "◁, ◁, ▷, ▷, ◁, ▷, ◻, ◯, △, L1, L2",
      xbox: "Left, Left, Right, Right, Left, Right, X, B, Y, LB, LT",
      pc: "625-555-0100"
    },
    game: "GTA IV",
    category: "Vehicles"
  },
  {
    title: "Spawn Turismo",
    description: "Spawns a Turismo sports car.",
    code: {
      ps: "◯, ▷, L1, L2, ◁, R1, L1, △, △, X, L2",
      xbox: "B, Right, LB, LT, Left, RB, LB, Y, Y, A, LT",
      pc: "227-555-0168"
    },
    game: "GTA IV",
    category: "Vehicles"
  },
  {
    title: "Spawn SuperGT",
    description: "Spawns a SuperGT sports car.",
    code: {
      ps: "L1, ◯, R2, ▷, L1, R1, ▷, ◁, ◯, L2",
      xbox: "LB, B, RT, Right, LB, RB, Right, Left, B, LT",
      pc: "227-555-0168"
    },
    game: "GTA IV",
    category: "Vehicles"
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
    title: "Weapons Tier 2",
    description: "Provides better weapons.",
    code: {
      ps: "◯, L1, △, R2, △, X, ◻, ▷",
      xbox: "B, LB, Y, RT, Y, A, X, Right",
      pc: "486-555-0100"
    },
    game: "GTA IV",
    category: "Weapons"
  },
  {
    title: "Weapons Tier 3",
    description: "Provides advanced weapons.",
    code: {
      ps: "◯, L1, △, R2, △, X, ◻, ◁",
      xbox: "B, LB, Y, RT, Y, A, X, Left",
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
  {
    title: "Raise Wanted Level",
    description: "Increases your wanted level by one star.",
    code: {
      ps: "R1, R1, ◯, R2, ◁, ▷, ◁, ▷, ◁, ▷",
      xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right",
      pc: "267-555-0150"
    },
    game: "GTA IV",
    category: "Wanted Level"
  },
  {
    title: "Max Wanted Level",
    description: "Sets your wanted level to maximum (6 stars).",
    code: {
      ps: "◯, ▷, ◯, ▷, ◯, ▷, ◻, △, ◯",
      xbox: "B, Right, B, Right, B, Right, X, Y, B",
      pc: "267-555-0199"
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
    title: "Full Armor",
    description: "Gives maximum armor.",
    code: {
      ps: "◻, ◻, ◻, R1, ◁, ▷, ◁, ▷, ◁, ▷",
      xbox: "X, X, X, RB, Left, Right, Left, Right, Left, Right",
      pc: "BAGUVIX",
      mobile: "BAGUVIX"
    },
    game: "GTA San Andreas",
    category: "Health"
  },
  {
    title: "Infinite Health",
    description: "Makes the player invincible (except to falling and drowning).",
    code: {
      ps: "▽, X, ▷, ◁, ▷, R1, ▷, ▽, ◁, △",
      xbox: "Down, A, Right, Left, Right, RB, Right, Down, Left, Y",
      pc: "BAGUVIX",
      mobile: "BAGUVIX"
    },
    game: "GTA San Andreas",
    category: "Health"
  },
  {
    title: "Adrenaline Mode",
    description: "Everything moves in slow motion.",
    code: {
      ps: "X, X, ◻, R1, L1, ◯, ▷, ▽, ◁, △",
      xbox: "A, A, X, RB, LB, B, Right, Down, Left, Y",
      pc: "MUNASEF",
      mobile: "MUNASEF"
    },
    game: "GTA San Andreas",
    category: "Player Abilities"
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
    title: "Weapon Set 2",
    description: "Gives you the second tier of weapons.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, ▽",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Down",
      pc: "PROFESSIONALSKIT",
      mobile: "PROFESSIONALSKIT"
    },
    game: "GTA San Andreas",
    category: "Weapons"
  },
  {
    title: "Weapon Set 3",
    description: "Gives you the third tier of weapons.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, ▷",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Right",
      pc: "UZUMYMW",
      mobile: "UZUMYMW"
    },
    game: "GTA San Andreas",
    category: "Weapons"
  },
  {
    title: "Infinite Ammo",
    description: "Gives unlimited ammunition for all weapons.",
    code: {
      ps: "L1, R1, ◻, R1, ◁, R2, R1, ◁, ◻, ▷, L1, L1",
      xbox: "LB, RB, X, RB, Left, RT, RB, Left, X, Right, LB, LB",
      pc: "FULLCLIP",
      mobile: "FULLCLIP"
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
  {
    title: "Spawn Rhino Tank",
    description: "Spawns a military tank.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, L2, R1, △, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y",
      pc: "AIWPRTON",
      mobile: "AIWPRTON"
    },
    game: "GTA San Andreas",
    category: "Vehicles"
  },
  {
    title: "Spawn Hydra",
    description: "Spawns a military jet.",
    code: {
      ps: "△, △, ◻, ◯, ◻, ◯, ◻, ◯, △",
      xbox: "Y, Y, X, B, X, B, X, B, Y",
      pc: "JUMPJET",
      mobile: "JUMPJET"
    },
    game: "GTA San Andreas",
    category: "Vehicles"
  },
  {
    title: "Spawn Racecar",
    description: "Spawns a high-performance race car.",
    code: {
      ps: "R2, L1, ◯, ▷, L1, R1, ▷, ◁, ◯, L2",
      xbox: "RT, LB, B, Right, LB, RB, Right, Left, B, LT",
      pc: "VROCKPOKEY",
      mobile: "VROCKPOKEY"
    },
    game: "GTA San Andreas",
    category: "Vehicles"
  },
  {
    title: "Six-Star Wanted Level",
    description: "Sets your wanted level to maximum.",
    code: {
      ps: "◯, ▷, ◯, ▷, ◯, ▷, L1, L2, R1",
      xbox: "B, Right, B, Right, B, Right, LB, LT, RB",
      pc: "BRINGITON",
      mobile: "BRINGITON"
    },
    game: "GTA San Andreas",
    category: "Wanted Level"
  },
  {
    title: "Clear Wanted Level",
    description: "Removes all wanted stars.",
    code: {
      ps: "◯, ▷, ◯, ▷, ◯, ▷, ◻",
      xbox: "B, Right, B, Right, B, Right, X",
      pc: "TURNDOWNTHEHEAT",
      mobile: "TURNDOWNTHEHEAT"
    },
    game: "GTA San Andreas",
    category: "Wanted Level"
  },
  {
    title: "Never Wanted",
    description: "Police will never chase you.",
    code: {
      ps: "◯, ▷, ◯, ▷, ◯, ▷, L1, L2, R1, △",
      xbox: "B, Right, B, Right, B, Right, LB, LT, RB, Y",
      pc: "AEZAKMI",
      mobile: "AEZAKMI"
    },
    game: "GTA San Andreas",
    category: "Wanted Level"
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
    title: "Suicide",
    description: "Kills the player instantly.",
    code: {
      ps: "▷, L2, ▽, R1, L1, ◻, R1, L1, ◻, ◻",
      xbox: "Right, LT, Down, RB, LB, X, RB, LB, X, X",
      pc: "ICANTTAKEITANYMORE",
      mobile: "ICANTTAKEITANYMORE"
    },
    game: "GTA Vice City",
    category: "Health"
  },
  {
    title: "Lower Wanted Level",
    description: "Reduces your wanted level by two stars.",
    code: {
      ps: "R1, R1, ◯, R2, ◁, ▷, ◁, ▷, ◁, ▷",
      xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right",
      pc: "LEAVEMEALONE",
      mobile: "LEAVEMEALONE"
    },
    game: "GTA Vice City",
    category: "Wanted Level"
  },
  {
    title: "Raise Wanted Level",
    description: "Increases your wanted level by two stars.",
    code: {
      ps: "R1, R1, ◯, R2, ◁, ▷, ◁, ▷, ◁, ▷",
      xbox: "RB, RB, B, RT, Left, Right, Left, Right, Left, Right",
      pc: "YOUWONTTAKEMEALIVE",
      mobile: "YOUWONTTAKEMEALIVE"
    },
    game: "GTA Vice City",
    category: "Wanted Level"
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
    title: "Professional Tools",
    description: "Gives mid-tier weapons.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, ▽",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Down",
      pc: "PROFESSIONALTOOLS",
      mobile: "PROFESSIONALTOOLS"
    },
    game: "GTA Vice City",
    category: "Weapons"
  },
  {
    title: "Thug Tools",
    description: "Gives basic weapons.",
    code: {
      ps: "R1, R2, L1, R2, ◁, ▽, ▷, △, ◁, ▽, ▷, ▷",
      xbox: "RB, RT, LB, RT, Left, Down, Right, Up, Left, Down, Right, Right",
      pc: "THUGSTOOLS",
      mobile: "THUGSTOOLS"
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
  {
    title: "Spawn Bloodring Banger",
    description: "Spawns a Bloodring Banger demolition derby car.",
    code: {
      ps: "▽, R1, ◯, L2, L2, X, R1, L1, ◁, ◁",
      xbox: "Down, RB, B, LT, LT, A, RB, LB, Left, Left",
      pc: "THELASTRIDE",
      mobile: "THELASTRIDE"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  {
    title: "Spawn Hotring Racer",
    description: "Spawns a Hotring Racer NASCAR-style car.",
    code: {
      ps: "R1, ◯, R2, ▷, L1, L2, X, X, ◻, R1",
      xbox: "RB, B, RT, Right, LB, LT, A, A, X, RB",
      pc: "GETTHEREVERYFASTINDEED",
      mobile: "GETTHEREVERYFASTINDEED"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  {
    title: "Spawn Sabre Turbo",
    description: "Spawns a Sabre Turbo muscle car.",
    code: {
      ps: "▷, L2, ▽, L1, L1, X, R1, L1, ◯, R2",
      xbox: "Right, LT, Down, LB, LB, A, RB, LB, B, RT",
      pc: "GETTHEREFAST",
      mobile: "GETTHEREFAST"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  {
    title: "Spawn Trashmaster",
    description: "Spawns a Trashmaster garbage truck.",
    code: {
      ps: "◯, R1, ◯, R1, ◁, ◁, R1, L1, ◯, ▷",
      xbox: "B, RB, B, RB, Left, Left, RB, LB, B, Right",
      pc: "ITSALLBULL",
      mobile: "ITSALLBULL"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  {
    title: "Spawn Caddy",
    description: "Spawns a golf cart.",
    code: {
      ps: "◯, L1, △, R2, △, X, ◻, ◯, △",
      xbox: "B, LB, Y, RT, Y, A, X, B, Y",
      pc: "BETTERTHANWALKING",
      mobile: "BETTERTHANWALKING"
    },
    game: "GTA Vice City",
    category: "Vehicles"
  },
  {
    title: "Pink Traffic",
    description: "Makes all cars pink.",
    code: {
      ps: "◯, L1, ▽, L2, ◁, X, R1, L1, ▷, X",
      xbox: "B, LB, Down, LT, Left, A, RB, LB, Right, A",
      pc: "AHAIRDRESSERSCAR",
      mobile: "AHAIRDRESSERSCAR"
    },
    game: "GTA Vice City",
    category: "Effects"
  },
  {
    title: "Black Traffic",
    description: "Makes all cars black.",
    code: {
      ps: "◯, L2, △, R1, ◁, X, ▷, L1, L1, X",
      xbox: "B, LT, Y, RB, Left, A, Right, LB, LB, A",
      pc: "IWANTITPAINTEDBLACK",
      mobile: "IWANTITPAINTEDBLACK"
    },
    game: "GTA Vice City",
    category: "Effects"
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
    title: "Full Armor",
    description: "Gives maximum armor.",
    code: {
      ps: "R2, R2, L1, L2, ◁, ▽, ▷, △",
      xbox: "RT, RT, LB, LT, Left, Down, Right, Up",
      pc: "TORTOISE",
      mobile: "TORTOISE"
    },
    game: "GTA III",
    category: "Health"
  },
  {
    title: "Suicide",
    description: "Kills the player instantly.",
    code: {
      ps: "▷, ▷, L2, L1, ◁, ▷, ◁, ▷",
      xbox: "Right, Right, LT, LB, Left, Right, Left, Right",
      pc: "KILLME",
      mobile: "KILLME"
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
    title: "Trigger Riot",
    description: "Makes all pedestrians riot and attack each other.",
    code: {
      ps: "▽, ◁, ▷, ◁, X, R2, R1",
      xbox: "Down, Left, Right, Left, A, RT, RB",
      pc: "ITSALLGOINGMAAAD",
      mobile: "ITSALLGOINGMAAAD"
    },
    game: "GTA III",
    category: "Effects"
  },
  {
    title: "Speed Up Gameplay",
    description: "Makes the game run faster.",
    code: {
      ps: "△, ◁, ▷, ▽, L2, L1, ◻",
      xbox: "Y, Left, Right, Down, LT, LB, X",
      pc: "TIMEFLIESWHENYOU",
      mobile: "TIMEFLIESWHENYOU"
    },
    game: "GTA III",
    category: "Effects"
  },
  {
    title: "Slow Down Gameplay",
    description: "Makes the game run slower.",
    code: {
      ps: "△, ◁, ▷, ▽, L1, L2, ◻",
      xbox: "Y, Left, Right, Down, LB, LT, X",
      pc: "BOOOOORING",
      mobile: "BOOOOORING"
    },
    game: "GTA III",
    category: "Effects"
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
  {
    title: "Clear Wanted Level",
    description: "Removes all wanted stars.",
    code: {
      ps: "R2, R2, L1, R2, △, ▽, △, ▽",
      xbox: "RT, RT, LB, RT, Y, Down, Y, Down",
      pc: "NOPOLICEPLEASE",
      mobile: "NOPOLICEPLEASE"
    },
    game: "GTA III",
    category: "Wanted Level"
  },
  {
    title: "Six Star Wanted Level",
    description: "Sets your wanted level to maximum.",
    code: {
      ps: "▷, ▷, ▷, R2, ◁, ◁, ◁, ▽",
      xbox: "Right, Right, Right, RT, Left, Left, Left, Down",
      pc: "MONSTERMASH",
      mobile: "MONSTERMASH"
    },
    game: "GTA III",
    category: "Wanted Level"
  },
  {
    title: "Spawn Rhino",
    description: "Spawns a tank.",
    code: {
      ps: "◯, ◯, L1, ◯, ◯, ◯, L1, L2, R1, △, ◯, △",
      xbox: "B, B, LB, B, B, B, LB, LT, RB, Y, B, Y",
      pc: "GIVEUSATANK",
      mobile: "GIVEUSATANK"
    },
    game: "GTA III",
    category: "Vehicles"
  },
  {
    title: "Spawn Hotring Racer",
    description: "Spawns a Hotring Racer NASCAR-style car.",
    code: {
      ps: "▷, ◁, R1, R2, L1, L2, ◯, ▽",
      xbox: "Right, Left, RB, RT, LB, LT, B, Down",
      pc: "GOTOTHERACE",
      mobile: "GOTOTHERACE"
    },
    game: "GTA III",
    category: "Vehicles"
  },
  {
    title: "Spawn Bloodring Banger",
    description: "Spawns a Bloodring Banger demolition derby car.",
    code: {
      ps: "R2, ◁, ◯, ▷, L1, L2, X, X, ◻, R1",
      xbox: "RT, Left, B, Right, LB, LT, A, A, X, RB",
      pc: "NASTYLIMBSCHEAT",
      mobile: "NASTYLIMBSCHEAT"
    },
    game: "GTA III",
    category: "Vehicles"
  },
  {
    title: "Spawn Trashmaster",
    description: "Spawns a Trashmaster garbage truck.",
    code: {
      ps: "◯, R1, ◯, R1, ◁, ◁, R1, L1, ◯, ▷",
      xbox: "B, RB, B, RB, Left, Left, RB, LB, B, Right",
      pc: "RUBBISHCAR",
      mobile: "RUBBISHCAR"
    },
    game: "GTA III",
    category: "Vehicles"
  },
  {
    title: "Flying Cars",
    description: "Cars can fly when you press Up on the D-pad.",
    code: {
      ps: "▷, ▷, L1, R1, L1, ▽, ▷, △",
      xbox: "Right, Right, LB, RB, LB, Down, Right, Y",
      pc: "CHITTYCHITTYBB",
      mobile: "CHITTYCHITTYBB"
    },
    game: "GTA III",
    category: "Vehicles"
  }
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
