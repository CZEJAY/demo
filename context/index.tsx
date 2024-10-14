"use client";

import { LanguageProvider } from "./languageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
}
