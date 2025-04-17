import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppContext } from "@/context/app-context";
import { tournaments, leagues, topAnglers, leaderboardEntries } from "@/lib/data";
import { Image } from "@/components/ui/image";
import TournamentEntryPage from "./tournament-entry-page";

export default function TournamentsPage() {
  const { 
    tournamentsState, 
    expandTournaments, 
    selectLeague, 
    backToTournaments, 
    backToLeagues,
    showTournamentEntry
  } = useAppContext();

  const renderTournaments = () => (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4 text-neutral-500">Tournaments</h2>
      
      <div className="mb-6">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image 
            src="/src/assets/fisher2.jpg" 
            alt="Tournaments banner" 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
              <h3 className="text-white font-bold text-xl">Compete & Win</h3>
              <p className="text-white/80 text-sm">Join tournaments and test your fishing skills</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-sm font-semibold mb-3 text-neutral-500">Available Tournaments</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tournaments.map((tournament) => (
          <Card 
            key={tournament.id} 
            className="overflow-hidden scale-in cursor-pointer hover:border-primary hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            onClick={() => expandTournaments()}
          >
            <div className="relative">
              <Image 
                src={tournament.image} 
                alt={tournament.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="text-white font-medium text-sm">{tournament.name}</p>
              </div>
            </div>
            <CardContent className="p-2">
              <p className="text-xs text-neutral-500 mb-1">{tournament.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {tournament.location}
                </p>
                <p className="text-xs text-neutral-500">{tournament.startDate}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLeagues = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button onClick={backToTournaments} className="mr-2 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-neutral-500">Tournament Leagues</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {leagues.map((league) => (
          <Card 
            key={league.id} 
            className="p-4 cursor-pointer hover:border-primary hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors scale-in"
            onClick={() => selectLeague(league.name)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{league.name}</h3>
                <p className="text-sm text-neutral-500">{league.description}</p>
              </div>
              <div className={`${league.statusClass} rounded-full px-3 py-1 text-xs font-medium`}>
                {league.status}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-neutral-100 rounded-lg p-3">
                <p className="text-xs text-neutral-500">Participants</p>
                <p className="font-medium">{league.participants}</p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-3">
                <p className="text-xs text-neutral-500">Prize Pool</p>
                <p className="font-medium">{league.prizePool}</p>
              </div>
              <div className="bg-neutral-100 rounded-lg p-3">
                <p className="text-xs text-neutral-500">Top Species</p>
                <p className="font-medium">{league.topSpecies}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button onClick={backToLeagues} className="mr-2 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-neutral-500">
          {tournamentsState.selectedLeague} Leaderboard
        </h2>
      </div>
      
      <Card className="mb-6">
        <CardContent className="grid grid-cols-3 gap-4 p-6">
          {/* Second Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-100 mx-auto mb-3 overflow-hidden">
              <Image 
                src={topAnglers[1].image} 
                alt="Second place" 
                className="w-full h-full object-cover rounded-full border-2 border-orange-500"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm font-semibold">2</span>
            </div>
            <p className="text-sm font-medium">{topAnglers[1].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[1].weight} lbs</p>
          </div>
          
          {/* First Place */}
          <div className="text-center -mt-4">
            <div className="w-24 h-24 rounded-full bg-neutral-100 mx-auto mb-3 overflow-hidden">
              <Image 
                src={topAnglers[0].image} 
                alt="First place" 
                className="w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary text-white mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm font-semibold">1</span>
            </div>
            <p className="text-sm font-medium">{topAnglers[0].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[0].weight} lbs</p>
          </div>
          
          {/* Third Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-100 mx-auto mb-3 overflow-hidden">
              <Image 
                src={topAnglers[2].image}
                alt="Third place" 
                className="w-full h-full object-cover rounded-full border-2 border-green-700"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-green-700 text-white mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm font-semibold">3</span>
            </div>
            <p className="text-sm font-medium">{topAnglers[2].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[2].weight} lbs</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
          <p className="text-sm font-medium">Tournament Rankings</p>
          <Select defaultValue="week3">
            <SelectTrigger className="h-8 text-xs bg-neutral-100 border border-neutral-200 rounded">
              <SelectValue placeholder="Week 3 (Current)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week3">Week 3 (Current)</SelectItem>
              <SelectItem value="week2">Week 2</SelectItem>
              <SelectItem value="week1">Week 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="divide-y divide-neutral-200">
          {leaderboardEntries.map((entry) => (
            <div key={entry.position} className="flex items-center p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
              <div className="w-8 text-center mr-3">
                <span className="font-semibold text-sm">{entry.position}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3 overflow-hidden">
                <Image src={entry.image} alt={entry.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{entry.name}</p>
                <p className="text-xs text-neutral-500">{entry.catches} catches • {entry.weight} lbs</p>
              </div>
              <div className="flex items-center gap-1">
                {entry.change.direction === "up" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                )}
                {entry.change.direction === "down" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                <span className={`text-xs ${entry.change.direction === "up" ? "text-green-500" : "text-red-500"}`}>
                  {entry.change.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-neutral-200 flex justify-center">
          <button 
            onClick={showTournamentEntry}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Enter Tournament
          </button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="page page-transition">
      {!tournamentsState.tournamentsExpanded && renderTournaments()}
      {tournamentsState.tournamentsExpanded && !tournamentsState.selectedLeague && renderLeagues()}
      {tournamentsState.selectedLeague && !tournamentsState.showTournamentEntry && renderLeaderboard()}
      {tournamentsState.showTournamentEntry && <TournamentEntryPage />}
    </div>
  );
}
