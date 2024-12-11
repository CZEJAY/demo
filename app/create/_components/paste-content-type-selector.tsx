"use client";

import { Monitor, FileText, PresentationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentType } from "@/types/generate";
import { cn } from "@/lib/utils";

interface ContentTypeSelectorProps {
  value: ContentType;
  onChange: (value: ContentType) => void;
  className?: string;
}

const contentTypes = [
  {
    value: "presentation" as const,
    label: "Presentation",
    icon: PresentationIcon,
  },
  {
    value: "webpage" as const,
    label: "Webpage",
    icon: Monitor,
  },
  {
    value: "document" as const,
    label: "Document",
    icon: FileText,
  },
];

export function ContentTypeSelector({
  value,
  onChange,
  className,
}: ContentTypeSelectorProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {contentTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = value === type.value;

        return (
          <Button
            key={type.value}
            variant="outline"
            className={cn(
              "flex-1 gap-2 bg-white/50 hover:bg-white/80",
              isSelected && "bg-purple-50 text-purple-700 hover:bg-purple-50/80"
            )}
            onClick={() => onChange(type.value)}
          >
            <Icon className="h-4 w-4" />
            {type.label}
          </Button>
        );
      })}
    </div>
  );
}
