import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/ui/image";
import { feedItems } from "@/lib/data";
import { Link } from "wouter";

export default function FeedPage() {
  return (
    <div className="page page-transition">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-neutral-500">Recent Activity</h2>
        
        {feedItems.map((item) => (
          <Card key={item.id} className="mb-4 overflow-hidden scale-in">
            <div className="p-3 border-b border-neutral-200 flex items-center">
              <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3 overflow-hidden">
                <Image 
                  src={item.user.avatar} 
                  alt={`${item.user.name} avatar`} 
                  className="w-full h-full"
                />
              </div>
              <div>
                <Link 
                  href={`/profile/${item.user.name.toLowerCase().replace(" ", "-")}`}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.user.name}
                </Link>
                <p className="text-xs text-neutral-500">{item.timeAgo} • {item.location}</p>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
              <Image 
                src={item.image} 
                alt="Fishing catch" 
                className="w-full h-56"
              />
            </div>
            
            <CardContent className="p-3">
              <h3 className="font-medium text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-neutral-500 mb-2">{item.description}</p>
              <div className="flex items-center text-xs text-neutral-500">
                <span className="mr-3">{item.likes} likes</span>
                <span>{item.comments} comments</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
