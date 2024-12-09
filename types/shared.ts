export interface SharedItem {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  creator: {
    name: string;
    avatar: string;
  };
  isPrivate: boolean;
}

export type SortOption = "last_edited" | "date_created" | "title";
export type ViewOption = "grid" | "list";
export type FilterOption = "all" | "recently_viewed" | "favorites";
