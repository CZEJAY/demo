"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { OverviewTab } from "./overviewtab";
import { MemberList } from "./member-list";
import { WorkspaceDefaultsTab } from "./workspace-defaults-tabs";
import { useWorkspaceSettings } from "@/hooks/use-workspace-settings";
import { defaultMembers } from "@/lib/constants";
import { Link2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { WorkspaceMember, WorkspaceRole } from "@/types/settings";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useModal } from "@/store/modalStore";

export default function SettingsPage() {
  const [members, setMembers] = useState<WorkspaceMember[]>(defaultMembers);
  const [inviteMethod, setInviteMethod] = useState<"email" | "link">("email");

  const [activeTab, setActiveTab] = useState("overview");
  const { settings, isLoading, updateWorkspaceSettings } =
    useWorkspaceSettings();

  const handleRoleChange = (memberId: string, role: WorkspaceRole) => {
    setMembers(members.map((m) => (m.id === memberId ? { ...m, role } : m)));
  };

  const { onOpen } = useModal();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container max-w-5xl py-10 px-2">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="workspace-defaults">
              Workspace defaults
            </TabsTrigger>
          </TabsList>
          <div className="items-center gap-4 hidden md:flex">
            <Button
              variant="ghost"
              onClick={() => onOpen("credits")}
              className="text-primary"
            >
              Get unlimited AI
            </Button>
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
              <span className="text-sm text-gray-600">320 credits</span>
            </div>
          </div>
        </div>

        <TabsContent value="overview">
          <OverviewTab
            settings={settings}
            updateSettings={updateWorkspaceSettings}
          />
        </TabsContent>
        <TabsContent value="members">
          <div className="space-y-3 mb-6">
            <h2 className="text-2xl font-bold font-serif">
              Manage workspace members
            </h2>
            <p className="mt-2 text-muted-foreground">
              Invite others to this workspace
            </p>
          </div>

          <div className="space-y-4 my-6 max-w-xl">
            <div className="flex gap-2">
              <Button
                variant={inviteMethod === "email" ? "default" : "outline"}
                onClick={() => setInviteMethod("email")}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                Invite with email
              </Button>
              <Button
                variant={inviteMethod === "link" ? "default" : "outline"}
                onClick={() => setInviteMethod("link")}
                className="gap-2"
              >
                <Link2 className="h-4 w-4" />
                Invite with link
              </Button>
            </div>

            {inviteMethod === "email" ? (
              <div className="space-y-4">
                <Input placeholder="Enter email addresses" />
                <p className="text-sm text-muted-foreground">
                  By adding members, you grant them the ability to edit, create,
                  and share gammas within this workspace.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Anyone with the link will be able to join your workspace as a
                  member. By adding members, you grant them the ability to edit,
                  create, and share gammas within this workspace.
                </p>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value="https://patexa.com/invite/workspace/123"
                  />
                  <Button>Copy link</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only admins can see this link.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Active members and invitations
            </h3>
            <MemberList members={members} onRoleChange={handleRoleChange} />
          </div>
        </TabsContent>
        <TabsContent value="workspace-defaults">
          <WorkspaceDefaultsTab
            settings={settings}
            updateSettings={updateWorkspaceSettings}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
