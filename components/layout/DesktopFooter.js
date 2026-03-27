import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  AccessTime,
  Language,
} from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";
import { useEffect, useRef } from "react";
import Image from "next/image";

const DesktopFooter = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef(null);

  // Animated background patterns and floating elements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor(x, y, size, speedX, speedY, color, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.opacity = opacity;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const colors = ["#6366F1", "#EC4899", "#14B8A6", "#F97316", "#A855F7"];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.3 + 0.1;
        particles.push(
          new Particle(x, y, size, speedX, speedY, color, opacity),
        );
      }
    };

    const drawPatterns = () => {
      // Draw animated wave patterns
      ctx.save();
      ctx.globalAlpha = 0.03;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.5 + Math.sin(time + i) * 50);
        for (let x = 0; x < canvas.width; x += 50) {
          const y =
            canvas.height * 0.5 +
            Math.sin(x * 0.02 + time + i * 2) * 30 +
            Math.cos(x * 0.01 + time * 1.5) * 20;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - i * 0.03})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw floating circles
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const radius = 50 + Math.sin(time * 0.5 + i) * 20;
        const x = canvas.width * (0.1 + i * 0.1) + Math.sin(time + i) * 30;
        const y = canvas.height * 0.3 + Math.cos(time * 0.8 + i) * 40;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + 20, y + 20, radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(20, 184, 166, ${0.05})`;
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw patterns
      drawPatterns();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const footerSections = {
    services: [
      { label: "Company Registration", path: "/services/company-registration" },
      { label: "GST Filing", path: "/services/gst-filing" },
      { label: "PF & ESI", path: "/services/pf-esi" },
      { label: "Tax Filing", path: "/services/tax-filing" },
      { label: "Consultation", path: "/services/consultation" },
    ],
    quickLinks: [
      { label: "About Us", path: "/about" },
      { label: "Blogs", path: "/blogs" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
  };

  const socialIcons = [
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
    {
      icon: WhatsApp,
      link: `https://wa.me/${companyInfo.phone}`,
      color: "#25D366",
      name: "WhatsApp",
    },
  ];

  const contactDetails = [
    {
      icon: Phone,
      text: companyInfo.phoneFormatted,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: WhatsApp,
      text: companyInfo.phoneFormatted,
      link: `https://wa.me/${companyInfo.phone}`,
    },
    {
      icon: Email,
      text: companyInfo.email.primary,
      link: `mailto:${companyInfo.email.primary}`,
    },
    {
      icon: Email,
      text: companyInfo.email.secondary,
      link: `mailto:${companyInfo.email.secondary}`,
    },
    { icon: LocationOn, text: companyInfo.address.full, link: null },
    {
      icon: AccessTime,
      text: `${companyInfo.workingHours.weekdays} (Weekdays)`,
      link: null,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background:
          "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 50%, #1a1a2e 100%)",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
        overflow: "hidden",
      }}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Animated Gradient Orbs */}
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
            "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
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
            "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0) 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.1) 0%, rgba(20,184,166,0) 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/white-logo.png"
                width={200}
                height={144}
                alt="logo-white"
              />
              <Typography
                variant="body2"
                sx={{ mb: 2, opacity: 0.8, lineHeight: 1.6 }}
              >
                {companyInfo.description}
              </Typography>

              <Stack direction="row" spacing={1}>
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <IconButton
                      component="a"
                      href={social.link}
                      target="_blank"
                      aria-label={social.name}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.1)",
                        color: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: social.color,
                          transform: "translateY(-3px)",
                          boxShadow: `0 5px 15px ${social.color}40`,
                        },
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #6366F1, #EC4899)",
                    borderRadius: "2px",
                  },
                }}
              >
                Our Services
              </Typography>
              {footerSections.services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.path}
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        display: "block",
                        mb: 1.5,
                        opacity: 0.7,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                          color: "#a78bfa",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {service.label}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #6366F1, #EC4899)",
                    borderRadius: "2px",
                  },
                }}
              >
                Quick Links
              </Typography>
              {footerSections.quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.path}
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        display: "block",
                        mb: 1.5,
                        opacity: 0.7,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                          color: "#a78bfa",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Grid>

          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #6366F1, #EC4899)",
                    borderRadius: "2px",
                  },
                }}
              >
                Get In Touch
              </Typography>
              <Stack spacing={2}>
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {detail.link ? (
                      <Link
                        href={detail.link}
                        passHref
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              "& .contact-icon": {
                                transform: "scale(1.1)",
                                color: "#a78bfa",
                              },
                              "& .contact-text": {
                                color: "#a78bfa",
                              },
                            },
                          }}
                        >
                          <detail.icon
                            className="contact-icon"
                            sx={{
                              fontSize: 20,
                              opacity: 0.7,
                              transition: "all 0.3s ease",
                            }}
                          />
                          <Typography
                            className="contact-text"
                            variant="body2"
                            sx={{
                              opacity: 0.8,
                              transition: "all 0.3s ease",
                              wordBreak: "break-word",
                            }}
                          >
                            {detail.text}
                          </Typography>
                        </Box>
                      </Link>
                    ) : (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <detail.icon sx={{ fontSize: 20, opacity: 0.7 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.8,
                            wordBreak: "break-word",
                          }}
                        >
                          {detail.text}
                        </Typography>
                      </Box>
                    )}
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            bgcolor: "rgba(255,255,255,0.1)",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Copyright with animated gradient */}
        <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.6,
                background: "linear-gradient(90deg, #fff, #a78bfa, #fff)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradient 3s linear infinite",
                "@keyframes gradient": {
                  "0%": { backgroundPosition: "0% center" },
                  "100%": { backgroundPosition: "200% center" },
                },
              }}
            >
              © {currentYear} {companyInfo.name}. All rights reserved. |
              Designed & Develloped by Nexdev Software Solutions
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopFooter;
