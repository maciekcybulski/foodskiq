"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="media" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
