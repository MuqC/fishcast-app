import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, UserPlus } from "lucide-react";
import { feedItems } from "@/lib/data";
import { Image } from "@/components/ui/image";

export default function ProfilePage() {
  const [location, setLocation] = useLocation();
  const username = location.split("/")[2];
  const user = feedItems.find(item => 
    item.user.name.toLowerCase().replace(" ", "-") === username
  )?.user;

  if (!user || !user.stats) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-gray-900">User not found</h1>
            <Button 
              className="mt-4" 
              onClick={() => setLocation("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Feed
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Feed
        </Button>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-500">
                  {user.isPrivate ? "Private Profile" : "Public Profile"}
                </p>
              </div>
            </div>

            {user.isPrivate ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Private Account</h3>
                <p className="text-gray-500 mb-4">You must follow this user to view their profile</p>
                <Button className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Follow
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.catches}</p>
                    <p className="text-gray-500">Catches</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.followers}</p>
                    <p className="text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.following}</p>
                    <p className="text-gray-500">Following</p>
                  </div>
                </div>

                <Button className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Follow
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {!user.isPrivate && user.awards && user.awards.length > 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-bold">Fishing Awards</h2>
              </div>
              <div className="space-y-4">
                {user.awards.map((award) => (
                  <div key={award.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <Image
                      src={award.image}
                      alt={award.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{award.title}</h3>
                      <p className="text-sm text-gray-500">{award.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(award.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 