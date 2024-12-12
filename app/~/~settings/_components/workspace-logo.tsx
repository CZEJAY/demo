"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WorkspaceLogoProps {
  name: string;
  logo?: string;
  onLogoChange: (file: File) => void;
}

export function WorkspaceLogo({
  name,
  logo,
  onLogoChange,
}: WorkspaceLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="group relative h-24 w-24 cursor-pointer overflow-hidden rounded-full gradient-bg transition-all hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => document.getElementById("logo-upload")?.click()}
          >
            {logo ? (
              <img
                src={logo}
                alt={name}
                className={`h-full w-full object-cover transition-opacity duration-200 ${
                  isHovered ? "opacity-50" : "opacity-100"
                }`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                {initials}
              </div>
            )}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Pencil className="h-6 w-6 text-white" />
            </div>
            <input
              id="logo-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onLogoChange(file);
              }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to change workspace logo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
