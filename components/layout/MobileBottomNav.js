import { useRouter } from "next/navigation";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  ShoppingCart,
  Person,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

const MobileBottomNav = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const navItems = [
    { label: "Home", icon: HomeIcon, path: "/" },
    { label: "Explore", icon: SearchIcon, path: "/services" },
    { label: "Cart", icon: ShoppingCart, path: "/cart", badge: 2 },
    { label: "Account", icon: Person, path: "/login" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(navItems[newValue].path);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.05)",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          height: 65,
          background: "transparent",
          "& .Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              fontWeight: 600,
            },
          },
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{ flex: 1 }}
          >
            <BottomNavigationAction
              label={item.label}
              icon={
                item.badge ? (
                  <Badge badgeContent={item.badge} color="secondary">
                    <item.icon />
                  </Badge>
                ) : (
                  <item.icon />
                )
              }
              sx={{
                color:
                  router.pathname === item.path
                    ? "primary.main"
                    : "text.secondary",
                "&.Mui-selected": {
                  color: "primary.main",
                  "& .MuiSvgIcon-root": {
                    transform: "translateY(-4px)",
                    transition: "transform 0.3s ease",
                  },
                },
                "& .MuiSvgIcon-root": {
                  transition: "transform 0.3s ease",
                },
              }}
            />
          </motion.div>
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
