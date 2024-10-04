import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import type { Metadata } from "next";
import { postGroteskFont } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atoovis Create",
  description:
    "Create beautiful presentations, pitch decks, resumes, websites, and documents. No design, writing, or coding skills needed. Bring your ideas to life like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${postGroteskFont.className}`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
