import { createContext, useState, useContext, ReactNode } from "react";

type TournamentsState = {
  tournamentsExpanded: boolean;
  selectedLeague: string | null;
};

type AppContextType = {
  tournamentsState: TournamentsState;
  expandTournaments: () => void;
  selectLeague: (league: string) => void;
  backToTournaments: () => void;
  backToLeagues: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [tournamentsState, setTournamentsState] = useState<TournamentsState>({
    tournamentsExpanded: false,
    selectedLeague: null,
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
    });
  };

  const backToLeagues = () => {
    setTournamentsState({
      ...tournamentsState,
      selectedLeague: null,
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
