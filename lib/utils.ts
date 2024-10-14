import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Language } from "./translations";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
]