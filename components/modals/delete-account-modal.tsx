"use client";

import { useModal } from "@/store/modalStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DeleteAccountModal() {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "delete-account";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Delete your Patexa account?</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <p className="text-sm text-muted-foreground">
            Deleting your account is permanent and cannot be undone. Are you
            sure you&apos;d like to continue?
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Your account:</p>
              <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    calebjimmy67@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-md bg-red-100 px-2 py-1 text-xs text-red-600">
                  <AlertTriangle className="h-3 w-3" />
                  <span>Will be deleted</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Your workspaces:</p>
              <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    John Doe&apos;s Workspace
                  </p>
                  <p className="text-xs text-muted-foreground">
                    1 member (you)
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-md bg-red-100 px-2 py-1 text-xs text-red-600">
                  <AlertTriangle className="h-3 w-3" />
                  <span>Will be deleted</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-muted/50 p-3">
            <p className="text-sm font-medium">
              Please acknowledge and confirm:
            </p>
            <div className="flex items-start gap-2">
              <Checkbox id="confirm" className="mt-1" />
              <Label htmlFor="confirm" className="text-sm">
                I understand that deleting my account is permanent, and have
                reviewed what will happen to my workspaces
              </Label>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive">Yes, delete my account</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
