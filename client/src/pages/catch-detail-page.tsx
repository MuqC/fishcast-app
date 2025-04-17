import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { catches } from "@/lib/data";
import { Image } from "@/components/ui/image";

export default function CatchDetailPage() {
  const [location, setLocation] = useLocation();
  const catchId = parseInt(location.split("/").pop() || "1");
  const catchItem = catches.find(c => c.id === catchId);

  if (!catchItem) {
    return <div>Catch not found</div>;
  }

  return (
    <div className="page page-transition">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button onClick={() => setLocation("/catchbook")} className="mr-2 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-neutral-500">Catch Details</h2>
        </div>

        <Card className="mb-4">
          <div className="relative">
            <Image 
              src={catchItem.image} 
              alt={catchItem.type}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-xl">{catchItem.type}</h3>
              <p className="text-white/80 text-sm">{catchItem.location}</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-100 rounded-lg p-3">
                <p className="text-xs text-neutral-500">Weight</p>
                <p className="text-lg font-semibold">{catchItem.weight} lbs</p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-3">
                <p className="text-xs text-neutral-500">Length</p>
                <p className="text-lg font-semibold">{catchItem.length} inches</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Location</p>
                  <p className="text-sm font-medium">{catchItem.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Date Caught</p>
                  <p className="text-sm font-medium">{catchItem.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Time of Day</p>
                  <p className="text-sm font-medium">Morning</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Weather</p>
                  <p className="text-sm font-medium">Sunny, 75°F</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold mb-3 text-neutral-500">Notes</h3>
            <p className="text-sm text-neutral-600">
              Caught using a Texas-rigged worm in about 8 feet of water near the weed line. 
              Fish put up a good fight and was released after measurement.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 