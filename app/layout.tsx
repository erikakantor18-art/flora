import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import "./globals.css";

import MobileNav from "@/components/layout/MobileNav";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erika OS",
  description: "Your Personal Life Operating System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body className={inter.className}>

        {children}

        <MobileNav />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
          }}
        />

      </body>

    </html>

  );

}