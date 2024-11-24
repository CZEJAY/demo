"use client"

import { Button } from "@/components/ui/button"
import { Home, Palette, Share2, MoreHorizontal } from 'lucide-react'
import { useThemeStore } from "@/store/theme-store"
import { ThemeSidebar } from "./theme-sidebar"

export function DocumentHeader() {
  const { setIsOpen } = useThemeStore()

  return (
    <>
      <header className="flex h-14 items-center justify-between border-b border-zinc-800 px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Home className="h-4 w-4" />
          </Button>
          <span className="text-sm text-zinc-400">Patexa Tips & Tricks</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
            <Palette className="mr-2 h-4 w-4" />
            Theme
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="secondary" size="sm">
            Present
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <ThemeSidebar />
    </>
  )
}

