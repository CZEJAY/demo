import { Sparkles, Zap } from "lucide-react";
import { ContentCard } from "@/components/content-card";
import { Template } from "@/types/shared";
import { Logo } from "@/components/ui/logo";

const templates: Template[] = [
  {
    id: "1",
    title: "Project Kickoff",
    description: "Templates to help you run your business ⚡",
    image: "/assets/ai-image.jpg",
    category: "Projects & Collaboration",
  },
  {
    id: "2",
    title: "Six Hats Brainstorming",
    description: "Templates to help you run your business ⚡",
    image: "/assets/ai-image.jpg",
    category: "Projects & Collaboration",
  },
  // Add more templates...
];

export default function TemplatesPage() {
  const categories = Array.from(new Set(templates.map((t) => t.category)));

  return (
    <div className="container py-8">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{category}</h2>
            <p className="text-muted-foreground">
              Templates to help you run your business{" "}
              {category === "Projects & Collaboration" ? "⚡" : "🌱"}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {templates
              .filter((t) => t.category === category)
              .map((template) => (
                <ContentCard
                  key={template.id}
                  title={template.title}
                  image={template.image}
                  footer={
                    <div className="flex items-center text-sm gap-2 text-muted-foreground">
                      <img src="/placeholder.svg" className="h-5 w-5"></img>
                      Made with Patexa
                    </div>
                  }
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
