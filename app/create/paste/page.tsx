"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContentType } from "@/types/generate";
import { PageStyle } from "@/types/paste";
import { ContentTypeSelector } from "../_components/content-type-selector";
import { PageStyleSelector } from "../_components/page-syle-selector";

export default function PastePage() {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState<ContentType>("presentation");
  const [pageStyle, setPageStyle] = useState<PageStyle>("default");

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

        {content && (
          <div className="animate-in fade-in-50 space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                What would you like to create with this content?
              </div>
              <ContentTypeSelector
                value={contentType}
                onChange={setContentType}
              />
            </div>

            {contentType !== "webpage" && (
              <div className="space-y-2">
                <PageStyleSelector value={pageStyle} onChange={setPageStyle} />
              </div>
            )}

            <Button className="w-full gap-2" size="lg">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {!content && (
          <p className="text-center text-sm text-muted-foreground">
            You can also{" "}
            <Link
              href="/create/import"
              className="text-primary hover:underline"
            >
              import files
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
