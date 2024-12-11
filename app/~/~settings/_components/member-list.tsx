"use client";

import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { WorkspaceMember, WorkspaceRole } from "@/types/settings";

interface MemberListProps {
  members: WorkspaceMember[];
  onRoleChange: (memberId: string, role: WorkspaceRole) => void;
}

export function MemberList({ members, onRoleChange }: MemberListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">
                  {member.name} {member.id === "you" && "(you)"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {member.email}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {format(member.joinedAt, "MMM d, yyyy")}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    {member.role}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onRoleChange(member.id, "admin")}
                  >
                    Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onRoleChange(member.id, "member")}
                  >
                    Member
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onRoleChange(member.id, "viewer")}
                  >
                    Viewer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
