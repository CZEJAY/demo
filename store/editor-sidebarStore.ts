import { create } from 'zustand'

export type SidebarPanel = 
  | 'cards'
  | 'smart-layout'
  | 'blocks'
  | 'images'
  | 'media'
  | 'embeds'
  | 'charts'
  | 'forms'
  | null

interface SidebarState {
  activePanel: SidebarPanel
  setActivePanel: (panel: SidebarPanel) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  activePanel: null,
  setActivePanel: (panel) => set({ activePanel: panel }),
}))

