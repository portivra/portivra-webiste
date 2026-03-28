"use client";
import { useState, useEffect } from "react";

import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import DesktopHeader from "./DesktopHeader";
import DesktopFooter from "./DesktopFooter";
import MobileHeader from "./MobileHeader";
import MobileBottomNav from "./MobileBottomNav";
import { useRouter } from "next/navigation";

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show header/footer on auth pages if needed
  const isAuthPage =
    router.pathname === "/login" || router.pathname === "/register";

  // For mobile, we don't want to show the footer, just bottom nav
  if (isMobile) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        {/* Mobile Header */}
        {!isAuthPage && <MobileHeader isScrolled={isScrolled} />}

        {/* Main Content */}
        <Box
          component="main"
          className="main-content"
          sx={{
            flex: 1,
            pt: !isAuthPage ? "70px" : 0,
            pb: "70px", // Space for bottom nav
            px: { xs: 2, sm: 3 },
          }}
        >
          {children}
        </Box>

        {/* Mobile Bottom Navigation */}
        {!isAuthPage && <MobileBottomNav />}
      </Box>
    );
  }

  // Desktop/Laptop Layout
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      {/* Desktop Header */}
      {!isAuthPage && <DesktopHeader isScrolled={isScrolled} />}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          pt: !isAuthPage ? "80px" : 0,
          pb: 4,
        }}
      >
        <Box>{children}</Box>
      </Box>

      {/* Desktop Footer */}
      {!isAuthPage && <DesktopFooter />}
    </Box>
  );
};

export default MainLayout;
