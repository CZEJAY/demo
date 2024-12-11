export type WorkspaceRole = "admin" | "member" | "viewer";

export type AccessLevel = "no-access" | "view" | "edit";

export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: WorkspaceRole;
  joinedAt: Date;
  avatar?: string;
}

export interface WorkspaceSettings {
  name: string;
  email: string;
  workspaceName: string;
  logo?: string;
  memberAccess: AccessLevel;
  externalAccess: AccessLevel;
  defaultTheme: string;
}
