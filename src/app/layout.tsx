import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indie Project Template",
  description: "A template for indie projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex w-full bg-gray-100">
            <AppSidebar />
            <div className="flex flex-col flex-1 md:m-2 bg-white rounded-xl border border-gray-200">
              <Header />
              <main className="flex-1 pt-18">{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
