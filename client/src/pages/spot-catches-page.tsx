import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { spots } from "@/lib/data";
import { Image } from "@/components/ui/image";

export default function SpotCatchesPage() {
  const [location, setLocation] = useLocation();
  const spotId = parseInt(location.split("/").pop() || "1");
  const spot = spots.find(s => s.id === spotId);

  if (!spot) {
    return <div>Spot not found</div>;
  }

  // Filter catches for this spot (this would come from your data)
  const spotCatches = [
    {
      id: 1,
      type: "Largemouth Bass",
      weight: "4.5",
      length: "19.5",
      date: "June 12, 2023",
      image: "/src/assets/bass1.jpeg",
      user: {
        name: "Mike Richards",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      }
    },
    {
      id: 2,
      type: "Smallmouth Bass",
      weight: "3.2",
      length: "17",
      date: "June 10, 2023",
      image: "/src/assets/bass1.jpeg",
      user: {
        name: "Sarah Thompson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      }
    },
    {
      id: 3,
      type: "Largemouth Bass",
      weight: "5.1",
      length: "20.5",
      date: "June 8, 2023",
      image: "/src/assets/bass1.jpeg",
      user: {
        name: "David Carter",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      }
    }
  ];

  // Add lake characteristics data
  const lakeCharacteristics = {
    temperature: "72°F",
    waterClarity: "Clear",
    weather: "Sunny",
    wind: "5 mph NW",
    waterLevel: "Normal",
    lastUpdated: "2 hours ago"
  };

  return (
    <div className="page page-transition">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button onClick={() => setLocation("/spots")} className="mr-2 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-neutral-500">{spot.name}</h2>
        </div>

        <div className="mb-4">
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3">
            <Image 
              src={spot.image} 
              alt={spot.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <div>
                <h3 className="text-white font-bold text-xl">{spot.name}</h3>
                <p className="text-white/80 text-sm">{spot.location}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center mb-4">
            <div className="bg-neutral-100 rounded p-2">
              <p className="text-xs text-neutral-500">Species</p>
              <p className="font-medium">{spot.species.join(", ")}</p>
            </div>
            <div className="bg-neutral-100 rounded p-2">
              <p className="text-xs text-neutral-500">Catches</p>
              <p className="font-medium">{spot.catches} this week</p>
            </div>
            <div className="bg-neutral-100 rounded p-2">
              <p className="text-xs text-neutral-500">Distance</p>
              <p className="font-medium">{spot.distance} miles</p>
            </div>
          </div>

          {/* New Lake Characteristics Section */}
          <Card className="mb-4">
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-neutral-500">Lake Conditions</h3>
                <span className="text-xs text-neutral-400">{lakeCharacteristics.lastUpdated}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Water Temp</p>
                    <p className="text-sm font-medium">{lakeCharacteristics.temperature}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Water Clarity</p>
                    <p className="text-sm font-medium">{lakeCharacteristics.waterClarity}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Weather</p>
                    <p className="text-sm font-medium">{lakeCharacteristics.weather}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Wind</p>
                    <p className="text-sm font-medium">{lakeCharacteristics.wind}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-sm font-semibold mb-3 text-neutral-500">Recent Catches</h3>
        </div>

        <div className="space-y-3">
          {spotCatches.map((catchItem) => (
            <Card key={catchItem.id} className="overflow-hidden scale-in">
              <div className="relative">
                <Image 
                  src={catchItem.image} 
                  alt={catchItem.type}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">{catchItem.type}</p>
                  <p className="text-white/80 text-xs">{catchItem.weight} lbs • {catchItem.length} inches</p>
                </div>
              </div>
              <CardContent className="p-3">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 mr-2 overflow-hidden">
                    <Image 
                      src={catchItem.user.avatar} 
                      alt={catchItem.user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{catchItem.user.name}</p>
                    <p className="text-xs text-neutral-500">{catchItem.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 