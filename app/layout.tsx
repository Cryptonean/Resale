import type React from "react";
import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import Footer from "@/components/home/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Add viewport meta tag to ensure proper scaling on mobile devices
export const metadata: Metadata = {
  title: {
    default: "VacayExchange - Buy & Sell Premium Vacation Memberships",
    template: `%s - ${"siteConfig.name"}`,
  },
  description:
    "The premier marketplace for buying and selling premium vacation memberships and holiday nights at exclusive resorts worldwide.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
