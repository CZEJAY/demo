"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContentType } from "@/types/generate";
import { ContentTypeSelector } from "../_components/content-type-selector";
import { SettingsDropdowns } from "../_components/settings-dropdown";
import { ExamplePrompts } from "../_components/example-prompts";

export default function GeneratePage() {
  const [contentType, setContentType] = useState<ContentType>("presentation");
  const [prompt, setPrompt] = useState("");
  const [cards, setCards] = useState(8);
  const [style, setStyle] = useState("default");
  const [language, setLanguage] = useState("en-US");

  const handleGenerate = () => {
    // Handle generation
    console.log({
      contentType,
      prompt,
      cards,
      style,
      language,
    });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Generate</h1>
        <p className="text-muted-foreground">
          What would you like to create today?
        </p>
      </div>

      <ContentTypeSelector value={contentType} onChange={setContentType} />

      <SettingsDropdowns
        cards={cards}
        style={style}
        language={language}
        onCardsChange={(value) => setCards(Number(value))}
        onStyleChange={setStyle}
        onLanguageChange={setLanguage}
      />

      <div className="space-y-4">
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you'd like to make"
          className="h-12 bg-white"
        />

        {prompt ? (
          <Button
            className="mx-auto flex gap-2"
            size="lg"
            onClick={handleGenerate}
          >
            <Sparkles className="h-4 w-4" />
            Generate outline
          </Button>
        ) : (
          <ExamplePrompts
            type={contentType}
            onSelect={setPrompt}
            className="animate-in fade-in-50"
          />
        )}
      </div>
    </div>
  );
}
