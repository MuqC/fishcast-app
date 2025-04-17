import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";
import { Image } from "@/components/ui/image";

export default function TournamentEntryPage() {
  const { backToLeaderboard } = useAppContext();

  return (
    <div className="page page-transition p-4">
      <div className="flex items-center mb-4">
        <button onClick={backToLeaderboard} className="mr-2 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-neutral-500">Tournament Entry</h2>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Summer Bass Championship</h3>
                <p className="text-sm text-neutral-500">Professional Division</p>
              </div>
              <div className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                Open Registration
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-500 mb-1">Entry Fee</p>
                <p className="text-xl font-semibold">$150</p>
                <p className="text-xs text-neutral-500 mt-1">per angler</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-500 mb-1">Prize Pool</p>
                <p className="text-xl font-semibold">$10,000</p>
                <p className="text-xs text-neutral-500 mt-1">guaranteed</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-500 mb-1">Duration</p>
                <p className="text-xl font-semibold">2 Days</p>
                <p className="text-xs text-neutral-500 mt-1">July 15-16, 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Tournament Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Location</p>
                  <p className="font-medium">Lake Michigan, Chicago</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Check-in Time</p>
                  <p className="font-medium">5:00 AM - 6:30 AM</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Launch Time</p>
                  <p className="font-medium">7:00 AM</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Payout Structure</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
                  <span className="font-medium">1st Place</span>
                  <span className="text-green-600 font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
                  <span className="font-medium">2nd Place</span>
                  <span className="text-green-600 font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
                  <span className="font-medium">3rd Place</span>
                  <span className="text-green-600 font-semibold">$1,500</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
                  <span className="font-medium">4th Place</span>
                  <span className="text-green-600 font-semibold">$1,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium">
                Register Now - $150
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 