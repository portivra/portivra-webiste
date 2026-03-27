import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart,
  Home,
  Work,
  Article,
  Help,
  Phone,
  Person,
  Close,
  Dashboard,
  BookmarkBorder,
  Settings,
  Logout,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";

const MobileHeader = ({ isScrolled }) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isLoggedIn = false; // Replace with actual auth state

  const menuItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Services", icon: Work, path: "/services" },
    { label: "Blogs", icon: Article, path: "/blogs" },
    { label: "FAQ", icon: Help, path: "/faq" },
    { label: "Contact", icon: Phone, path: "/contact" },
  ];

  const userMenuItems = isLoggedIn
    ? [
        { label: "Dashboard", icon: Dashboard, path: "/dashboard" },
        { label: "My Bookings", icon: BookmarkBorder, path: "/bookings" },
        { label: "Profile Settings", icon: Settings, path: "/profile" },
        { label: "Logout", icon: Logout, path: "/logout" },
      ]
    : [];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Menu Button */}
          <IconButton
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{
              color: "primary.main",
              "&:hover": {
                background: "rgba(99,102,241,0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" passHref>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {companyInfo.shortName}
              </Typography>
            </Link>
          </motion.div>

          {/* Right Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={() => setSearchOpen(!searchOpen)}
              sx={{
                color: "text.primary",
                "&:hover": {
                  background: "rgba(99,102,241,0.1)",
                },
              }}
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              onClick={() => router.push("/cart")}
              sx={{
                color: "text.primary",
                "&:hover": {
                  background: "rgba(99,102,241,0.1)",
                },
              }}
            >
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ p: 2, background: "white" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#f5f5f5",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                  <input
                    type="text"
                    placeholder="Search services, blogs..."
                    style={{
                      flex: 1,
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      fontSize: "16px",
                    }}
                    autoFocus
                  />
                  <IconButton size="small" onClick={() => setSearchOpen(false)}>
                    <Close />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "280px",
            borderRadius: "0 20px 20px 0",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            textAlign: "center",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            {companyInfo.name}
          </Typography>

          {!isLoggedIn ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Person />}
                onClick={() => {
                  router.push("/login");
                  setDrawerOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                Login / Register
              </Button>
            </motion.div>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48 }}>
                U
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  User Name
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  user@email.com
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <ListItem
                button
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  background:
                    router.pathname === item.path
                      ? "rgba(99,102,241,0.1)"
                      : "transparent",
                }}
              >
                <ListItemIcon>
                  <item.icon
                    sx={{
                      color:
                        router.pathname === item.path
                          ? "primary.main"
                          : "text.secondary",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: router.pathname === item.path ? 600 : 400,
                    color:
                      router.pathname === item.path
                        ? "primary.main"
                        : "text.primary",
                  }}
                />
              </ListItem>
            </motion.div>
          ))}

          {userMenuItems.length > 0 && (
            <>
              <Divider sx={{ my: 2 }} />
              {userMenuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ListItem
                    button
                    onClick={() => handleNavigation(item.path)}
                    sx={{ borderRadius: 2, mb: 1 }}
                  >
                    <ListItemIcon>
                      <item.icon sx={{ color: "text.secondary" }} />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </motion.div>
              ))}
            </>
          )}
        </List>

        {/* Company Info in Drawer */}
        <Box
          sx={{
            p: 2,
            mt: "auto",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(99,102,241,0.05)",
          }}
        >
          <Typography variant="caption" color="text.secondary" display="block">
            {companyInfo.address.full}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            sx={{ mt: 1 }}
          >
            📞 {companyInfo.phoneFormatted}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            ✉️ {companyInfo.email.primary}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileHeader;
