"use client";

import { MainContent } from "./_components/main-content";
import { DashboardPage } from "@/app/~/_components/dashboard-page";

export default function page() {
  return (
    <DashboardPage title="Patexa">
      <MainContent />
    </DashboardPage>
  );
}
