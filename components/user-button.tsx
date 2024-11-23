"use client"

import { Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useModal } from "@/store/modalStore"

export function UserButton() {
  const { onOpen } = useModal()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar>
            <AvatarImage src="/user-placeholder.jpeg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="p-2">
          <p className="text-sm text-muted-foreground">calebjimmy67@gmail.com</p>
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
  )
}

