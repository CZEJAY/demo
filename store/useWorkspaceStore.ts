import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WorkspaceSettings } from "@/types/settings";

interface WorkspaceStore {
  settings: WorkspaceSettings;
  setSettings: (settings: Partial<WorkspaceSettings>) => void;
}

const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      settings: {
        name: "John Doe",
        workspaceName: "John Doe's Workspace",
        email: "john.doe@example.com",
        logo: "",
        memberAccess: "no-access",
        externalAccess: "view",
        defaultTheme: "basic-light",
      },
      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: "patexa:workspace::settings",
    }
  )
);

export default useWorkspaceStore;
