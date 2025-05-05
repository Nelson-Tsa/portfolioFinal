import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {Anek_Telugu} from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Nelson Tsamen · Software Engineer",
  description: "Developpeur fullstack en recherche d'alternance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu, "font-sans h-full bg-background text-foreground")}>{children}
        <Analytics />
      </body>
    </html>
  );
}
