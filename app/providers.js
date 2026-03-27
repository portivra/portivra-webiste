"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import theme from "@/lib/theme";
import { MainLayout } from "@/components/layout";

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmotionThemeProvider theme={theme}>
        <AnimatePresence mode="wait">
          <MainLayout>{children}</MainLayout>
        </AnimatePresence>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}
