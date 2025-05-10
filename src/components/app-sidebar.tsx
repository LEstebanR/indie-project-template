"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Home,
  FileText,
  User2,
  Bell,
  AlertTriangle,
  Table,
  ChevronDown,
  Square,
  SquareStack,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";

const componentGroups = [
  {
    label: "Básicos",
    items: [
      { name: "buttons", label: "Botones", icon: Square },
      { name: "cards", label: "Tarjetas", icon: SquareStack },
      { name: "forms", label: "Formularios", icon: FileText },
    ],
  },
  {
    label: "Feedback",
    items: [
      { name: "dialogs", label: "Diálogos", icon: MessageSquare },
      { name: "alerts", label: "Alertas", icon: AlertTriangle },
    ],
  },
  {
    label: "Datos",
    items: [
      { name: "tables", label: "Tablas", icon: Table },
      { name: "accordions", label: "Acordeones", icon: ChevronDown },
    ],
  },
  {
    label: "Visuales",
    items: [
      { name: "avatars", label: "Avatares", icon: User2 },
      { name: "badges", label: "Badges", icon: Bell },
    ],
  },
];

const docSections = [
  { name: "installation", label: "Instalación" },
  { name: "commands", label: "Comandos" },
  { name: "structure", label: "Estructura" },
  { name: "customization", label: "Personalización" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isDocsPage = pathname.includes("/docs");

  return (
    <Sidebar>
      <SidebarHeader className="p-4">Indie project template</SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Inicio</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs"}>
                  <Link href="/docs">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Documentación</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {!isDocsPage && (
          <>
            {componentGroups.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => {
                      const isActive =
                        pathname === "/" &&
                        new URLSearchParams(window?.location?.search).get(
                          "component"
                        ) === item.name;
                      return (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton asChild isActive={isActive}>
                            <Link href={`/?component=${item.name}`}>
                              <item.icon className="mr-2 h-4 w-4" />
                              <span>{item.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </>
        )}

        {isDocsPage && (
          <SidebarGroup>
            <SidebarGroupLabel>Documentación</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {docSections.map((section) => {
                  const isActive =
                    pathname === "/docs" &&
                    new URLSearchParams(window.location.search).get(
                      "section"
                    ) === section.name;
                  return (
                    <SidebarMenuItem key={section.name}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={`/docs?section=${section.name}`}>
                          <span>{section.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
