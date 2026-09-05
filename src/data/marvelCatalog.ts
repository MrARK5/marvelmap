import { MarvelItem } from '../types/marvel';

export const MARVEL_FRANCHISES = [
  { id: 'all', label: 'All Universes' },
  { id: 'mcu', label: 'Avengers / MCU' },
  { id: 'x-men', label: 'X-Men Universe' },
  { id: 'legacy', label: 'Legacy (Blade, Ghost Rider, etc.)' },
  { id: 'spiderman', label: 'Spider-Man Universes' },
  { id: 'animated', label: '90s Animated Classics' },
] as const;

export const MARVEL_PHASES = [
  "Phase 1: Avengers Assemble",
  "Phase 2: Age of Miracles",
  "Phase 3: Infinity War",
  "Phase 4: Multiverse",
  "Phase 5: New Heroes",
  "Phase 6: Battleworld",
  "Legacy Marvel (Pre-MCU)",
  "90s Animated Classics"
] as const;

export const MARVEL_CATALOG: MarvelItem[] = [
  {
    "id": "marvel-1",
    "order": 1,
    "title": "X-Men: The Animated Series - S01",
    "type": "TV Show",
    "year": 1992,
    "releaseDate": "Oct 1992",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "The original to X-Men'97! MAUTAS is here for X-Men'97. All fully skippable, recommended to watch a short version on YouTube for the plot.",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 4,
        "title": "Episode 1: Night of the Sentinels: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 5,
        "title": "Episode 2: Night of the Sentinels: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 6,
        "title": "Episode 3: Enter Magneto",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 7,
        "title": "Episode 4: Deadly Reunions",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 8,
        "title": "Episode 5: Captive Hearts",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 9,
        "title": "Episode 6: Cold Vengeance",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 10,
        "title": "Episode 7: Slave Island",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 11,
        "title": "Episode 8: The Unstoppable Juggernaut",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 12,
        "title": "Episode 9: The Cure",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 13,
        "title": "Episode 10: Come the Apocalypse",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 14,
        "title": "Episode 11: Days of Future Past Part I",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 15,
        "title": "Episode 12: Days of Future Past Part II",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 16,
        "title": "Episode 13: The Final Decision",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "X-Men TAS"
  },
  {
    "id": "marvel-2",
    "order": 2,
    "title": "X-Men: The Animated Series - S02",
    "type": "TV Show",
    "year": 1993,
    "releaseDate": "Nov 1993",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 18,
        "title": "Episode 1: 'Til Death Do Us Part: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 19,
        "title": "Episode 2: 'Til Death Do Us Part: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 20,
        "title": "Episode 3: Whatever It Takes",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 21,
        "title": "Episode 4: Red Dawn",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 22,
        "title": "Episode 5: Repo Man",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 23,
        "title": "Episode 6: X-Ternally Yours",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 24,
        "title": "Episode 7: Time Fugitives: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 25,
        "title": "Episode 8: Time Fugitives: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 26,
        "title": "Episode 9: A Rogue's Tale",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 27,
        "title": "Episode 10: Beauty and the Beast",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 28,
        "title": "Episode 11: MojoVision",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 29,
        "title": "Episode 12: Reunion: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 30,
        "title": "Episode 13: Reunion: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "X-Men TAS"
  },
  {
    "id": "marvel-3",
    "order": 3,
    "title": "X-Men: The Animated Series - S03",
    "type": "TV Show",
    "year": 1994,
    "releaseDate": "Jul 1994",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "6h 58m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 32,
        "title": "Episode 1: Out of the Past: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 33,
        "title": "Episode 2: Out of the Past: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 34,
        "title": "Episode 3: Phoenix Saga: Part 1 - Sacrifice",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 35,
        "title": "Episode 4: Phoenix Saga: Part 2 - The Dark Shroud",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 36,
        "title": "Episode 5: Phoenix Saga: Part 3 - The Cry of the Banshee",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 37,
        "title": "Episode 6: Phoenix Saga: Part 4 - The Starjammers",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 38,
        "title": "Episode 7: Phoenix Saga: Part 5 - Child of Light",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 39,
        "title": "Episode 8 Savage Land, Savage Heart: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 40,
        "title": "Episode 9 Savage Land, Savage Heart: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 41,
        "title": "Episode 10: Obsession",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 42,
        "title": "Episode 11: Dark Phoenix: Part 1 - Dazzler",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 43,
        "title": "Episode 12: Dark Phoenix: Part 2 - Inner Circle",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 44,
        "title": "Episode 13: Dark Phoenix: Part 3 - The Dark Phoenix",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 45,
        "title": "Episode 14: Dark Phoenix: Part 4 - The Fate of the Phoenix",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 46,
        "title": "Episode 15: Cold Comfort",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 47,
        "title": "Episode 16: Orphan's End",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 48,
        "title": "Episode 17: The Juggernaut Returns",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 49,
        "title": "Episode 18: Nightcrawler",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 50,
        "title": "Episode 19: Weapon X, Lies, and Videotape",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 19,
    "franchise": "animated",
    "subfranchise": "X-Men TAS"
  },
  {
    "id": "marvel-4",
    "order": 4,
    "title": "X-Men: The Animated Series - S04",
    "type": "TV Show",
    "year": 1995,
    "releaseDate": "Sep 1995",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "6h 14m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 52,
        "title": "Episode 1: One Man's Worth: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 53,
        "title": "Episode 2: One Man's Worth: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 54,
        "title": "Episode 3: Courage",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 55,
        "title": "Episode 4: Proteus: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 56,
        "title": "Episode 5: Proteus: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 57,
        "title": "Episode 6 Sanctuary: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 58,
        "title": "Episode 7 Sanctuary: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 59,
        "title": "Episode 8: Beyond Good & Evil: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 60,
        "title": "Episode 9: Beyond Good & Evil: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 61,
        "title": "Episode 10: Beyond Good & Evil: Part 3",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 62,
        "title": "Episode 11: Beyond Good & Evil: Part 4",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 63,
        "title": "Episode 12: Have Yourself a Morlock Little Christmas",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 64,
        "title": "Episode 13: Lotus and the Steel",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 65,
        "title": "Episode 14: Love in Vain",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 66,
        "title": "Episode 15 Secrets, Not Long Buried",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 67,
        "title": "Episode 16: Xavier Remembers",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 68,
        "title": "Episode 17: Family Ties",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 17,
    "franchise": "animated",
    "subfranchise": "X-Men TAS"
  },
  {
    "id": "marvel-5",
    "order": 5,
    "title": "X-Men: The Animated Series - S05",
    "type": "TV Show",
    "year": 1996,
    "releaseDate": "Sep 1996",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "5h 08m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 70,
        "title": "Episode 1: The Phalanx Covenant: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 71,
        "title": "Episode 2: The Phalanx Covenant: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 72,
        "title": "Episode 3: A Deal with the Devil",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 73,
        "title": "Episode 4: No Mutant Is an Island",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 74,
        "title": "Episode 5 Longshot",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 75,
        "title": "Episode 6 Bloodlines",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 76,
        "title": "Episode 7: Storm Front Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 77,
        "title": "Episode 8: Storm Front Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 78,
        "title": "Episode 9: Jubilee's Fairytale Theatre",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 79,
        "title": "Episode 10: The Fifth Horseman",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 80,
        "title": "Episode 11: Old Soldiers",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 81,
        "title": "Episode 12: Descent",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 82,
        "title": "Episode 13: Hidden Agendas",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 83,
        "title": "Episode 14: Graduation Day",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 14,
    "franchise": "animated",
    "subfranchise": "X-Men TAS"
  },
  {
    "id": "marvel-6",
    "order": 6,
    "title": "Spider-Man: The Animated Series - S01",
    "type": "TV Show",
    "year": 1994,
    "releaseDate": "Nov 1994",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 85,
        "title": "Episode 1: Night of the Lizard",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 86,
        "title": "Episode 2: The Spider Slayer",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 87,
        "title": "Episode 3: Return of the Spider Slayers",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 88,
        "title": "Episode 4: Doctor Octopus: Armed and Dangerous",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 89,
        "title": "Episode 5: The Menace of Mysterio",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 90,
        "title": "Episode 6: The Sting of the Scorpion",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 91,
        "title": "Episode 7: Kraven the Hunter",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 92,
        "title": "Episode 8: The Alien Costume, Part I",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 93,
        "title": "Episode 9: The Alien Costume, Part II",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 94,
        "title": "Episode 10: The Alien Costume, Part III",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 95,
        "title": "Episode 11: The Hobgoblin, Part I",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 96,
        "title": "Episode 12: The Hobgoblin, Part II",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 97,
        "title": "Episode 13: Day of the Chameleon",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-7",
    "order": 7,
    "title": "Iron Man: The Animated Series - S01",
    "type": "TV Show",
    "year": 1994,
    "releaseDate": "Sep 1994",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 99,
        "title": "Episode 1: And the Sea Shall Give Up Its Dead",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 100,
        "title": "Episode 2: Rejoice! I Am Ultimo, Thy Deliverer",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 101,
        "title": "Episode 3: Data In, Chaos Out",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 102,
        "title": "Episode 4 Silence My Companion, Death My Destination",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 103,
        "title": "Episode 5: The Grim Reaper Wears a Teflon Coat",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 104,
        "title": "Episode 6: Enemy Within, Enemy Without",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 105,
        "title": "Episode 7: The Origin of the Mandarin",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 106,
        "title": "Episode 8: The Defection of Hawkeye",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 107,
        "title": "Episode 9: Iron Man to the Second Power, Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 108,
        "title": "Episode 10: Iron Man to the Second Power, Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 109,
        "title": "Episode 11: The Origin of Iron Man, Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 110,
        "title": "Episode 12: The Origin of Iron Man, Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 111,
        "title": "Episode 13: The Wedding of Iron Man",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-8",
    "order": 8,
    "title": "Fantastic Four: The Animated Series - S01",
    "type": "TV Show",
    "year": 1994,
    "releaseDate": "Sep 1994",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 113,
        "title": "Episode 1: The Origin of the Fantastic Four: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 114,
        "title": "Episode 2: The Origin of the Fantastic Four: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 115,
        "title": "Episode 3: Now Comes the Sub-Mariner",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 116,
        "title": "Episode 4: Incursion of the Skrulls",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 117,
        "title": "Episode 5: The Silver Surfer & the Coming of Galactus: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 118,
        "title": "Episode 6: The Silver Surfer & the Coming of Galactus: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 119,
        "title": "Episode 7 Super Skrull",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 120,
        "title": "Episode 8: The Mask of Doom: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 121,
        "title": "Episode 9: The Mask of Doom: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 122,
        "title": "Episode 10: The Mask of Doom: Part 3",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 123,
        "title": "Episode 11: Mole Man",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 124,
        "title": "Episode 12: Behold the Negative Zone",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 125,
        "title": "Episode 13: The Silver Surfer & the Return of Galactus",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-9",
    "order": 9,
    "title": "Spider-Man: The Animated Series S02",
    "type": "TV Show",
    "year": 1995,
    "releaseDate": "Sep 1995",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "5h 08m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 127,
        "title": "Episode 1: The Neogenic Nightmare Chapter I: The Insidious Six",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 128,
        "title": "Episode 2: The Neogenic Nightmare Chapter II: Battle of the Insidious Six",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 129,
        "title": "Episode 3: The Neogenic Nightmare Chapter III: Hydro-Man",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 130,
        "title": "Episode 4: The Neogenic Nightmare Chapter IV: The Mutant Agenda",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 131,
        "title": "Episode 5: The Neogenic Nightmare Chapter V: Mutants' Revenge",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 132,
        "title": "Episode 6: The Neogenic Nightmare Chapter VI: Morbius",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 133,
        "title": "Episode 7: The Neogenic Nightmare Chapter VII: Enter the Punisher",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 134,
        "title": "Episode 8: The Neogenic Nightmare Chapter VIII: Duel of the Hunters",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 135,
        "title": "Episode 9: The Neogenic Nightmare Chapter IX: Blade the Vampire Hunter",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 136,
        "title": "Episode 10: The Neogenic Nightmare Chapter X: The Immortal Vampire",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 137,
        "title": "Episode 11: The Neogenic Nightmare Chapter XI: Tablet of Time",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 138,
        "title": "Episode 12: The Neogenic Nightmare Chapter XII: Ravages of Time",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 139,
        "title": "Episode 13: The Neogenic Nightmare Chapter XIII Shriek of the Vulture",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 140,
        "title": "Episode 14: The Neogenic Nightmare Chapter XIV: The Final Nightmare",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 14,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-10",
    "order": 10,
    "title": "Iron Man: The Animated Series S02",
    "type": "TV Show",
    "year": 1995,
    "releaseDate": "Sep 1995",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 142,
        "title": "Episode 1: The Beast Within",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 143,
        "title": "Episode 2: Fire and Rain",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 144,
        "title": "Episode 3: Cell of Iron",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 145,
        "title": "Episode 4: Not Far From the Tree",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 146,
        "title": "Episode 5: Beauty Knows No Pain",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 147,
        "title": "Episode 6: Iron Man, on the Inside",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 148,
        "title": "Episode 7: Distant Boundaries",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 149,
        "title": "Episode 8: The Armor Wars: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 150,
        "title": "Episode 9: The Armor Wars: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 151,
        "title": "Episode 10: Empowered",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 152,
        "title": "Episode 11: Hulk Buster",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 153,
        "title": "Episode 12: Hands of the Mandarin: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 154,
        "title": "Episode 13: Hands of the Mandarin: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-11",
    "order": 11,
    "title": "Fantastic Four: The Animated Series S02",
    "type": "TV Show",
    "year": 1995,
    "releaseDate": "Sep 1995",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 156,
        "title": "Episode 1: And a Blind Man Shall Lead Them",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 157,
        "title": "Episode 2: Inhumans Saga: Part 1 - And the Wind Cries Medusa",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 158,
        "title": "Episode 3: Inhumans Saga: Part 2 - The Inhumans Among Us",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 159,
        "title": "Episode 4: Inhumans Saga: Part 3 - Beware the Hidden Land",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 160,
        "title": "Episode 5: Worlds Within Worlds",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 161,
        "title": "Episode 6: To Battle the Living Planet",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 162,
        "title": "Episode 7: Prey of the Black Panther",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 163,
        "title": "Episode 8: When Calls Galactus",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 164,
        "title": "Episode 9: Nightmare in Green",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 165,
        "title": "Episode 10: Behold, a Distant Star",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 166,
        "title": "Episode 11: Hopelessly Impossible",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 167,
        "title": "Episode 12: The Sentry Sinister",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 168,
        "title": "Episode 13: Doomsday",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-12",
    "order": 12,
    "title": "The Incredible Hulk: The Animated Series S01",
    "type": "TV Show",
    "year": 1996,
    "releaseDate": "Sep 1996",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.6,
    "episodes": [
      {
        "rowNum": 170,
        "title": "Episode 1: Return of the Beast: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 171,
        "title": "Episode 2: Return of the Beast: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 172,
        "title": "Episode 3: Raw Power",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 173,
        "title": "Episode 4: Helping Hands, Iron Fist",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 174,
        "title": "Episode 5: Innocent Blood",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 175,
        "title": "Episode 6: Man to Man, Beast to Beast",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 176,
        "title": "Episode 7: Doomed",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 177,
        "title": "Episode 8: Fantastic Fortitude",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 178,
        "title": "Episode 9: Mortal Bounds",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 179,
        "title": "Episode 10: And the Wind Cries... Wendigo!",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 180,
        "title": "Episode 11: Darkness and Light: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 181,
        "title": "Episode 12: Darkness and Light: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 182,
        "title": "Episode 13: Darkness and Light: Part 3",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-13",
    "order": 13,
    "title": "Spider-Man: The Animated Series S03",
    "type": "TV Show",
    "year": 1996,
    "releaseDate": "Oct 1996",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "5h 08m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 184,
        "title": "Episode 1 Sins of the Fathers Chapter I: Doctor Strange",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 185,
        "title": "Episode 2 Sins of the Fathers Chapter II: Make a Wish",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 186,
        "title": "Episode 3 Sins of the Fathers Chapter III: Attack of the Octobot",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 187,
        "title": "Episode 4 Sins of the Fathers Chapter IV: Enter the Green Goblin",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 188,
        "title": "Episode 5 Sins of the Fathers Chapter V: Rocket Racer",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 189,
        "title": "Episode 6 Sins of the Fathers Chapter VI: Framed",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 190,
        "title": "Episode 7 Sins of the Fathers Chapter VII: The Man Without Fear",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 191,
        "title": "Episode 8 Sins of the Fathers Chapter VIII: The Ultimate Slayer",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 192,
        "title": "Episode 9 Sins of the Fathers Chapter IX: Tombstone",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 193,
        "title": "Episode 10 Sins of the Fathers Chapter X: Venom Returns",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 194,
        "title": "Episode 11 Sins of the Fathers Chapter XI: Carnage",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 195,
        "title": "Episode 12 Sins of the Fathers Chapter XII: The Spot",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 196,
        "title": "Episode 13 Sins of the Fathers Chapter XIII: Goblin War!",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 197,
        "title": "Episode 14 Sins of the Fathers Chapter XIV: Turning Point",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 14,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-14",
    "order": 14,
    "title": "The Incredible Hulk: The Animated Series S02",
    "type": "TV Show",
    "year": 1997,
    "releaseDate": "Sep 1997",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Marvel Action Universe\n[Earth 534834]",
    "runtime": "2h 56m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.6,
    "episodes": [
      {
        "rowNum": 199,
        "title": "Episode 1: Hulk of a Different Color",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 200,
        "title": "Episode 2: Down Memory Lane",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 201,
        "title": "Episode 3: Mind Over Anti-Matter",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 202,
        "title": "Episode 4: They Call Me Mr. Fixit",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 203,
        "title": "Episode 5: Fashion Warriors",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 204,
        "title": "Episode 6: Hollywood Rocks",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 205,
        "title": "Episode 7: The Lost Village",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      },
      {
        "rowNum": 206,
        "title": "Episode 8: Mission: Incredible",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Marvel Action Universe\n[Earth 534834]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-15",
    "order": 15,
    "title": "Spider-Man: The Animated Series S04",
    "type": "TV Show",
    "year": 1997,
    "releaseDate": "Sep 1997",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "4h 02m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 208,
        "title": "Episode 1: Partners in Danger Chapter I: Guilty",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 209,
        "title": "Episode 2: Partners in Danger Chapter II: The Cat",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 210,
        "title": "Episode 3: Partners in Danger Chapter III: The Black Cat",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 211,
        "title": "Episode 4: Partners in Danger Chapter IV: The Return of Kraven",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 212,
        "title": "Episode 5: Partners in Danger Chapter V: Partners",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 213,
        "title": "Episode 6: Partners in Danger Chapter VI: The Awakening",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 214,
        "title": "Episode 7: Partners in Danger Chapter VII: The Vampire Queen",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 215,
        "title": "Episode 8: Partners in Danger Chapter VIII: The Return of the Green Goblin",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 216,
        "title": "Episode 9: Partners in Danger Chapter IX: The Haunting of Mary Jane",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 217,
        "title": "Episode 10: Partners in Danger Chapter X: Lizard King",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 218,
        "title": "Episode 11: Partners in Danger Chapter XI The Prowler",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 11,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-16",
    "order": 16,
    "title": "Silver Surfer: The Animated Series S01",
    "type": "TV Show",
    "year": 1998,
    "releaseDate": "Feb 1998",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Silver Surfer Animated\n[Earth 634962]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Part of the 90s Marvel Animated Universe, but exists in its own continuity due to contradictions with the Fantastic Four animated series.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 220,
        "title": "Episode 1: The Origin of the Silver Surfer: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 221,
        "title": "Episode 2: The Origin of the Silver Surfer: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 222,
        "title": "Episode 3: The Origin of the Silver Surfer: Part 3",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 223,
        "title": "Episode 4: The Planet of Dr. Moreau",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 224,
        "title": "Episode 5: Learning Curve: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 225,
        "title": "Episode 6: Learning Curve: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 226,
        "title": "Episode 7: Innervisions",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 227,
        "title": "Episode 8: Antibody",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 228,
        "title": "Episode 9: Second Foundation",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 229,
        "title": "Episode 10: Radical Justice",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 230,
        "title": "Episode 11: The Forever War",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 231,
        "title": "Episode 12: Return to Zenn-La",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      },
      {
        "rowNum": 232,
        "title": "Episode 13: The End of Eternity",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Silver Surfer Animated\n[Earth 634962]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-17",
    "order": 17,
    "title": "Spider-Man: The Animated Series S05",
    "type": "TV Show",
    "year": 1998,
    "releaseDate": "Jan 1998",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 234,
        "title": "Episode 1: The Wedding",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 235,
        "title": "Episode 2 Six Forgotten Warriors Chapter I",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 236,
        "title": "Episode 3 Six Forgotten Warriors Chapter II: Unclaimed Legacy",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 237,
        "title": "Episode 4 Six Forgotten Warriors Chapter III Secrets of the Six",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 238,
        "title": "Episode 5 Six Forgotten Warriors Chapter IV: The Six Fight Again",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 239,
        "title": "Episode 6 Six Forgotten Warriors Chapter V: The Price of Heroism",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 240,
        "title": "Episode 7: Return of Water-Man: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 241,
        "title": "Episode 8: Return of Water-Man: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 242,
        "title": "Episode 9 Secret Wars Chapter I: Arrival",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 243,
        "title": "Episode 10 Secret Wars Chapter II: The Gauntlet of the Red Skull",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 244,
        "title": "Episode 11 Secret Wars Chapter III: Doom",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 245,
        "title": "Episode 12 Spider Wars Chapter I: I Really, Really Hate Clones",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 246,
        "title": "Episode 13 Spider Wars Chapter II: Farewell, Spider-Man",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-18",
    "order": 18,
    "title": "Spider-Man Unlimited S01",
    "type": "TV Show",
    "year": 1999,
    "releaseDate": "Oct 1999",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "Spider-Man Unlimited\n[Earth 751263]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "A separate Spider-Man continuity from The Animated Series, but still adjacent and a part of the 90s Marvel Animated Universe.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 248,
        "title": "Episode 1: Worlds Apart: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 249,
        "title": "Episode 2: Worlds Apart: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 250,
        "title": "Episode 3: Where Evil Nests",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 251,
        "title": "Episode 4: Deadly Choices",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 252,
        "title": "Episode 5 Steel Cold Heart",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 253,
        "title": "Episode 6: Enter the Hunter!",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 254,
        "title": "Episode 7: Cry Vulture",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 255,
        "title": "Episode 8: Ill-Met by Moonlight",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 256,
        "title": "Episode 9 Sustenance",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 257,
        "title": "Episode 10: Matters of the Heart",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 258,
        "title": "Episode 11: One Is the Loneliest Number",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 259,
        "title": "Episode 12: Sins of the Fathers",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      },
      {
        "rowNum": 260,
        "title": "Episode 13 Destiny Unleashed",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "Spider-Man Unlimited\n[Earth 751263]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "Spider-Man TAS"
  },
  {
    "id": "marvel-19",
    "order": 19,
    "title": "The Avengers: United They Stand S01",
    "type": "TV Show",
    "year": 1999,
    "releaseDate": "Oct 1999",
    "phase": "MAUTAS (90s Animated)",
    "saga": "90s Animated Universe",
    "universe": "The Avengers UTS\n[Earth 730784]",
    "runtime": "4h 46m\n(0h 22m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Part of the 90s Marvel Animated Universe, but exists as its own separate continuity.",
    "rating": 8.0,
    "episodes": [
      {
        "rowNum": 262,
        "title": "Episode 1: Avengers Assemble: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 263,
        "title": "Episode 2: Avengers Assemble: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 264,
        "title": "Episode 3: Kang",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 265,
        "title": "Episode 4: Comes a Swordsman",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 266,
        "title": "Episode 5: Remnants",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 267,
        "title": "Episode 6: Command Decision",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 268,
        "title": "Episode 7: To Rule Atlantis",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 269,
        "title": "Episode 8 Shooting Stars",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 270,
        "title": "Episode 9: What a Vision Has to Do",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 271,
        "title": "Episode 10: Egg-Streme Vengeance",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 272,
        "title": "Episode 11: The Sorceress's Apprentice",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 273,
        "title": "Episode 12: Earth and Fire: Part 1",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      },
      {
        "rowNum": 274,
        "title": "Episode 13: Earth and Fire: Part 2",
        "runtime": "0h 22m",
        "postCredits": "❌ No",
        "universe": "The Avengers UTS\n[Earth 730784]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "animated",
    "subfranchise": "90s Animated"
  },
  {
    "id": "marvel-20",
    "order": 20,
    "title": "Howard the Duck",
    "type": "Movie",
    "year": 1986,
    "releaseDate": "Aug 1986",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Howard The Duck Universe\n[Earth 58470]",
    "runtime": "1h 50m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "An honourable inclusion: officially Marvel's first live-action movie to hit cinemas.\nFair warning, this one is definitely not for kids!",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Howard the Duck"
  },
  {
    "id": "marvel-21",
    "order": 21,
    "title": "Blade",
    "type": "Movie",
    "year": 1998,
    "releaseDate": "Aug 1998",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Blade Universe\n[Earth 26320]",
    "runtime": "2h 00m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Blade"
  },
  {
    "id": "marvel-22",
    "order": 22,
    "title": "X-Men",
    "type": "Movie",
    "year": 2000,
    "releaseDate": "Jul 2000",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Foxverse (X-Men Original Trilogy)\n[Earth 41578]",
    "runtime": "1h 44m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 8.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-23",
    "order": 23,
    "title": "Blade 2",
    "type": "Movie",
    "year": 2002,
    "releaseDate": "Mar 2002",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Blade Universe\n[Earth 26320]",
    "runtime": "1h 57m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Blade"
  },
  {
    "id": "marvel-24",
    "order": 24,
    "title": "Spider-Man",
    "type": "Movie",
    "year": 2002,
    "releaseDate": "May 2002",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "The Raimiverse\n[Earth 96283]",
    "runtime": "2h 01m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Raimi Trilogy"
  },
  {
    "id": "marvel-25",
    "order": 25,
    "title": "Daredevil",
    "type": "Movie",
    "year": 2003,
    "releaseDate": "Feb 2003",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Daredevil Universe\n[Earth 701306]",
    "runtime": "1h 43m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "Director’s Cut adds around 30mins more to the movie and is considered a MUCH better film.",
    "rating": 8.6,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Daredevil & Elektra"
  },
  {
    "id": "marvel-26",
    "order": 26,
    "title": "Hulk",
    "type": "Movie",
    "year": 2003,
    "releaseDate": "Jun 2003",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Hulk Universe\n[Earth 400083]",
    "runtime": "2h 18m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "This is not connected to the MCU hulk.\nThis is a seperate universe.",
    "rating": 6.6,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Hulk (2003)"
  },
  {
    "id": "marvel-27",
    "order": 27,
    "title": "X2",
    "type": "Movie",
    "year": 2003,
    "releaseDate": "May 2003",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Foxverse (X-Men Original Trilogy)\n[Earth 41578]",
    "runtime": "2h 14m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-28",
    "order": 28,
    "title": "Spider-Man 2",
    "type": "Movie",
    "year": 2004,
    "releaseDate": "Jun 2004",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "The Raimiverse\n[Earth 96283]",
    "runtime": "2h 07m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Raimi Trilogy"
  },
  {
    "id": "marvel-29",
    "order": 29,
    "title": "Blade Trinity",
    "type": "Movie",
    "year": 2004,
    "releaseDate": "Dec 2004",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Blade Universe\n[Earth 26320]",
    "runtime": "1h 53m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Blade"
  },
  {
    "id": "marvel-30",
    "order": 30,
    "title": "The Punisher",
    "type": "Movie",
    "year": 2004,
    "releaseDate": "Apr 2004",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "The Punisher Universe\n[Earth 58732]",
    "runtime": "2h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 8.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "The Punisher"
  },
  {
    "id": "marvel-31",
    "order": 31,
    "title": "Elektra",
    "type": "Movie",
    "year": 2005,
    "releaseDate": "Jan 2005",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Daredevil Universe\n[Earth 701306]",
    "runtime": "1h 37m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "Sequel/Spin off to Daredevil (2003).",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Daredevil & Elektra"
  },
  {
    "id": "marvel-32",
    "order": 32,
    "title": "Fantastic Four",
    "type": "Movie",
    "year": 2005,
    "releaseDate": "Jul 2005",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Fantastic Four Universe\n[Earth 121698]",
    "runtime": "1h 46m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Fantastic Four"
  },
  {
    "id": "marvel-33",
    "order": 33,
    "title": "X-Men The Last Stand",
    "type": "Movie",
    "year": 2006,
    "releaseDate": "May 2006",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Foxverse (X-Men Original Trilogy)\n[Earth 41578]",
    "runtime": "1h 44m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": false,
    "notes": "Important post-credits scene wasn't included with every release and people didn't even know it existed!\nWATCH HERE.",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-34",
    "order": 34,
    "title": "Blade: The Series",
    "type": "TV Show",
    "year": 2006,
    "releaseDate": "Jun 2006",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Blade Universe\n[Earth 26320]",
    "runtime": "9h 20m\n(~0h 45m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [
      {
        "rowNum": 293,
        "title": "Episode 1: Pilot (Part 1)",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 294,
        "title": "Episode 2: Pilot (Part 2)",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 295,
        "title": "Episode 3: Death Goes On",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 296,
        "title": "Episode 4: Descent",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 297,
        "title": "Episode 5: Bloodlines",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 298,
        "title": "Episode 6: The Evil Within",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 299,
        "title": "Episode 7: Delivery",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 300,
        "title": "Episode 8 Sacrifice",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 301,
        "title": "Episode 9: Turn of the Screw",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 302,
        "title": "Episode 10: Angels and Demons",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 303,
        "title": "Episode 11: Hunters",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 304,
        "title": "Episode 12: Monsters",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      },
      {
        "rowNum": 305,
        "title": "Episode 13: Conclave",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Blade Universe\n[Earth 26320]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "legacy",
    "subfranchise": "Blade"
  },
  {
    "id": "marvel-35",
    "order": 35,
    "title": "Ghost Rider",
    "type": "Movie",
    "year": 2007,
    "releaseDate": "Feb 2007",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Ghost Rider Universe\n[Earth 121347]",
    "runtime": "1h 50m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Ghost Rider"
  },
  {
    "id": "marvel-36",
    "order": 36,
    "title": "Spider-Man 3",
    "type": "Movie",
    "year": 2007,
    "releaseDate": "May 2007",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "The Raimiverse\n[Earth 96283]",
    "runtime": "2h 19m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "Spider-Man 3.1 (Editor's Cut), is a re-edit w/ slightly improved pacing and fewer awkward scenes.",
    "rating": 6.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Raimi Trilogy"
  },
  {
    "id": "marvel-37",
    "order": 37,
    "title": "Fantastic Four Rise of the Silver Surfer",
    "type": "Movie",
    "year": 2007,
    "releaseDate": "Jun 2007",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Fantastic Four Universe\n[Earth 121698]",
    "runtime": "1h 32m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Fantastic Four"
  },
  {
    "id": "marvel-38",
    "order": 38,
    "title": "Punisher: War Zone",
    "type": "Movie",
    "year": 2008,
    "releaseDate": "Dec 2008",
    "phase": "Pre-MCU Legacy",
    "saga": "Pre-MCU Legacy",
    "universe": "Punisher War Zone Universe\n[Earth 47281]",
    "runtime": "1h 43m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "The Punisher"
  },
  {
    "id": "marvel-39",
    "order": 39,
    "title": "Iron Man",
    "type": "Movie",
    "year": 2008,
    "releaseDate": "May 2008",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 06m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-40",
    "order": 40,
    "title": "The Incredible Hulk",
    "type": "Movie",
    "year": 2008,
    "releaseDate": "Jun 2008",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 52m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": true,
    "notes": "There's an alternate opening that provides a much darker introduction to Bruce Banner.\nSEE BELOW ⬇⬇⬇⬇⬇",
    "rating": 6.6,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-41",
    "order": 41,
    "title": "The Consultant ((!!AFTER HULK!!))",
    "type": "Short Film",
    "year": 2011,
    "releaseDate": "Sep 2011",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Watch this after The Incredible Hulk (2008)!",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-42",
    "order": 42,
    "title": "X-Men Origins: Wolverine",
    "type": "Movie",
    "year": 2009,
    "releaseDate": "May 2009",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Wolverine Trilogy)\n[Earth 41578]",
    "runtime": "1h 47m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Wolverine"
  },
  {
    "id": "marvel-43",
    "order": 43,
    "title": "Iron Man 2",
    "type": "Movie",
    "year": 2010,
    "releaseDate": "Apr 2010",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 04m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-44",
    "order": 44,
    "title": "X-Men First Class",
    "type": "Movie",
    "year": 2011,
    "releaseDate": "Jun 2011",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (X-Men Prequels)\n[Earth 41578]",
    "runtime": "2h 11m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-45",
    "order": 45,
    "title": "A Funny Thing Happened on the Way to Thor’s Hammer ((!!BEFORE THOR!!))",
    "type": "Short Film",
    "year": 2011,
    "releaseDate": "Oct 2011",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Watch this before Thor (2011)!",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-46",
    "order": 46,
    "title": "Thor",
    "type": "Movie",
    "year": 2011,
    "releaseDate": "May 2011",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 55m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "SEE ABOVE ⬆⬆⬆⬆⬆",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-47",
    "order": 47,
    "title": "Captain America: The First Avenger",
    "type": "Movie",
    "year": 2011,
    "releaseDate": "Jul 2011",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 04m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 6.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-48",
    "order": 48,
    "title": "Ghost Rider Spirit of Vengeance",
    "type": "Movie",
    "year": 2012,
    "releaseDate": "Feb 2012",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "Ghost Rider Universe\n[Earth 121347]",
    "runtime": "1h 36m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Ghost Rider"
  },
  {
    "id": "marvel-49",
    "order": 49,
    "title": "The Avengers (aka Avengers Assemble)",
    "type": "Movie",
    "year": 2012,
    "releaseDate": "Apr 2012",
    "phase": "Phase 1: Avengers Assemble",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 23m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-50",
    "order": 50,
    "title": "The Amazing Spider-Man",
    "type": "Movie",
    "year": 2012,
    "releaseDate": "Jul 2012",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "The Webbverse\n[Earth 120703]",
    "runtime": "2h 16m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Amazing Spider-Man"
  },
  {
    "id": "marvel-51",
    "order": 51,
    "title": "Item 47",
    "type": "Short Film",
    "year": 2012,
    "releaseDate": "Sep 2012",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 12m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-52",
    "order": 52,
    "title": "Iron Man 3",
    "type": "Movie",
    "year": 2013,
    "releaseDate": "Apr 2013",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 13m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-53",
    "order": 53,
    "title": "All Hail the King",
    "type": "Short Film",
    "year": 2014,
    "releaseDate": "Feb 2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 13m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Watch after Iron Man 3 (2013)!\n(Important for Shang-Chi and the Legend of the Ten Rings (2021) later!)",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-54",
    "order": 54,
    "title": "The Wolverine",
    "type": "Movie",
    "year": 2013,
    "releaseDate": "Sep 2013",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Wolverine Trilogy)\n[Earth 41578]",
    "runtime": "2h 06m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "There is an Extended Cut that adds ~12 mins. With much more violent scenes.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Wolverine"
  },
  {
    "id": "marvel-55",
    "order": 55,
    "title": "Thor: The Dark World",
    "type": "Movie",
    "year": 2013,
    "releaseDate": "Nov 2013",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 52m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-56",
    "order": 56,
    "title": "Agents of S.H.I.E.L.D. S01 (Sep 2013 – May 2014)",
    "type": "TV Show",
    "year": 2013,
    "releaseDate": "2013",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "16h 30m\n(~0h 45m ea)",
    "postCredits": "✅ Ep 22",
    "isEssential": false,
    "isMCU": true,
    "notes": "Intended to be main MCU, with direct connections to the films. It later diverges from the main MCU timeline, branching into a completely new reality.",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 334,
        "title": "Episode 1: Pilot",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 335,
        "title": "Episode 2: 0-8-4",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 336,
        "title": "Episode 3: The Asset",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 337,
        "title": "Episode 4: Eye Spy",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 338,
        "title": "Episode 5: Girl in the Flower Dress",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 339,
        "title": "Episode 6: FZZT",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 340,
        "title": "Episode 7: The Hub",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 341,
        "title": "Episode 8: The Well",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 342,
        "title": "Episode 9: Repairs",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 343,
        "title": "Episode 10: The Bridge",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 344,
        "title": "Episode 11: The Magical Place",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 345,
        "title": "Episode 12 Seeds",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 346,
        "title": "Episode 13: T.A.H.I.T.I.",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 347,
        "title": "Episode 14: Yes Men",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 348,
        "title": "Episode 15: End of the Beginning",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 349,
        "title": "Episode 16: Turn, Turn, Turn",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️ Watch Captain America: The Winter Soldier immediately after this episode!"
      },
      {
        "rowNum": 350,
        "title": "Episode 17 Shadows",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️ Continues directly from Captain America: The Winter Soldier."
      },
      {
        "rowNum": 351,
        "title": "Episode 18: Providence",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 352,
        "title": "Episode 19: The Only Light in the Darkness",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 353,
        "title": "Episode 20: Nothing Personal",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 354,
        "title": "Episode 21: Ragtag",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 355,
        "title": "Episode 22: Beginning of the End",
        "runtime": "0h 45m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 22,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-57",
    "order": 57,
    "title": "Captain America: The Winter Soldier",
    "type": "Movie",
    "year": 2014,
    "releaseDate": "Mar 2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 16m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.8,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-58",
    "order": 58,
    "title": "The Amazing Spider-Man 2",
    "type": "Movie",
    "year": 2014,
    "releaseDate": "May 2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "The Webbverse\n[Earth 120703]",
    "runtime": "2h 22m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Amazing Spider-Man"
  },
  {
    "id": "marvel-59",
    "order": 59,
    "title": "X-Men Days of Future Past",
    "type": "Movie",
    "year": 2014,
    "releaseDate": "May 2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised) / (X-Men Prequels) \n[Earth 41578 > 10005]",
    "runtime": "2h 11m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": false,
    "notes": "The Rogue-Cut adds a LOT more to the movie!\nHIGHLY RECOMMENDED!",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-60",
    "order": 60,
    "title": "Guardians of the Galaxy",
    "type": "Movie",
    "year": 2014,
    "releaseDate": "Jul 2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 01m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-61",
    "order": 61,
    "title": "Agents of S.H.I.E.L.D. S02 (Sep 2014 - May 2015)",
    "type": "TV Show",
    "year": 2014,
    "releaseDate": "2014",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "15h 44m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 10, 22",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 361,
        "title": "Episode 1 Shadows",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 362,
        "title": "Episode 2: Heavy is the Head",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 363,
        "title": "Episode 3: Making Friends and Influencing People",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 364,
        "title": "Episode 4: Face My Enemy",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 365,
        "title": "Episode 5: A Hen in the Wolf House",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 366,
        "title": "Episode 6: A Fractured House",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 367,
        "title": "Episode 7: The Writing on the Wall",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 368,
        "title": "Episode 8: The Things We Bury",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 369,
        "title": "Episode 9: ...Ye Who Enter Here",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 370,
        "title": "Episode 10: What They Become",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 371,
        "title": "Episode 11: Aftershocks",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 372,
        "title": "Episode 12: Who You Really Are",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 373,
        "title": "Episode 13: One of Us",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 374,
        "title": "Episode 14: Love in the Time of Hydra",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 375,
        "title": "Episode 15: One Door Closes",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 376,
        "title": "Episode 16: Afterlife",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 377,
        "title": "Episode 17: Melinda",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 378,
        "title": "Episode 18: The Frenemy of My Enemy",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 379,
        "title": "Episode 19: The Dirty Half Dozen",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️ Watch Avengers: Age of Ultron after this episode!"
      },
      {
        "rowNum": 380,
        "title": "Episode 20 Scars",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️ Continues directly from Avengers: Age of Ultron."
      },
      {
        "rowNum": 381,
        "title": "Episode 21 S.O.S. Part 1",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 382,
        "title": "Episode 22 S.O.S. Part 2",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 22,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-62",
    "order": 62,
    "title": "Agent Carter",
    "type": "Short Film",
    "year": 2013,
    "releaseDate": "Sep 2013",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 15m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Direct Prequel to Agent Carter S01 (2015), slotted here for better viewing experience.",
    "rating": 7.8,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-63",
    "order": 63,
    "title": "Agent Carter S01",
    "type": "TV Show",
    "year": 2015,
    "releaseDate": "Jan - Feb 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "5h 32m\n(~0h 42m ea)",
    "postCredits": "✅ Ep 8",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.8,
    "episodes": [
      {
        "rowNum": 385,
        "title": "Episode 1: Now is Not the End",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 386,
        "title": "Episode 2: Bridge and Tunnel",
        "runtime": "0h 39m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 387,
        "title": "Episode 3: Time and Tide",
        "runtime": "0h 39m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 388,
        "title": "Episode 4: The Blitzkrieg Button",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 389,
        "title": "Episode 5: The Iron Ceiling",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 390,
        "title": "Episode 6: A Sin to Err",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 391,
        "title": "Episode 7 SNAFU",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 392,
        "title": "Episode 8: Valediction",
        "runtime": "0h 42m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-64",
    "order": 64,
    "title": "Daredevil S01",
    "type": "TV Show",
    "year": 2015,
    "releaseDate": "Apr 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 53m\n(~0h 55m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "The first of the Netflix Defenders Saga.\nThese are officially confirmed cannon to the main timeline of the MCU.",
    "rating": 8.6,
    "episodes": [
      {
        "rowNum": 394,
        "title": "Episode 1: Into the Ring",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 395,
        "title": "Episode 2: Cut Man",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 396,
        "title": "Episode 3: Rabbit in a Snowstorm",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 397,
        "title": "Episode 4: In the Blood",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 398,
        "title": "Episode 5: World on Fire",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 399,
        "title": "Episode 6: Condemned",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 400,
        "title": "Episode 7 Stick",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 401,
        "title": "Episode 8 Shadows in the Glass",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 402,
        "title": "Episode 9 Speak of the Devil",
        "runtime": "0h 58m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 403,
        "title": "Episode 10: Nelson v. Murdock",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 404,
        "title": "Episode 11: The Path of the Righteous",
        "runtime": "0h 59m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 405,
        "title": "Episode 12: The Ones We Leave Behind",
        "runtime": "1h 00m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 406,
        "title": "Episode 13: Daredevil",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-65",
    "order": 65,
    "title": "Avengers: Age of Ultron",
    "type": "Movie",
    "year": 2015,
    "releaseDate": "Apr 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 21m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-66",
    "order": 66,
    "title": "Ant-Man",
    "type": "Movie",
    "year": 2015,
    "releaseDate": "Jul 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 57m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-67",
    "order": 67,
    "title": "Fantastic Four",
    "type": "Movie",
    "year": 2015,
    "releaseDate": "Aug 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "Fant4stic Universe\n[Earth 15866]",
    "runtime": "1h 40m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "legacy",
    "subfranchise": "Fantastic Four"
  },
  {
    "id": "marvel-68",
    "order": 68,
    "title": "Jessica Jones S01",
    "type": "TV Show",
    "year": 2015,
    "releaseDate": "Nov 2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 17m\n(~0h 52m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 411,
        "title": "Episode 1: A.K.A. Ladies Night",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 412,
        "title": "Episode 2: A.K.A. Crush Syndrome",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 413,
        "title": "Episode 3: A.K.A. It's Called Whiskey",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 414,
        "title": "Episode 4: A.K.A. 99 Friends",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 415,
        "title": "Episode 5: A.K.A. The Sandwich Saved Me",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 416,
        "title": "Episode 6: A.K.A. You're a Winner!",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 417,
        "title": "Episode 7: A.K.A. Top Shelf Perverts",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 418,
        "title": "Episode 8: A.K.A. WWJD?",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 419,
        "title": "Episode 9: A.K.A. Sin Bin",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 420,
        "title": "Episode 10: A.K.A. 1,000 Cuts",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 421,
        "title": "Episode 11: A.K.A. I've Got the Blues",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 422,
        "title": "Episode 12: A.K.A. Take a Bloody Number",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 423,
        "title": "Episode 13: A.K.A. Smile",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-69",
    "order": 69,
    "title": "Agents of S.H.I.E.L.D. S03 (Sep 2015 - May 2016)",
    "type": "TV Show",
    "year": 2015,
    "releaseDate": "2015",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "15h 43m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 22",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 425,
        "title": "Episode 1: Laws of Nature",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 426,
        "title": "Episode 2: Purpose in the Machine",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 427,
        "title": "Episode 3: A Wanted (Inhu)man",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 428,
        "title": "Episode 4: Devils You Know",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 429,
        "title": "Episode 5: 4,722 Hours",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 430,
        "title": "Episode 6: Among Us Hide...",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 431,
        "title": "Episode 7: Chaos Theory",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 432,
        "title": "Episode 8: Many Heads, One Tale",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 433,
        "title": "Episode 9: Closure",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 434,
        "title": "Episode 10: Maveth",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 435,
        "title": "Episode 11: Bouncing Back",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 436,
        "title": "Episode 12: The Inside Man",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 437,
        "title": "Episode 13: Parting Shot",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 438,
        "title": "Episode 14: Watchdogs",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 439,
        "title": "Episode 15 Spacetime",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 440,
        "title": "Episode 16: Paradise Lost",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 441,
        "title": "Episode 17: The Team",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 442,
        "title": "Episode 18: The Singularity",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 443,
        "title": "Episode 19: Failed Experiments",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️Watch Captain America: Civil War after this episode!"
      },
      {
        "rowNum": 444,
        "title": "Episode 20: Emancipation",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "⚠️Continues directly from Captain America: Civil War."
      },
      {
        "rowNum": 445,
        "title": "Episode 21: Absolution",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 446,
        "title": "Episode 22: Ascension",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 22,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-70",
    "order": 70,
    "title": "Agent Carter S02",
    "type": "TV Show",
    "year": 2016,
    "releaseDate": "Jan - Feb 2016",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "6h 50m\n(~0h 41m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Ends on cliff hanger, but sadly S03 was cancelled.",
    "rating": 7.8,
    "episodes": [
      {
        "rowNum": 448,
        "title": "Episode 1: The Lady in the Lake",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 449,
        "title": "Episode 2: A View in the Dark",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 450,
        "title": "Episode 3: Better Angels",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 451,
        "title": "Episode 4 Smoke & Mirrors",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 452,
        "title": "Episode 5: The Atomic Job",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 453,
        "title": "Episode 6: Life of the Party",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 454,
        "title": "Episode 7: Monsters",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 455,
        "title": "Episode 8: The Edge of Mystery",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 456,
        "title": "Episode 9: A Little Song and Dance",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 457,
        "title": "Episode 10: Hollywood Ending",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-71",
    "order": 71,
    "title": "Deadpool",
    "type": "Movie",
    "year": 2016,
    "releaseDate": "Feb 2016",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised)\n[Earth 10005]",
    "runtime": "1h 48m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.7,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Deadpool"
  },
  {
    "id": "marvel-72",
    "order": 72,
    "title": "Daredevil S02",
    "type": "TV Show",
    "year": 2016,
    "releaseDate": "Mar 2016",
    "phase": "Phase 2: The Age of Miracles",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "13h 05m\n(~1h 00m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.6,
    "episodes": [
      {
        "rowNum": 460,
        "title": "Episode 1: Bang",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 461,
        "title": "Episode 2: Dogs to a Gunfight",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 462,
        "title": "Episode 3: New York's Finest",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 463,
        "title": "Episode 4: Penny and Dime",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 464,
        "title": "Episode 5: Kinbaku",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 465,
        "title": "Episode 6: Regrets Only",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 466,
        "title": "Episode 7 Semper Fidelis",
        "runtime": "0h 59m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 467,
        "title": "Episode 8: Guilty as Sin",
        "runtime": "1h 03m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 468,
        "title": "Episode 9 Seven Minutes in Heaven",
        "runtime": "1h 02m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 469,
        "title": "Episode 10: The Man in the Box",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 470,
        "title": "Episode 11: .380",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 471,
        "title": "Episode 12: The Dark at the End of the Tunnel",
        "runtime": "1h 00m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 472,
        "title": "Episode 13: A Cold Day in Hell's Kitchen",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-73",
    "order": 73,
    "title": "Captain America: Civil War",
    "type": "Movie",
    "year": 2016,
    "releaseDate": "Apr 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 27m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.8,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-74",
    "order": 74,
    "title": "X-Men Apocalypse",
    "type": "Movie",
    "year": 2016,
    "releaseDate": "May 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised) / (X-Men Prequels)\n[Earth 10005]",
    "runtime": "2h 24m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-75",
    "order": 75,
    "title": "Team Thor: Part 1",
    "type": "Short Film",
    "year": 2016,
    "releaseDate": "Aug 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-76",
    "order": 76,
    "title": "Luke Cage S01",
    "type": "TV Show",
    "year": 2016,
    "releaseDate": "Sep 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 56m\n(~0h 55m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 480,
        "title": "Episode 1: Moment of Truth",
        "runtime": "1h 05m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 481,
        "title": "Episode 2: Code of the Streets",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 482,
        "title": "Episode 3: Who's Gonna Take the Weight?",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 483,
        "title": "Episode 4 Step in the Arena",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 484,
        "title": "Episode 5: Just to Get a Rep",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 485,
        "title": "Episode 6 Suckas Need Bodyguards",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 486,
        "title": "Episode 7: Manifest",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 487,
        "title": "Episode 8: Blowin' Up the Spot",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 488,
        "title": "Episode 9: DWYCK",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 489,
        "title": "Episode 10: Take It Personal",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 490,
        "title": "Episode 11: Now You're Mine",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 491,
        "title": "Episode 12 Soliloquy of Chaos",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 492,
        "title": "Episode 13: You Know My Steez",
        "runtime": "1h 05m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-77",
    "order": 77,
    "title": "Doctor Strange",
    "type": "Movie",
    "year": 2016,
    "releaseDate": "Oct 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 55m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-78",
    "order": 78,
    "title": "Agents of S.H.I.E.L.D. S04 (Sep 2016 – May 2017)",
    "type": "TV Show",
    "year": 2016,
    "releaseDate": "2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "15h 44m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 22",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 495,
        "title": "Episode 1: The Ghost",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 496,
        "title": "Episode 2: Meet the New Boss",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 497,
        "title": "Episode 3: Uprising",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 498,
        "title": "Episode 4: Let Me Stand Next to Your Fire",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 499,
        "title": "Episode 5: Lockup",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 500,
        "title": "Episode 6: The Good Samaritan",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 501,
        "title": "Episode 7: Deals with Our Devils",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 502,
        "title": "Episode 8: The Laws of Inferno Dynamics",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 503,
        "title": "Episode 9: Broken Promises",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 504,
        "title": "Episode 10: The Patriot",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 505,
        "title": "Episode 11: Wake Up",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 506,
        "title": "Episode 12: Hot Potato Soup",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 507,
        "title": "Episode 13: BOOM",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 508,
        "title": "Episode 14: The Man Behind the Shield",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 509,
        "title": "Episode 15 Self Control",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 510,
        "title": "Episode 16: What If...",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 511,
        "title": "Episode 17: Identity and Change",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 512,
        "title": "Episode 18: No Regrets",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 513,
        "title": "Episode 19: All the Madame's Men",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 514,
        "title": "Episode 20: Farewell, Cruel World!",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 515,
        "title": "Episode 21: The Return",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 516,
        "title": "Episode 22: World’s End",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS) / MCU Earth destroyed (AoS)\n[Earth 616] / [Earth-17516]",
        "notes": "Includes a future setting designated Earth-17516."
      }
    ],
    "episodeCount": 22,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-79",
    "order": 79,
    "title": "Agents of S.H.I.E.L.D. Slingshot",
    "type": "Short Film",
    "year": 2016,
    "releaseDate": "Dec 2016",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "0h 22m\n(~0h 04m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Short 3-6 minute web episodes.",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 518,
        "title": "Episode 1: Vendetta",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 519,
        "title": "Episode 2: John Hancock",
        "runtime": "0h 03m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 520,
        "title": "Episode 3: Progress",
        "runtime": "0h 03m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 521,
        "title": "Episode 4: Reunion",
        "runtime": "0h 03m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 522,
        "title": "Episode 5: Deal Breaker",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 523,
        "title": "Episode 6: Justicia",
        "runtime": "0h 05m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-80",
    "order": 80,
    "title": "Team Thor: Part 2",
    "type": "Short Film",
    "year": 2017,
    "releaseDate": "Feb 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-81",
    "order": 81,
    "title": "No Good Deed",
    "type": "Short Film",
    "year": 2017,
    "releaseDate": "Mar 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised)\n[Earth 10005]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "WATCH HERE.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-82",
    "order": 82,
    "title": "Guardians of the Galaxy Vol. 2",
    "type": "Movie",
    "year": 2017,
    "releaseDate": "May 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 16m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-83",
    "order": 83,
    "title": "Legion S01",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "Feb - Mar 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Legion Universe\n[Earth 17040]",
    "runtime": "7h 16m\n(~0h 55m ea)",
    "postCredits": "✅ Ep 8",
    "isEssential": false,
    "isMCU": false,
    "notes": "X-Men Show Focuses on Charles Xavier's Son.\nAdjacent but not connected to any of the main Foxverses.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 528,
        "title": "Episode 1: Chapter 1",
        "runtime": "1h 08m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 529,
        "title": "Episode 2: Chapter 2",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 530,
        "title": "Episode 3: Chapter 3",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 531,
        "title": "Episode 4: Chapter 4",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 532,
        "title": "Episode 5: Chapter 5",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 533,
        "title": "Episode 6: Chapter 6",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 534,
        "title": "Episode 7: Chapter 7",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 535,
        "title": "Episode 8: Chapter 8",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "x-men",
    "subfranchise": "Legion"
  },
  {
    "id": "marvel-84",
    "order": 84,
    "title": "Iron Fist S01",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "Mar 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 53m\n(~0h 55m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 6.4,
    "episodes": [
      {
        "rowNum": 537,
        "title": "Episode 1 Snow Gives Way",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 538,
        "title": "Episode 2 Shadow Hawk Takes Flight",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 539,
        "title": "Episode 3: Rolling Thunder Cannon Punch",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 540,
        "title": "Episode 4: Eight Diagram Dragon Palm",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 541,
        "title": "Episode 5: Under Leaf Pluck Lotus",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 542,
        "title": "Episode 6: Immortal Emerges from Cave",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 543,
        "title": "Episode 7: Felling Tree with Roots",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 544,
        "title": "Episode 8: The Blessing of Many Fractures",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 545,
        "title": "Episode 9: The Mistress of All Agonies",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 546,
        "title": "Episode 10: Black Tiger Steals Heart",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 547,
        "title": "Episode 11: Lead Horse Back to Stable",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 548,
        "title": "Episode 12: Bar the Big Boss",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 549,
        "title": "Episode 13: Dragon Plays with Fire",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-85",
    "order": 85,
    "title": "Logan",
    "type": "Movie",
    "year": 2017,
    "releaseDate": "Mar 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Possible Future) (Wolverine Trilogy)\n[Earth 17315 / 10005*PF*]",
    "runtime": "2h 17m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "Universe is unconfirmed.\nSome say Earth-17315, but it's likely just set in the future of the revised Foxverse, Earth-10005.",
    "rating": 8.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Wolverine"
  },
  {
    "id": "marvel-86",
    "order": 86,
    "title": "Spider-Man: Homecoming",
    "type": "Movie",
    "year": 2017,
    "releaseDate": "Jul 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 13m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Spider-Man (MCU)"
  },
  {
    "id": "marvel-87",
    "order": 87,
    "title": "The Defenders S01",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "Aug 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "6h 44m\n(~0h 51m ea)",
    "postCredits": "✅ Ep 8",
    "isEssential": true,
    "isMCU": true,
    "notes": "Ties together the Netflix Defenders Series'.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 553,
        "title": "Episode 1: The H Word",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 554,
        "title": "Episode 2: Mean Right Hook",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 555,
        "title": "Episode 3: Worst Behavior",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 556,
        "title": "Episode 4: Royal Dragon",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 557,
        "title": "Episode 5: Take Shelter",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 558,
        "title": "Episode 6: Ashes, Ashes",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 559,
        "title": "Episode 7: Fish in the Jailhouse",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 560,
        "title": "Episode 8: The Defenders",
        "runtime": "1h 13m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-88",
    "order": 88,
    "title": "Inhumans S01",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "Sep - Nov 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "5h 41m\n(~0h 43m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "First featured in Agents of SHIELD, safe to assume they are set in the same universe, though not confirmed.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 562,
        "title": "Episode 1: Behold... The Inhumans!",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "Originally released as IMAX feature"
      },
      {
        "rowNum": 563,
        "title": "Episode 2: Those Who Would Destroy Us",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 564,
        "title": "Episode 3: Divide and Conquer",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 565,
        "title": "Episode 4: Make Way for... Medusa",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 566,
        "title": "Episode 5 Something Inhuman This Way Comes...",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 567,
        "title": "Episode 6: The Gentleman's Name Is Gorgon",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 568,
        "title": "Episode 7: Havoc in the Hidden Land",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 569,
        "title": "Episode 8: ...And Finally: Black Bolt",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-89",
    "order": 89,
    "title": "Thor: Ragnarok",
    "type": "Movie",
    "year": 2017,
    "releaseDate": "Oct 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 10m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-90",
    "order": 90,
    "title": "Agents of S.H.I.E.L.D. S05 (Dec 2017 - May 2018)",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS) / MCU Earth destroyed (AoS)\n[Earth 616] / [Earth-17516]",
    "runtime": "15h 45m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 22",
    "isEssential": false,
    "isMCU": true,
    "notes": "This is where the AoS timeline starts to get confusing and complicated. Many fans still debate whether it remains canon at all.",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 572,
        "title": "Episode 1: Orientation (Part 1)",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS) / MCU Earth destroyed (AoS)\n[Earth 616] / [Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 573,
        "title": "Episode 2: Orientation (Part 2)",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 574,
        "title": "Episode 3: A Life Spent",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 575,
        "title": "Episode 4: A Life Earned",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 576,
        "title": "Episode 5: Rewind",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS) / MCU Earth destroyed (AoS)\n[Earth 616] / [Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 577,
        "title": "Episode 6: Fun & Games",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 578,
        "title": "Episode 7: Together or Not at All",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 579,
        "title": "Episode 8: The Last Day",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 580,
        "title": "Episode 9: Best Laid Plans",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 581,
        "title": "Episode 10: Past Life",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU Earth destroyed (AoS)\n[Earth-17516]",
        "notes": ""
      },
      {
        "rowNum": 582,
        "title": "Episode 11: All the Comforts of Home",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 583,
        "title": "Episode 12: The Real Deal",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 584,
        "title": "Episode 13: Principia",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 585,
        "title": "Episode 14: The Devil Complex",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 586,
        "title": "Episode 15: Rise and Shine",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 587,
        "title": "Episode 16: Inside Voices",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 588,
        "title": "Episode 17: The Honeymoon",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 589,
        "title": "Episode 18: All Roads Lead…",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 590,
        "title": "Episode 19: Option Two",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 591,
        "title": "Episode 20: The One Who Will Save Us All",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 592,
        "title": "Episode 21: The Force of Gravity",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 593,
        "title": "Episode 22: The End",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "Events here affect the future timeline established earlier in the season."
      }
    ],
    "episodeCount": 22,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-91",
    "order": 91,
    "title": "Team Darryl (Team Thor Part 3)",
    "type": "Short Film",
    "year": 2018,
    "releaseDate": "Feb 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 06m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-92",
    "order": 92,
    "title": "The Gifted S01 (Oct 2017 - Jan 2018)",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "The Gifted Universe\n[Earth 17372]",
    "runtime": "9h 21m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 1, 13",
    "isEssential": false,
    "isMCU": false,
    "notes": "Adjacent but not apart of the main Foxverse.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 596,
        "title": "Episode 1: eXposed",
        "runtime": "0h 44m",
        "postCredits": "✅ Yes 1",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 597,
        "title": "Episode 2: rX",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 598,
        "title": "Episode 3: eXodus",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 599,
        "title": "Episode 4: eXit strategy",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 600,
        "title": "Episode 5: boXed in",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 601,
        "title": "Episode 6: got your siX",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 602,
        "title": "Episode 7: eXtreme measures",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 603,
        "title": "Episode 8: threat of eXtinction",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 604,
        "title": "Episode 9: outfoX",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 605,
        "title": "Episode 10: eXploited",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 606,
        "title": "Episode 11: 3 X 1",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 607,
        "title": "Episode 12: eXtraction",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 608,
        "title": "Episode 13: X-roads",
        "runtime": "0h 44m",
        "postCredits": "✅ Yes 1",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "x-men",
    "subfranchise": "The Gifted"
  },
  {
    "id": "marvel-93",
    "order": 93,
    "title": "The Punisher S01",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "Nov 2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 29m\n(~0h 53m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.5,
    "episodes": [
      {
        "rowNum": 610,
        "title": "Episode 1: 3 A.M.",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 611,
        "title": "Episode 2: Two Dead Men",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 612,
        "title": "Episode 3: Kandahar",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 613,
        "title": "Episode 4: Resupply",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 614,
        "title": "Episode 5: Gunner",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 615,
        "title": "Episode 6: The Judas Goat",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 616,
        "title": "Episode 7: Crosshairs",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 617,
        "title": "Episode 8: Cold Steel",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 618,
        "title": "Episode 9: Front Toward Enemy",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 619,
        "title": "Episode 10: Virtue of the Vicious",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 620,
        "title": "Episode 11: Danger Close",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 621,
        "title": "Episode 12: Home",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 622,
        "title": "Episode 13: Memento Mori",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-94",
    "order": 94,
    "title": "Runaways S01 (Nov 2017 - Jan 2018)",
    "type": "TV Show",
    "year": 2017,
    "releaseDate": "2017",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "8h 15m\n(~0h 50m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 624,
        "title": "Episode 1: Reunion",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 625,
        "title": "Episode 2: Rewind",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 626,
        "title": "Episode 3: Destiny",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 627,
        "title": "Episode 4: Fifteen",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 628,
        "title": "Episode 5: Kingdom",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 629,
        "title": "Episode 6: Metamorphosis",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 630,
        "title": "Episode 7: Refraction",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 631,
        "title": "Episode 8: Tsunami",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 632,
        "title": "Episode 9: Doomsday",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 633,
        "title": "Episode 10: Hostile",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-95",
    "order": 95,
    "title": "Black Panther",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "Feb 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 14m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-96",
    "order": 96,
    "title": "Jessica Jones S02",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Mar 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 22m\n(~0h 52m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 636,
        "title": "Episode 1: AKA Start at the Beginning",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 637,
        "title": "Episode 2: AKA Freak Accident",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 638,
        "title": "Episode 3: AKA Sole Survivor",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 639,
        "title": "Episode 4: AKA God Help the Hobo",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 640,
        "title": "Episode 5: AKA The Octopus",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 641,
        "title": "Episode 6: AKA Facetime",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 642,
        "title": "Episode 7: AKA I Want Your Cray Cray",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 643,
        "title": "Episode 8: AKA Ain't We Got Fun",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 644,
        "title": "Episode 9: AKA Shark in the Bathtub, Monster in the Bed",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 645,
        "title": "Episode 10: AKA Pork Chop",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 646,
        "title": "Episode 11: AKA Three Lives and Counting",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 647,
        "title": "Episode 12: AKA Pray For My Patsy",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 648,
        "title": "Episode 13: AKA Playland",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-97",
    "order": 97,
    "title": "AVENGERS: INFINITY WAR ⭐⭐",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "Apr 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 29m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "ARE YOU READY?!?",
    "rating": 8.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-98",
    "order": 98,
    "title": "Legion S02",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Apr - Jun 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Legion Universe\n[Earth 17040]",
    "runtime": "9h 00m\n(~0h 49m ea)",
    "postCredits": "✅ Ep 11",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 651,
        "title": "Episode 1: Chapter 9",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 652,
        "title": "Episode 2: Chapter 10",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 653,
        "title": "Episode 3: Chapter 11",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 654,
        "title": "Episode 4: Chapter 12",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 655,
        "title": "Episode 5: Chapter 13",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 656,
        "title": "Episode 6: Chapter 14",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 657,
        "title": "Episode 7: Chapter 15",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 658,
        "title": "Episode 8: Chapter 16",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 659,
        "title": "Episode 9: Chapter 17",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 660,
        "title": "Episode 10: Chapter 18",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 661,
        "title": "Episode 11: Chapter 19",
        "runtime": "0h 52m",
        "postCredits": "✅ Yes 1",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      }
    ],
    "episodeCount": 11,
    "franchise": "x-men",
    "subfranchise": "Legion"
  },
  {
    "id": "marvel-99",
    "order": 99,
    "title": "Deadpool 2",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "May 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised) (Deadpool)\n[Earth 10005 -> Earth 41633]",
    "runtime": "1h 59m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": false,
    "notes": "Once Upon a Deadpool (2018), is a PG-13 recut of the movie. It's a toned-down version with additional scenes. Also, it was a cancer charity project!",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Deadpool"
  },
  {
    "id": "marvel-100",
    "order": 100,
    "title": "Cloak & Dagger S01",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Jun - Aug 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "7h 16m\n(~0h 44m ea)",
    "postCredits": "✅ Ep 10",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 664,
        "title": "Episode 1: First Light",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 665,
        "title": "Episode 2 Suicide Sprints",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 666,
        "title": "Episode 3 Stained Glass",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 667,
        "title": "Episode 4: Call/Response",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 668,
        "title": "Episode 5: Princeton Offense",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 669,
        "title": "Episode 6: Funhouse Mirrors",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 670,
        "title": "Episode 7: Lotus Eaters",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 671,
        "title": "Episode 8: Ghost Stories",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 672,
        "title": "Episode 9: Back Breaker",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 673,
        "title": "Episode 10: Colony Collapse",
        "runtime": "0h 44m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": "Post-credits teaser for S02"
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-101",
    "order": 101,
    "title": "Luke Cage S02",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Jun 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "12h 45m\n(~0h 59m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 675,
        "title": "Episode 1 Soul Brother #1",
        "runtime": "1h 00m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 676,
        "title": "Episode 2 Straighten It Out",
        "runtime": "1h 00m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 677,
        "title": "Episode 3: Wig Out",
        "runtime": "0h 59m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 678,
        "title": "Episode 4: I Get Physical",
        "runtime": "0h 59m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 679,
        "title": "Episode 5: All Souled Out",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 680,
        "title": "Episode 6: The Basement",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 681,
        "title": "Episode 7: On and On",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 682,
        "title": "Episode 8: If It Ain’t Rough, It Ain’t Right",
        "runtime": "0h 58m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 683,
        "title": "Episode 9: For Pete’s Sake",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 684,
        "title": "Episode 10: The Main Ingredient",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 685,
        "title": "Episode 11: The Creator",
        "runtime": "0h 58m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 686,
        "title": "Episode 12: Can’t Front on Me",
        "runtime": "1h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 687,
        "title": "Episode 13: They Reminisce Over You",
        "runtime": "1h 10m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-102",
    "order": 102,
    "title": "Ant-Man and the Wasp",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "Jul 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 58m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-103",
    "order": 103,
    "title": "Iron Fist S02",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Sep 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "8h 22m\n(~0h 50m ea)",
    "postCredits": "✅ Ep 10",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 6.4,
    "episodes": [
      {
        "rowNum": 690,
        "title": "Episode 1: The Fury of Iron Fist",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 691,
        "title": "Episode 2: The City's Not for Burning",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 692,
        "title": "Episode 3: This Deadly Secret",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 693,
        "title": "Episode 4: Target: Iron Fist",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 694,
        "title": "Episode 5: Heart of the Dragon",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 695,
        "title": "Episode 6: The Dragon Dies at Dawn",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 696,
        "title": "Episode 7: Morning of the Mindstorm",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 697,
        "title": "Episode 8: Citadel on the Edge of Vengeance",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 698,
        "title": "Episode 9: War Without End",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 699,
        "title": "Episode 10: A Duel of Iron",
        "runtime": "0h 54m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-104",
    "order": 104,
    "title": "The Gifted S02 (Sep 2018 - Feb 2019)",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "The Gifted Universe\n[Earth 17372]",
    "runtime": "11h 20m\n(~0h 43m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "S03 was cancelled. 😞",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 701,
        "title": "Episode 1: eMergence",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 702,
        "title": "Episode 2: unMoored",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 703,
        "title": "Episode 3: coMplications",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 704,
        "title": "Episode 4: outMatched",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 705,
        "title": "Episode 5: afterMath",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 706,
        "title": "Episode 6: iMprint",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 707,
        "title": "Episode 7: no Mercy",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 708,
        "title": "Episode 8: the dreaM",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 709,
        "title": "Episode 9: gaMe changer",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 710,
        "title": "Episode 10: eneMy of My eneMy",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 711,
        "title": "Episode 11: meMento",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 712,
        "title": "Episode 12: hoMe",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 713,
        "title": "Episode 13: teMpted",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 714,
        "title": "Episode 14: calaMity",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 715,
        "title": "Episode 15: Monsters",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": ""
      },
      {
        "rowNum": 716,
        "title": "Episode 16: oMens",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "The Gifted Universe\n[Earth 17372]",
        "notes": "Series finale, show got cancelled :("
      }
    ],
    "episodeCount": 16,
    "franchise": "x-men",
    "subfranchise": "The Gifted"
  },
  {
    "id": "marvel-105",
    "order": 105,
    "title": "Venom",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "Oct 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "1h 52m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-106",
    "order": 106,
    "title": "Daredevil S03",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Oct 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 29m\n(~0h 53m ea)",
    "postCredits": "✅ Ep 13",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.6,
    "episodes": [
      {
        "rowNum": 719,
        "title": "Episode 1: Resurrection",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 720,
        "title": "Episode 2: Please",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 721,
        "title": "Episode 3: No Good Deed",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 722,
        "title": "Episode 4: Blindsided",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 723,
        "title": "Episode 5: The Perfect Game",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 724,
        "title": "Episode 6: The Devil You Know",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 725,
        "title": "Episode 7: Aftermath",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 726,
        "title": "Episode 8: Upstairs/Downstairs",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 727,
        "title": "Episode 9: Revelations",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 728,
        "title": "Episode 10: Karen",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 729,
        "title": "Episode 11: Reunion",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 730,
        "title": "Episode 12: One Last Shot",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 731,
        "title": "Episode 13: A New Napkin",
        "runtime": "0h 54m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-107",
    "order": 107,
    "title": "Runaways S02",
    "type": "TV Show",
    "year": 2018,
    "releaseDate": "Dec 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "10h 30m\n(~0h 48m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 733,
        "title": "Episode 1: Gimme Shelter",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 734,
        "title": "Episode 2: Radio On",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 735,
        "title": "Episode 3: Double Zeros",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 736,
        "title": "Episode 4: Old School",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 737,
        "title": "Episode 5: Rock Bottom",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 738,
        "title": "Episode 6: Bury Another",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 739,
        "title": "Episode 7: Last Rites",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 740,
        "title": "Episode 8: Past Life",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 741,
        "title": "Episode 9: Big Shot",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 742,
        "title": "Episode 10: Hostile Takeover",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 743,
        "title": "Episode 11: Last Waltz",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 744,
        "title": "Episode 12: Earth Angel",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 745,
        "title": "Episode 13 Split Up",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-108",
    "order": 108,
    "title": "Spider-Man: Into the Spider-Verse",
    "type": "Movie",
    "year": 2018,
    "releaseDate": "Dec 2018",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "The Spider-Verse (Multiverse)\n[Earth 1610B + Various]",
    "runtime": "1h 57m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 8.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Spider-Verse"
  },
  {
    "id": "marvel-109",
    "order": 109,
    "title": "The Punisher S02",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "Jan 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 37m\n(~0h 54m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.5,
    "episodes": [
      {
        "rowNum": 748,
        "title": "Episode 1: Roadhouse Blues",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 749,
        "title": "Episode 2: Fight or Flight",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 750,
        "title": "Episode 3: Trouble the Water",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 751,
        "title": "Episode 4 Scar Tissue",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 752,
        "title": "Episode 5: One-Eyed Jacks",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 753,
        "title": "Episode 6: Nakazat",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 754,
        "title": "Episode 7: One Bad Day",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 755,
        "title": "Episode 8: My Brothers Keeper",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 756,
        "title": "Episode 9: Flustercluck",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 757,
        "title": "Episode 10: The Dark Hearts of Men",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 758,
        "title": "Episode 11: The Abyss",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 759,
        "title": "Episode 12: Collision Course",
        "runtime": "0h 56m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 760,
        "title": "Episode 13: The Whirlwind",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-110",
    "order": 110,
    "title": "Spider-Ham: Caught in a Ham",
    "type": "Short Film",
    "year": 2019,
    "releaseDate": "Feb 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Spider-Ham (The Spider-Verse)\n[Earth 8311B]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "WATCH HERE.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-111",
    "order": 111,
    "title": "Captain Marvel",
    "type": "Movie",
    "year": 2019,
    "releaseDate": "Mar 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 04m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 6.8,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-112",
    "order": 112,
    "title": "Cloak & Dagger S02",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "Apr - May 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "7h 08m\n(~0h 43m ea)",
    "postCredits": "✅ Ep 10",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 764,
        "title": "Episode 1 Seventy-Eight",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 765,
        "title": "Episode 2: The Frog and the Scorpion",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 766,
        "title": "Episode 3: Refraction",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 767,
        "title": "Episode 4: Bittersweet",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 768,
        "title": "Episode 5: The Great Dipper",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 769,
        "title": "Episode 6: Love in the Time of Cornballs",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 770,
        "title": "Episode 7 Seven Minutes in Heaven",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 771,
        "title": "Episode 8: Fracture",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 772,
        "title": "Episode 9: The Cattle Raid of Cooley",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 773,
        "title": "Episode 10: My Sentence",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-113",
    "order": 113,
    "title": "AVENGERS: ENDGAME ⭐⭐",
    "type": "Movie",
    "year": 2019,
    "releaseDate": "Apr 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]*",
    "runtime": "3h 01m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 8.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-114",
    "order": 114,
    "title": "Agents of S.H.I.E.L.D. S06",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "May -  Aug 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "9h 19m\n(~0h 43m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 776,
        "title": "Episode 1: Missing Pieces",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 777,
        "title": "Episode 2: Window of Opportunity",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 778,
        "title": "Episode 3: Fear and Loathing on the Planet of Kitson",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 779,
        "title": "Episode 4: Code Yellow",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 780,
        "title": "Episode 5: The Other Thing",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 781,
        "title": "Episode 6: Inescapable",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 782,
        "title": "Episode 7: Toldja",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 783,
        "title": "Episode 8: Collision Course (Part I)",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 784,
        "title": "Episode 9: Collision Course (Part II)",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 785,
        "title": "Episode 10: Leap",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 786,
        "title": "Episode 11: From the Ashes",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 787,
        "title": "Episode 12: The Sign",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 788,
        "title": "Episode 13: New Life",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-115",
    "order": 115,
    "title": "Jessica Jones S03",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "Jun 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (Defenders Saga)\n[Earth 616]",
    "runtime": "11h 22m\n(~0h 52m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 790,
        "title": "Episode 1: AKA The Perfect Burger",
        "runtime": "0h 55m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 791,
        "title": "Episode 2: AKA You're Welcome",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 792,
        "title": "Episode 3: AKA I Have No Spleen",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 793,
        "title": "Episode 4: AKA Customer Service is Standing By",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 794,
        "title": "Episode 5: AKA I Wish",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 795,
        "title": "Episode 6: AKA Sorry Face",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 796,
        "title": "Episode 7: AKA Double Half-Wappinger",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 797,
        "title": "Episode 8: AKA Camera Friendly",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 798,
        "title": "Episode 9: AKA I Did Something Today",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 799,
        "title": "Episode 10: AKA Hero Pants",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 800,
        "title": "Episode 11: AKA Hellcat",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 801,
        "title": "Episode 12: AKA A Lotta Worms",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 802,
        "title": "Episode 13: AKA Everything",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU (Defenders Saga)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-116",
    "order": 116,
    "title": "Legion S03",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "Jun - Aug 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Legion Universe\n[Earth 17040]",
    "runtime": "6h 39m\n(~0h 50m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 804,
        "title": "Episode 1: Chapter 20",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 805,
        "title": "Episode 2: Chapter 21",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 806,
        "title": "Episode 3: Chapter 22",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 807,
        "title": "Episode 4: Chapter 23",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 808,
        "title": "Episode 5: Chapter 24",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 809,
        "title": "Episode 6: Chapter 25",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 810,
        "title": "Episode 7: Chapter 26",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      },
      {
        "rowNum": 811,
        "title": "Episode 8: Chapter 27",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "Legion Universe\n[Earth 17040]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "x-men",
    "subfranchise": "Legion"
  },
  {
    "id": "marvel-117",
    "order": 117,
    "title": "X-Men: Dark Phoenix",
    "type": "Movie",
    "year": 2019,
    "releaseDate": "Jun 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised)\n[Earth 10005]",
    "runtime": "1h 53m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Titled \"Dark Phoenix\" in USA, while it was released as \"X-Men: Dark Phoenix\" internationally.",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-118",
    "order": 118,
    "title": "Spider-Man: Far From Home",
    "type": "Movie",
    "year": 2019,
    "releaseDate": "Jul 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 09m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Spider-Man (MCU)"
  },
  {
    "id": "marvel-119",
    "order": 119,
    "title": "Peter's To-Do List",
    "type": "Short Film",
    "year": 2019,
    "releaseDate": "Oct 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "WATCH HERE.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-120",
    "order": 120,
    "title": "Runaways S03",
    "type": "TV Show",
    "year": 2019,
    "releaseDate": "Dec 2019",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "MCU (AoS)\n[Earth 616]",
    "runtime": "8h 03m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 10",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 816,
        "title": "Episode 1 Smoke and Mirrors",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 817,
        "title": "Episode 2: Metamorphosis",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 818,
        "title": "Episode 3: Panic Stations",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 819,
        "title": "Episode 4: Five Strikes",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 820,
        "title": "Episode 5: Another One Bites the Dust",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 821,
        "title": "Episode 6: New Powers",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 822,
        "title": "Episode 7: Mother",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 823,
        "title": "Episode 8: The Spirit Trap",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 824,
        "title": "Episode 9: Broken Arrows",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 825,
        "title": "Episode 10: Hostile",
        "runtime": "0h 49m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU (AoS)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-121",
    "order": 121,
    "title": "The New Mutants",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Sep 2020",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Foxverse (Revised)\n[Earth 10005] (?)",
    "runtime": "1h 34m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Spin-off X-Men Movie, assumed to be set in the revised timeline of main Foxverse but not confirmed.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-122",
    "order": 122,
    "title": "Agents of S.H.I.E.L.D. S07 (May – Aug 2020)",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "2020",
    "phase": "Phase 3: Infinity",
    "saga": "The Infinity Saga",
    "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
    "runtime": "9h 19m\n(~0h 43m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Branch = A branched alternate past created by the Chronicoms. The timelines later converge again, with the future continuing from the altered timeline.",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 828,
        "title": "Episode 1: The New Deal",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "\"Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)\"",
        "notes": ""
      },
      {
        "rowNum": 829,
        "title": "Episode 2: Know Your Onions",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 830,
        "title": "Episode 3: Alien Commies From The Future",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 831,
        "title": "Episode 4: Out of the Past",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 832,
        "title": "Episode 5: A Trout in the Milk",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 833,
        "title": "Episode 6: Adapt or Die",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 834,
        "title": "Episode 7: The Totally Excellent Adventures of Mack and the D",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 835,
        "title": "Episode 8: After, Before",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": "Also includes Earth-17516."
      },
      {
        "rowNum": 836,
        "title": "Episode 9: As I Have Always Been",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 837,
        "title": "Episode 10 Stolen",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 838,
        "title": "Episode 11: Brand New Day",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": ""
      },
      {
        "rowNum": 839,
        "title": "Episode 12: The End is at Hand",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)",
        "notes": "Also includes Earth-17516."
      },
      {
        "rowNum": 840,
        "title": "Episode 13: What We're Fighting For",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "\"Branch (AoS) / MCU (AoS)\n[Earth-19859] / [Earth 616] (AoS)\"",
        "notes": "Also includes Earth-17516."
      }
    ],
    "episodeCount": 13,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-123",
    "order": 123,
    "title": "WandaVision",
    "type": "TV Show",
    "year": 2021,
    "releaseDate": "Jan - Mar 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "5h 50m\n(~0h 39m ea)",
    "postCredits": "✅ Ep 7, 8, 9",
    "isEssential": true,
    "isMCU": true,
    "notes": "Every episode is styled as different sitcoms, it's very cute and fun!",
    "rating": 7.9,
    "episodes": [
      {
        "rowNum": 845,
        "title": "Episode 1: Filmed Before a Live Studio Audience",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 846,
        "title": "Episode 2: Don’t Touch That Dial",
        "runtime": "0h 37m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 847,
        "title": "Episode 3: Now in Color",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 848,
        "title": "Episode 4: We Interrupt This Program",
        "runtime": "0h 39m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 849,
        "title": "Episode 5: On a Very Special Episode...",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 850,
        "title": "Episode 6: All-New Halloween Spooktacular!",
        "runtime": "0h 38m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 851,
        "title": "Episode 7: Breaking the Fourth Wall",
        "runtime": "0h 38m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 852,
        "title": "Episode 8: Previously On",
        "runtime": "0h 47m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 853,
        "title": "Episode 9: The Series Finale",
        "runtime": "0h 46m",
        "postCredits": "✅ Yes 2",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-124",
    "order": 124,
    "title": "The Falcon and the Winter Soldier",
    "type": "TV Show",
    "year": 2021,
    "releaseDate": "Mar- Apr 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "5h 26m\n(~0h 54m ea)",
    "postCredits": "✅ Ep 5, 6",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.1,
    "episodes": [
      {
        "rowNum": 855,
        "title": "Episode 1: New World Order",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 856,
        "title": "Episode 2: The Star-Spangled Man",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 857,
        "title": "Episode 3: Power Broker",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 858,
        "title": "Episode 4: The Whole World Is Watching",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 859,
        "title": "Episode 5: Truth",
        "runtime": "1h 00m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 860,
        "title": "Episode 6: One World, One People",
        "runtime": "0h 56m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-125",
    "order": 125,
    "title": "Loki S01",
    "type": "TV Show",
    "year": 2021,
    "releaseDate": "Jun - Jul 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "TVA + Multiverse\n[TVA + Various]",
    "runtime": "4h 47m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 4",
    "isEssential": true,
    "isMCU": false,
    "notes": "Continues a storyline that began in Avengers: Endgame (2019).",
    "rating": 8.2,
    "episodes": [
      {
        "rowNum": 862,
        "title": "Episode 1: Glorious Purpose",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 863,
        "title": "Episode 2: The Variant",
        "runtime": "0h 54m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 864,
        "title": "Episode 3: Lamentis",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 865,
        "title": "Episode 4: The Nexus Event",
        "runtime": "0h 48m",
        "postCredits": "✅ Yes 1",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 866,
        "title": "Episode 5: Journey Into Mystery",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 867,
        "title": "Episode 6: For All Time. Always.",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-126",
    "order": 126,
    "title": "Black Widow",
    "type": "Movie",
    "year": 2021,
    "releaseDate": "Jul 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 14m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": true,
    "notes": "Set in 2016, immediately after the events of Captain America: Civil War. Slotted here because of release, character introduction, and After Credit.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-127",
    "order": 127,
    "title": "Deadpool and Korg React",
    "type": "Short Film",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 04m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Promotional short film for Free Guy (2021).\nMore of an in-universe commercial.\nWATCH HERE.",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Deadpool"
  },
  {
    "id": "marvel-128",
    "order": 128,
    "title": "What If...? S01",
    "type": "TV Show",
    "year": 2021,
    "releaseDate": "Aug - Oct 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "Animated Multiverses (MCU+)\n[Various]",
    "runtime": "4h 52m\n(~0h 32m ea)",
    "postCredits": "✅ Ep 9",
    "isEssential": true,
    "isMCU": false,
    "notes": "Offically a part of the \"expanding MCU Multiverse\", but not a part of the mainline MCU Universe.",
    "rating": 7.4,
    "episodes": [
      {
        "rowNum": 871,
        "title": "Episode 1: What If... Captain Carter Were the First Avenger?",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "Captain Carter (AMVerse)\n[Earth 82111]",
        "notes": ""
      },
      {
        "rowNum": 872,
        "title": "Episode 2: What If... T'Challa Became Star-Lord?",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "T'Challa StarLord (AMVerse)\n[Earth 21818]",
        "notes": ""
      },
      {
        "rowNum": 873,
        "title": "Episode 3: What If... the World Lost Its Mightiest Heroes?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "Lost Heroes (AMVerse)\n[Earth 51825]",
        "notes": ""
      },
      {
        "rowNum": 874,
        "title": "Episode 4: What If... Doctor Strange Lost His Heart Instead of His Hands?",
        "runtime": "0h 37m",
        "postCredits": "❌ No",
        "universe": "DrStrange (AMVerse)\n[Earth 91233]",
        "notes": ""
      },
      {
        "rowNum": 875,
        "title": "Episode 5: What If... Zombies!?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "Zombies (AMVerse)\n[Earth 89521]",
        "notes": ""
      },
      {
        "rowNum": 876,
        "title": "Episode 6: What If... Killmonger Rescued Tony Stark?",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "Killmonger (AMVerse)\n[Earth 32938]",
        "notes": ""
      },
      {
        "rowNum": 877,
        "title": "Episode 7: What If... Thor Were an Only Child?",
        "runtime": "0h 36m",
        "postCredits": "❌ No",
        "universe": "OnlyThor (AMVerse)\n[Earth 72124]",
        "notes": ""
      },
      {
        "rowNum": 878,
        "title": "Episode 8: What If... Ultron Won?",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "UltronWon (AMVerse)\n[Mainly Earth 29929]",
        "notes": ""
      },
      {
        "rowNum": 879,
        "title": "Episode 9: What If... the Watcher Broke His Oath?",
        "runtime": "0h 34m",
        "postCredits": "✅ Yes 1",
        "universe": "Various",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-129",
    "order": 129,
    "title": "Venom: Let there be Carnage",
    "type": "Movie",
    "year": 2021,
    "releaseDate": "Oct 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "1h 37m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-130",
    "order": 130,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "type": "Movie",
    "year": 2021,
    "releaseDate": "Sep 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 12m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-131",
    "order": 131,
    "title": "Eternals",
    "type": "Movie",
    "year": 2021,
    "releaseDate": "Nov 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 36m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 6.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-132",
    "order": 132,
    "title": "Hawkeye S01",
    "type": "TV Show",
    "year": 2021,
    "releaseDate": "Nov - Dec 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "4h 46m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 6",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [
      {
        "rowNum": 884,
        "title": "Episode 1: Never Meet Your Heroes",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 885,
        "title": "Episode 2: Hide and Seek",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 886,
        "title": "Episode 3: Echoes",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 887,
        "title": "Episode 4: Partners, Am I Right?",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 888,
        "title": "Episode 5: Ronin",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 889,
        "title": "Episode 6 So This Is Christmas?",
        "runtime": "1h 07m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-133",
    "order": 133,
    "title": "Spider-Man: No Way Home",
    "type": "Movie",
    "year": 2021,
    "releaseDate": "Dec 2021",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 28m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "*(Second Post Credit is just a commercial for Doctor Strange in the Multiverse of Madness (2022). Don't watch it if you don't like commercials!)",
    "rating": 8.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Spider-Man (MCU)"
  },
  {
    "id": "marvel-134",
    "order": 134,
    "title": "Moon Knight S01",
    "type": "TV Show",
    "year": 2022,
    "releaseDate": "Mar 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "4h 48m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 6",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [
      {
        "rowNum": 892,
        "title": "Episode 1: The Goldfish Problem",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 893,
        "title": "Episode 2 Summon the Suit",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 894,
        "title": "Episode 3: The Friendly Type",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 895,
        "title": "Episode 4: The Tomb",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 896,
        "title": "Episode 5: Asylum",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 897,
        "title": "Episode 6: Gods and Monsters",
        "runtime": "0h 46m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-135",
    "order": 135,
    "title": "Morbius",
    "type": "Movie",
    "year": 2022,
    "releaseDate": "Apr 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "1h 44m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-136",
    "order": 136,
    "title": "Doctor Strange in the Multiverse of Madness",
    "type": "Movie",
    "year": 2022,
    "releaseDate": "May 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU + Multiverse\n[Earth 616 + Various]",
    "runtime": "2h 06m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-137",
    "order": 137,
    "title": "Ms. Marvel",
    "type": "TV Show",
    "year": 2022,
    "releaseDate": "Jul 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "4h 45m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 1, 6",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 6.3,
    "episodes": [
      {
        "rowNum": 901,
        "title": "Episode 1: Generation Why",
        "runtime": "0h 50m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 902,
        "title": "Episode 2: Crushed",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 903,
        "title": "Episode 3: Destined",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 904,
        "title": "Episode 4 Seeing Red",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 905,
        "title": "Episode 5: Time and Again",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 906,
        "title": "Episode 6: No Normal",
        "runtime": "0h 49m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-138",
    "order": 138,
    "title": "Thor: Love and Thunder",
    "type": "Movie",
    "year": 2022,
    "releaseDate": "Jul 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 58m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-139",
    "order": 139,
    "title": "I am Groot S01",
    "type": "TV Show",
    "year": 2022,
    "releaseDate": "Aug 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 20m\n(~0h 04m ea)",
    "postCredits": "✅ Ep 5",
    "isEssential": false,
    "isMCU": true,
    "notes": "Super Short episodes.\nIntended to just be a silly side story.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 909,
        "title": "Episode 1: Groot’s First Steps",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 910,
        "title": "Episode 2: The Little Guy",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 911,
        "title": "Episode 3: Groot’s Pursuit",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 912,
        "title": "Episode 4: Groot Takes a Bath",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 913,
        "title": "Episode 5: Magnum Opus",
        "runtime": "0h 04m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 5,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-140",
    "order": 140,
    "title": "She-Hulk: Attorney at Law S01",
    "type": "TV Show",
    "year": 2022,
    "releaseDate": "Aug 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "5h 11m\n(~0h 35m ea)",
    "postCredits": "✅ Ep 1, 2, 3, 4, 9",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 5.3,
    "episodes": [
      {
        "rowNum": 915,
        "title": "Episode 1: A Normal Amount of Rage",
        "runtime": "0h 38m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 916,
        "title": "Episode 2 Superhuman Law",
        "runtime": "0h 32m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 917,
        "title": "Episode 3: The People vs. Emil Blonsky",
        "runtime": "0h 47m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 918,
        "title": "Episode 4: Is This Not Real Magic?",
        "runtime": "0h 36m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 919,
        "title": "Episode 5: Mean, Green, and Straight Poured into These Jeans",
        "runtime": "0h 35m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 920,
        "title": "Episode 6: Just Jen",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 921,
        "title": "Episode 7: The Retreat",
        "runtime": "0h 36m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 922,
        "title": "Episode 8: Ribbit and Rip It",
        "runtime": "0h 36m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 923,
        "title": "Episode 9: Whose Show Is This?",
        "runtime": "0h 38m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-141",
    "order": 141,
    "title": "Werewolf by Night",
    "type": "Special",
    "year": 2022,
    "releaseDate": "Oct 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 52m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": true,
    "notes": "The first Disney+ special presentation. Later released a colour version, though it was intended to be watched in b/w. Both are fun but b/w was the original.",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-142",
    "order": 142,
    "title": "Black Panther: Wakanda Forever",
    "type": "Movie",
    "year": 2022,
    "releaseDate": "Nov 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 41m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-143",
    "order": 143,
    "title": "Guardians of the Galaxy: Holiday Special",
    "type": "Special",
    "year": 2022,
    "releaseDate": "Nov 2022",
    "phase": "Phase 4: Into the Multiverse",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 42m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-144",
    "order": 144,
    "title": "Ant-Man and The Wasp: Quantomania",
    "type": "Movie",
    "year": 2023,
    "releaseDate": "Feb 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 05m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-145",
    "order": 145,
    "title": "Guardians of the Galaxy Vol 3",
    "type": "Movie",
    "year": 2023,
    "releaseDate": "May 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 30m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 8.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-146",
    "order": 146,
    "title": "Spider-Man: Across the Spider-Verse",
    "type": "Movie",
    "year": 2023,
    "releaseDate": "Jun 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "The Spider-Verse (Multiverse)\n[Earth 1610B + Various]",
    "runtime": "2h 20m",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 8.7,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Spider-Verse"
  },
  {
    "id": "marvel-147",
    "order": 147,
    "title": "Secret Invasion S01",
    "type": "TV Show",
    "year": 2023,
    "releaseDate": "Jun 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "4h 13m\n(~0h 42m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 5.9,
    "episodes": [
      {
        "rowNum": 934,
        "title": "Episode 1: Resurrection",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 935,
        "title": "Episode 2: The Return",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 936,
        "title": "Episode 3: Betrayed",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 937,
        "title": "Episode 4: Beloved",
        "runtime": "0h 37m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 938,
        "title": "Episode 5: Harvest",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 939,
        "title": "Episode 6: Home",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-148",
    "order": 148,
    "title": "The Marvels",
    "type": "Movie",
    "year": 2023,
    "releaseDate": "Nov 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 45m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 5.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-149",
    "order": 149,
    "title": "I am Groot S02",
    "type": "TV Show",
    "year": 2023,
    "releaseDate": "Sep 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 17m\n(~0h 03m ea)",
    "postCredits": "✅ Ep 3",
    "isEssential": false,
    "isMCU": true,
    "notes": "Super Short episodes.\nIntended to just be a silly side story.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 942,
        "title": "Episode 1: Are You My Groot?",
        "runtime": "0h 03m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 943,
        "title": "Episode 2: Groot Noses Around",
        "runtime": "0h 03m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 944,
        "title": "Episode 3: Groot’s Snow Day",
        "runtime": "0h 03m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 945,
        "title": "Episode 4: Groot’s Sweet Treat",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 946,
        "title": "Episode 5: Groot and the Great Prophecy",
        "runtime": "0h 04m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 5,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-150",
    "order": 150,
    "title": "Loki S02",
    "type": "TV Show",
    "year": 2023,
    "releaseDate": "Oct - Nov 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "TVA + Multiverse\n[TVA + Various]",
    "runtime": "4h 44m\n(~0h 47m ea)",
    "postCredits": "✅ Ep 1",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 8.2,
    "episodes": [
      {
        "rowNum": 948,
        "title": "Episode 1: Ouroboros",
        "runtime": "0h 54m",
        "postCredits": "✅ Yes 1",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 949,
        "title": "Episode 2: Breaking Brad",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 950,
        "title": "Episode 3: 1893",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 951,
        "title": "Episode 4: Heart of the TVA",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 952,
        "title": "Episode 5 Science/Fiction",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      },
      {
        "rowNum": 953,
        "title": "Episode 6: Glorious Purpose",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "TVA + Multiverse\n[TVA + Various]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-151",
    "order": 151,
    "title": "What If...? S02",
    "type": "TV Show",
    "year": 2023,
    "releaseDate": "Dec 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "Animated Multiverse (MCU+)\n[Various]",
    "runtime": "4h 48m\n(~0h 32m ea)",
    "postCredits": "✅ Ep 4",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [
      {
        "rowNum": 955,
        "title": "Episode 1: What If... Nebula Joined the Nova Corps?",
        "runtime": "0h 35m",
        "postCredits": "❌ No",
        "universe": "NovaCorps Nebula (AMVerse)\n[Xandar 625]",
        "notes": ""
      },
      {
        "rowNum": 956,
        "title": "Episode 2: What If... Peter Quill Attacked Earth's Mightiest Heroes?",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "PeterQuill Attacked (AMVerse)\n[Earth TRN1089]",
        "notes": ""
      },
      {
        "rowNum": 957,
        "title": "Episode 3: What If... Happy Hogan Saved Christmas?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "HappyChristmas (AMVerse)\n[Earth TRN1090]",
        "notes": ""
      },
      {
        "rowNum": 958,
        "title": "Episode 4: What If... Iron Man Crashed Into the Grandmaster?",
        "runtime": "0h 35m",
        "postCredits": "✅ Yes 1",
        "universe": "IronMan Sakaar (AMVerse)\n[Earth TRN908]",
        "notes": ""
      },
      {
        "rowNum": 959,
        "title": "Episode 5: What If... Captain Carter Fought the Hydra Stomper?",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "Captain Carter & Medevil (AMVerse)\n[Earth 82111 & Earth TRN1093]",
        "notes": ""
      },
      {
        "rowNum": 960,
        "title": "Episode 6: What If... Kahhori Reshaped the World?",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "Kahhori (AMVerse)\n[Earth TRN1091]",
        "notes": ""
      },
      {
        "rowNum": 961,
        "title": "Episode 7: What If... Hela Found the Ten Rings?",
        "runtime": "0h 37m",
        "postCredits": "❌ No",
        "universe": "Hela TenRings (AMVerse)\n[Earth TRN1092]",
        "notes": ""
      },
      {
        "rowNum": 962,
        "title": "Episode 8: What If... The Avengers Assembled in 1602?",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "Medevil (AMVerse)\n[Earth TRN1093]",
        "notes": ""
      },
      {
        "rowNum": 963,
        "title": "Episode 9: What If... Strange Supreme Intervened?",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "Mainly Medevil (AMVerse)\n[Earth TRN1093]",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-152",
    "order": 152,
    "title": "Echo S01",
    "type": "TV Show",
    "year": 2024,
    "releaseDate": "Jan 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "3h 48m\n(~0h 45m ea)",
    "postCredits": "✅ Ep 5",
    "isEssential": false,
    "isMCU": true,
    "notes": "The first Spotlight Series.",
    "rating": 6.0,
    "episodes": [
      {
        "rowNum": 965,
        "title": "Episode 1: Chafa",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 966,
        "title": "Episode 2: Lowak",
        "runtime": "0h 39m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 967,
        "title": "Episode 3: Tuklo",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 968,
        "title": "Episode 4: Taloa",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 969,
        "title": "Episode 5: Maya",
        "runtime": "0h 54m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 5,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-153",
    "order": 153,
    "title": "Madame Web",
    "type": "Movie",
    "year": 2024,
    "releaseDate": "Feb 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "1h 56m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-154",
    "order": 154,
    "title": "The Spider Within: A Spider-Verse Story",
    "type": "Short Film",
    "year": 2023,
    "releaseDate": "Jun 2023",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "The Spider-Verse\n[Earth 1610B]",
    "runtime": "0h 07m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "WATCH HERE.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Spider-Verse"
  },
  {
    "id": "marvel-155",
    "order": 155,
    "title": "X-Men '97 S01",
    "type": "TV Show",
    "year": 2024,
    "releaseDate": "Mar 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]",
    "runtime": "5h 25m\n(~0h 32m ea)",
    "postCredits": "✅ Ep 10",
    "isEssential": false,
    "isMCU": false,
    "notes": "Direct Sequel to the 90's X-Men The Animated Series, reviving the TAS! If you skipped the originals, THIS short video covers everything important.",
    "rating": 8.9,
    "episodes": [
      {
        "rowNum": 973,
        "title": "Episode 1: To Me, My X-Men",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 974,
        "title": "Episode 2: Mutant Liberation Begins",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 975,
        "title": "Episode 3: Fire Made Flesh",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 976,
        "title": "Episode 4: Motendo/Lifedeath - Part 1",
        "runtime": "0h 35m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 977,
        "title": "Episode 5: Remember It",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 978,
        "title": "Episode 6: Lifedeath - Part 2",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 979,
        "title": "Episode 7: Bright Eyes",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 980,
        "title": "Episode 8: Tolerance Is Extinction - Part 1",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 981,
        "title": "Episode 9: Tolerance Is Extinction - Part 2",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      },
      {
        "rowNum": 982,
        "title": "Episode 10: Tolerance Is Extinction - Part 3",
        "runtime": "0h 32m",
        "postCredits": "✅ Yes 1",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-156",
    "order": 156,
    "title": "Deadpool & Wolverine",
    "type": "Movie",
    "year": 2024,
    "releaseDate": "Jul 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "Foxverse + Multiverse\n[Earth 41633 / Earth 10005 + Various]",
    "runtime": "2h 08m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.7,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "Deadpool"
  },
  {
    "id": "marvel-157",
    "order": 157,
    "title": "Agatha All Along S01",
    "type": "TV Show",
    "year": 2024,
    "releaseDate": "Sep - Oct 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "6h 44m\n(~0h 45m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "There are no After/Mid Credits but the Credits change in some episodes as the show continues...",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 985,
        "title": "Episode 1 Seekest Thou the Road",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 986,
        "title": "Episode 2: Circle Sewn with Fate / Unlock Thy Hidden Gate",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 987,
        "title": "Episode 3: Through Many Miles / Of Tricks and Trials",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 988,
        "title": "Episode 4: If I Can't Reach You / Let My Song Teach You",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 989,
        "title": "Episode 5: Darkest Hour / Wake Thy Power",
        "runtime": "0h 43m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 990,
        "title": "Episode 6: Familiar by Thy Side",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 991,
        "title": "Episode 7: Death's Hand in Mine",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 992,
        "title": "Episode 8: Follow Me My Friend / To Glory at the End",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 993,
        "title": "Episode 9: Maiden Mother Crone",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-158",
    "order": 158,
    "title": "Venom: The Last Dance",
    "type": "Movie",
    "year": 2024,
    "releaseDate": "Oct 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "2h 12m",
    "postCredits": "✅ Yes 2",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-159",
    "order": 159,
    "title": "What If...? S03",
    "type": "TV Show",
    "year": 2024,
    "releaseDate": "Dec 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "Animated Multiverse (MCU+)\n[Various]",
    "runtime": "4h 26m\n(~0h 33m ea)",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": false,
    "notes": "",
    "rating": 7.4,
    "episodes": [
      {
        "rowNum": 996,
        "title": "Episode 1: What If... The Hulk Fought the Mech Avengers?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "Mech (AMVerse)\n[Earth TRN1491]",
        "notes": ""
      },
      {
        "rowNum": 997,
        "title": "Episode 2: What If... Agatha Went to Hollywood?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "Agatha Hollywood (AMVerse)\n[Earth TRN1492]",
        "notes": ""
      },
      {
        "rowNum": 998,
        "title": "Episode 3: What If... The Red Guardian Stopped the Winter Soldier?",
        "runtime": "0h 35m",
        "postCredits": "❌ No",
        "universe": "RedGaurdian (AMVerse)\n[Earth TRN1493]",
        "notes": ""
      },
      {
        "rowNum": 999,
        "title": "Episode 4: What If... Howard the Duck Got Hitched?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "OnlyThor (AMVerse)\n[Earth 72124]",
        "notes": ""
      },
      {
        "rowNum": 1000,
        "title": "Episode 5: What If... The Emergence Destroyed the Earth?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "EmergenceDestroyedEarth (AMVerse)\n[Earth TRN1494]",
        "notes": ""
      },
      {
        "rowNum": 1001,
        "title": "Episode 6: What If... 1872?",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "Cowboys (AMVerse)\n[Earth TRN1495]",
        "notes": ""
      },
      {
        "rowNum": 1002,
        "title": "Episode 7: What If... The Watcher Disappeared?",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "Various AMVerses & Fifth Dimension\n[Various & Watchers]",
        "notes": ""
      },
      {
        "rowNum": 1003,
        "title": "Episode 8: What If... What If?",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "Fith Dimension & NewDrSUniverse (AMVerse)\n[Watchers & Earth TRN1516]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-160",
    "order": 160,
    "title": "Kraven the Hunter",
    "type": "Movie",
    "year": 2024,
    "releaseDate": "Dec 2024",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "SSU\n[Earth 688B]",
    "runtime": "2h 01m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "spiderman",
    "subfranchise": "Sony's Spider-Man Universe"
  },
  {
    "id": "marvel-161",
    "order": 161,
    "title": "Your Friendly Neighborhood Spider-Man S01",
    "type": "TV Show",
    "year": 2025,
    "releaseDate": "Jan 2025",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "YFNSM\n[Earth 86445]",
    "runtime": "5h 17m\n(~0h 32m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Prequel to an alternate universe Spider-Man leading up to similar events to MCU.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1006,
        "title": "Episode 1: Amazing Fantasy",
        "runtime": "0h 27m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1007,
        "title": "Episode 2: The Parker Luck",
        "runtime": "0h 26m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1008,
        "title": "Episode 3 Secret Identity Crisis",
        "runtime": "0h 28m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1009,
        "title": "Episode 4: Hitting the Big Time",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1010,
        "title": "Episode 5: The Unicorn Unleashed!",
        "runtime": "0h 28m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1011,
        "title": "Episode 6: Duel with the Devil",
        "runtime": "0h 28m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1012,
        "title": "Episode 7 Scorpion Rising",
        "runtime": "0h 28m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1013,
        "title": "Episode 8: Tangled Web",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1014,
        "title": "Episode 9: Hero or Menace",
        "runtime": "0h 28m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      },
      {
        "rowNum": 1015,
        "title": "Episode 10: If This Be My Destiny...",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "YFNSM (MCU+)\n[Earth 86445]",
        "notes": ""
      }
    ],
    "episodeCount": 10,
    "franchise": "spiderman",
    "subfranchise": "Spider-Man"
  },
  {
    "id": "marvel-162",
    "order": 162,
    "title": "Captain America: Brave New World",
    "type": "Movie",
    "year": 2025,
    "releaseDate": "Feb 2025",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "1h 58m",
    "postCredits": "✅ Yes 1",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-163",
    "order": 163,
    "title": "Daredevil: Born Again S01",
    "type": "TV Show",
    "year": 2025,
    "releaseDate": "Mar - Apr 2025",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "7h 06m\n(~0h 47m ea)",
    "postCredits": "✅ Ep 9",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.6,
    "episodes": [
      {
        "rowNum": 1018,
        "title": "Episode 1: Heaven's Half Hour",
        "runtime": "0h 58m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1019,
        "title": "Episode 2: Optics",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1020,
        "title": "Episode 3: The Hollow of His Hand",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1021,
        "title": "Episode 4 Sic Semper Systema",
        "runtime": "0h 52m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1022,
        "title": "Episode 5: With Interest",
        "runtime": "0h 39m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1023,
        "title": "Episode 6: Excessive Force",
        "runtime": "0h 42m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1024,
        "title": "Episode 7: Art for Art's Sake",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1025,
        "title": "Episode 8: Isle of Joy",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1026,
        "title": "Episode 9 Straight to Hell",
        "runtime": "0h 57m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-164",
    "order": 164,
    "title": "Thunderbolts*",
    "type": "Movie",
    "year": 2025,
    "releaseDate": "May 2025",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 06m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "This movie secretly has another name; you realise it at the end of the movie.",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-165",
    "order": 165,
    "title": "IronHeart S01",
    "type": "TV Show",
    "year": 2025,
    "releaseDate": "Jun 2025",
    "phase": "Phase 5: The New Age of Heroes",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "4h 49m\n(~0h 48m ea)",
    "postCredits": "✅ Ep 6",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1029,
        "title": "Episode 1: Take Me Home",
        "runtime": "0h 41m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1030,
        "title": "Episode 2: Will the Real Natalie Please Stand Up",
        "runtime": "0h 48m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1031,
        "title": "Episode 3: We In Danger, Girl",
        "runtime": "0h 53m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1032,
        "title": "Episode 4: Bad Magic",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1033,
        "title": "Episode 5: Karma’s a Glitch",
        "runtime": "0h 57m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1034,
        "title": "Episode 6: The Past Is the Past",
        "runtime": "0h 40m",
        "postCredits": "✅ Yes 1",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 6,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-166",
    "order": 166,
    "title": "The Fantastic Four: First Steps",
    "type": "Movie",
    "year": 2025,
    "releaseDate": "Jul 2025",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "Retro-Futureverse\n[Earth 828]",
    "runtime": "1h 55m",
    "postCredits": "✅ Yes 2",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-167",
    "order": 167,
    "title": "Eyes of Wakanda S01",
    "type": "TV Show",
    "year": 2025,
    "releaseDate": "Aug 2025",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU (Animated)\n[Earth 616]",
    "runtime": "2h 02m\n(~0h 30m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Animated miniseries set in Earth-616 (Main MCU). \nFully canon, starts at 1260 BC.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1040,
        "title": "Episode 1: Into the Lion’s Den",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "MCU (Animated)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1041,
        "title": "Episode 2: Legends and Lies",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "MCU (Animated)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1042,
        "title": "Episode 3: Lost and Found",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "MCU (Animated)\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1043,
        "title": "Episode 4: The Last Panther",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "MCU (Animated)\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 4,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-168",
    "order": 168,
    "title": "Marvel Zombies S01",
    "type": "TV Show",
    "year": 2025,
    "releaseDate": "Sep 2025",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "Zombies (Animated Multiverse)\n[Earth 89521]",
    "runtime": "2h 05m\n(~0h 31m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Mini-Series that serves as a continuation to the What If...? S01 (2021) episode \"What If... Zombies!?\"",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1045,
        "title": "Episode 1: Episode 1",
        "runtime": "0h 35m",
        "postCredits": "❌ No",
        "universe": "Zombies (Animated Multiverse)\n[Earth-89521]",
        "notes": ""
      },
      {
        "rowNum": 1046,
        "title": "Episode 2: Episode 2",
        "runtime": "0h 31m",
        "postCredits": "❌ No",
        "universe": "Zombies (Animated Multiverse)\n[Earth-89521]",
        "notes": ""
      },
      {
        "rowNum": 1047,
        "title": "Episode 3: Episode 3",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "Zombies (Animated Multiverse)\n[Earth-89521]",
        "notes": ""
      },
      {
        "rowNum": 1048,
        "title": "Episode 4: Episode 4",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "Zombies (Animated Multiverse)\n[Earth-89521]",
        "notes": ""
      }
    ],
    "episodeCount": 4,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-169",
    "order": 169,
    "title": "Wonder Man S01",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "Jan 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "3h 45m\n(~0h 31m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "Season 2 got cancelled.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1050,
        "title": "Episode 1: Matinee",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1051,
        "title": "Episode 2 Self-Tape",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1052,
        "title": "Episode 3: Pacoima",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1053,
        "title": "Episode 4: Doorman",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1054,
        "title": "Episode 5: Found Footage",
        "runtime": "0h 23m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1055,
        "title": "Episode 6: Callback",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1056,
        "title": "Episode 7: Kathy Friedman",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1057,
        "title": "Episode 8: Yucca Valley",
        "runtime": "0h 32m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-170",
    "order": 170,
    "title": "Daredevil: Born Again S02",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "Mar 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "6h 19m\n(~0h 47m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.6,
    "episodes": [
      {
        "rowNum": 1059,
        "title": "Episode 1: The Northern Star",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1060,
        "title": "Episode 2 Shoot the Moon",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1061,
        "title": "Episode 3: The Scales & the Sword",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1062,
        "title": "Episode 4: Gloves Off",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1063,
        "title": "Episode 5: The Grand Design",
        "runtime": "0h 50m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1064,
        "title": "Episode 6: Requiem",
        "runtime": "0h 49m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1065,
        "title": "Episode 7: The Hateful Darkness",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      },
      {
        "rowNum": 1066,
        "title": "Episode 8: The Southern Cross",
        "runtime": "0h 51m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-171",
    "order": 171,
    "title": "The Punisher: One Last Kill",
    "type": "Special",
    "year": 2026,
    "releaseDate": "May 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "0h 48m",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 8.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-172",
    "order": 172,
    "title": "Spider-Noir S01",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "May 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
    "runtime": "5h 49m\n(~0h 43m ea)",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "Released in both color and b/w versions. Spider-Man Noir from Spider-Man: Into the Spider-Verse (2018) and this Spider-Noir, are variants of the same character.",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1069,
        "title": "Episode 1 Step Into My Office",
        "runtime": "0h 44m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1070,
        "title": "Episode 2: Tread Lightly",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1071,
        "title": "Episode 3: Double Cross",
        "runtime": "0h 45m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1072,
        "title": "Episode 4: A Mistake I'll Never Make Again",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1073,
        "title": "Episode 5: Betrayal",
        "runtime": "0h 47m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1074,
        "title": "Episode 6: Nightmare on a Gurney",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1075,
        "title": "Episode 7: Nobody's Hero",
        "runtime": "0h 40m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      },
      {
        "rowNum": 1076,
        "title": "Episode 8: The Man in the Mask",
        "runtime": "0h 46m",
        "postCredits": "❌ No",
        "universe": "Spider-Noir Universe\n[Earth-TRN1832]",
        "notes": ""
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-173",
    "order": 173,
    "title": "X-Men '97 S02",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "Jul - Aug 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "X-Men & Spider-Man AU\n[Earth 92131]*",
    "runtime": "04h 52m\n(~0h 32m ea)",
    "postCredits": "✅ Ep 4, 9",
    "isEssential": false,
    "isMCU": false,
    "notes": "Takes place across different points in time.\nUID is kept the same to keep it easy and spoiler-free.",
    "rating": 8.9,
    "episodes": [
      {
        "rowNum": 1078,
        "title": "Episode 1: Days of Past Future",
        "runtime": "0h 33m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1079,
        "title": "Episode 2: A Force to Be Reckoned With",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1080,
        "title": "Episode 3: Rise of Apocalypse: Part 1",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1081,
        "title": "Episode 4: Rise of Apocalypse Part II",
        "runtime": "0h 35m",
        "postCredits": "✅ Yes 1",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1082,
        "title": "Episode 5: Weapon X, Lies, and DVDs",
        "runtime": "0h 29m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1083,
        "title": "Episode 6: Danger.exe",
        "runtime": "0h 34m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1084,
        "title": "Episode 7 Strange Land, Savage Heart",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1085,
        "title": "Episode 8: The Dead Man's Hand",
        "runtime": "0h 30m",
        "postCredits": "❌ No",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      },
      {
        "rowNum": 1086,
        "title": "Episode 9 Survival of the Fittest",
        "runtime": "0h 43m",
        "postCredits": "✅ Yes 1",
        "universe": "X-Men Animated (TAS)\n[Earth 92131]*",
        "notes": ""
      }
    ],
    "episodeCount": 9,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-174",
    "order": 174,
    "title": "Spider-man: Brand New Day",
    "type": "Movie",
    "year": 2026,
    "releaseDate": "Jul 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU\n[Earth 616]",
    "runtime": "2h 25m",
    "postCredits": "✅ Yes 1",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Spider-Man (MCU)"
  },
  {
    "id": "marvel-175",
    "order": 175,
    "title": "Avengers: Endgame Encore",
    "type": "Movie",
    "year": 2026,
    "releaseDate": "Sep 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "(TBD)",
    "runtime": "(TBD)",
    "postCredits": "(TBD)",
    "isEssential": true,
    "isMCU": true,
    "notes": "Re-release version of the movie with additional scenes that will lead directly into Doomsday.",
    "rating": 8.4,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-176",
    "order": 176,
    "title": "Your Friendly Neighbourhood Spider-Man S2 (Autumn 2026)",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "YFNSM\n[Earth 86445]",
    "runtime": "(TBD)",
    "postCredits": "(TBD)",
    "isEssential": false,
    "isMCU": false,
    "notes": "(TBD)",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1090,
        "title": "Episode 1: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1091,
        "title": "Episode 2: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1092,
        "title": "Episode 3: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1093,
        "title": "Episode 4: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1094,
        "title": "Episode 5: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1095,
        "title": "Episode 6: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1096,
        "title": "Episode 7: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1097,
        "title": "Episode 8: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1098,
        "title": "Episode 9: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1099,
        "title": "Episode 10: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      }
    ],
    "episodeCount": 10,
    "franchise": "spiderman",
    "subfranchise": "Spider-Man"
  },
  {
    "id": "marvel-177",
    "order": 177,
    "title": "VisionQuest",
    "type": "TV Show",
    "year": 2026,
    "releaseDate": "Oct - Dec 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "(TBD)",
    "runtime": "(TBD)",
    "postCredits": "(TBD)",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1101,
        "title": "Episode 1: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1102,
        "title": "Episode 2: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1103,
        "title": "Episode 3: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1104,
        "title": "Episode 4: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1105,
        "title": "Episode 5: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1106,
        "title": "Episode 6: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1107,
        "title": "Episode 7: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      },
      {
        "rowNum": 1108,
        "title": "Episode 8: (TBD)",
        "runtime": "(TBD)",
        "postCredits": "(TBD)",
        "universe": "(TBD)",
        "notes": "(TBD)"
      }
    ],
    "episodeCount": 8,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-178",
    "order": 178,
    "title": "Will Returns (Dec 2025 - Jan 2026) (Avengers: Doomsday Pre-Release Stories)",
    "type": "Short Film",
    "year": 2025,
    "releaseDate": "2025",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU*\n[Earth 616]",
    "runtime": "0h 5m\n(~1m ea)",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": true,
    "notes": "(Slotted here for better viewing experiece). The Russo Brothers commented: \"They are not teasers. Or trailers. They are stories. They are clues...\".",
    "rating": 7.2,
    "episodes": [
      {
        "rowNum": 1110,
        "title": "Steve Rogers Will Return (Dec 2025)",
        "runtime": "0h 01m",
        "postCredits": "❌ No",
        "universe": "MCU (In the past?)\n[Earth 616]",
        "notes": "Watch HERE."
      },
      {
        "rowNum": 1111,
        "title": "Thor Will Return (Dec 2025)",
        "runtime": "0h 01m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": "Watch HERE."
      },
      {
        "rowNum": 1112,
        "title": "The X-Men Will Return (Jan 2026)",
        "runtime": "0h 01m",
        "postCredits": "❌ No",
        "universe": "Uncertain",
        "notes": "Watch HERE."
      },
      {
        "rowNum": 1113,
        "title": "The Wakandans and the Fantastic Four Will Return (Jan 2026)",
        "runtime": "0h 01m",
        "postCredits": "❌ No",
        "universe": "MCU\n[Earth 616]",
        "notes": "Watch HERE."
      }
    ],
    "episodeCount": 4,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-179",
    "order": 179,
    "title": "AVENGERS: DOOMSDAY ⭐⭐",
    "type": "Movie",
    "year": 2026,
    "releaseDate": "Dec 2026",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "(TBD)",
    "runtime": "(TBD)",
    "postCredits": "(TBD)",
    "isEssential": true,
    "isMCU": true,
    "notes": "(TBD)",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-180",
    "order": 180,
    "title": "Daredevil Born Again S03",
    "type": "TV Show",
    "year": 2027,
    "releaseDate": "2027",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 8.6,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-181",
    "order": 181,
    "title": "X-Men '97 S03",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 8.9,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-182",
    "order": 182,
    "title": "Beyond the Spider verse",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-183",
    "order": 183,
    "title": "Marvel Zombies S02",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-184",
    "order": 184,
    "title": "Ghost Rider",
    "type": "Movie",
    "year": 2028,
    "releaseDate": "2028",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-185",
    "order": 185,
    "title": "Black Panther 3",
    "type": "Movie",
    "year": 2028,
    "releaseDate": "2028",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-186",
    "order": 186,
    "title": "X-Men (05 May 2028)",
    "type": "Movie",
    "year": 2028,
    "releaseDate": "2028",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": true,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "x-men",
    "subfranchise": "X-Men"
  },
  {
    "id": "marvel-187",
    "order": 187,
    "title": "Armour Wars",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-188",
    "order": 188,
    "title": "Black Panther 3",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-189",
    "order": 189,
    "title": "Shang Chi 2",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-190",
    "order": 190,
    "title": "Blade",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "MCU"
  },
  {
    "id": "marvel-191",
    "order": 191,
    "title": "Avengers Secret Wars ⭐⭐",
    "type": "Movie",
    "year": 2027,
    "releaseDate": "Dec 2027",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": true,
    "isMCU": true,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-192",
    "order": 192,
    "title": "Nova",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-193",
    "order": 193,
    "title": "Thunderbolts 2",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-194",
    "order": 194,
    "title": "Strange Academy\" Special",
    "type": "Special",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-195",
    "order": 195,
    "title": "Werewolf by Night sequel",
    "type": "Special",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.1,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-196",
    "order": 196,
    "title": "Captain Marvel 3\" - ft rogue!!!",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.8,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-197",
    "order": 197,
    "title": "Heroes for Hire\" Sepcial",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-198",
    "order": 198,
    "title": "Midnight Suns",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-199",
    "order": 199,
    "title": "World War Hulk",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-200",
    "order": 200,
    "title": "Eternals 2",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-201",
    "order": 201,
    "title": "Hawkeye S02",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-202",
    "order": 202,
    "title": "Moon Knight S02",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-203",
    "order": 203,
    "title": "Ms. Marvel S02",
    "type": "TV Show",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 6.3,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-204",
    "order": 204,
    "title": "Okoye\" \"Untitled Wakanda Project",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-205",
    "order": 205,
    "title": "Scarlet Witch",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-206",
    "order": 206,
    "title": "Doctor Strange 3",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.5,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-207",
    "order": 207,
    "title": "Thor V",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.0,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  },
  {
    "id": "marvel-208",
    "order": 208,
    "title": "Champions\" OR \"Young Avengers",
    "type": "Movie",
    "year": 2020,
    "releaseDate": "Unknown",
    "phase": "Phase 6: Battleworld",
    "saga": "The Multiverse Saga",
    "universe": "MCU [Earth 616]",
    "runtime": "Unknown",
    "postCredits": "❌ No",
    "isEssential": false,
    "isMCU": false,
    "notes": "",
    "rating": 7.2,
    "episodes": [],
    "episodeCount": 0,
    "franchise": "mcu",
    "subfranchise": "Avengers / MCU"
  }
];
