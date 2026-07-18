"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";
import { DreamProvider } from "@/context/DreamContext";

type Props = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <DreamProvider>
          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </DreamProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}