// Feed Data
export const feedItems = [
  {
    id: 1,
    user: {
      name: "Mike Richards",
      avatar: "https://images.unsplash.com/photo-1607173618657-e9fa9bcbd164?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
    },
    timeAgo: "2 hours ago",
    location: "Lake Michigan",
    image: "https://images.unsplash.com/photo-1545569324-a3db9c12889d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Caught this 4.5lb Bass today!",
    description: "Perfect weather and calm waters made for an amazing day fishing.",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    user: {
      name: "Sarah Thompson",
      avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
    },
    timeAgo: "Yesterday",
    location: "Clearwater Lake",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "First trout of the season!",
    description: "Didn't expect to catch anything today but got lucky with this beauty.",
    likes: 42,
    comments: 8,
  },
  {
    id: 3,
    user: {
      name: "David Carter",
      avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
    },
    timeAgo: "2 days ago",
    location: "Cedar Creek",
    image: "https://images.unsplash.com/photo-1612640579020-ef3bd234a6e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Monster pike on the new lure!",
    description: "This new silver spoon is absolutely killing it. Highly recommend!",
    likes: 56,
    comments: 12,
  },
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
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    type: "Rainbow Trout",
    weight: "2.8",
    length: "16",
    location: "Clearwater Lake",
    date: "June 5, 2023",
    image: "https://images.unsplash.com/photo-1565280654386-466927d31313?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    type: "Northern Pike",
    weight: "8.2",
    length: "31",
    location: "Cedar Creek",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1587129883461-a744351b60d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    type: "Bluegill",
    weight: "0.7",
    length: "8",
    location: "Miller's Pond",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1621956838481-fb7133d3bba7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
    image: "https://images.unsplash.com/photo-1520456217122-1559af3fdf9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

// Tournaments Data
export const tournaments = [
  {
    id: 1,
    name: "Bass Masters Cup",
    description: "Freshwater Bass Competition",
    participants: 256,
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1509961708744-522c3b577754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
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
  {
    id: 4,
    name: "River Kings",
    description: "Catfish & Pike Competition",
    startDate: "July 20",
    status: "UPCOMING",
    image: "https://images.unsplash.com/photo-1563841249759-c9b662a078b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 2,
    name: "David C.",
    weight: "32.4",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    position: 3,
    name: "Sarah T.",
    weight: "29.7",
    image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
