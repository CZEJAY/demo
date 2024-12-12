import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actionLabel?: string;
  actionLink?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionLink,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[400px] text-center",
        className
      )}
      {...props}
    >
      <div className="relative w-[300px] h-[200px] mb-8">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 250C200 250 180 220 180 200C180 180 220 180 220 200C220 220 200 250 200 250Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="200" cy="150" r="40" fill="currentColor" />
          <path
            d="M185 130C185 130 195 120 215 130"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="195" cy="140" r="3" fill="white" />
          <circle cx="215" cy="140" r="3" fill="white" />
          <rect x="180" y="150" width="40" height="20" fill="white" />
          <circle cx="300" cy="250" r="20" fill="black" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground mb-4 max-w-[500px]">
          {description}
        </p>
      )}
      {actionLabel && actionLink && (
        <Button variant="link" className="text-primary" asChild>
          <Link href={actionLink}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
