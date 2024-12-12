"use client";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ViewToggle } from "./view-toggle";
import { PatexaFilters } from "./patexa-filters";
import { useRouter } from "next/navigation";

interface PatexaHeaderProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function PatexaHeader({ view, onViewChange }: PatexaHeaderProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 border-b pb-4">
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/create")}
            className="gap-2 gradient-bg"
          >
            <Sparkles className="h-4 w-4" />
            Create new
          </Button>
          <Button
            onClick={() => router.push("/doc")}
            className=""
            variant="outline"
          >
            New from blank
          </Button>
          <Button variant="outline" className="hidden md:block">
            Import
          </Button>
        </div>
        <ViewToggle view={view} onViewChange={onViewChange} />
      </div>
      <PatexaFilters
        filters={[
          { id: "all", label: "All", isActive: true },
          { id: "recent", label: "Recently viewed" },
          { id: "created", label: "Created by you" },
          { id: "favorites", label: "Favorites" },
        ]}
        onFilterChange={(id) => console.log("Filter changed:", id)}
      />
    </div>
  );
}
