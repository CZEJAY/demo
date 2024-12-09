"use client";

import { Clock, Grid, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterOption, SortOption, ViewOption } from "@/types/shared";
import { cn } from "@/lib/utils";

interface FiltersProps {
  filter: FilterOption;
  sort: SortOption;
  view: ViewOption;
  onFilterChange: (value: FilterOption) => void;
  onSortChange: (value: SortOption) => void;
  onViewChange: (value: ViewOption) => void;
  itemCount?: number;
}

export function Filters({
  filter,
  sort,
  view,
  onFilterChange,
  onSortChange,
  onViewChange,
  itemCount = 0,
}: FiltersProps) {
  return (
    <div className="flex items-center justify-between">
      <Tabs
        value={filter}
        onValueChange={(value) => onFilterChange(value as FilterOption)}
      >
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="recently_viewed" className="gap-2">
            <Clock className="h-4 w-4" />
            Recently viewed
          </TabsTrigger>
          <TabsTrigger value="favorites" className="gap-2">
            <Star className="h-4 w-4" />
            Favorites
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{itemCount}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Sort by: {sort.split("_").map(capitalize).join(" ")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={sort}
              onValueChange={(value) => onSortChange(value as SortOption)}
            >
              <DropdownMenuRadioItem value="last_edited">
                Last edited
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="date_created">
                Date created
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center rounded-lg border bg-background">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-r-none",
              view === "grid" && "bg-muted"
            )}
            onClick={() => onViewChange("grid")}
          >
            <Grid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-l-none",
              view === "list" && "bg-muted"
            )}
            onClick={() => onViewChange("list")}
          >
            <List className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
