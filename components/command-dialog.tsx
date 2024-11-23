"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

interface RecentItem {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  editedAt: string;
  avatarUrl?: string;
}

const recentItems: RecentItem[] = [
  {
    id: "1",
    title: "Introduction to JavaScript Classes",
    thumbnail: "/assets/intro.jpeg?height=100&width=160",
    creator: "Caleb Jimmy",
    editedAt: "Oct 1, 2024, 11:05 PM",
  },
  {
    id: "2",
    title: "Gamma Tips & Tricks",
    thumbnail: "/assets/tips.jpeg?height=100&width=160",
    creator: "Caleb Jimmy",
    editedAt: "Oct 1, 2024, 10:56 PM",
  },
];

export function CommandDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [hasSeenSearchCoach, setHasSeenSearchCoach] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 z-[500] min-h-[400px]">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]]:px-2">
          <CommandInput placeholder="Jump to" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Recently viewed">
              {recentItems.map((item) => (
                <CommandItem
                  key={item.id}
                  className="flex items-center gap-4 px-4"
                  onSelect={() => {
                    onOpenChange(false);
                  }}
                >
                  <div className="relative aspect-video  h-16 flex-none overflow-hidden rounded-md border">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover"
                      width={160}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Created by {item.creator}</span>
                      <span>•</span>
                      <span>Edited {item.editedAt}</span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        {!hasSeenSearchCoach && (
          <DialogFooter className="w-full flex justify-center items-center px-2 py-2 mt-auto border-t border-muted-border">
            <div className="flex w-full justify-center items-center gap-2 text-xs text-muted-foreground">
              <div className="">
                <span>👋</span>
                Tip: You can open this anywhere by pressing{" "}
                <Badge>
                  <kbd>Ctrl</kbd>+<kbd>K</kbd>
                </Badge>
              </div>
              <button
                onClick={() => setHasSeenSearchCoach(true)}
                className="ml-auto"
              >
                <X size={16} />
              </button>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
