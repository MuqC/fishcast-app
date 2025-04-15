import { useLocation, Link } from "wouter";

const navItems = [
  { path: "/", label: "Feed", icon: "stream" },
  { path: "/catchbook", label: "Catchbook", icon: "book" },
  { path: "/spots", label: "Spots", icon: "map-marker-alt" },
  { path: "/tournaments", label: "Tournaments", icon: "trophy" },
];

export default function BottomNavigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-10">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path} 
            className={`flex flex-col items-center p-3 w-1/4 ${location === item.path ? 'text-primary font-semibold' : 'text-neutral-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {item.icon === "stream" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
              {item.icon === "book" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              )}
              {item.icon === "map-marker-alt" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              )}
              {item.icon === "trophy" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              )}
            </svg>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
