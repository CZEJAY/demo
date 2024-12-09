"use client";

import { ReactNode } from "react";
import { Button } from "../../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Heading } from "../../../components/heading";
import { useModal } from "@/store/modalStore";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, SquareStackIcon as StackIcon } from "lucide-react";
import { UserButton } from "@/components/user-button";

interface DashboardPageProps {
  title: string;
  children?: ReactNode;
  hideBackButton?: boolean;
  cta?: ReactNode;
}

export const DashboardPage = ({
  title,
  children,
  cta,
  hideBackButton,
}: DashboardPageProps) => {
  const router = useRouter();
  const { onOpen } = useModal();

  return (
    <>
      <nav className="sticky z-30 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <SidebarTrigger />
              <span className="text-xl font-bold">{title}</span>

            </div>
            <div className="flex items-center gap-4">
              <span
                onClick={() => onOpen("credits")}
                className="text-xs hover:bg-gray-100 p-1 rounded cursor-pointer font-medium inline-flex items-center gap-2"
              >
                <StackIcon className="h-3.5 w-3.5" />
                360 credits
              </span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <UserButton />
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
      {/* <section className="flex-1 h-full w-full flex flex-col">
      <div className="w-full p-6 flex justify-between border-b border-gray-200">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
          

          {cta ? <div className="w-full">{cta}</div> : null}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section> */}
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
};
