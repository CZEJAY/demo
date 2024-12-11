"use client";

import { useState } from "react";
import { Coins, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { GenerateImageParams } from "@/types/ai-images";
import { Textarea } from "@/components/ui/textarea";

interface GenerateImageSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGenerate: (params: GenerateImageParams) => Promise<void>;
  credits: number;
}

const STYLE_OPTIONS = [
  { value: "null", label: "None" },
  { value: "3d-render", label: "3D Render" },
  { value: "pixel-art", label: "Pixel Art" },
  { value: "digital-art", label: "Digital Art" },
  { value: "photographic", label: "Photographic" },
];

const ASPECT_RATIO_OPTIONS = [
  { value: "square", label: "Square" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
];

const MODEL_OPTIONS = [
  { value: "flux-fast", label: "Flux Fast" },
  { value: "flux-pro", label: "Flux Pro" },
];

export function GenerateImageSidebar({
  open,
  onOpenChange,
  onGenerate,
  credits,
}: GenerateImageSidebarProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [params, setParams] = useState<GenerateImageParams>({
    prompt: "",
    style: "",
    aspectRatio: "square",
    model: "flux-fast",
  });

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      await onGenerate(params);
      setParams({ ...params, prompt: "" });
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to generate image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[600px] ">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>AI images</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Prompt</label>
            <Textarea
              placeholder="Describe your image and use options below to adjust style and size."
              value={params.prompt}
              onChange={(e) => setParams({ ...params, prompt: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Style</label>
            <Select
              value={params.style}
              onValueChange={(value) => setParams({ ...params, style: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                {STYLE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Aspect ratio</label>
              <Select
                value={params.aspectRatio}
                onValueChange={(value: "square" | "portrait" | "landscape") =>
                  setParams({ ...params, aspectRatio: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ASPECT_RATIO_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Model</label>
              <Select
                value={params.model}
                onValueChange={(value: "flux-fast" | "flux-pro") =>
                  setParams({ ...params, model: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MODEL_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="w-full gap-2 gradient-bg"
            size="lg"
            onClick={handleGenerate}
            disabled={!params.prompt || isGenerating}
          >
            Generate
            <span className="text-sm opacity-70">10</span>
          </Button>

          <div className="flex items-center ml-auto justify-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Coins size={"15"} />
              {credits} credits
            </span>
            <svg className="h-1 w-1 fill-current" viewBox="0 0 4 4">
              <circle cx="2" cy="2" r="2" />
            </svg>
            <button className="hover:underline">Get more</button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
