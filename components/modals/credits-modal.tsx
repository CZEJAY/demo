"use client"

import { useState } from "react"
import { useModal } from "@/store/modalStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coins, Users, ChevronDown, X } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CreditsModal() {
  const { isOpen, type, view, onClose, onChangeView } = useModal()
  const isModalOpen = isOpen && type === "credits"
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const referralLink = "https://patexa.app/signup?r=wiqsduefvbqu"
  const workspaceLink = "https://patexa.app/workspaces/gdrou"

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle>Your account balance</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-2 py-4">
          <Coins className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">360 Credits</h2>
          <p className="text-center text-sm text-muted-foreground">
            Credits let you create and edit with AI. Each user in your workspace gets their own credits.
          </p>
        </div>

        {view === "main" && (
          <>
            <div className="flex gap-2">
              <Button className="flex-1 gradient-bg" onClick={() => onChangeView("refer")}>
                Get unlimited credits
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1 "
                onClick={() => onChangeView("refer")}
              >
                Refer a friend
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => onChangeView("invite")}
              >
                <Users className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg border-2 border-primary p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Create without limits</h3>
                  <p className="text-sm text-muted-foreground">
                    Upgrade to unlock our most powerful AI and branding features
                  </p>
                </div>
                <Button className="gradient-bg">Upgrade</Button>
              </div>
            </div>
          </>
        )}

        {view === "refer" && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => onChangeView("main")}
              >
                Get unlimited credits
              </Button>
              <Button className="flex-1">Refer a friend</Button>
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => onChangeView("invite")}
              >
                <Users className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Give 200 credits and earn 200 credits for each new referral who signs up for Gamma.
            </p>

            <div className="flex items-center gap-2">
              <Input 
                readOnly 
                value={referralLink}
                className="bg-muted"
              />
              <Button 
                className="whitespace-nowrap"
                onClick={() => handleCopy(referralLink)}
              >
                {copied ? "Copied!" : "Copy referral link"}
              </Button>
            </div>

            <div className="rounded-md bg-emerald-50 px-2 py-1 text-center text-sm text-emerald-600">
              + 200 CREDITS
            </div>
          </div>
        )}

        {view === "invite" && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => onChangeView("main")}
              >
                Get unlimited credits
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => onChangeView("refer")}
              >
                Refer a friend
              </Button>
              <Button className="flex-1">
                <Users className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Give 200 credits and earn 200 credits for each new referral who signs up and joins your workspace.
            </p>

            <div className="flex items-center gap-2">
              <Input 
                readOnly 
                value={workspaceLink}
                className="bg-muted"
              />
              <Button 
                className="whitespace-nowrap"
                onClick={() => handleCopy(workspaceLink)}
              >
                {copied ? "Copied!" : "Copy workspace invite"}
              </Button>
            </div>

            <div className="rounded-md bg-emerald-50 px-2 py-1 text-center text-sm text-emerald-600">
              + 200 CREDITS
            </div>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cost">
            <AccordionTrigger className="text-sm">
              How many credits does it cost to use AI?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              The cost varies depending on the AI feature and length of content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="earn">
            <AccordionTrigger className="text-sm">
              How can I earn more credits?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              You can earn credits by referring friends or inviting teammates to your workspace.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}

