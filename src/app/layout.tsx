import type { Metadata } from "next";
import { Alumni_Sans, Inter } from "next/font/google";
import "./globals.css";

// Component imports
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const alumni = Alumni_Sans({ subsets: ["latin"] });

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
      <body>
        <div className={`${alumni.className} alumniNavbar antialiased`}>
          <Navbar />
        </div>
        <div className={`${inter.className} interBody antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}
