"use client";

import { useState } from "react";
import { Import, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/content-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Theme } from "@/types/shared";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const themes: Theme[] = [
  {
    id: "1",
    title: "Roxxon",
    preview: "/placeholder1.svg",
    createdBy: "you",
    updatedAt: "18 days ago",
    type: "custom",
  },
  // Add more themes...
];

export default function ThemesPage() {
  const [activeTab, setActiveTab] = useState<Theme["type"]>("custom");

  return (
    <div className="container py-8">
      <div className="mb-8">
        <p className="text-muted-foreground max-w-md">
          Themes control the colors, fonts, logo, and design of your
          presentations. Build your own, import a PPT, or customize a standard
          theme.
        </p>
      </div>

      <div className="mb-6 flex gap-2">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New theme
        </Button>
        <Button variant="outline" className="gap-2">
          <Import className="h-4 w-4" />
          Import theme
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as Theme["type"])}
      >
        <TabsList className="bg-transparent">
          <TabsTrigger value="custom">Custom</TabsTrigger>
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {themes
              .filter((theme) => theme.type === activeTab)
              .map((theme) => (
                <ContentCard
                  key={theme.id}
                  title={theme.title}
                  image={theme.preview}
                  footer={
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm">
                          Created by {theme.createdBy}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Updated {theme.updatedAt}
                        </span>
                      </div>
                    </div>
                  }
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
