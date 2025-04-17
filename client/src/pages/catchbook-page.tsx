import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { catches, seasonStats } from "@/lib/data";
import { Link } from "wouter";
import { Image } from "@/components/ui/image";
import CameraPopup from "@/components/camera-popup";

export default function CatchbookPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setShowCamera(false);
    // Here you would typically navigate to a form to add details about the catch
    // For now, we'll just close the camera
  };

  return (
    <div className="page page-transition">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-neutral-500">My Catchbook</h2>
          <Button 
            variant="default" 
            className="rounded-full flex items-center gap-1 bg-primary hover:bg-primary/90 text-white px-3 py-1.5 h-auto text-sm"
            onClick={() => setShowCamera(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Catch
          </Button>
        </div>

        {showCamera && (
          <CameraPopup 
            onClose={() => setShowCamera(false)} 
            onCapture={handleCapture} 
          />
        )}

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
        
        <div className="space-y-3">
          {catches.map((catchItem) => (
            <Link key={catchItem.id} href={`/catches/${catchItem.id}`}>
              <Card className="cursor-pointer hover:bg-neutral-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image 
                        src={catchItem.image} 
                        alt={catchItem.type}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{catchItem.type}</h3>
                      <p className="text-sm text-neutral-500">{catchItem.location}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-sm text-neutral-500">{catchItem.weight} lbs</span>
                        <span className="text-sm text-neutral-500">•</span>
                        <span className="text-sm text-neutral-500">{catchItem.length} inches</span>
                        <span className="text-sm text-neutral-500">•</span>
                        <span className="text-sm text-neutral-500">{catchItem.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
