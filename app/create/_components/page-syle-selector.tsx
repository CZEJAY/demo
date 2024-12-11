"use client";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGE_STYLE_OPTIONS } from "@/lib/paste-constants";
import { PageStyle } from "@/types/paste";

interface PageStyleSelectorProps {
  value: PageStyle;
  onChange: (value: PageStyle) => void;
  className?: string;
}

export function PageStyleSelector({
  value,
  onChange,
  className,
}: PageStyleSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <div className="text-xs text-muted-foreground px-2 py-1">
          Page style
        </div>
        {PAGE_STYLE_OPTIONS.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2">
              <span>{option.label}</span>
              {option.fluid && (
                <Badge variant="new" className="bg-blue-100 text-blue-700">
                  Fluid
                </Badge>
              )}
            </div>
            {/* <span className="text-xs text-muted-foreground">
              {option.description}
            </span> */}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
