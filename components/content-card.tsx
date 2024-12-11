import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

interface ContentCardProps {
  title: string;
  image: string;
  footer?: React.ReactNode;
  aspectRatio?: "portrait" | "square" | "video";
  className?: string;
}

export function ContentCard({
  title,
  image,
  footer,
  aspectRatio = "square",
  className,
}: ContentCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="border-b p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              <Logo className="h-8 w-8 opacity-50" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <CardTitle className="line-clamp-1 font-normal -mb-6 mt-2 text-base">
          {title}
        </CardTitle>
      </CardContent>
      {footer && <CardFooter className="px-4">{footer}</CardFooter>}
    </Card>
  );
}
