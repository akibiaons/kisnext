import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Component imports
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KIS Keep it Safe Cali",
  description: "Southern California American security and Cannon Gun Safes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        <Navbar />
      </div>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
