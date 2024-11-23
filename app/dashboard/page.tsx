"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Navbar } from "./_components/navbar";
import { AppSidebar } from "./_components/sidebar";
import { MainContent } from "./_components/main-content";
import { DashboardPage } from "@/components/dashboard-page";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function page() {
  return (
    <MaxWidthWrapper>
      <MainContent />
    </MaxWidthWrapper>
  );
}
