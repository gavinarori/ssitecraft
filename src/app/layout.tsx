import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/app/components/header/page';
import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "siteCraft",
  description: "Unlock the Full Potential of Your Business with Custom Web Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        <Toaster />
        </body>
    </html>
  );
}
