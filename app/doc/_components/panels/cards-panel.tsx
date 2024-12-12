"use client";

import * as React from "react";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface CardTemplateProps {
  id: string;
  name: string;
  preview: React.ReactNode;
  content: string; // HTML content to be inserted
  className?: string;
}

function CardTemplate({
  id,
  name,
  preview,
  content,
  className,
}: CardTemplateProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `template-${id}`,
    data: {
      type: "template",
      template: id,
      content,
    },
  });

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
      <div className="absolute -top-2 -left-2 bg-background px-2 py-1 rounded-md text-xs font-medium shadow-sm">
        Drag to insert
      </div>
      <div className="aspect-[1.4/1] w-full overflow-hidden rounded-md border bg-zinc-50">
        {preview}
      </div>
      <div className="mt-2 text-center text-sm">{name}</div>
    </div>
  );
}

const templates = [
  {
    id: "blank",
    name: "Blank card",
    content: '<div class="p-4 border rounded-lg"><p>Start typing...</p></div>',
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="120" height="80" rx="2" fill="#E5E7EB" />
      </svg>
    ),
  },
  {
    id: "image-text",
    name: "Image and text",
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <img src="/placeholder.svg" alt="Placeholder" />
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
        <img src="/placeholder.svg" alt="Placeholder" />
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <div>
          <p>Start typing...</p>
        </div>
        <div>
          <p>Start typing...</p>
        </div>
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-3 gap-4 p-4 border rounded-lg">
        <div><p>Start typing...</p></div>
        <div><p>Start typing...</p></div>
        <div><p>Start typing...</p></div>
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-3 gap-4 p-4 border rounded-lg">
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
        <div>
          <h3>Heading</h3>
          <p>Start typing...</p>
        </div>
      </div>
    `,
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
    content: `
      <div class="grid grid-cols-4 gap-4 p-4 border rounded-lg">
        <div><p>Start typing...</p></div>
        <div><p>Start typing...</p></div>
        <div><p>Start typing...</p></div>
        <div><p>Start typing...</p></div>
      </div>
    `,
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
    content: `
      <div class="p-4 border rounded-lg">
        <h3>Heading</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    `,
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="120" height="6" rx="1" fill="#9CA3AF" />
        {[0, 1, 2].map((i) => (
          <React.Fragment key={i}>
            <circle cx="15" cy={30 + i * 15} r="2" fill="#D1D5DB" />
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
  {
    id: "accent-left",
    name: "Accent left",
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <div class="bg-primary p-4 rounded-lg">
          <p>Start typing...</p>
        </div>
        <div>
          <p>Start typing...</p>
        </div>
      </div>
    `,
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="20" height="80" rx="2" fill="#818CF8" />
        <rect x="40" y="20" width="90" height="4" rx="1" fill="#D1D5DB" />
        <rect x="40" y="30" width="90" height="4" rx="1" fill="#D1D5DB" />
        <rect x="40" y="40" width="60" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
  {
    id: "accent-right",
    name: "Accent right",
    content: `
      <div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
        <div>
          <p>Start typing...</p>
        </div>
        <div class="bg-primary p-4 rounded-lg">
          <p>Start typing...</p>
        </div>
      </div>
    `,
    preview: (
      <svg className="h-full w-full" viewBox="0 0 140 100" fill="none">
        <rect x="110" y="10" width="20" height="80" rx="2" fill="#818CF8" />
        <rect x="10" y="20" width="90" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="30" width="90" height="4" rx="1" fill="#D1D5DB" />
        <rect x="10" y="40" width="60" height="4" rx="1" fill="#D1D5DB" />
      </svg>
    ),
  },
];

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
      </div>
    </div>
  );
}
