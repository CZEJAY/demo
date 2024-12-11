import { AccessLevel, WorkspaceSettings } from "@/types/settings";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info } from "lucide-react";

interface WorkspaceDefaultsTabProps {
  settings: WorkspaceSettings;
  updateSettings: (settings: Partial<WorkspaceSettings>) => void;
}

export function WorkspaceDefaultsTab({
  settings,
  updateSettings,
}: WorkspaceDefaultsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 font-serif">
          Permissions and sharing
        </h2>
        <Alert className="bg-primary block text-white">
          <AlertTitle className="hidden">Note</AlertTitle>
          <AlertDescription className="inline-flex gap-2 text-xs md:text-md w-full items-center">
            <Info size={15} />
            Changes made here will only apply to newly created patexa, not
            existing ones.
          </AlertDescription>
        </Alert>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-2 max-w-3xl">
            <div className="block">
              <Label className="text-muted-foreground">Workspace members</Label>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Controls whether new patexa can be accessed by anyone in this
                workspace
              </p>
            </div>
            <Select
              value={settings.memberAccess}
              onValueChange={(value: AccessLevel) =>
                updateSettings({ memberAccess: value })
              }
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-access">No access</SelectItem>
                <SelectItem value="view">View</SelectItem>
                <SelectItem value="edit">Edit</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 max-w-3xl">
            <div className="block">
              <Label className="text-muted-foreground">
                External collaborators
              </Label>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Controls whether new patexa can be accessed by anyone outside
                your workspace, including anonymous viewers with the link
              </p>
            </div>
            <Select
              value={settings.externalAccess}
              onValueChange={(value: AccessLevel) =>
                updateSettings({ externalAccess: value })
              }
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-access">No access</SelectItem>
                <SelectItem value="view">View</SelectItem>
                <SelectItem value="edit">Edit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold font-serif mb-4 text-muted-foreground">
          Page setup
        </h2>
        <div className="grid grid-cols-2 max-w-3xl">
          <div className="block">
            <Label className="text-muted-foreground">
              Workspace default theme
            </Label>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              This theme will be the default for all patexa created in this
              workspace
            </p>
          </div>
          <Select
            value={settings.defaultTheme}
            onValueChange={(value) => updateSettings({ defaultTheme: value })}
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic-light">Basic Light</SelectItem>
              <SelectItem value="basic-dark">Basic Dark</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
