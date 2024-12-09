"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Loader2 } from "lucide-react";
import { useModal } from "@/store/modalStore";
import { useFolderSearch, useCreateFolder } from "@/hooks/use-folders";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

export function FolderModal() {
  const { isOpen, type, onClose } = useModal();
  const [searchQuery, setSearchQuery] = React.useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);

  const {
    data: folders = [],
    isLoading: isSearching,
    isFetching,
  } = useFolderSearch(debouncedQuery);

  const createFolder = useCreateFolder();

  const handleCreateFolder = async () => {
    if (!searchQuery.trim()) return;

    try {
      await createFolder.mutateAsync({ name: searchQuery });
      setSearchQuery("");
    } catch (error) {
      console.error("Failed to create folder:", error);
    }
  };

  const showCreateSuggestion =
    searchQuery && !isSearching && folders.length === 0;
  const isLoading = isSearching || isFetching || createFolder.isPending;

  return (
    <Dialog open={isOpen && type === "folder"} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Create or join a folder</DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            You can join a folder to keep track of what folks are working on.
          </p>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Find or create a new folder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn("pl-8", isLoading && "pr-8")}
              />
              {isLoading && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              )}
            </div>
            <Button
              onClick={handleCreateFolder}
              disabled={!searchQuery.trim() || isLoading}
              variant={"outline"}
            >
              Create folder
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            {folders.length > 0
              ? `Displaying ${folders.length} folder${
                  folders.length === 1 ? "" : "s"
                }`
              : "All folders"}
          </div>
          {showCreateSuggestion ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <img
                src="/assets/astronaut-fishing.webp"
                alt="No folders found"
                className="mb-4 h-40 w-40 object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Try changing your search query, or{" "}
                <button
                  onClick={handleCreateFolder}
                  className="text-primary hover:underline"
                  disabled={createFolder.isPending}
                >
                  create a new folder called &quot;{searchQuery}&quot;
                </button>
                .
              </p>
            </div>
          ) : folders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <img
                src="/assets/astronaut-paint.png"
                alt="No folders"
                className="mb-4 h-32 w-32 object-contain"
              />
              <h3 className="mb-2 text-base font-medium">
                Your workspace doesn&apos;t have any folders yet.
              </h3>
              <p className="mb-1 text-sm text-muted-foreground">
                Start using folders to organize your gammas.
              </p>
              <p className="text-sm text-muted-foreground">
                Your workspace&apos;s folders will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {folders.map((folder) => (
                <div
                  key={folder.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <span className="font-medium">{folder.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {folder.memberCount} member
                    {folder.memberCount === 1 ? "" : "s"}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end">
            <Button
              onClick={onClose}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
