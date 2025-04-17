import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import FeedPage from "@/pages/feed-page";
import CatchbookPage from "@/pages/catchbook-page";
import SpotsPage from "@/pages/spots-page";
import TournamentsPage from "@/pages/tournaments-page";
import SpotCatchesPage from "@/pages/spot-catches-page";
import CatchDetailPage from "@/pages/catch-detail-page";
import ProfilePage from "@/pages/profile-page";
import SettingsPage from "@/pages/settings-page";
import { AppProvider } from "@/context/app-context";
import { ThemeProvider } from "@/context/theme-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={FeedPage} />
      <Route path="/catchbook" component={CatchbookPage} />
      <Route path="/catches/:id" component={CatchDetailPage} />
      <Route path="/spots" component={SpotsPage} />
      <Route path="/spots/:id" component={SpotCatchesPage} />
      <Route path="/tournaments" component={TournamentsPage} />
      <Route path="/profile/:username" component={ProfilePage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppProvider>
          <Layout>
            <Router />
          </Layout>
          <Toaster />
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
