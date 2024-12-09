"use client";

import { Plus, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXAMPLE_PROMPTS } from "@/lib/constants";
import { ContentType, ExamplePrompt } from "@/types/generate";
import { cn } from "@/lib/utils";

interface ExamplePromptsProps {
  type: ContentType;
  onSelect: (prompt: string) => void;
  className?: string;
}

export function ExamplePrompts({
  type,
  onSelect,
  className,
}: ExamplePromptsProps) {
  const prompts = EXAMPLE_PROMPTS.filter((prompt) => prompt.type === type);

  const shufflePrompts = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    onSelect(randomPrompt.title);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="text-center text-sm text-muted-foreground">
        Example prompts
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <Button
            key={prompt.id}
            variant="outline"
            className="h-auto justify-between bg-white/50 p-4 hover:bg-white/80"
            onClick={() => onSelect(prompt.title)}
          >
            <div className="flex items-center gap-2">
              <span>{prompt.icon}</span>
              <span className="text-left text-wrap">{prompt.title}</span>
            </div>
            <Plus className="h-4 w-4 shrink-0" />
          </Button>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={shufflePrompts}
        >
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
      </div>
    </div>
  );
}
