import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Temporarily disable the old import:
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Agent Lite",
  description: "Minimal test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}