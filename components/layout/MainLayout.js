"use client";
import { useState, useEffect } from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    router.pathname === "/login" || router.pathname === "/register";

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
        {!isAuthPage && <MobileHeader isScrolled={isScrolled} />}

        <Box
          component="main"
          className="main-content"
          sx={{
            flex: 1,
            pt: !isAuthPage ? "50px" : 0,
            pb: "70px",
          }}
        >
          {children}
        </Box>

        {!isAuthPage && <MobileBottomNav />}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      {!isAuthPage && <DesktopHeader isScrolled={isScrolled} />}

      <Box
        component="main"
        sx={{
          flex: 1,
          pt: !isAuthPage ? "50px" : 0,
        }}
      >
        <Box>{children}</Box>
      </Box>

      {!isAuthPage && <DesktopFooter />}
    </Box>
  );
};

export default MainLayout;
