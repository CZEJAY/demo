"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Import, Search, Image } from 'lucide-react'
import { useThemeStore, type ThemeFilter, type ThemeType } from "@/store/theme-store"
import { cn } from "@/lib/utils"

const filters: ThemeFilter[] = ['dark', 'light', 'professional', 'colorful']

const themes = [
  {
    id: 'slate' as ThemeType,
    name: 'Slate',
    preview: {
      background: 'bg-zinc-900',
      text: 'text-white',
      accent: 'text-blue-400',
    },
    filters: ['dark', 'professional'],
  },
  {
    id: 'wine' as ThemeType,
    name: 'Wine',
    preview: {
      background: 'bg-red-900',
      text: 'text-pink-50',
      accent: 'text-pink-300',
    },
    filters: ['dark', 'colorful'],
  },
  {
    id: 'basic-light' as ThemeType,
    name: 'Basic Light',
    preview: {
      background: 'bg-white',
      text: 'text-gray-900',
      accent: 'text-blue-600',
    },
    filters: ['light', 'professional'],
  },
  {
    id: 'basic-dark' as ThemeType,
    name: 'Basic Dark',
    preview: {
      background: 'bg-gray-900',
      text: 'text-gray-50',
      accent: 'text-blue-400',
    },
    filters: ['dark', 'professional'],
  },
]

function ThemePreview({ 
  theme, 
  isSelected,
  onClick,
}: { 
  theme: typeof themes[number]
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative aspect-[4/3] w-full overflow-hidden rounded-lg border transition-all hover:border-primary",
        isSelected && "ring-2 ring-primary ring-offset-2"
      )}
    >
      <div className={cn("h-full w-full p-4", theme.preview.background)}>
        <div className="space-y-2">
          <p className={cn("text-lg font-semibold", theme.preview.text)}>Title</p>
          <p className={cn("text-sm", theme.preview.text)}>
            Body & <span className={theme.preview.accent}>link</span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-2 left-2">
        <p className={cn("text-xs font-medium", theme.preview.text)}>{theme.name}</p>
      </div>
    </button>
  )
}

export function ThemeSidebar() {
  const { isOpen, selectedTheme, activeFilter, mode, setIsOpen, setTheme, setFilter, setMode } = useThemeStore()

  const filteredThemes = React.useMemo(() => {
    if (!activeFilter) return themes
    return themes.filter(theme => theme.filters.includes(activeFilter))
  }, [activeFilter])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Theme</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Plus className="mr-2 h-4 w-4" />
              New theme
            </Button>
            <Button variant="outline" className="flex-1">
              <Import className="mr-2 h-4 w-4" />
              Import
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Themes let you customize colors, fonts, logo and other visual styling
          </p>
          <Tabs value={mode} onValueChange={(value) => setMode(value as 'custom' | 'standard')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="custom">Custom</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className={cn(
                  "capitalize",
                  activeFilter === filter && "bg-primary text-primary-foreground"
                )}
                onClick={() => setFilter(activeFilter === filter ? null : filter)}
              >
                {filter}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="ml-auto">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="h-[450px] pr-4">
            <div className="grid grid-cols-2 gap-4">
              {filteredThemes.map((theme) => (
                <ThemePreview
                  key={theme.id}
                  theme={theme}
                  isSelected={selectedTheme === theme.id}
                  onClick={() => setTheme(theme.id)}
                />
              ))}
            </div>
          </ScrollArea>
          <div className="rounded-lg border bg-muted p-4">
            <p className="text-sm font-medium">Looking to change the page background only?</p>
            <Button variant="outline" className="mt-2 w-full">
              <Image className="mr-2 h-4 w-4" />
              Edit background
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

