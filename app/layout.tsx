import { Footer } from "@/components/shared/Footer";
import type { Metadata } from "next";
import { postGroteskFont } from "./fonts/fonts";
import "./globals.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Header } from "@/components/shared/Header";
import Providers from "@/context";
import { LanguageProvider } from "@/context/languageProvider";

export const metadata: Metadata = {
  title: "Patexa - Create Presentations, Pitch Decks, Resumes, and Documents.",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
