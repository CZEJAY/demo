import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useWorkspaceStore from "@/store/useWorkspaceStore";
import { WorkspaceSettings } from "@/types/settings";

// Mock API functions (replace these with actual API calls)
const fetchSettings = async (): Promise<WorkspaceSettings> => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name: "John Doe",
    workspaceName: "John Doe's Workspace",
    email: "john.doe@example.com",
    logo: "",
    memberAccess: "no-access",
    externalAccess: "view",
    defaultTheme: "basic-light",
  };
};

const updateSettings = async (
  settings: Partial<WorkspaceSettings>
): Promise<WorkspaceSettings> => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return settings as WorkspaceSettings;
};

export const useWorkspaceSettings = () => {
  const queryClient = useQueryClient();
  const { settings, setSettings } = useWorkspaceStore();

  const { data: remoteSettings, isLoading } = useQuery({
    queryKey: ["workspaceSettings"],
    queryFn: fetchSettings,
    // @ts-ignore
    onSuccess: (data) => {
      // Sync remote settings with local store
      setSettings(data);
    },
  });

  const mutation = useMutation({
    mutationFn: updateSettings,
    onSuccess: (data) => {
      // Update local store and invalidate query
      setSettings(data);
      queryClient.invalidateQueries({ queryKey: ["workspaceSettings"] });
    },
  });

  const updateWorkspaceSettings = (newSettings: Partial<WorkspaceSettings>) => {
    setSettings(newSettings);
    mutation.mutate(newSettings);
  };

  return {
    settings: settings,
    isLoading,
    updateWorkspaceSettings,
  };
};
