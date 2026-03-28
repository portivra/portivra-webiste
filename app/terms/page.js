"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  Button,
  Chip,
  Stack,
  Breadcrumbs,
  Link as MuiLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Snackbar,
  Avatar,
} from "@mui/material";
import {
  ExpandMore,
  Gavel,
  Security,
  Payment,
  PrivacyTip,
  AccountBalance,
  Description,
  Warning,
  CheckCircle,
  Schedule,
  Phone,
  VerifiedUser,
  MonetizationOn,
  HelpOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";

const TermsPage = () => {
  const [lastUpdated, setLastUpdated] = useState("March 28, 2024");

  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <CheckCircle />,
      content: `By accessing and using ${companyInfo.name}'s website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services. These terms apply to all visitors, users, and others who access or use our services.`,
      highlights: [
        "Binding agreement",
        "Service eligibility",
        "Modification rights",
      ],
    },
    {
      id: "services",
      title: "2. Services Offered",
      icon: <Description />,
      content: `${companyInfo.name} provides professional services including but not limited to:
• Company Registration (Private Limited, LLP, OPC, Section 8)
• GST Registration and Filing
• PF & ESI Registration and Returns
• Income Tax Return Filing
• Business Consultation Services
• Tax Planning and Advisory
All services are provided by qualified professionals and subject to applicable laws and regulations.`,
      highlights: [
        "Professional services",
        "Qualified experts",
        "Legal compliance",
      ],
    },
    {
      id: "user-responsibilities",
      title: "3. User Responsibilities",
      icon: <VerifiedUser />,
      content: `As a user of our services, you agree to:
• Provide accurate, complete, and current information
• Maintain the confidentiality of your account credentials
• Promptly update any changes to your information
• Comply with all applicable laws and regulations
• Not misuse our services or interfere with their operation
• Be responsible for all activities under your account
• Notify us immediately of any unauthorized use`,
      highlights: [
        "Accurate information",
        "Account security",
        "Legal compliance",
      ],
    },
    {
      id: "payments",
      title: "4. Payments and Fees",
      icon: <Payment />,
      content: `All fees for services are clearly displayed on our platform. Payments are processed securely through Razorpay. By making a payment, you agree to:
• Pay all fees associated with your selected services
• Authorize us to charge your chosen payment method
• Understand that fees are non-refundable unless otherwise stated
• Be responsible for any applicable taxes
• Receive payment confirmations and receipts
Cancellation and refund policies vary by service type and will be communicated at the time of purchase.`,
      highlights: [
        "Secure payments",
        "Razorpay integration",
        "Non-refundable fees",
        "Tax applicable",
      ],
    },
    {
      id: "refund-policy",
      title: "5. Refund and Cancellation Policy",
      icon: <MonetizationOn />,
      content: `Our refund and cancellation policy is as follows:
• Consultation services: 100% refund if cancelled 24 hours before scheduled time
• Registration services: No refund after documents are filed with government authorities
• Filing services: Partial refund based on work completed
• Custom services: Refund determined on case-by-case basis
To request a refund, please contact our support team at ${companyInfo.email.primary} within 7 days of purchase.`,
      highlights: [
        "Consultation refund",
        "No refund after filing",
        "Partial refunds",
        "7-day window",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      icon: <Gavel />,
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of ${companyInfo.name} and protected by copyright laws. You may not:
• Reproduce, distribute, or modify any content without written permission
• Use our trademarks or branding without authorization
• Copy or reverse engineer any part of our platform
• Remove any copyright or proprietary notices`,
      highlights: [
        "Copyright protection",
        "Trademark rights",
        "No unauthorized use",
      ],
    },
    {
      id: "privacy",
      title: "7. Privacy and Data Protection",
      icon: <PrivacyTip />,
      content: `Your privacy is important to us. We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to such collection and processing. We implement appropriate security measures to protect your data and comply with applicable data protection laws.`,
      highlights: ["Data protection", "Privacy policy", "Security measures"],
    },
    {
      id: "liability",
      title: "8. Limitation of Liability",
      icon: <Warning />,
      content: `To the fullest extent permitted by law, ${companyInfo.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption, arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
      highlights: [
        "No indirect damages",
        "Limited liability",
        "Service-specific limits",
      ],
    },
    {
      id: "indemnification",
      title: "9. Indemnification",
      icon: <Security />,
      content: `You agree to indemnify and hold harmless ${companyInfo.name}, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising from:
• Your use of our services
• Violation of these terms
• Infringement of any third-party rights
• Any content you submit or transmit through our platform`,
      highlights: ["Legal protection", "Cost coverage", "Third-party claims"],
    },
    {
      id: "termination",
      title: "10. Termination",
      icon: <Schedule />,
      content: `We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users. Upon termination, your right to use the services will cease immediately.`,
      highlights: [
        "Immediate termination",
        "Violation consequences",
        "Service suspension",
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      icon: <AccountBalance />,
      content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in West Bengal, India.`,
      highlights: ["Indian law", "Jurisdiction", "West Bengal courts"],
    },
    {
      id: "changes",
      title: "12. Changes to Terms",
      icon: <UpdateIcon />,
      content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes acceptance of the modified terms. We will notify users of material changes via email or prominent notice on our website.`,
      highlights: [
        "Right to modify",
        "Notice of changes",
        "Continued acceptance",
      ],
    },
    {
      id: "contact",
      title: "13. Contact Information",
      icon: <Phone />,
      content: `If you have any questions about these Terms & Conditions, please contact us at:
${companyInfo.name}
Address: ${companyInfo.address.full}
Phone: ${companyInfo.phoneFormatted}
Email: ${companyInfo.email.primary}
Working Hours: ${companyInfo.workingHours.weekdays}`,
      highlights: [
        "Business hours",
        "Multiple contact methods",
        "Physical address",
      ],
    },
  ];

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              Terms & Conditions
            </Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 4,
              borderRadius: 4,
              background: "white",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            />
            <Gavel sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 2 }}
            >
              Please read these terms carefully before using our services
            </Typography>
            <Chip
              label={`Last Updated: ${lastUpdated}`}
              size="small"
              sx={{ background: "rgba(102,126,234,0.1)", color: "#667eea" }}
            />
          </Paper>
        </motion.div>

        <Grid container spacing={4}>
          {/* Table of Contents Sidebar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: "white",
                  position: "sticky",
                  top: 100,
                }}
              >
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Table of Contents
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={1}>
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      onClick={() => handleScrollToSection(section.id)}
                      startIcon={section.icon}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        color: "text.primary",
                        fontSize: "0.8rem",
                        py: 0.5,
                        "&:hover": {
                          color: "#667eea",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {section.title}
                    </Button>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: 9 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: 4,
                  background: "white",
                }}
                id="terms-content"
              >
                {/* Introduction */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Welcome to {companyInfo.name}. These Terms & Conditions
                    govern your use of our website and services. By accessing or
                    using our services, you agree to be bound by these terms.
                  </Typography>
                </Box>

                {/* Sections */}
                {sections.map((section, index) => (
                  <Box
                    key={section.id}
                    id={section.id}
                    sx={{
                      mb: 4,
                      scrollMarginTop: 100,
                    }}
                  >
                    <Accordion
                      expanded={expandedSection === section.id}
                      onChange={() =>
                        setExpandedSection(
                          expandedSection === section.id ? null : section.id,
                        )
                      }
                      sx={{
                        boxShadow: "none",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 2,
                        "&:before": { display: "none" },
                        mb: 2,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                          "&:hover": { background: "rgba(102,126,234,0.02)" },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
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
                            {section.icon}
                          </Avatar>
                          <Typography variant="h6" fontWeight={600}>
                            {section.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          sx={{ whiteSpace: "pre-line" }}
                        >
                          {section.content}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography
                          variant="subtitle2"
                          fontWeight={600}
                          gutterBottom
                        >
                          Key Points:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {section.highlights.map((highlight, i) => (
                            <Typography
                              component="li"
                              key={i}
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 0.5 }}
                            >
                              {highlight}
                            </Typography>
                          ))}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}

                {/* Acknowledgment Section */}
                <Alert
                  severity="info"
                  sx={{
                    mt: 4,
                    mb: 3,
                    borderRadius: 3,
                    background: "rgba(102,126,234,0.05)",
                  }}
                >
                  <Typography variant="body2">
                    By using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms &
                    Conditions.
                  </Typography>
                </Alert>

                {/* Accept Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 3,
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<HelpOutline />}
                    href="/contact"
                    sx={{ borderRadius: 3 }}
                  >
                    Have Questions?
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// UpdateIcon component
const UpdateIcon = () => <Schedule />;

export default TermsPage;
