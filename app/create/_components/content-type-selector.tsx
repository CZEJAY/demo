"use client";

import { Monitor, FileText, PresentationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentType } from "@/types/generate";
import { cn } from "@/lib/utils";

interface ContentTypeSelectorProps {
  value: ContentType;
  onChange: (value: ContentType) => void;
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
}: ContentTypeSelectorProps) {
  return (
    <div className="flex gap-2 ">
      {contentTypes.map((type) => {
        const Icon = type.icon;
        return (
          <Button
            key={type.value}
            variant="outline"
            size="lg"
            className={cn(
              "flex-1 gap-2 bg-white/50 hover:bg-white/80 items-center justify-center flex flex-col py-10",
              value === type.value &&
                "bg-purple-50 text-primary hover:bg-primary/80"
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
