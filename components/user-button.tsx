"use client";

import { Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useModal } from "@/store/modalStore";
import { useWorkspaceSettings } from "@/hooks/use-workspace-settings";

export function UserButton() {
  const { onOpen } = useModal();
  const data = useWorkspaceSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative  items-center justify-center flex rounded-full"
        >
          <Avatar className="h-5 w-5 md:w-6 md:h-6">
            <AvatarImage
              src="/user-placeholder.png"
              className=""
              alt="User avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="p-2">
          <p className="text-sm text-muted-foreground">{data.settings.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onOpen("account-settings")}
          className="gap-2"
        >
          <Settings className="h-4 w-4" />
          Account settings
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 text-red-600">
          <LogOut className="h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
