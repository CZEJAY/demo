import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RecentPrompt {
  id: string;
  title: string;
  type: string;
  date: string;
  href: string;
}

const recentPrompts: RecentPrompt[] = [
  {
    id: "1",
    title: "Presentation on Javascript class inheritance and polymorphism",
    type: "Generate",
    date: "2 months ago",
    href: "/create/generate/1",
  },
];

export function RecentPrompts() {
  if (recentPrompts.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Your recent prompts</h2>
      <div className="space-y-2">
        {recentPrompts.map((prompt) => (
          <Link key={prompt.id} href={prompt.href} className="group block">
            <div className="flex items-center justify-between rounded-xl bg-white/50 p-4 transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_12px_rgb(0_0_0/0.08)]">
              <div className="space-y-1">
                <p className="font-medium">{prompt.title}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{prompt.type}</span>
                  <span>•</span>
                  <span>{prompt.date}</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
