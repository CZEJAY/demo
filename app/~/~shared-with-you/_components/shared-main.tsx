"use client";

import { useState } from "react";
import { useSharedItems } from "@/hooks/use-shared-items";
import { FilterOption, SortOption, ViewOption } from "@/types/shared";
import { DashboardPage } from "../../_components/dashboard-page";
import { Filters } from "./filters";
import { EmptyState } from "./empty-state";

export default function SharedPageMain() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [sort, setSort] = useState<SortOption>("last_edited");
  const [view, setView] = useState<ViewOption>("grid");

  const { data: items = [], isLoading } = useSharedItems({
    filter,
    sort,
  });

  return (
    <DashboardPage title="Shared with you">
      <div className="space-y-4 mt-10">
        <Filters
          filter={filter}
          sort={sort}
          view={view}
          onFilterChange={setFilter}
          onSortChange={setSort}
          onViewChange={setView}
          itemCount={items.length}
        />
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-[200px] rounded-lg bg-muted animate-pulse" />
            <div className="h-[200px] rounded-lg bg-muted animate-pulse" />
          </div>
        ) : items.length === 0 ? (
          <EmptyState />
        ) : (
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "space-y-4"
            }
          >
            {/* Items would be rendered here when we have data */}
          </div>
        )}
      </div>
    </DashboardPage>
  );
}
