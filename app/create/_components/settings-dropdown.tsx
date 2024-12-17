'use client'

import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CARD_OPTIONS, STYLE_OPTIONS } from '@/lib/constants-dash'
import { cn } from '@/lib/utils'

interface SettingsDropdownsProps {
  cards: number
  style: string
  language: string
  onCardsChange: (value: string) => void
  onStyleChange: (value: string) => void
  onLanguageChange: (value: string) => void
}

export function SettingsDropdowns({
  cards,
  style,
  language,
  onCardsChange,
  onStyleChange,
  onLanguageChange,
}: SettingsDropdownsProps) {
  return (
    <div className="flex gap-2">
      <Select value={cards.toString()} onValueChange={onCardsChange}>
        <SelectTrigger className="w-[140px] bg-white/50">
          <SelectValue>
            <span className="flex items-center gap-2">
              {cards} cards
              {CARD_OPTIONS.find(opt => opt.value === cards)?.isPro && (
                <Badge variant="new" className="bg-purple-100 text-purple-700">
                  PRO
                </Badge>
              )}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <div className="text-xs text-muted-foreground px-2 py-1">Tip: cards are like slides</div>
          {CARD_OPTIONS.map(option => (
            <SelectItem
              key={option.value}
              value={option.value.toString()}
              className="flex items-center justify-between"
            >
              <span>{option.label}</span>
              {option.isPro && (
                <Badge variant="new" className=" gradient-bg text-white ml-2">
                  PRO
                </Badge>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={style} onValueChange={onStyleChange}>
        <SelectTrigger className="w-[140px] bg-white/50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <div className="grid gap-2">
            {STYLE_OPTIONS.map(option => (
              <SelectItem key={option.value} value={option.value} className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span>{option.label}</span>
                  {option.fluid && (
                    <Badge variant="beta" className="bg-blue-100 text-blue-700">
                      Fluid
                    </Badge>
                  )}
                </div>
                {/* <span className="text-xs text-muted-foreground">{option.description}</span> */}
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>

      <Select value={language} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[140px] bg-white/50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en-US">English (US)</SelectItem>
          <SelectItem value="en-GB">English (UK)</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
