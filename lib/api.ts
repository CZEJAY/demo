import axios from "axios";
import {
  type Folder,
  type CreateFolderPayload,
  type SearchFoldersParams,
} from "@/types/folder";

import { SharedItem, SortOption, FilterOption } from "@/types/shared";

interface FetchSharedItemsParams {
  filter: FilterOption;
  sort: SortOption;
  search?: string;
}

export async function fetchSharedItems({
  filter,
  sort,
  search,
}: FetchSharedItemsParams): Promise<SharedItem[]> {
  // This would be your actual API call
  // For now, we'll return an empty array to match the empty state
  return [];
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const folderApi = {
  search: async ({ query }: SearchFoldersParams) => {
    const response = await api.get<Folder[]>("/folders/search", {
      params: { query },
    });
    return response.data;
  },

  create: async (payload: CreateFolderPayload) => {
    const response = await api.post<Folder>("/folders", payload);
    return response.data;
  },
};

export class API {
  public static uploadImage = async (_file: File) => {
    console.log(
      "Image upload is disabled in the demo... Please implement the API.uploadImage method in your project.",
    );
    await new Promise((r) => setTimeout(r, 500));
    return "/placeholder-image.jpg";
  };
}

export default API;
