import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Lock } from 'lucide-react'
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"

interface PatexaCardProps {
  title: string
  isPrivate?: boolean
  creator: {
    name: string
    avatar?: string
  }
  thumbnail?: string
  lastViewed?: Date
  className?: string
}

export function PatexaCard({
  title,
  isPrivate = false,
  creator,
  thumbnail = "/placeholder.svg?height=200&width=320",
  lastViewed,
  className,
}: PatexaCardProps) {
  return (
    <Card className={cn("group relative overflow-hidden", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover transition-transform group-hover:scale-105"
          width={320}
          height={200}
        />
      </div>
      <CardHeader className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-medium leading-none">{title}</h3>
            {isPrivate && (
              <div className="flex items-center gap-1 text-xs bg-grat-100 text-muted-foreground">
                <Lock className="h-3 w-3" />
                <span>Private</span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex items-center gap-2 p-4 pt-0">
        <Avatar className="h-5 w-5">
          <AvatarImage src={creator.avatar} alt={creator.name} />
          <AvatarFallback>{creator.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center gap-1 text-xs text-muted-foreground">
          <span>Created by {creator.name}</span>
          {lastViewed && (
            <>
              <span>•</span>
              <span>Last viewed {formatDistanceToNow(lastViewed)} ago</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

