"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PatexaHeader } from "@/components/patexa-header";
import { PatexaCard } from "@/components/patexa-card";
import { PatexaTable } from "@/components/patexa-table";

const patexas = [
  {
    id: "1",
    title: "Introduction to JavaScript Classes",
    isPrivate: true,
    creator: {
      name: "John Doe",
      avatar: "/user-placeholder.png?height=32&width=32",
    },
    thumbnail: "/assets/intro.jpeg?height=200&width=320&text=JS",
    lastViewed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60), // 60 days ago
  },
  {
    id: "2",
    title: "Gamma Tips & Tricks",
    isPrivate: true,
    creator: {
      name: "John Doe",
      avatar: "/user-placeholder.png?height=32&width=32",
    },
    thumbnail: "/assets/tips.jpeg?height=200&width=320&text=Tips",
    lastViewed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60), // 60 days ago
  },
];

export function MainContent() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-4 p-4 w-full">
      <PatexaHeader view={view} onViewChange={setView} />

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {patexas.map((patexa) => (
            <PatexaCard
              key={patexa.id}
              title={patexa.title}
              isPrivate={patexa.isPrivate}
              creator={patexa.creator}
              thumbnail={patexa.thumbnail}
              lastViewed={patexa.lastViewed}
            />
          ))}
        </div>
      ) : (
        <PatexaTable data={patexas} />
      )}
    </div>
  );
}
