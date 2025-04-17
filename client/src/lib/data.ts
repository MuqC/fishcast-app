// Feed Data
export const feedItems = [
  {
    id: 1,
    title: "Big Bass Catch",
    description: "Caught this beauty at Lake Michigan!",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
    location: "Lake Michigan",
    likes: 24,
    comments: 8,
    timeAgo: "2 hours ago",
    user: {
      name: "Mike Richards",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      isPrivate: false,
      stats: {
        catches: 156,
        followers: 234,
        following: 89
      },
      awards: [
        {
          id: 1,
          title: "Biggest Bass",
          description: "Largest bass caught in 2023",
          image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
          date: "2023-12-15"
        },
        {
          id: 2,
          title: "Tournament Champion",
          description: "1st place in Lake Michigan Bass Classic",
          image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
          date: "2023-08-20"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Trout Fishing Success",
    description: "Perfect day for trout fishing!",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
    location: "Rocky River",
    likes: 18,
    comments: 5,
    timeAgo: "4 hours ago",
    user: {
      name: "Sarah Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      isPrivate: true,
      stats: {
        catches: 89,
        followers: 156,
        following: 45
      },
      awards: []
    }
  },
  {
    id: 3,
    title: "Monster Pike Catch",
    description: "Caught this massive pike at Cedar Creek!",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
    location: "Cedar Creek",
    likes: 32,
    comments: 12,
    timeAgo: "1 day ago",
    user: {
      name: "David Carter",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      isPrivate: false,
      stats: {
        catches: 98,
        followers: 187,
        following: 67
      },
      awards: []
    }
  }
];

// Catchbook Data
export const seasonStats = {
  year: "2023",
  catches: 28,
  species: 9,
  largest: {
    weight: "8.2",
    type: "Northern Pike",
  },
  totalWeight: "72.5",
  totalFish: 28,
  topLocation: {
    name: "Lake Michigan",
    catches: 12,
  },
};

export const catches = [
  {
    id: 1,
    type: "Largemouth Bass",
    weight: "4.5",
    length: "19.5",
    location: "Lake Michigan",
    date: "June 12, 2023",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
  },
  {
    id: 2,
    type: "Rainbow Trout",
    weight: "2.8",
    length: "16",
    location: "Clearwater Lake",
    date: "June 5, 2023",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
  },
  {
    id: 3,
    type: "Northern Pike",
    weight: "8.2",
    length: "31",
    location: "Cedar Creek",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
  },
  {
    id: 4,
    type: "Bluegill",
    weight: "0.7",
    length: "8",
    location: "Miller's Pond",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8",
  },
];

// Fishing Spots Data
export const spots = [
  {
    id: 1,
    name: "Lake Michigan",
    location: "Chicago, IL",
    distance: "12",
    species: ["Bass", "Trout", "Pike"],
    catches: 28,
    image: "@assets/lakemichigan.jpg",
  },
  {
    id: 2,
    name: "Clearwater Lake",
    location: "Wauconda, IL",
    distance: "24",
    species: ["Trout", "Perch"],
    catches: 16,
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Cedar Creek",
    location: "Antioch, IL",
    distance: "35",
    species: ["Pike", "Bass"],
    catches: 12,
    image: "https://images.unsplash.com/photo-1534251623184-22cb7e61c526?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Miller's Pond",
    location: "Arlington Heights, IL",
    distance: "18",
    species: ["Bluegill", "Crappie"],
    catches: 8,
    image: "@assets/millerspond.jpg",
  },
];

// Tournaments Data
export const tournaments = [
  {
    id: "1",
    name: "Bass Masters Classic",
    description: "The premier bass fishing tournament series",
    startDate: "2024-06-15",
    endDate: "2024-06-17",
    location: "Lake Okeechobee, FL",
    entryFee: 250,
    prizePool: 10000,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
    league: "bass-masters",
  },
  {
    id: "2",
    name: "River King Cup",
    description: "Championship series for river fishing enthusiasts",
    startDate: "2024-07-20",
    endDate: "2024-07-22",
    location: "Mississippi River, MN",
    entryFee: 200,
    prizePool: 8000,
    image: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
    league: "river-kings",
  },
  {
    id: "3",
    name: "Trout Champions",
    description: "Catch & Release Trout Series",
    participants: 189,
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Deep Sea Showdown",
    description: "Saltwater Tournament",
    startDate: "July 12",
    status: "UPCOMING",
    image: "https://images.unsplash.com/photo-1516676839530-135a545cce02?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export const leagues = [
  {
    id: 1,
    name: "Pro League",
    description: "For experienced anglers",
    status: "High Stakes",
    statusClass: "bg-primary/10 text-primary",
    participants: 87,
    prizePool: "$5,000",
    topSpecies: "Largemouth",
  },
  {
    id: 2,
    name: "Amateur League",
    description: "For recreational anglers",
    status: "Mid Stakes",
    statusClass: "bg-neutral-100 text-neutral-500",
    participants: 124,
    prizePool: "$2,000",
    topSpecies: "Smallmouth",
  },
  {
    id: 3,
    name: "Beginner League",
    description: "For newcomers to fishing",
    status: "Entry Level",
    statusClass: "bg-secondary/10 text-secondary",
    participants: 45,
    prizePool: "$500",
    topSpecies: "Any Bass",
  },
];

export const topAnglers = [
  {
    position: 1,
    name: "Mike R.",
    weight: "36.8",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    position: 2,
    name: "David C.",
    weight: "32.4",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    position: 3,
    name: "Sarah T.",
    weight: "29.7",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export const leaderboardEntries = [
  {
    position: 4,
    name: "Emily W.",
    catches: 5,
    weight: "28.2",
    change: { direction: "up", value: 2 },
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 5,
    name: "James L.",
    catches: 6,
    weight: "27.5",
    change: { direction: "down", value: 1 },
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 6,
    name: "Robert K.",
    catches: 4,
    weight: "26.8",
    change: { direction: "up", value: 3 },
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 7,
    name: "John M.",
    catches: 5,
    weight: "25.2",
    change: { direction: "none", value: 0 },
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 8,
    name: "Anna D.",
    catches: 4,
    weight: "24.7",
    change: { direction: "down", value: 2 },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];
