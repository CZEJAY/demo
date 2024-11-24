"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutGrid, List } from 'lucide-react'

export function DocumentSidebar() {
  return (
    <div className="w-64 border-r border-zinc-000 bg-zinc-50">
      <div className="flex items-center gap-1 border-b border-zinc-800 p-3">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <List className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-48px)]">
        <div className="p-4">
          {/* Thumbnails would go here */}
          <div className="aspect-video w-full rounded-lg bg-zinc-100" />
        </div>
      </ScrollArea>
    </div>
  )
}

