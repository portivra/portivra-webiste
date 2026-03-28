"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Paper,
  IconButton,
  useMediaQuery,
  useTheme,
  Rating,
} from "@mui/material";
import {
  ArrowForward,
  CheckCircle,
  SupportAgent,
  Star,
  FormatQuote,
  Rocket,
  Favorite,
  ChevronLeft,
  ChevronRight,
  AutoAwesome,
  FlashOn,
  Diamond,
  Psychology,
  ThumbUp,
  Google,
  Microsoft,
  Build,
  Apple,
  Facebook,
} from "@mui/icons-material";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { serviceCategories, popularServices } from "@/data/services";
import testimonials from "@/data/testimonials";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [testimonialAutoPlay, setTestimonialAutoPlay] = useState(true);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!testimonialAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTestimonialIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 2),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialAutoPlay]);

  // Partner logos
  const partners = [
    {
      name: "Google",
      icon: <Google sx={{ fontSize: 40 }} />,
      color: "#4285F4",
    },
    {
      name: "Microsoft",
      icon: <Microsoft sx={{ fontSize: 40 }} />,
      color: "#00A4EF",
    },
    {
      name: "Amazon",
      icon: <Build sx={{ fontSize: 40 }} />,
      color: "#FF9900",
    },
    {
      name: "Flipkart",
      icon: <Facebook sx={{ fontSize: 40 }} />,
      color: "#2874F0",
    },
    { name: "Apple", icon: <Apple sx={{ fontSize: 40 }} />, color: "#A2AAAD" },
    {
      name: "Facebook",
      icon: <Facebook sx={{ fontSize: 40 }} />,
      color: "#1877F2",
    },
  ];

  // Features with vibrant colors
  const features = [
    {
      icon: <FlashOn />,
      title: "Lightning Fast",
      description: "Same-day processing for urgent services",
      color: "#F97316",
      gradient: "linear-gradient(135deg, #F97316, #EF4444)",
    },
    {
      icon: <Diamond />,
      title: "Premium Quality",
      description: "Highest quality standards guaranteed",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    },
    {
      icon: <Psychology />,
      title: "Expert Guidance",
      description: "CA & CS qualified professionals",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
    },
    {
      icon: <ThumbUp />,
      title: "98% Satisfaction",
      description: "Trusted by 5000+ happy clients",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    },
  ];

  // Stats
  const stats = [
    {
      value: "5000+",
      label: "Happy Clients",
      icon: <Favorite />,
      color: "#F97316",
    },
    {
      value: "10000+",
      label: "Services Delivered",
      icon: <CheckCircle />,
      color: "#10B981",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star />,
      color: "#8B5CF6",
    },
    {
      value: "24/7",
      label: "Expert Support",
      icon: <SupportAgent />,
      color: "#3B82F6",
    },
  ];

  // Top rated services
  const topRatedServices = popularServices.slice(0, 4);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2),
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex(
      (prev) => (prev + 1) % Math.ceil(testimonials.length / 2),
    );
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section - Dark Gradient */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          minHeight: { xs: "100vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 50%, #1a1a2e 100%)",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(236,72,153,0) 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 2, py: { xs: 8, md: 0 } }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: 16 }} />}
                  label="Trusted by 5000+ Businesses"
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    mb: 3,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    fontWeight: 800,
                    color: "white",
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Your Trusted Partner for
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Business Compliance
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    mb: 4,
                    maxWidth: 500,
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Professional company registration, GST filing, PF, ESI, and
                  all tax-related services with expert guidance.
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="/services"
                      startIcon={<Rocket />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        fontSize: "1rem",
                        boxShadow: "0 8px 20px rgba(102,126,234,0.4)",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 30px rgba(102,126,234,0.5)",
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="/consultation"
                      startIcon={<SupportAgent />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        borderColor: "rgba(255,255,255,0.3)",
                        color: "white",
                        fontSize: "1rem",
                        "&:hover": {
                          borderColor: "white",
                          background: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      Free Consultation
                    </Button>
                  </motion.div>
                </Stack>

                {/* Stats Row */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                  {stats.map((stat, index) => (
                    <Grid size={{ xs: 6, sm: 3 }} key={index}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          variant="h4"
                          fontWeight={800}
                          color="#a78bfa"
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 300, md: 450 },
                    width: "100%",
                  }}
                >
                  <Image
                    src="/hero-illustration.svg"
                    alt="Business Services"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
              }}
            >
              Why Choose{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Portivra
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                mb: 6,
              }}
            >
              We deliver excellence through expertise, technology, and
              dedication
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: feature.gradient,
                      },
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        margin: "0 auto 16px",
                        background: `${feature.color}15`,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Categories - Vibrant Cards */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: "white" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
              }}
            >
              Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                mb: 6,
              }}
            >
              Comprehensive business compliance solutions tailored to your needs
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {serviceCategories.map((category, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                      p: 3,
                      height: "100%",
                      borderRadius: 4,
                      background: `linear-gradient(135deg, white 0%, ${category.color}08 100%)`,
                      transition: "all 0.3s ease",
                      border: `1px solid ${category.color}20`,
                      "&:hover": {
                        boxShadow: `0 20px 40px ${category.color}20`,
                        borderColor: category.color,
                      },
                    }}
                    onClick={() =>
                      (window.location.href = `/services?category=${category.id}`)
                    }
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto 16px",
                        background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}40 100%)`,
                        color: category.color,
                      }}
                    >
                      <Typography variant="h3">{category.icon}</Typography>
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        mt: 2,
                        color: category.color,
                        "&:hover": {
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Top Rated Services */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
              }}
            >
              Top Rated{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                mb: 6,
              }}
            >
              Most loved services by our valued clients
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {topRatedServices.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      position: "relative",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    {service.popular && (
                      <Chip
                        label="⭐ Top Rated"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          background:
                            "linear-gradient(135deg, #F97316, #EF4444)",
                          color: "white",
                          fontWeight: 600,
                          zIndex: 1,
                        }}
                      />
                    )}
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {service.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: 60 }}
                      >
                        {service.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight={800}
                          color="primary.main"
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
                          sx={{ background: "#10B981", color: "white" }}
                        />
                      </Box>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForward />}
                        href={`/services/${service.id}`}
                        sx={{
                          borderRadius: 2,
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              href="/services"
              sx={{
                borderRadius: 3,
                px: 4,
                borderColor: "#667eea",
                color: "#667eea",
                "&:hover": {
                  borderColor: "#764ba2",
                  background: "rgba(102,126,234,0.05)",
                },
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials - Multiple Cards Carousel */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: "white" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                textAlign: "center",
                mb: 2,
              }}
            >
              What Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Clients Say
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                mb: 6,
              }}
            >
              Trusted by thousands of businesses across India
            </Typography>
          </motion.div>

          <Box sx={{ position: "relative", px: { xs: 0, md: 4 } }}>
            <IconButton
              onClick={handlePrevTestimonial}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                "&:hover": { bgcolor: "#f5f5f5" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={handleNextTestimonial}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                "&:hover": { bgcolor: "#f5f5f5" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <ChevronRight />
            </IconButton>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Grid container spacing={3}>
                  {testimonials
                    .slice(
                      activeTestimonialIndex * 2,
                      activeTestimonialIndex * 2 + 2,
                    )
                    .map((testimonial) => (
                      <Grid size={{ xs: 12, md: 6 }} key={testimonial.id}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 4,
                            background:
                              "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                            border: "1px solid rgba(0,0,0,0.05)",
                            height: "100%",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            },
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <Avatar
                              src={testimonial.image}
                              sx={{ width: 60, height: 60 }}
                            />
                            <Box>
                              <Typography variant="h6" fontWeight={700}>
                                {testimonial.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {testimonial.position}
                              </Typography>
                              <Rating
                                value={testimonial.rating}
                                readOnly
                                size="small"
                                sx={{ mt: 0.5 }}
                              />
                            </Box>
                          </Box>
                          <FormatQuote
                            sx={{ fontSize: 32, color: "#667eea20", mb: 1 }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontStyle: "italic" }}
                          >
                            {testimonial.comment}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                </Grid>
              </motion.div>
            </AnimatePresence>

            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}
            >
              {[...Array(Math.ceil(testimonials.length / 2))].map(
                (_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveTestimonialIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      cursor: "pointer",
                      background:
                        activeTestimonialIndex === index
                          ? "#667eea"
                          : "#E5E7EB",
                      transition: "all 0.3s ease",
                      "&:hover": { background: "#667eea" },
                    }}
                  />
                ),
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Partner Companies Carousel */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 50%, #1a1a2e 100%)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                color: "white",
                mb: 4,
                opacity: 0.8,
              }}
            >
              Trusted By Leading Companies
            </Typography>
          </motion.div>

          <Box sx={{ overflow: "hidden", position: "relative" }}>
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                display: "flex",
                gap: "40px",
                width: "fit-content",
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 150,
                    p: 2,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {partner.icon}
                  <Typography sx={{ ml: 1, color: "white", fontWeight: 500 }}>
                    {partner.name}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                textAlign: "center",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: "auto" }}
              >
                Join thousands of businesses that trust Portivra for their
                compliance needs
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                flexWrap="wrap"
                gap={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="/services"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    background: "white",
                    color: "#667eea",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/contact"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      background: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
