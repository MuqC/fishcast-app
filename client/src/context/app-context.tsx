import { createContext, useState, useContext, ReactNode } from "react";

type TournamentsState = {
  tournamentsExpanded: boolean;
  selectedLeague: string | null;
  showTournamentEntry: boolean;
};

type AppContextType = {
  tournamentsState: TournamentsState;
  expandTournaments: () => void;
  selectLeague: (league: string) => void;
  backToTournaments: () => void;
  backToLeagues: () => void;
  backToLeaderboard: () => void;
  showTournamentEntry: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [tournamentsState, setTournamentsState] = useState<TournamentsState>({
    tournamentsExpanded: false,
    selectedLeague: null,
    showTournamentEntry: false,
  });

  const expandTournaments = () => {
    setTournamentsState({
      ...tournamentsState,
      tournamentsExpanded: true,
    });
  };

  const selectLeague = (league: string) => {
    setTournamentsState({
      ...tournamentsState,
      selectedLeague: league,
    });
  };

  const backToTournaments = () => {
    setTournamentsState({
      ...tournamentsState,
      tournamentsExpanded: false,
      selectedLeague: null,
      showTournamentEntry: false,
    });
  };

  const backToLeagues = () => {
    setTournamentsState({
      ...tournamentsState,
      selectedLeague: null,
      showTournamentEntry: false,
    });
  };

  const backToLeaderboard = () => {
    setTournamentsState({
      ...tournamentsState,
      showTournamentEntry: false,
    });
  };

  const showTournamentEntry = () => {
    setTournamentsState({
      ...tournamentsState,
      showTournamentEntry: true,
    });
  };

  return (
    <AppContext.Provider
      value={{
        tournamentsState,
        expandTournaments,
        selectLeague,
        backToTournaments,
        backToLeagues,
        backToLeaderboard,
        showTournamentEntry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
