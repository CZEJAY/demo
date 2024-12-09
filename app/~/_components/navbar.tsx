"use client"

import { Bell, SquareStackIcon as StackIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useModal } from "@/store/modalStore"
import { UserButton } from '@/components/user-button'
import { PropsWithChildren } from 'react'

export function Navbar({children}:{} & PropsWithChildren) {
  const { onOpen } = useModal()

  return (
    <nav className="sticky z-30 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <SidebarTrigger />
            <span className="text-xl font-bold">Patexa</span>
          </div>
          <div className="flex items-center gap-4">
            <span 
              onClick={() => onOpen("credits")} 
              className="text-xs hover:bg-gray-100 p-1 rounded cursor-pointer font-medium inline-flex items-center gap-2"
            >
              <StackIcon className="h-3.5 w-3.5" />
              360 credits
            </span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <UserButton />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

