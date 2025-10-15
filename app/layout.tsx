import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidget from "@/components/shared/FloatingWidget";
import Chatbot from "@/components/shared/Chatbot";
import { siteConfig } from "@/config/site.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: siteConfig.name + " - " + siteConfig.description,
  description: siteConfig.description,
  keywords: [
    "electrician",
    "electrical services",
    "residential electrical",
    "commercial electrical",
    "emergency electrician",
    "EV charging installation",
    "generator installation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWidget />
        <Chatbot />
      </body>
    </html>
  );
}
