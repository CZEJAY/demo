import { create } from 'zustand'

export type ThemeType = 'slate' | 'wine' | 'basic-light' | 'basic-dark'
export type ThemeFilter = 'dark' | 'light' | 'professional' | 'colorful'
export type ThemeMode = 'custom' | 'standard'

interface ThemeState {
  isOpen: boolean
  selectedTheme: ThemeType
  activeFilter: ThemeFilter | null
  mode: ThemeMode
  setIsOpen: (open: boolean) => void
  setTheme: (theme: ThemeType) => void
  setFilter: (filter: ThemeFilter | null) => void
  setMode: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isOpen: false,
  selectedTheme: 'basic-light',
  activeFilter: null,
  mode: 'standard',
  setIsOpen: (open) => set({ isOpen: open }),
  setTheme: (theme) => set({ selectedTheme: theme }),
  setFilter: (filter) => set({ activeFilter: filter }),
  setMode: (mode) => set({ mode }),
}))
