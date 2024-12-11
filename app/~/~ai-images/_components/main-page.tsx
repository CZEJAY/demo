"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIImage, GenerateImageParams } from "@/types/ai-images";
import { ImageGallery } from "./image-gallery";
import { GenerateImageSidebar } from "./generate-image";

// Sample data - replace with real data
const sampleImages: AIImage[] = [
  {
    id: "1",
    url: "/assets/ai-image.jpg?height=400&width=400",
    prompt: "A futuristic city at night",
    createdAt: new Date("2024-12-01"),
    aspectRatio: "square",
    model: "flux-fast",
  },
  // Add more sample images...
];

export default function AIImagesPage() {
  const [images, setImages] = useState<AIImage[]>(sampleImages);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [credits] = useState(320);

  const handleGenerate = async (params: GenerateImageParams) => {
    // Implement image generation logic here
    console.log("Generating image with params:", params);
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <Button
          onClick={() => setSidebarOpen(true)}
          className="gap-2 gradient-bg"
        >
          <Sparkles className="h-4 w-4" />
          Generate new image
        </Button>
      </div>

      <ImageGallery images={images} />

      <GenerateImageSidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        onGenerate={handleGenerate}
        credits={credits}
      />
    </div>
  );
}
