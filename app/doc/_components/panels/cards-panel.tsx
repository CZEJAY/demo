"use client"

import * as React from "react"
import { useDraggable } from "@dnd-kit/core"
import { cn } from "@/lib/utils"

interface CardTemplateProps {
  id: string
  name: string
  preview: React.ReactNode
  className?: string
}

function CardTemplate({ id, name, preview, className }: CardTemplateProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `template-${id}`,
    data: {
      type: 'template',
      template: id,
    },
  })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        "group relative cursor-grab rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md",
        isDragging && "shadow-lg ring-2 ring-primary ring-offset-2",
        className
      )}
    >
      <div className="aspect-[1.4/1] w-full overflow-hidden rounded-md border bg-zinc-50">
        {preview}
      </div>
      <div className="mt-2 text-center text-sm">{name}</div>
    </div>
  )
}

const templates = [
  {
    id: "blank",
    name: "Blank card",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="120" height="80" rx="2" fill="#E5E7EB" />
      </svg>
    ),
  },
  {
    id: "image-text",
    name: "Image and text",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="50" height="80" rx="2" fill="#E5E7EB" />
        <rect x="70" y="20" width="60" height="4" rx="1" fill="#D1D5DB" />
        <rect x="70" y="30" width="60" height="4" rx="1" fill="#D1D5DB" />
        <rect x="70" y="40" width="40" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "text-image",
    name: "Text and image",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="80" y="10" width="50" height="80" rx="2" fill="#E5E7EB" />
        <rect x="10" y="20" width="60" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="30" width="60" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="40" width="40" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "two-columns",
    name: "Two columns",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="20" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="30" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="40" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="75" y="20" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="75" y="30" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="75" y="40" width="35" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "two-columns-heading",
    name: "Two column with headings",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="55" height="6" rx="1" fill="#9CA3AF" />
        <rect x="10" y="25" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="35" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="75" y="10" width="55" height="6" rx="1" fill="#9CA3AF" />
        <rect x="75" y="25" width="55" height="4" rx="1" fill="#D1D5DB" />
        <rect x="75" y="35" width="55" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "three-columns",
    name: "Three columns",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="20" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="30" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="52" y="20" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="52" y="30" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="95" y="20" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="95" y="30" width="35" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "three-columns-heading",
    name: "Three column with headings",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="35" height="6" rx="1" fill="#9CA3AF" />
        <rect x="10" y="25" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="52" y="10" width="35" height="6" rx="1" fill="#9CA3AF" />
        <rect x="52" y="25" width="35" height="4" rx="1" fill="#D1D5DB" />
        <rect x="95" y="10" width="35" height="6" rx="1" fill="#9CA3AF" />
        <rect x="95" y="25" width="35" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "four-columns",
    name: "Four columns",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <rect 
              x={10 + i * 32} 
              y="20" 
              width="25" 
              height="4" 
              rx="1" 
              fill="#D1D5DB" 
            />
            <rect 
              x={10 + i * 32} 
              y="30" 
              width="25" 
              height="4" 
              rx="1" 
              fill="#D1D5DB" 
            />
          </React.Fragment>
        ))}
      </svg>
    ),
  },
  {
    id: "title-bullets",
    name: "Title with bullets",
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="120" height="6" rx="1" fill="#9CA3AF" />
        {[0, 1, 2].map((i) => (
          <React.Fragment key={i}>
            <circle 
              cx="15" 
              cy={30 + i * 15} 
              r="2" 
              fill="#D1D5DB" 
            />
            <rect 
              x="25" 
              y={28 + i * 15} 
              width="100" 
              height="4" 
              rx="1" 
              fill="#D1D5DB" 
            />
          </React.Fragment>
        ))}
      </svg>
    ),
  },
]

export function CardsPanel() {
  return (
    <div className="p-4">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-medium text-zinc-500">Basic</h3>
          <div className="grid grid-cols-2 gap-3">
            {templates.map((template) => (
              <CardTemplate key={template.id} {...template} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium text-zinc-500">Card layouts</h3>
          <div className="grid grid-cols-2 gap-3">
            <CardTemplate
              id="accent-left"
              name="Accent left"
              preview={
                <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
                  <rect x="10" y="10" width="20" height="80" rx="2" fill="#818CF8" />
                  <rect x="40" y="20" width="90" height="4" rx="1" fill="#D1D5DB" />
                  <rect x="40" y="30" width="90" height="4" rx="1" fill="#D1D5DB" />
                  <rect x="40" y="40" width="60" height="4" rx="1" fill="#D1D5DB" />
                </svg>
              }
            />
            <CardTemplate
              id="accent-right"
              name="Accent right"
              preview={
                <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
                  <rect x="110" y="10" width="20" height="80" rx="2" fill="#818CF8" />
                  <rect x="10" y="20" width="90" height="4" rx="1" fill="#D1D5DB" />
                  <rect x="10" y="30" width="90" height="4" rx="1" fill="#D1D5DB" />
                  <rect x="10" y="40" width="60" height="4" rx="1" fill="#D1D5DB" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

