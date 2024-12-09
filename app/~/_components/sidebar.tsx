"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Plus,
  Home,
  Users,
  Globe,
  Sparkles,
  Layout,
  Palette,
  Type,
  Trash,
  Settings,
  HelpCircle,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { CommandDialog } from "@/components/command-dialog";
import { WorkspaceSwitcher } from "@/components/workspace-switcher";
import { useModal } from "@/store/modalStore";

export function AppSidebar({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const { onOpen } = useModal();
  const pathname = usePathname();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <Sidebar
        collapsible="icon"
        className={cn("bg-[#F7F5FF] border-r-0", className)}
      >
        <SidebarHeader className="p-4">
          <WorkspaceSwitcher />
          <div className="relative group-data-[collapsible=icon]:hidden">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Jump to"
              className="pl-8 h-9 bg-white cursor-pointer"
              onClick={() => setOpen(true)}
              readOnly
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              Ctrl+K
            </kbd>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~")}>
                <a href="/~" className="flex items-center">
                  <Home className="h-4 w-4" />
                  <SidebarSpan>Patexa</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/~/~shared-with-you")}
              >
                <a href="/~/~shared-with-you">
                  <Users className="h-4 w-4" />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Shared with you
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~sites")}>
                <a
                  href="/~/~sites"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Globe className="h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden ml-3">
                      Sites
                    </span>
                  </div>
                  <Badge variant="beta" className="ml-2">
                    BETA
                  </Badge>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~ai-images")}>
                <a
                  href="/~/~ai-images"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden ml-3">
                      AI Images
                    </span>
                  </div>
                  <Badge
                    variant="new"
                    className="ml-2 group-data-[collapsible=icon]:hidden"
                  >
                    NEW
                  </Badge>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarGroup className="mt-4 group-data-[collapsible=icon]:hidden bg-gray-100">
            <SidebarGroupLabel className="flex items-center justify-between px-2">
              Folders
              <Button
                onClick={() => onOpen("folder")}
                variant="ghost"
                size="icon"
                className="h-4 w-4"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </SidebarGroupLabel>
            <div className="px-2 py-1.5">
              <p className="text-xs text-muted-foreground">
                Organize your patexas by topic and share them with your team
              </p>
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-primary"
                onClick={() => onOpen("folder")}
              >
                Create or join a folder
              </Button>
            </div>
          </SidebarGroup>

          <SidebarMenu className="mt-4">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~templates")}>
                <a href="/~/~templates">
                  <Layout className="h-4 w-4" />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Templates
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~inspiration")}>
                <a href="/~/~inspiration">
                  <Sparkles className="h-4 w-4" />
                  <SidebarSpan>Inspiration</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~themes")}>
                <a href="/~/~themes" className="text-primary">
                  <Palette className="h-4 w-4" />
                  <SidebarSpan>Themes</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~custom-fonts")}>
                <a href="/~/~custom-fonts">
                  <Type className="h-4 w-4" />
                  <SidebarSpan>Custom fonts</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~trash")}>
                <a href="/~/~trash">
                  <Trash className="h-4 w-4" />
                  <SidebarSpan>Trash</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu className="mt-4">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~settings")}>
                <a href="/~/~settings">
                  <Settings className="h-4 w-4" />
                  <SidebarSpan>Settings & members</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~support")}>
                <a href="/~/~support">
                  <HelpCircle className="h-4 w-4" />
                  <SidebarSpan>Contact support</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/~feedback")}>
                <a href="/~/~feedback">
                  <Share2 className="h-4 w-4" />
                  <SidebarSpan>Share feedback</SidebarSpan>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </SidebarFooter>
      </Sidebar>
      <CommandDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

const SidebarSpan = ({
  className,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <span
    className={cn("group-data-[collapsible=icon]:hidden", className)}
    {...props}
  >
    {props.children}
  </span>
);
