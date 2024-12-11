"use client";

import { useModal } from "@/store/modalStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useWorkspaceSettings } from "@/hooks/use-workspace-settings";

export function AccountSettingsModal() {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "account-settings";
  const { settings } = useWorkspaceSettings();

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[500px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Account settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CJ</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            {settings.email}
          </span>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" defaultValue={settings.name.split(" ")[0]} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" defaultValue={settings.name.split(" ")[1]} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4">
            <div>
              <h3 className="mb-4 text-sm font-medium">
                Emails and notifications
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose which emails you want to receive from us. Note that you
                will still receive important notifications related to your
                account.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="onboarding">Onboarding</Label>
                <Switch id="onboarding" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="updates">
                  Product updates and announcements
                </Label>
                <Switch id="updates" defaultChecked />
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-600 hover:bg-red-100"
              onClick={() => {
                onClose();
                useModal.getState().onOpen("delete-account");
              }}
            >
              Delete my account
            </Button>
            <Button onClick={onClose}>Done</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
