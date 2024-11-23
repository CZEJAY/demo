import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ViewToggle } from "./view-toggle"
import { PatexaFilters } from "./patexa-filters"

interface PatexaHeaderProps {
  view: "grid" | "list"
  onViewChange: (view: "grid" | "list") => void
}

export function PatexaHeader({ view, onViewChange }: PatexaHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button className="gap-2 gradient-bg">
            <Sparkles className="h-4 w-4" />
            Create new
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">New from blank</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Blank patexa</DropdownMenuItem>
              <DropdownMenuItem>From template</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">Import</Button>
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
  )
}

