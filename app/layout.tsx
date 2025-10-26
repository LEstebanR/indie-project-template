import type { Metadata } from "next";

import { Outfit } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indie Project Template",
  description: "A starter template for indie projects by LEsteban.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiase grid min-h-dvh grid-rows-[auto_1fr_auto] w-full`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
