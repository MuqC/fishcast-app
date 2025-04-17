import { ReactNode } from "react";
import BottomNavigation from "@/components/ui/bottom-navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-neutral-900 shadow-lg min-h-screen pb-16 relative">
      <header className="bg-white dark:bg-neutral-800 shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 8l-4 4 4 4M11 17h10M4 17h4M11 8h10M4 8h4" />
              </svg>
              FTS
            </h1>
          </div>
          <div>
            <button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}
