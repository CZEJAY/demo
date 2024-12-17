import { Metadata } from 'next'
import { CreateCard } from './_components/create-card'
import { RecentPrompts } from './_components/recent-prompt'

export const metadata: Metadata = {
  title: 'Create with AI - Patexa',
  description: 'Create content with AI using Patexa',
}

function PasteIcon() {
  return (
    <div className="relative h-32 w-32">
      <div className="absolute inset-0 rounded-xl bg-pink-200/50" />
      <div className="absolute inset-4 rounded-lg bg-white shadow-sm" />
      <div className="absolute inset-8 flex items-center justify-center">
        <div className="h-2 w-12 rounded-full bg-pink-300" />
      </div>
    </div>
  )
}

function GenerateIcon() {
  return (
    <div className="relative h-32 w-32">
      <div className="absolute inset-0 rounded-full bg-purple-200/50" />
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="h-12 w-24 rounded-lg bg-white shadow-sm" />
      </div>
    </div>
  )
}

function ImportIcon() {
  return (
    <div className="relative h-32 w-32">
      <div className="absolute inset-0 rounded-xl bg-purple-200/50" />
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="h-16 w-20 rounded-lg bg-white shadow-sm" />
      </div>
    </div>
  )
}

export default function CreatePage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Create with AI</h1>
        <p className="mt-2 text-muted-foreground">How would you like to get started?</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CreateCard
          href="/create/paste"
          title="Paste in text"
          description="Create from notes, an outline, or existing content"
          icon={<PasteIcon />}
          className=""
        />
        <CreateCard
          href="/create/resume"
          title="Resume"
          description="Create from a one-line prompt in a few seconds"
          icon={<GenerateIcon />}
          badge="Popular"
          className=""
        />
        <CreateCard
          href="/create/generate"
          title="Generate"
          description="Create from a one-line prompt in a few seconds"
          icon={<GenerateIcon />}
          badge="Popular"
          className=""
        />
        <CreateCard
          href="/create/import"
          title="Import file or URL"
          description="Enhance existing docs, presentations, or webpages"
          icon={<ImportIcon />}
          className=""
        />
      </div>

      <RecentPrompts />
    </div>
  )
}
