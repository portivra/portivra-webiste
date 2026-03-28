"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Chip,
  Stack,
  Breadcrumbs,
  Link as MuiLink,
  Avatar,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Business,
  EmojiEvents,
  People,
  TrendingUp,
  CheckCircle,
  Security,
  Speed,
  SupportAgent,
  Star,
  WorkspacePremium,
  School,
  Timeline,
  Rocket,
  Flag,
  Visibility,
  Favorite,
  LocalShipping,
  VerifiedUser,
  WhatsApp,
  LinkedIn,
  Twitter,
  Email,
  LocationOn,
  Phone,
  ArrowForward,
  FormatQuote,
  PlayCircle,
  PauseCircle,
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

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stats = [
    {
      value: "5,000+",
      label: "Happy Clients",
      icon: <People />,
      color: "#10B981",
    },
    {
      value: "10,000+",
      label: "Services Delivered",
      icon: <CheckCircle />,
      color: "#3B82F6",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star />,
      color: "#F97316",
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <SupportAgent />,
      color: "#8B5CF6",
    },
  ];

  const values = [
    {
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings.",
      icon: <VerifiedUser />,
      color: "#667eea",
    },
    {
      title: "Client First",
      description:
        "Your success is our success. We put clients at the center of everything.",
      icon: <Favorite />,
      color: "#EC4899",
    },
    {
      title: "Excellence",
      description: "Striving for excellence in every service we deliver.",
      icon: <WorkspacePremium />,
      color: "#F97316",
    },
    {
      title: "Innovation",
      description: "Embracing technology to provide cutting-edge solutions.",
      icon: <Rocket />,
      color: "#14B8A6",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "Portivra was established with a vision to simplify business compliance.",
      icon: <Business />,
    },
    {
      year: "2023",
      title: "First 100 Clients",
      description: "Reached 100+ happy clients within the first 6 months.",
      icon: <People />,
    },
    {
      year: "2024",
      title: "Service Expansion",
      description:
        "Expanded services to include comprehensive tax and compliance solutions.",
      icon: <TrendingUp />,
    },
    {
      year: "2024",
      title: "ISO Certified",
      description:
        "Achieved ISO 9001:2015 certification for quality management.",
      icon: <WorkspacePremium />,
    },
  ];

  const team = [
    {
      name: "Kausik Maity",
      role: "Founder & CEO",
      expertise: "Business Strategy, Taxation",
      image: "/team/kausik.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sneha Roy",
      role: "Senior Consultant",
      expertise: "GST, Company Registration",
      image: "/team/sneha.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Rahul Sharma",
      role: "Tax Expert",
      expertise: "Income Tax, TDS",
      image: "/team/rahul.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Patel",
      role: "Client Relations",
      expertise: "Customer Support, Consultation",
      image: "/team/priya.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Founder, TechStart Solutions",
      content:
        "Portivra made company registration incredibly smooth. Their team guided us through every step. Highly recommended!",
      rating: 5,
      avatar: "/testimonials/rajesh.jpg",
    },
    {
      name: "Priya Patel",
      role: "CA, Priya & Associates",
      content:
        "Excellent GST filing service. Very professional and timely. The dashboard makes it easy to track all filings.",
      rating: 5,
      avatar: "/testimonials/priya.jpg",
    },
    {
      name: "Amit Kumar",
      role: "HR Manager, Global Tech",
      content:
        "Very helpful with PF and ESI compliance. Their team is knowledgeable and responsive.",
      rating: 4,
      avatar: "/testimonials/amit.jpg",
    },
  ];

  const achievements = [
    {
      icon: <WorkspacePremium />,
      title: "ISO 9001:2015 Certified",
      description: "Quality management certified",
    },
    {
      icon: <Security />,
      title: "Data Security",
      description: "SSL encrypted, secure payments",
    },
    {
      icon: <Speed />,
      title: "Fast Processing",
      description: "Quick turnaround time",
    },
    {
      icon: <School />,
      title: "Expert Team",
      description: "Qualified professionals",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        overflow: "hidden",
      }}
    >
      {/* Hero Section with Parallax */}
      <Box
        ref={targetRef}
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            opacity,
            scale,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(102,126,234,0.9) 0%, rgba(118,75,162,0.9) 100%)",
              zIndex: 1,
            }}
          />
          <Image
            src="/about-hero.jpg"
            alt="About Portivra"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumbs sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}>
              <MuiLink href="/" underline="hover" color="inherit">
                Home
              </MuiLink>
              <Typography color="white" fontWeight={600}>
                About Us
              </Typography>
            </Breadcrumbs>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                fontWeight: 800,
                color: "white",
                mb: 2,
              }}
            >
              Your Trusted Partner
              <br />
              in Business Compliance
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                maxWidth: 600,
                mb: 4,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              We simplify business compliance so you can focus on what matters
              most - growing your business.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
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
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "white",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Flag sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  To empower businesses by providing expert, reliable, and
                  affordable compliance solutions that help them navigate the
                  complex regulatory landscape with confidence.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We strive to be the most trusted partner for entrepreneurs and
                  businesses across India.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "white",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Visibility sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  To become India&apos;s most preferred business compliance
                  partner, recognized for excellence, innovation, and unwavering
                  commitment to client success.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We envision a future where every business, regardless of size,
                  has access to world-class compliance support.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8 }}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        margin: "0 auto 16px",
                        background: `${stat.color}15`,
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{ color: stat.color }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Who We Are */}
        <Grid container spacing={6} sx={{ mb: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {companyInfo.name} is a premier business compliance firm
                dedicated to helping entrepreneurs and businesses navigate the
                complex world of company registration, taxation, and regulatory
                compliance.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Founded in 2023, we have rapidly grown to become a trusted
                partner for over 5,000+ businesses across India. Our team of
                experienced professionals brings together deep domain expertise,
                technological innovation, and a client-centric approach to
                deliver exceptional results.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We believe that compliance should not be a burden but a catalyst
                for growth. By simplifying complex processes and providing
                expert guidance, we enable our clients to focus on what they do
                best - building and growing their businesses.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  href="/services"
                  sx={{
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, md: 400 },
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src="/about-team.jpg"
                  alt="Portivra Team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              Our Core Values
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              The principles that guide everything we do
            </Typography>
          </motion.div>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        margin: "0 auto 16px",
                        background: `${value.color}15`,
                        color: value.color,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Journey Timeline */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              Our Journey
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Milestones that mark our growth story
            </Typography>
          </motion.div>
          <Box sx={{ position: "relative" }}>
            <Divider
              sx={{
                position: "absolute",
                left: "50%",
                top: 40,
                bottom: 0,
                transform: "translateX(-50%)",
                display: { xs: "none", md: "block" },
              }}
            />
            <Grid container spacing={4}>
              {milestones.map((milestone, index) => (
                <Grid size={{ xs: 12, md: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        background: "white",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          margin: "0 auto 16px",
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          color: "white",
                        }}
                      >
                        {milestone.icon}
                      </Avatar>
                      <Typography variant="h4" fontWeight={800} color="#667eea">
                        {milestone.year}
                      </Typography>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              Meet Our Team
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Passionate experts dedicated to your success
            </Typography>
          </motion.div>
          <Grid container spacing={3}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 120,
                        height: 120,
                        margin: "0 auto 16px",
                        border: "4px solid #667eea",
                      }}
                    />
                    <Typography variant="h6" fontWeight={700}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.main"
                      fontWeight={600}
                      gutterBottom
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      sx={{ mb: 2 }}
                    >
                      {member.expertise}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton
                        size="small"
                        href={member.social.linkedin}
                        target="_blank"
                      >
                        <LinkedIn sx={{ fontSize: 18 }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        href={member.social.twitter}
                        target="_blank"
                      >
                        <Twitter sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Trusted by thousands of businesses across India
            </Typography>
          </motion.div>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}>
                  <FormatQuote
                    sx={{ fontSize: 60, color: "rgba(102,126,234,0.2)", mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ mb: 3, fontStyle: "italic", color: "text.secondary" }}
                  >
                    &quot;&quot;{testimonials[activeTestimonial].content}
                    &quot;&quot;
                  </Typography>
                  <Avatar
                    src={testimonials[activeTestimonial].avatar}
                    sx={{ width: 80, height: 80, margin: "0 auto 16px" }}
                  />
                  <Typography variant="h6" fontWeight={700}>
                    {testimonials[activeTestimonial].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {testimonials[activeTestimonial].role}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 0.5,
                      mt: 1,
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        sx={{
                          fontSize: 18,
                          color:
                            i < testimonials[activeTestimonial].rating
                              ? "#F97316"
                              : "#E5E7EB",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}
            >
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    cursor: "pointer",
                    background:
                      activeTestimonial === index ? "#667eea" : "#E5E7EB",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
            <IconButton
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{ position: "absolute", bottom: 20, right: 20 }}
            >
              {isPlaying ? <PauseCircle /> : <PlayCircle />}
            </IconButton>
          </Paper>
        </Box>

        {/* Achievements */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              Our Achievements
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Recognitions that reflect our commitment to excellence
            </Typography>
          </motion.div>
          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        margin: "0 auto 16px",
                        background:
                          "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
                        color: "#667eea",
                      }}
                    >
                      {achievement.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
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
            }}
          >
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
  );
};

export default AboutPage;
