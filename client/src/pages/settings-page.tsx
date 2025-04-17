import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-context";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="page page-transition">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-neutral-500 dark:text-neutral-400">Settings</h2>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4 dark:text-neutral-200">Appearance</h3>
            
            <div className="flex items-center justify-between py-2">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode" className="dark:text-neutral-200">Dark Mode</Label>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Switch between light and dark themes</p>
              </div>
              <Switch 
                id="dark-mode" 
                checked={isDark} 
                onCheckedChange={toggleTheme}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4 dark:text-neutral-200">Account</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="dark:text-neutral-200">Email</Label>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">user@example.com</p>
              </div>
              
              <div>
                <Label htmlFor="location" className="dark:text-neutral-200">Location</Label>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Chicago, IL</p>
              </div>
              
              <Button variant="outline" className="w-full dark:border-neutral-700 dark:hover:bg-neutral-800">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4 dark:text-neutral-200">Notifications</h3>
            
            <div className="flex items-center justify-between py-2">
              <div className="space-y-0.5">
                <Label htmlFor="tournament-notifications" className="dark:text-neutral-200">Tournament Alerts</Label>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Get notified about upcoming tournaments</p>
              </div>
              <Switch id="tournament-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="space-y-0.5">
                <Label htmlFor="catch-notifications" className="dark:text-neutral-200">Catch Reminders</Label>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Reminders to log your catches</p>
              </div>
              <Switch id="catch-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-4 dark:text-neutral-200">About</h3>
            
            <div className="space-y-2">
              <p className="text-sm dark:text-neutral-200">FishCast v1.0.0</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2023 FishCast. All rights reserved.</p>
            </div>
            
            <div className="mt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                Terms of Service
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 