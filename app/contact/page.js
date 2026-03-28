"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Divider,
  Chip,
  Snackbar,
  Alert,
  InputAdornment,
  Paper,
  Avatar,
  useMediaQuery,
  useTheme,
  Slide,
  Zoom,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Person,
  Subject,
  Message,
  CheckCircle,
  Map,
  Navigation,
  Star,
  LocalShipping,
  Security,
  SupportAgent,
  ArrowForward,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [activeMethod, setActiveMethod] = useState(null);

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const messages = JSON.parse(
        localStorage.getItem("contact_messages") || "[]",
      );
      messages.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("contact_messages", JSON.stringify(messages));
      setIsSubmitted(true);
      showSnackbar(
        "Message sent successfully! We'll get back to you soon.",
        "success",
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      showSnackbar("Failed to send message. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: [companyInfo.phoneFormatted],
      link: `tel:${companyInfo.phone}`,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      description: "Available during business hours",
      action: "Call Now",
    },
    {
      icon: WhatsApp,
      title: "WhatsApp",
      details: [companyInfo.phoneFormatted],
      link: `https://wa.me/${companyInfo.phone}`,
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      description: "Quick response within minutes",
      action: "Chat Now",
    },
    {
      icon: Email,
      title: "Email Us",
      details: [companyInfo.email.primary],
      link: `mailto:${companyInfo.email.primary}`,
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
      description: "We reply within 24 hours",
      action: "Send Email",
    },
    {
      icon: LocationOn,
      title: "Visit Us",
      details: [companyInfo.address.full],
      link: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`,
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      description: "Get directions to our office",
      action: "Get Directions",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: companyInfo.workingHours.weekdays },
    { day: "Saturday", hours: companyInfo.workingHours.saturday },
    { day: "Sunday", hours: companyInfo.workingHours.sunday },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      link: companyInfo.social.facebook,
      color: "#1877f2",
      name: "Facebook",
    },
    {
      icon: Instagram,
      link: companyInfo.social.instagram,
      color: "#e4405f",
      name: "Instagram",
    },
    {
      icon: LinkedIn,
      link: companyInfo.social.linkedin,
      color: "#0077b5",
      name: "LinkedIn",
    },
    {
      icon: Twitter,
      link: companyInfo.social.twitter,
      color: "#1da1f2",
      name: "Twitter",
    },
  ];

  const features = [
    {
      icon: SupportAgent,
      title: "24/7 Support",
      description: "Round the clock assistance",
    },
    {
      icon: Security,
      title: "Secure & Safe",
      description: "Your data is protected",
    },
    {
      icon: LocalShipping,
      title: "Quick Response",
      description: "Within 24 hours",
    },
    { icon: Star, title: "Expert Team", description: "Professional guidance" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        pt: { xs: 2, md: 4 },
        pb: { xs: 8, md: 6 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "0.9rem", md: "1.1rem" },
              }}
            >
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Methods Grid */}
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
          {contactMethods.map((method, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  onClick={() =>
                    method.link && window.open(method.link, "_blank")
                  }
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 12px 28px ${method.color}20`,
                      borderColor: method.color,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: method.gradient,
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3, flex: 1 }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar
                        sx={{
                          width: 70,
                          height: 70,
                          margin: "0 auto 16px",
                          background: method.gradient,
                          boxShadow: `0 8px 20px ${method.color}40`,
                        }}
                      >
                        <method.icon sx={{ fontSize: 32, color: "white" }} />
                      </Avatar>
                    </motion.div>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {method.title}
                    </Typography>
                    {method.details.map((detail, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      sx={{ mb: 1.5 }}
                    >
                      {method.description}
                    </Typography>
                    <Chip
                      label={method.action}
                      size="small"
                      sx={{
                        mt: 1,
                        background: method.gradient,
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Main Form and Info Section */}
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ color: "text.secondary" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#667eea",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email sx={{ color: "text.secondary" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#667eea",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Subject sx={{ color: "text.secondary" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#667eea",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ alignSelf: "flex-start", mt: 1.5 }}
                            >
                              <Message sx={{ color: "text.secondary" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#667eea",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          endIcon={<Send />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            fontSize: "1rem",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 20px rgba(102,126,234,0.4)",
                            },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <Zoom in={isSubmitted}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(255,255,255,0.95)",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          zIndex: 10,
                        }}
                      >
                        <CheckCircle
                          sx={{ fontSize: 64, color: "#10B981", mb: 2 }}
                        />
                        <Typography variant="h6">Message Sent!</Typography>
                        <Typography variant="body2" color="text.secondary">
                          We&apos;ll get back to you soon
                        </Typography>
                      </Box>
                    </Zoom>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Grid>

          {/* Info Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Stack spacing={3}>
                {/* Business Hours */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <AccessTime sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Business Hours
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    {businessHours.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" fontWeight={500}>
                          {item.day}
                        </Typography>
                        <Chip
                          label={item.hours}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderRadius: 2,
                            borderColor: "#e0e0e0",
                            color: "text.secondary",
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>

                {/* Map Location */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Map sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Our Location
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: 200,
                      borderRadius: 2,
                      overflow: "hidden",
                      mb: 2,
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address.full)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                    />
                  </Box>
                  <Button
                    variant="outlined"
                    startIcon={<Navigation />}
                    fullWidth
                    onClick={() =>
                      window.open(
                        `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`,
                        "_blank",
                      )
                    }
                    sx={{
                      borderRadius: 2,
                      borderColor: "#667eea",
                      color: "#667eea",
                      "&:hover": {
                        borderColor: "#764ba2",
                        background: "rgba(102,126,234,0.05)",
                      },
                    }}
                  >
                    Get Directions
                  </Button>
                </Paper>

                {/* Social Links */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Connect With Us
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Follow us on social media for updates and news
                  </Typography>
                  <Stack direction="row" spacing={1.5} justifyContent="center">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          component="a"
                          href={social.link}
                          target="_blank"
                          sx={{
                            bgcolor: `${social.color}10`,
                            color: social.color,
                            "&:hover": {
                              bgcolor: social.color,
                              color: "white",
                            },
                          }}
                        >
                          <social.icon />
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 4 }}>
              <Chip
                label="Why Choose Us"
                sx={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white",
                  px: 2,
                  py: 1,
                }}
              />
            </Divider>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                        }}
                      >
                        <feature.icon sx={{ fontSize: 30, color: "#667eea" }} />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        gutterBottom
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Slide direction="down" in={snackbar.open} mountOnEnter unmountOnExit>
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ borderRadius: 2 }}
          >
            {snackbar.message}
          </Alert>
        </Slide>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
