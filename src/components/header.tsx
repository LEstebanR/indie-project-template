"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/ui/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const HEADER_LINKS = [
  {
    label: "Login",
    href: "/login",
    variant: "outline",
  },
  {
    label: "Sign Up",
    href: "/signup",
    variant: "default",
  },
];

export const Header = () => {
  return (
    <header className="  flex h-18 items-center justify-center border-b-2 border-gray-100 bg-white  md:rounded-t-xl">
      <div className="flex w-full items-center justify-between px-4 ">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" />
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          {HEADER_LINKS.map((link) => {
            return (
              <Link
                key={`link-to-${link.href}`}
                href={link.href}
                className="hidden md:block"
                prefetch={true}
              >
                <Button
                  variant={link.variant as "outline" | "default"}
                  className="transition-all duration-200"
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {HEADER_LINKS.map((link) => {
                  return (
                    <Link key={`link-to-${link.href}`} href={link.href}>
                      <DropdownMenuItem>{link.label}</DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
