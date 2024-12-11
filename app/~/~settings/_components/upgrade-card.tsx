import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UpgradeCard() {
  return (
    <Card className="overflow-hidden relative">
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2 text-white">
          <Sparkles className="h-5 w-5" />
          Upgrade your workspace
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <p className="text-white">
          Unlock unlimited AI, remove Patexa branding, and more
        </p>
        <Button
          variant="secondary"
          className="bg-white hover:bg-white/90"
          size="lg"
        >
          Upgrade now
        </Button>
      </CardContent>
    </Card>
  );
}
