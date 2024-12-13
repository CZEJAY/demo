import { WorkspaceSettings } from '@/types/settings'
import { WorkspaceLogo } from './workspace-logo'
import { UpgradeCard } from './upgrade-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface OverviewTabProps {
  settings: WorkspaceSettings
  updateSettings: (settings: Partial<WorkspaceSettings>) => void
}

export function OverviewTab({ settings, updateSettings }: OverviewTabProps) {
  const handleLogoChange = async (file: File) => {
    // In a real application, you would upload the file to a server and get a URL back
    const fakeUrl = URL.createObjectURL(file)
    updateSettings({ logo: fakeUrl })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="md:text-2xl text-xl font-serif font-bold mb-4">Basic info</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Label className="text-muted-foreground">Workspace logo</Label>
            <WorkspaceLogo name={settings.name} logo={settings.logo} onLogoChange={handleLogoChange} />
            <p className="text-sm text-muted-foreground">An image to represent your workspace</p>
          </div>
          <div className="space-y-4">
            <Label htmlFor="workspace-name" className="text-muted-foreground">
              Workspace name
            </Label>
            <Input
              id="workspace-name"
              value={settings.workspaceName}
              onChange={e => updateSettings({ name: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">e.g. your team or company name</p>
          </div>
        </div>
      </div>
      <UpgradeCard />
    </div>
  )
}
