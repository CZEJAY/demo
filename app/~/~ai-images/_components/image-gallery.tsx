"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { AIImage } from "@/types/ai-images";

interface ImageGalleryProps {
  images: AIImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  // Group images by month
  const groupedImages = images.reduce((acc, image) => {
    const month = format(image.createdAt, "MMM yyyy");
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(image);
    return acc;
  }, {} as Record<string, AIImage[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedImages).map(([month, images]) => (
        <div key={month}>
          <h2 className="mb-4 text-lg font-semibold">{month}</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
              >
                <Image
                  src={image.url}
                  alt={image.prompt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {image.prompt}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
