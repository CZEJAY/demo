import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CreateCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  className?: string;
}

export function CreateCard({
  href,
  title,
  description,
  icon,
  badge,
  className,
}: CreateCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 transition-all duration-300",
        "bg-white backdrop-blur-sm",
        "hover:bg-white/80 hover:shadow-[0_8px_16px_rgb(0_0_0/0.08)] hover:-translate-y-1",
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="mb-6 flex justify-center">{icon}</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{title}</h3>
            {badge && (
              <Badge
                variant="new"
                className="rounded-full bg-primary text-white px-3"
              >
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="absolute bottom-6 right-6 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
