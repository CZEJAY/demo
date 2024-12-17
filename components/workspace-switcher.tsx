'use client'

import * as React from 'react'
import { ChevronDown, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

interface Workspace {
  id: string
  name: string
  initial: string
}

const workspaces: Workspace[] = [
  {
    id: '1',
    name: "John Doe's Workspace",
    initial: 'J',
  },
]

export function WorkspaceSwitcher() {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState(workspaces[0])

  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mb-6 group-data-[collapsible=icon]:hidden" asChild>
        <Button
          variant="ghost"
          size="sm"
          className=" mx-auto  justify-start gap-2 px-4 py-6 rounded-lg text-left hover:bg-sidebar-accent"
        >
          <Avatar className="h-10 w-10 bg-primary/10">
            <AvatarFallback className="text-primary text-lg">{selectedWorkspace.initial}</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
            <div className="flex items-start gap-1 truncate flex-col">
              <span className="truncate text-white">{selectedWorkspace.name}</span>
              <Badge variant="beta" className="h-4 px-1 text-[10px] font-normal">
                FREE
              </Badge>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-[300px] lg:min-w-[400px]">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {workspaces.map(workspace => (
            <DropdownMenuItem
              key={workspace.id}
              className="flex items-center gap-2 justify-between"
              onSelect={() => setSelectedWorkspace(workspace)}
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6 bg-primary/10">
                  <AvatarFallback className="text-primary text-sm">{workspace.initial}</AvatarFallback>
                </Avatar>
                <span>{workspace.name}</span>
              </div>
              <Badge variant="beta" className="h-4 px-1 text-[10px] font-normal">
                FREE
              </Badge>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={() => router.push('/~/~settings')} className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings & members
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
