import { ContentCard } from "@/components/content-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InspirationItem } from "@/types/shared";

const inspirationItems: InspirationItem[] = [
  {
    id: "1",
    title: "Meet the Team at Patexa",
    image: "/placeholder1.svg",
    createdBy: "Patexa",
    category: "Just for Fun",
  },
  {
    id: "2",
    title: "What Software Builders can Learn from Building...",
    image: "/placeholder1.svg",
    createdBy: "Patexa",
    category: "Just for Fun",
  },
  // Add more items...
];

export default function InspirationPage() {
  const categories = Array.from(
    new Set(inspirationItems.map((i) => i.category))
  );

  return (
    <div className="container py-8">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{category}</h2>
            <p className="text-muted-foreground">
              Things we've made here at Patexa
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inspirationItems
              .filter((i) => i.category === category)
              .map((item) => (
                <ContentCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  footer={
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>P</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        Created by {item.createdBy}
                      </span>
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
