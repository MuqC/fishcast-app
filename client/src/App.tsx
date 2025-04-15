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
import { AppProvider } from "@/context/app-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={FeedPage} />
      <Route path="/catchbook" component={CatchbookPage} />
      <Route path="/spots" component={SpotsPage} />
      <Route path="/tournaments" component={TournamentsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
