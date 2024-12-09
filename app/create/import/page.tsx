import {
  ArrowUpIcon as ArrowUpTrayIcon,
  Globe,
  FolderIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const importOptions = [
  {
    title: "Upload a file",
    icon: FolderIcon,
    description: ["Powerpoint PPT/X", "Word docs", "PDFs"],
    action: "upload",
    color: "bg-purple-100",
  },
  {
    title: "Import from Drive",
    icon: ArrowUpTrayIcon,
    description: ["Google Slides", "Google Docs"],
    action: "drive",
    color: "bg-blue-100",
  },
  {
    title: "Import from URL",
    icon: Globe,
    description: [
      "Webpages",
      "Blog posts or articles",
      "Notion docs (public only)",
    ],
    action: "url",
    color: "bg-emerald-100",
    badge: "BETA",
  },
];

export default function ImportPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
            <ArrowUpTrayIcon className="h-6 w-6 text-purple-900" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Import with AI</h1>
        <p className="text-muted-foreground">
          Select the file you'd like to transform
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {importOptions.map((option) => {
          const Icon = option.icon;

          return (
            <Card
              key={option.title}
              className={cn(
                "relative flex flex-col p-6 transition-all duration-300",
                "hover:bg-white/80 hover:shadow-md hover:-translate-y-1"
              )}
            >
              <div className="mb-4">
                <div
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                    option.color
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{option.title}</h3>
                  {option.badge && (
                    <Badge
                      variant="new"
                      className="bg-emerald-100 text-emerald-700"
                    >
                      {option.badge}
                    </Badge>
                  )}
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {option.description.map((item) => (
                    <li key={item} className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {option.action === "upload" && (
                <Button className="mt-4" variant="outline">
                  Choose file
                </Button>
              )}
              {option.action === "drive" && (
                <Button className="mt-4" variant="outline">
                  Connect Drive
                </Button>
              )}
              {option.action === "url" && (
                <Button className="mt-4" variant="outline">
                  Enter URL
                </Button>
              )}
            </Card>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        If your file isn't supported, you can also{" "}
        <Link href="/create/paste" className="text-purple-600 hover:underline">
          paste in text
        </Link>
      </p>
    </div>
  );
}
