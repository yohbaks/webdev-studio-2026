import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JFS Venture Solutions — Web Development Studio (2026)",
  description:
    "Modern websites, web apps, SEO, and ongoing support. Built with Next.js + React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
