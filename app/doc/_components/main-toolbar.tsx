"use client"

import * as React from "react"
import { Camera, LayoutGrid, Type, ImageIcon, Film, Globe, BarChart, PenTool } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSidebarStore, type SidebarPanel } from "@/store/editor-sidebarStore"
import { cn } from "@/lib/utils"

const tools = [
  { id: 'cards' as SidebarPanel, icon: Camera, label: 'Card Templates' },
  { id: 'smart-layout' as SidebarPanel, icon: LayoutGrid, label: 'Smart Layout' },
  { id: 'blocks' as SidebarPanel, icon: Type, label: 'Basic Blocks' },
  { id: 'images' as SidebarPanel, icon: ImageIcon, label: 'Images' },
  { id: 'media' as SidebarPanel, icon: Film, label: 'Video & Media' },
  { id: 'embeds' as SidebarPanel, icon: Globe, label: 'Embedded Apps' },
  { id: 'charts' as SidebarPanel, icon: BarChart, label: 'Charts & Diagrams' },
  { id: 'forms' as SidebarPanel, icon: PenTool, label: 'Forms & Buttons' },
]

export function MainEditorToolbar() {
  const { activePanel, setActivePanel } = useSidebarStore()

  return (
    <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 rounded-lg border bg-white/50 p-1.5 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="flex flex-col gap-1">
        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-md",
              activePanel === tool.id && "bg-primary text-primary-foreground"
            )}
            onClick={() => setActivePanel(activePanel === tool.id ? null : tool.id)}
          >
            <tool.icon className="h-4 w-4" />
            <span className="sr-only">{tool.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

