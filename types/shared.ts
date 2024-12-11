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

export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  image: string;
  createdBy: string;
  category: string;
}

export interface Theme {
  id: string;
  title: string;
  preview: string;
  createdBy: string;
  updatedAt: string;
  type: "custom" | "standard" | "archived";
}
