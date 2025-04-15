import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { catches, seasonStats } from "@/lib/data";

export default function CatchbookPage() {
  return (
    <div className="page page-transition">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-neutral-500">My Catchbook</h2>
          <Button variant="default" className="rounded-full flex items-center gap-1 bg-primary hover:bg-primary/90 text-white px-3 py-1.5 h-auto text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Catch
          </Button>
        </div>

        <Card className="mb-4">
          <CardContent className="p-3">
            <div className="flex items-center mb-3">
              <div className="w-2 h-12 bg-green-500 rounded-full mr-2"></div>
              <div>
                <h3 className="font-medium">{seasonStats.year} Season</h3>
                <p className="text-xs text-neutral-500">{seasonStats.catches} catches • {seasonStats.species} species</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="bg-neutral-100 rounded-lg p-2 text-center">
                <p className="text-xs text-neutral-500">Largest</p>
                <p className="font-medium">{seasonStats.largest.weight} lbs</p>
                <p className="text-xs">{seasonStats.largest.type}</p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-2 text-center">
                <p className="text-xs text-neutral-500">Total Weight</p>
                <p className="font-medium">{seasonStats.totalWeight} lbs</p>
                <p className="text-xs">{seasonStats.totalFish} fish</p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-2 text-center hidden sm:block">
                <p className="text-xs text-neutral-500">Top Location</p>
                <p className="font-medium">{seasonStats.topLocation.name}</p>
                <p className="text-xs">{seasonStats.topLocation.catches} catches</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-sm font-semibold mb-2 text-neutral-500">Recent Catches</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {catches.map((catchItem) => (
            <Card key={catchItem.id} className="overflow-hidden scale-in">
              <div className="relative">
                <img 
                  src={catchItem.image} 
                  alt={catchItem.type} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">{catchItem.type}</p>
                  <p className="text-white/80 text-xs">{catchItem.weight} lbs • {catchItem.length} inches</p>
                </div>
              </div>
              <CardContent className="p-2 flex justify-between items-center">
                <p className="text-xs text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {catchItem.location}
                </p>
                <p className="text-xs text-neutral-500">{catchItem.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
