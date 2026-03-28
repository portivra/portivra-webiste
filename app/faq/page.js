"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Paper,
  Tabs,
  Tab,
  Stack,
  Button,
  Card,
  CardContent,
  Avatar,
  Divider,
  Fade,
  Breadcrumbs,
  Link as MuiLink,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Search,
  ExpandMore,
  HelpOutline,
  Business,
  Receipt,
  AccountBalance,
  TrendingUp,
  SupportAgent,
  Email,
  Phone,
  WhatsApp,
  CheckCircle,
  School,
  Lightbulb,
  Star,
  ArrowForward,
  ChevronRight,
  QuestionAnswer,
  ThumbUp,
  ThumbDown,
  BookmarkBorder,
  Bookmark,
  ContentCopy,
  Check,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/data/faq";
import { companyInfo } from "@/data/companyInfo";

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const searchInputRef = useRef(null);

  // Get unique categories from FAQs
  const categories = [
    {
      id: "all",
      label: "All Questions",
      icon: <HelpOutline />,
      count: faqs.length,
    },
    ...Object.entries(
      faqs.reduce((acc, faq) => {
        acc[faq.category] = (acc[faq.category] || 0) + 1;
        return acc;
      }, {}),
    ).map(([name, count]) => ({
      id: name.toLowerCase().replace(/\s+/g, "-"),
      label: name,
      icon: getCategoryIcon(name),
      count,
    })),
  ];

  // Get icon for category
  function getCategoryIcon(categoryName) {
    const icons = {
      "Company Registration": <Business />,
      "GST Services": <Receipt />,
      "PF & ESI": <AccountBalance />,
      "Tax Filing": <TrendingUp />,
      Consultation: <SupportAgent />,
    };
    return icons[categoryName] || <HelpOutline />;
  }

  // Filter FAQs based on category and search
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" ||
      faq.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle accordion change
  const handleAccordionChange = (faqId) => (event, isExpanded) => {
    setExpandedId(isExpanded ? faqId : null);
  };

  // Handle helpful feedback
  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulFeedback({
      ...helpfulFeedback,
      [faqId]: isHelpful,
    });
  };

  // Handle copy question
  const handleCopyQuestion = (question) => {
    navigator.clipboard.writeText(question);
    setCopiedId(question);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Scroll to search on mobile
  const handleSearchFocus = () => {
    if (window.innerWidth < 960) {
      setTimeout(() => {
        searchInputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  // Popular FAQs (most viewed/helpful)
  const popularFaqs = faqs.filter((faq) => faq.popular).slice(0, 4);

  // Contact options
  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      detail: companyInfo.phoneFormatted,
      link: `tel:${companyInfo.phone}`,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
    {
      icon: WhatsApp,
      title: "WhatsApp",
      detail: companyInfo.phoneFormatted,
      link: `https://wa.me/${companyInfo.phone}`,
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    },
    {
      icon: Email,
      title: "Email Us",
      detail: companyInfo.email.primary,
      link: `mailto:${companyInfo.email.primary}`,
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    },
    {
      icon: SupportAgent,
      title: "Live Chat",
      detail: "Available 9 AM - 7 PM",
      link: "#",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        pt: { xs: 2, md: 4 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs sx={{ mb: 3, color: "text.secondary" }}>
            <MuiLink href="/" underline="hover" color="inherit">
              Home
            </MuiLink>
            <Typography color="primary.main" fontWeight={600}>
              FAQ
            </Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
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
              Frequently Asked Questions
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
              Find answers to common questions about our services, processes,
              and more
            </Typography>
          </Box>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 4,
              borderRadius: 4,
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <TextField
              inputRef={searchInputRef}
              fullWidth
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <Chip
                      label={`${filteredFaqs.length} results`}
                      size="small"
                      sx={{
                        background: "rgba(102,126,234,0.1)",
                        color: "#667eea",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  "&:hover fieldset": {
                    borderColor: "#667eea",
                  },
                },
              }}
            />
          </Paper>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={{ mb: 4, overflowX: "auto", whiteSpace: "nowrap", pb: 1 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "inline-flex", width: "100%" }}
            >
              {categories.map((category) => (
                <Chip
                  key={category.id}
                  icon={category.icon}
                  label={`${category.label} (${category.count})`}
                  onClick={() => setSelectedCategory(category.id)}
                  sx={{
                    background:
                      selectedCategory === category.id
                        ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : "white",
                    color:
                      selectedCategory === category.id
                        ? "white"
                        : "text.primary",
                    border:
                      selectedCategory === category.id
                        ? "none"
                        : "1px solid rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow:
                        selectedCategory === category.id
                          ? "0 4px 12px rgba(102,126,234,0.4)"
                          : "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Main Content - FAQs */}
          <Grid size={{ xs: 12, md: 8 }}>
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div
                  key={selectedCategory + searchQuery}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 4,
                      background: "white",
                      overflow: "hidden",
                    }}
                  >
                    {filteredFaqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Accordion
                          expanded={expandedId === faq.id}
                          onChange={handleAccordionChange(faq.id)}
                          sx={{
                            boxShadow: "none",
                            "&:before": { display: "none" },
                            borderBottom:
                              index < filteredFaqs.length - 1
                                ? "1px solid rgba(0,0,0,0.08)"
                                : "none",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMore />}
                            sx={{
                              "&:hover": {
                                background: "rgba(102,126,234,0.02)",
                              },
                              borderRadius:
                                expandedId === faq.id
                                  ? "12px 12px 0 0"
                                  : "12px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                width: "100%",
                                pr: 2,
                              }}
                            >
                              <Avatar
                                sx={{
                                  width: 36,
                                  height: 36,
                                  background:
                                    "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
                                  color: "#667eea",
                                }}
                              >
                                <QuestionAnswer sx={{ fontSize: 18 }} />
                              </Avatar>
                              <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                sx={{ flex: 1 }}
                              >
                                {faq.question}
                              </Typography>
                              <Tooltip title="Copy question">
                                <IconButton
                                  size="small"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopyQuestion(faq.question);
                                  }}
                                  sx={{
                                    opacity: 0.6,
                                    "&:hover": { opacity: 1 },
                                  }}
                                >
                                  {copiedId === faq.question ? (
                                    <Check
                                      sx={{ fontSize: 16, color: "#10B981" }}
                                    />
                                  ) : (
                                    <ContentCopy sx={{ fontSize: 16 }} />
                                  )}
                                </IconButton>
                              </Tooltip>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 2 }}
                            >
                              {faq.answer}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 2,
                              }}
                            >
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Was this helpful?
                                </Typography>
                                <Button
                                  size="small"
                                  startIcon={<ThumbUp />}
                                  onClick={() => handleHelpful(faq.id, true)}
                                  sx={{
                                    fontSize: "0.7rem",
                                    color:
                                      helpfulFeedback[faq.id] === true
                                        ? "#10B981"
                                        : "text.secondary",
                                  }}
                                >
                                  Yes
                                </Button>
                                <Button
                                  size="small"
                                  startIcon={<ThumbDown />}
                                  onClick={() => handleHelpful(faq.id, false)}
                                  sx={{
                                    fontSize: "0.7rem",
                                    color:
                                      helpfulFeedback[faq.id] === false
                                        ? "#EF4444"
                                        : "text.secondary",
                                  }}
                                >
                                  No
                                </Button>
                              </Box>
                              <Chip
                                label={faq.category}
                                size="small"
                                sx={{
                                  background: "rgba(102,126,234,0.08)",
                                  color: "#667eea",
                                }}
                              />
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      </motion.div>
                    ))}
                  </Paper>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 6,
                      borderRadius: 4,
                      background: "white",
                      textAlign: "center",
                    }}
                  >
                    <HelpOutline
                      sx={{
                        fontSize: 64,
                        color: "text.secondary",
                        mb: 2,
                        opacity: 0.5,
                      }}
                    />
                    <Typography variant="h6" gutterBottom>
                      No questions found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Try adjusting your search or filter to find what
                      you&apos;re looking for.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      sx={{ mt: 2, borderRadius: 3 }}
                    >
                      Clear Filters
                    </Button>
                  </Paper>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  mt: 4,
                  p: 4,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Still have questions?
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Can&apos;t find the answer you&apos;re looking for? Our
                  support team is here to help.
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  href="/contact"
                  sx={{
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                  }}
                >
                  Contact Support
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {/* Popular FAQs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: "white",
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
                    <Star sx={{ color: "#F97316" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Popular Questions
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    {popularFaqs.map((faq) => (
                      <Box key={faq.id}>
                        <Button
                          fullWidth
                          onClick={() => {
                            setExpandedId(faq.id);
                            setSelectedCategory("all");
                            setSearchQuery("");
                          }}
                          sx={{
                            justifyContent: "flex-start",
                            textAlign: "left",
                            textTransform: "none",
                            color: "text.primary",
                            py: 1,
                            px: 0,
                            "&:hover": {
                              color: "#667eea",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          <Typography variant="body2" fontWeight={500}>
                            {faq.question}
                          </Typography>
                        </Button>
                        {faq.id !== popularFaqs[popularFaqs.length - 1].id && (
                          <Divider sx={{ mt: 1 }} />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Quick Contact
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                    Get immediate assistance from our support team
                  </Typography>
                  <Stack spacing={2}>
                    {contactOptions.map((option, index) => (
                      <Button
                        key={index}
                        component="a"
                        href={option.link}
                        target={option.link !== "#" ? "_blank" : undefined}
                        startIcon={<option.icon />}
                        sx={{
                          justifyContent: "flex-start",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: 3,
                          py: 1,
                          "&:hover": {
                            background: "rgba(255,255,255,0.1)",
                            borderColor: "white",
                          },
                        }}
                      >
                        <Box sx={{ textAlign: "left" }}>
                          <Typography variant="body2" fontWeight={600}>
                            {option.title}
                          </Typography>
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            {option.detail}
                          </Typography>
                        </Box>
                      </Button>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Helpful Resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: "white",
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
                    <School sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Helpful Resources
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    <Link href="/blogs" style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(102,126,234,0.05)",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        <ChevronRight sx={{ fontSize: 16, color: "#667eea" }} />
                        <Typography variant="body2">Read our Blog</Typography>
                      </Box>
                    </Link>
                    <Link href="/services" style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(102,126,234,0.05)",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        <ChevronRight sx={{ fontSize: 16, color: "#667eea" }} />
                        <Typography variant="body2">
                          Explore Our Services
                        </Typography>
                      </Box>
                    </Link>
                    <Link href="/guides" style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(102,126,234,0.05)",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        <ChevronRight sx={{ fontSize: 16, color: "#667eea" }} />
                        <Typography variant="body2">Download Guides</Typography>
                      </Box>
                    </Link>
                    <Link href="/webinars" style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(102,126,234,0.05)",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        <ChevronRight sx={{ fontSize: 16, color: "#667eea" }} />
                        <Typography variant="body2">Watch Webinars</Typography>
                      </Box>
                    </Link>
                  </Stack>
                </Paper>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
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
                  <Lightbulb sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Stay Updated
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Get the latest FAQs and updates directly in your inbox
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    size="small"
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      borderRadius: 3,
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                    }}
                  >
                    Subscribe
                  </Button>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQPage;
