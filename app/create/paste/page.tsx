"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function PastePage() {
  const [content, setContent] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
            <FileText className="h-6 w-6 text-pink-900" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Paste in</h1>
        <p className="text-muted-foreground">
          Add the notes, outline or content you'd like to use
        </p>
      </div>

      <div className="space-y-4">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type or paste in content here"
          className="min-h-[300px] bg-white"
        />
        <div className="space-y-2">
          <Button className="w-full" size="lg">
            Continue
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            You can also{" "}
            <Link
              href="/create/import"
              className="text-purple-600 hover:underline"
            >
              import files
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
