import { useQuery } from "@tanstack/react-query";
import { fetchSharedItems } from "@/lib/api";
import { FilterOption, SortOption } from "@/types/shared";

export function useSharedItems({
  filter,
  sort,
  search,
}: {
  filter: FilterOption;
  sort: SortOption;
  search?: string;
}) {
  return useQuery({
    queryKey: ["shared-items", { filter, sort, search }],
    queryFn: () => fetchSharedItems({ filter, sort, search }),
  });
}
