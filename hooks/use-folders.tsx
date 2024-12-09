import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { folderApi } from "@/lib/api";
import { type Folder, type CreateFolderPayload } from "@/types/folder";

export function useFolderSearch(query: string) {
  return useQuery({
    queryKey: ["folders", "search", query],
    queryFn: () => folderApi.search({ query }),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCreateFolder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateFolderPayload) => folderApi.create(payload),
    onSuccess: (newFolder) => {
      queryClient.setQueryData<Folder[]>(["folders", "search"], (old = []) => {
        return [...old, newFolder];
      });
    },
  });
}
