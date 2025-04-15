import { Card, CardContent } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { tournaments, leagues, topAnglers, leaderboardEntries } from "@/lib/data";

export default function TournamentsPage() {
  const { 
    tournamentsState, 
    expandTournaments, 
    selectLeague, 
    backToTournaments, 
    backToLeagues 
  } = useAppContext();

  const renderTournaments = () => (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4 text-neutral-500">Tournaments</h2>
      
      <div className="mb-6">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src="https://images.unsplash.com/photo-1545205528-2ded99c5baba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
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
      
      <div className="grid grid-cols-2 gap-3">
        {tournaments.map((tournament) => (
          <Card 
            key={tournament.id} 
            className="overflow-hidden cursor-pointer hover:border-primary transition-colors scale-in"
            onClick={expandTournaments}
          >
            <div className="relative">
              <img 
                src={tournament.image} 
                alt={tournament.name} 
                className="w-full h-32 object-cover"
              />
              <div className={`absolute top-2 right-2 ${tournament.status === 'LIVE' ? 'bg-orange-500' : 'bg-neutral-400'} text-white text-xs px-2 py-0.5 rounded-full`}>
                {tournament.status}
              </div>
            </div>
            <CardContent className="p-3">
              <h4 className="font-medium text-sm">{tournament.name}</h4>
              <p className="text-xs text-neutral-500 mb-1">{tournament.description}</p>
              {tournament.status === 'LIVE' ? (
                <div className="flex items-center text-xs text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {tournament.participants} participants
                </div>
              ) : (
                <div className="flex items-center text-xs text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Starts {tournament.startDate}
                </div>
              )}
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
        <h2 className="text-lg font-semibold text-neutral-500">Bass Masters Cup Leagues</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {leagues.map((league) => (
          <Card 
            key={league.id} 
            className="p-4 cursor-pointer hover:border-primary transition-colors scale-in"
            onClick={() => selectLeague(league.name)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{league.name}</h3>
                <p className="text-xs text-neutral-500">{league.description}</p>
              </div>
              <div className={`${league.statusClass} rounded-full px-3 py-1 text-xs font-medium`}>
                {league.status}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="bg-neutral-100 rounded p-2">
                <p className="text-xs text-neutral-500">Participants</p>
                <p className="font-medium">{league.participants}</p>
              </div>
              <div className="bg-neutral-100 rounded p-2">
                <p className="text-xs text-neutral-500">Prize Pool</p>
                <p className="font-medium">{league.prizePool}</p>
              </div>
              <div className="bg-neutral-100 rounded p-2">
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
      
      <Card className="mb-4">
        <CardContent className="grid grid-cols-3 gap-2 p-3">
          {/* Second Place */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 mx-auto relative mb-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold text-orange-500">2</span>
              </div>
              <img 
                src={topAnglers[1].image} 
                alt="Second place" 
                className="w-full h-full object-cover rounded-full border-2 border-orange-500"
              />
            </div>
            <p className="text-xs font-medium">{topAnglers[1].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[1].weight} lbs</p>
          </div>
          
          {/* First Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-100 mx-auto relative mb-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <img 
                src={topAnglers[0].image} 
                alt="First place" 
                className="w-full h-full object-cover rounded-full border-3 border-primary"
              />
            </div>
            <p className="text-sm font-medium">{topAnglers[0].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[0].weight} lbs</p>
          </div>
          
          {/* Third Place */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 mx-auto relative mb-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold text-green-700">3</span>
              </div>
              <img 
                src={topAnglers[2].image}
                alt="Third place" 
                className="w-full h-full object-cover rounded-full border-2 border-green-700"
              />
            </div>
            <p className="text-xs font-medium">{topAnglers[2].name}</p>
            <p className="text-xs text-neutral-500">{topAnglers[2].weight} lbs</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <div className="p-3 border-b border-neutral-200 flex justify-between items-center">
          <p className="text-sm font-medium">Tournament Rankings</p>
          <Select defaultValue="week3">
            <SelectTrigger className="h-7 text-xs bg-neutral-100 border border-neutral-200 rounded">
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
            <div key={entry.position} className="flex items-center p-3">
              <div className="w-8 text-center mr-2">
                <span className="font-semibold text-sm">{entry.position}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-200 mr-2 overflow-hidden">
                <img src={entry.image} alt={entry.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{entry.name}</p>
                <p className="text-xs text-neutral-500">{entry.catches} catches • {entry.weight} lbs</p>
              </div>
              <div className="text-xs">
                {entry.change.direction === 'up' && (
                  <span className="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    {" "}{entry.change.value}
                  </span>
                )}
                {entry.change.direction === 'down' && (
                  <span className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {" "}{entry.change.value}
                  </span>
                )}
                {entry.change.direction === 'none' && (
                  <span className="text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-3 border-t border-neutral-200 flex justify-center">
          <button className="text-primary text-sm font-medium">View Full Rankings</button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="page page-transition">
      {!tournamentsState.tournamentsExpanded && renderTournaments()}
      {tournamentsState.tournamentsExpanded && !tournamentsState.selectedLeague && renderLeagues()}
      {tournamentsState.selectedLeague && renderLeaderboard()}
    </div>
  );
}
