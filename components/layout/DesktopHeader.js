import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  Divider,
  Paper,
  Grid,
  Stack,
  Chip,
  Fade,
  Popper,
  Grow,
  ClickAwayListener,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  ShoppingCart,
  Person,
  Dashboard,
  Logout,
  Settings,
  BookmarkBorder,
  Help,
  Business,
  Receipt,
  AccountBalance,
  Work,
  ArrowForward,
  TrendingUp,
  GppGood,
  Speed,
  Star,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Close,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";
import { serviceCategories } from "../../data/services";
import Image from "next/image";

const DesktopHeader = ({ isScrolled }) => {
  const router = useRouter();

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const megaMenuRef = useRef(null);
  const servicesButtonRef = useRef(null);

  const isLoggedIn = false; // Replace with actual auth state
  const userName = "Kausik"; // Replace with actual user name

  const handleMegaMenuOpen = () => {
    setMegaMenuOpen(true);
    setSelectedCategory(serviceCategories[0]);
  };

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleServiceClick = (service) => {
    router.push(`/services/${service.id}`);
    handleMegaMenuClose();
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const navItems = [
    { label: "Home", path: "/", icon: null },
    { label: "Services", path: "#", icon: null, hasMegaMenu: true },
    { label: "Blogs", path: "/blogs", icon: null },
    { label: "FAQ", path: "/faq", icon: null },
    { label: "Contact", path: "/contact", icon: null },
  ];

  // Get icon for category
  const getCategoryIcon = (categoryName) => {
    const icons = {
      "Company Registration": <Business sx={{ fontSize: 24 }} />,
      "GST Services": <Receipt sx={{ fontSize: 24 }} />,
      "PF & ESI": <AccountBalance sx={{ fontSize: 24 }} />,
      "Tax Filing": <TrendingUp sx={{ fontSize: 24 }} />,
      Consultation: <Work sx={{ fontSize: 24 }} />,
    };
    return icons[categoryName] || <Work sx={{ fontSize: 24 }} />;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          transition: "all 0.3s ease",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", height: "80px" }}
          >
            {/* Logo with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              <Image
                src="/color-logo.png"
                width={266}
                height={50}
                alt="logo-color"
              />
            </motion.div>

            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.hasMegaMenu ? (
                    <Button
                      ref={servicesButtonRef}
                      onClick={handleMegaMenuOpen}
                      onMouseEnter={handleMegaMenuOpen}
                      endIcon={
                        <KeyboardArrowDown
                          sx={{
                            transition: "transform 0.3s ease",
                            transform: megaMenuOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      }
                      sx={{
                        color:
                          router.pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: router.pathname === item.path ? 600 : 500,
                        px: 2,
                        py: 1,
                        borderRadius: "12px",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "0%",
                          height: "2px",
                          background:
                            "linear-gradient(90deg, #667eea, #764ba2)",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::before": {
                          width: "80%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => router.push(item.path)}
                      sx={{
                        color:
                          router.pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: router.pathname === item.path ? 600 : 500,
                        px: 2,
                        py: 1,
                        borderRadius: "12px",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "0%",
                          height: "2px",
                          background:
                            "linear-gradient(90deg, #667eea, #764ba2)",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::before": {
                          width: "80%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </motion.div>
              ))}
            </Box>

            {/* Right Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* User Menu */}
              {isLoggedIn ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Box
                    onClick={handleUserMenuOpen}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      cursor: "pointer",
                      p: 1,
                      borderRadius: "50px",
                      background: isScrolled
                        ? "rgba(0,0,0,0.02)"
                        : "transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(102,126,234,0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        cursor: "pointer",
                      }}
                    >
                      {userName.charAt(0)}
                    </Avatar>
                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, lineHeight: 1.2 }}
                      >
                        Hi, {userName}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        Welcome back
                      </Typography>
                    </Box>
                  </Box>

                  <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={handleUserMenuClose}
                    TransitionComponent={Grow}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        borderRadius: "20px",
                        minWidth: 280,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                        background: "rgba(255,255,255,0.98)",
                        backdropFilter: "blur(10px)",
                        overflow: "hidden",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        background:
                          "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          sx={{
                            width: 48,
                            height: 48,
                            background:
                              "linear-gradient(135deg, #667eea, #764ba2)",
                          }}
                        >
                          {userName.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {userName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            user@portivra.com
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        router.push("/dashboard");
                        handleUserMenuClose();
                      }}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemIcon>
                        <Dashboard fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Dashboard</ListItemText>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        router.push("/bookings");
                        handleUserMenuClose();
                      }}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemIcon>
                        <BookmarkBorder fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>My Bookings</ListItemText>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        router.push("/profile");
                        handleUserMenuClose();
                      }}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Profile Settings</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        router.push("/help");
                        handleUserMenuClose();
                      }}
                      sx={{ py: 1.5 }}
                    >
                      <ListItemIcon>
                        <Help fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Help & Support</ListItemText>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleUserMenuClose();
                      }}
                      sx={{ py: 1.5, color: "error.main" }}
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: "error.main" }} />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                  </Menu>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Person />}
                    onClick={() => router.push("/login")}
                    sx={{
                      borderRadius: "50px",
                      px: 3,
                      py: 1,
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      boxShadow: "0 4px 15px rgba(102,126,234,0.3)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(102,126,234,0.4)",
                        background:
                          "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                      },
                    }}
                  >
                    Login / Register
                  </Button>
                </motion.div>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mega Menu */}
      <Popper
        open={megaMenuOpen}
        anchorEl={servicesButtonRef.current}
        placement="bottom-start"
        transition
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 0],
            },
          },
        ]}
        sx={{ zIndex: 1300, width: "100%", maxWidth: "1200px" }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={300}>
            <Paper
              onMouseLeave={handleMegaMenuClose}
              sx={{
                mt: 1,
                width: "100%",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <Grid container>
                {/* Categories Sidebar */}
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)",
                    borderRight: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Work sx={{ color: "primary.main" }} />
                      Our Services
                    </Typography>
                    <List sx={{ p: 0 }}>
                      {serviceCategories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <ListItemButton
                            onClick={() => handleCategoryClick(category)}
                            selected={selectedCategory?.id === category.id}
                            sx={{
                              borderRadius: "12px",
                              mb: 1,
                              transition: "all 0.3s ease",
                              "&.Mui-selected": {
                                background:
                                  "linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)",
                                "&:hover": {
                                  background:
                                    "linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)",
                                },
                              },
                              "&:hover": {
                                background: "rgba(102,126,234,0.08)",
                                transform: "translateX(5px)",
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{ minWidth: 40, color: category.color }}
                            >
                              {getCategoryIcon(category.name)}
                            </ListItemIcon>
                            <ListItemText
                              primary={category.name}
                              primaryTypographyProps={{
                                fontWeight:
                                  selectedCategory?.id === category.id
                                    ? 600
                                    : 500,
                                fontSize: "0.95rem",
                              }}
                              secondary={category.description}
                              secondaryTypographyProps={{
                                fontSize: "0.75rem",
                                sx: { mt: 0.5, opacity: 0.7 },
                              }}
                            />
                            {selectedCategory?.id === category.id && (
                              <KeyboardArrowRight
                                sx={{ color: "primary.main" }}
                              />
                            )}
                          </ListItemButton>
                        </motion.div>
                      ))}
                    </List>
                  </Box>
                </Grid>

                {/* Services List */}
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box sx={{ p: 3 }}>
                    {selectedCategory && (
                      <motion.div
                        key={selectedCategory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {selectedCategory.name}
                          </Typography>
                          <Chip
                            label={`${selectedCategory.services.length} Services`}
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(135deg, #667eea, #764ba2)",
                              color: "white",
                              fontWeight: 600,
                            }}
                          />
                        </Box>

                        <Grid container spacing={2}>
                          {selectedCategory.services.map((service, index) => (
                            <Grid item xs={12} sm={6} key={service.id}>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Paper
                                  elevation={0}
                                  onClick={() => handleServiceClick(service)}
                                  sx={{
                                    p: 2,
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    "&:hover": {
                                      transform: "translateY(-4px)",
                                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                      borderColor: "primary.main",
                                    },
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      justifyContent: "space-between",
                                      mb: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="subtitle1"
                                      fontWeight={600}
                                    >
                                      {service.name}
                                    </Typography>
                                    {service.popular && (
                                      <Chip
                                        label="Popular"
                                        size="small"
                                        icon={<Star sx={{ fontSize: 14 }} />}
                                        sx={{
                                          background:
                                            "linear-gradient(135deg, #F97316, #EF4444)",
                                          color: "white",
                                          fontSize: "0.7rem",
                                          height: 24,
                                        }}
                                      />
                                    )}
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1.5 }}
                                  >
                                    {service.description}
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                      mb: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontWeight: 700,
                                        color: "primary.main",
                                      }}
                                    >
                                      ₹{service.price}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        textDecoration: "line-through",
                                        color: "text.disabled",
                                      }}
                                    >
                                      ₹{service.originalPrice}
                                    </Typography>
                                    <Chip
                                      label={`${service.discount}% OFF`}
                                      size="small"
                                      sx={{
                                        background: "#10B981",
                                        color: "white",
                                        fontSize: "0.7rem",
                                        height: 22,
                                      }}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 2,
                                    }}
                                  >
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                      }}
                                    >
                                      <Speed sx={{ fontSize: 14 }} />
                                      {service.duration}
                                    </Typography>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      endIcon={
                                        <ArrowForward sx={{ fontSize: 14 }} />
                                      }
                                      sx={{
                                        borderRadius: "20px",
                                        textTransform: "none",
                                        ml: "auto",
                                      }}
                                    >
                                      View Details
                                    </Button>
                                  </Box>
                                </Paper>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>

                        {/* View All Services Button */}
                        <Box sx={{ mt: 3, textAlign: "center" }}>
                          <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            onClick={() => {
                              router.push(
                                `/services?category=${selectedCategory.id}`,
                              );
                              handleMegaMenuClose();
                            }}
                            sx={{
                              borderRadius: "50px",
                              px: 4,
                              background:
                                "linear-gradient(135deg, #667eea, #764ba2)",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 20px rgba(102,126,234,0.4)",
                              },
                            }}
                          >
                            View All {selectedCategory.name}
                          </Button>
                        </Box>
                      </motion.div>
                    )}
                  </Box>
                </Grid>
              </Grid>

              {/* Featured Services Banner */}
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <GppGood sx={{ color: "white", fontSize: 32 }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      Need expert guidance?
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Book a free consultation session with our experts
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "#667eea",
                    borderRadius: "50px",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.9)",
                      transform: "translateY(-2px)",
                    },
                  }}
                  onClick={() => {
                    router.push("/consultation");
                    handleMegaMenuClose();
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default DesktopHeader;
