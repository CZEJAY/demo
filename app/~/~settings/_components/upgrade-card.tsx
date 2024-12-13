import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StarBackground } from '@/components/Starbackground'
import { Star } from './star'

export function UpgradeCard() {
  return (
    <Card className="overflow-hidden relative">
      <div className="absolute inset-0 gradient-bg">
        {/* <Star size={32} fill="#0ef" /> */}
        <StarBackground numStars={10} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2 text-white">
          <Sparkles className="h-5 w-5" />
          Upgrade your workspace
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <p className="text-white/90">Unlock unlimited AI, remove Patexa branding, and more</p>
        <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 transition-colors" size="lg">
          Upgrade now
        </Button>
      </CardContent>
    </Card>
  )
}
