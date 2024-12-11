"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Filter {
  id: string;
  label: string;
  isActive?: boolean;
}

interface PatexaFiltersProps {
  filters: Filter[];
  onFilterChange: (id: string) => void;
  className?: string;
}

export function PatexaFilters({
  filters,
  onFilterChange,
  className,
}: PatexaFiltersProps) {
  return (
    <div className={cn("flex gap-1", className)}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 rounded-md px-3",
            filter.isActive &&
              "bg-primary/10 text-primary hover:bg-primary/20 shadowx"
          )}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
