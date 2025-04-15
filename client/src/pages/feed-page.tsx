import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { feedItems } from "@/lib/data";

export default function FeedPage() {
  return (
    <div className="page page-transition">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-neutral-500">Recent Activity</h2>
        
        {feedItems.map((item) => (
          <Card key={item.id} className="mb-4 overflow-hidden scale-in">
            <div className="p-3 border-b border-neutral-200 flex items-center">
              <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3 overflow-hidden">
                <img src={item.user.avatar} alt={`${item.user.name} avatar`} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium text-sm">{item.user.name}</p>
                <p className="text-xs text-neutral-500">{item.timeAgo} • {item.location}</p>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
              <img src={item.image} alt="Fishing catch" className="w-full h-56 object-cover" />
            </div>
            
            <CardContent className="p-3">
              <p className="text-sm font-medium mb-1">{item.title}</p>
              <p className="text-sm text-neutral-500 mb-2">{item.description}</p>
              <div className="flex items-center text-sm text-neutral-500">
                <span className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {item.likes}
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {item.comments}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
