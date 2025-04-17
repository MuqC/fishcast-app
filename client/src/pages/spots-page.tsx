import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { spots } from "@/lib/data";
import { Link } from "wouter";

export default function SpotsPage() {
  return (
    <div className="page page-transition">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-neutral-500">Fishing Spots</h2>
          <Button variant="default" className="rounded-full flex items-center gap-1 bg-primary hover:bg-primary/90 text-white px-3 py-1.5 h-auto text-sm">  
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Spot
          </Button>
        </div>

        <Card className="mb-4">
          <CardContent className="p-3">
            <div className="relative w-full h-48 bg-neutral-200 rounded-lg mb-3 overflow-hidden">
              <img src="src/assets/mapview.png" alt="Map view" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute bottom-3 right-3">
                <button className="bg-white p-2 rounded-full shadow-md text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-neutral-500">Nearby Spots</p>
              </div>
              <div>
                <Select defaultValue="all">
                  <SelectTrigger className="h-7 text-xs bg-neutral-100 border border-neutral-200 rounded">
                    <SelectValue placeholder="All Species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Species</SelectItem>
                    <SelectItem value="bass">Bass</SelectItem>
                    <SelectItem value="trout">Trout</SelectItem>
                    <SelectItem value="pike">Pike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-3">
          {spots.map((spot) => (
            <Link key={spot.id} href={`/spots/${spot.id}`}>
              <Card className="overflow-hidden scale-in cursor-pointer hover:border-primary transition-colors">
                <div className="flex">
                  <div className="w-24 h-24 bg-neutral-200">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-3 flex-1">
                    <h3 className="font-medium text-sm">{spot.name}</h3>
                    <p className="text-xs text-neutral-500 mb-1">{spot.location} • {spot.distance} miles</p>
                    <div className="flex flex-wrap gap-1 mb-1">
                      {spot.species.map((species, index) => (
                        <span key={index} className="text-xs bg-neutral-100 px-2 py-0.5 rounded-full">{species}</span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-green-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      {spot.catches} catches this week
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
