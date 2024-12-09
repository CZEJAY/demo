import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stars } from "./_components/stars";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary/25">
      <Stars />
      <header className="p-4 flex justify-between items-center">
        <Button variant="outline" size="sm" className="bg-white" asChild>
          <Link href="/create">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="bg-white" asChild>
          <Link href="/~">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
    </div>
  );
}
