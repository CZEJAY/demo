"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSidebarStore } from "@/store/editor-sidebarStore"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CardsPanel } from "./cards-panel"
import SmartLayoutPanel  from "./smart-layout-panel"
import  BlocksPanel  from "./blocks-panel"
import ImagesPanel from "./images-panel"
import  MediaPanel  from "./media-panel"
import EmbedsPanel from "./embeds-panel"
import  ChartsPanel  from "./charts-panel"
import  FormsPanel  from "./forms-panel"

export function SidebarPanel() {
  const { activePanel } = useSidebarStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {activePanel && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-16 top-2 z-40 h-[600px] w-[320px] -translate-y-1/2 rounded-lg border bg-white shadow-lg"
        >
          <ScrollArea className="h-full">
            {activePanel === "cards" && <CardsPanel />}
            {activePanel === "smart-layout" && <SmartLayoutPanel />}
            {activePanel === "blocks" && <BlocksPanel />}
            {activePanel === "images" && <ImagesPanel />}
            {activePanel === "media" && <MediaPanel />}
            {activePanel === "embeds" && <EmbedsPanel />}
            {activePanel === "charts" && <ChartsPanel />}
            {activePanel === "forms" && <FormsPanel />}
          </ScrollArea>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

