import { cookies } from "next/headers";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { ModalProvider } from "@/components/modals/provider";
import { ReactQueryProviders } from "@/context/ReactQueryProvider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <ReactQueryProviders>
      <SidebarProvider className="w-full" defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          {children}
          <ModalProvider />
        </main>
      </SidebarProvider>
    </ReactQueryProviders>
  );
}
