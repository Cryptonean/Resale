import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Add viewport meta tag to ensure proper scaling on mobile devices
export const metadata: Metadata = {
  title: "VacayExchange - Buy & Sell Premium Vacation Memberships",
  description:
    "The premier marketplace for buying and selling premium vacation memberships and holiday nights at exclusive resorts worldwide.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

// Update the header in the layout to accommodate the centered navbar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6">
              <MainNav />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
