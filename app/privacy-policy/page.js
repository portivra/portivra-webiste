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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import {
  PrivacyTip,
  Security,
  DataUsage,
  Cookie,
  Email,
  LocationOn,
  VerifiedUser,
  Visibility,
  Settings,
  CheckCircle,
  ExpandMore,
  HelpOutline,
  GppGood,
  Storage,
  Share,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import { companyInfo } from "@/data/companyInfo";

const PrivacyPolicyPage = () => {
  const [lastUpdated, setLastUpdated] = useState("March 28, 2024");
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <PrivacyTip />,
      content: `${companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you consent to the data practices described in this policy.`,
      highlights: [
        "Data protection commitment",
        "Policy scope",
        "Consent requirement",
      ],
    },
    {
      id: "information-collect",
      title: "2. Information We Collect",
      icon: <DataUsage />,
      content: `We collect various types of information to provide and improve our services:

Personal Information:
• Name, email address, phone number
• Company details and business information
• PAN, GSTIN, and other tax identification numbers
• Address and location data
• Payment information (processed securely through Razorpay)

Usage Data:
• Browser type and version
• Pages visited and time spent
• Device information and IP address
• Referring website URLs

Cookies and Tracking Technologies:
• Session cookies for authentication
• Preference cookies for user settings
• Analytics cookies for performance tracking`,
      highlights: [
        "Personal information",
        "Usage data",
        "Cookies",
        "Payment data",
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: <Settings />,
      content: `We use the collected information for various purposes:
• To provide and maintain our services
• To process your transactions and manage your account
• To communicate with you about services, updates, and support
• To improve our website and services
• To comply with legal obligations
• To detect and prevent fraud
• To send marketing communications (with your consent)`,
      highlights: [
        "Service delivery",
        "Account management",
        "Communication",
        "Legal compliance",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Legal Basis for Processing",
      icon: <GppGood />,
      content: `We process your personal data based on:
• Your consent (for marketing communications)
• Performance of a contract (to provide services you requested)
• Legal obligations (to comply with tax and regulatory requirements)
• Legitimate interests (to improve our services and prevent fraud)`,
      highlights: [
        "Consent",
        "Contract performance",
        "Legal obligations",
        "Legitimate interests",
      ],
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing and Disclosure",
      icon: <Share />,
      content: `We may share your information with:
• Government authorities as required by law
• Third-party service providers (payment processors, cloud storage)
• Professional advisors (lawyers, accountants)
• Business partners (with your consent)
We do not sell your personal information to third parties.`,
      highlights: [
        "Legal compliance",
        "Service providers",
        "No data selling",
        "Professional advisors",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      icon: <Security />,
      content: `We implement appropriate technical and organizational security measures to protect your personal information:
• SSL/TLS encryption for data transmission
• Secure servers with firewalls
• Regular security audits and updates
• Access controls and authentication
• Employee training on data protection
• Incident response procedures

While we strive to protect your data, no method of transmission over the Internet is 100% secure.`,
      highlights: [
        "Encryption",
        "Secure servers",
        "Access controls",
        "Regular audits",
      ],
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      icon: <Storage />,
      content: `We retain your personal information for as long as necessary to:
• Provide you with our services
• Comply with legal obligations (tax records for 7+ years)
• Resolve disputes and enforce agreements
• Improve our services

When no longer needed, we securely delete or anonymize your information.`,
      highlights: [
        "Service duration",
        "Legal compliance",
        "Secure deletion",
        "Dispute resolution",
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Data Protection Rights",
      icon: <VerifiedUser />,
      content: `Under applicable data protection laws, you have the right to:
• Access: Request copies of your personal data
• Rectification: Correct inaccurate or incomplete data
• Erasure: Request deletion of your data (subject to legal obligations)
• Restrict: Limit processing of your data
• Portability: Receive your data in a structured format
• Object: Object to certain processing activities
• Withdraw Consent: Withdraw previously given consent

To exercise these rights, contact us at ${companyInfo.email.primary}.`,
      highlights: [
        "Access rights",
        "Correction rights",
        "Deletion rights",
        "Portability rights",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies and Tracking Technologies",
      icon: <Cookie />,
      content: `We use cookies and similar tracking technologies to:
• Remember your preferences
• Understand how you use our website
• Improve user experience
• Analyze website traffic

Types of cookies we use:
• Essential Cookies: Required for website functionality
• Preference Cookies: Remember your settings
• Analytics Cookies: Track usage patterns
• Marketing Cookies: Personalize advertisements

You can control cookies through your browser settings.`,
      highlights: [
        "Essential cookies",
        "Analytics cookies",
        "Preference cookies",
        "Browser controls",
      ],
    },
    {
      id: "third-party",
      title: "10. Third-Party Services",
      icon: <Share />,
      content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.

Third-party services we use:
• Razorpay (payment processing)
• Google Analytics (website analytics)
• Cloud hosting providers
• Email service providers`,
      highlights: [
        "External links",
        "Third-party policies",
        "Payment processors",
        "Analytics tools",
      ],
    },
    {
      id: "children-privacy",
      title: "11. Children's Privacy",
      icon: <Visibility />,
      content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.`,
      highlights: [
        "Age restriction",
        "No children's data",
        "Immediate deletion",
      ],
    },
    {
      id: "international",
      title: "12. International Data Transfers",
      icon: <LocationOn />,
      content: `Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable laws.`,
      highlights: [
        "Cross-border transfers",
        "Data safeguards",
        "Legal compliance",
      ],
    },
    {
      id: "policy-changes",
      title: "13. Changes to This Privacy Policy",
      icon: <UpdateIcon />,
      content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. For material changes, we will notify you via email or prominent notice on our website. Your continued use of our services after changes constitutes acceptance of the updated policy.`,
      highlights: [
        "Regular updates",
        "Material changes notice",
        "Continued use acceptance",
      ],
    },
    {
      id: "contact",
      title: "14. Contact Information",
      icon: <Email />,
      content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

${companyInfo.name}
Address: ${companyInfo.address.full}
Phone: ${companyInfo.phoneFormatted}
Email: ${companyInfo.email.primary}
Working Hours: ${companyInfo.workingHours.weekdays}

For data protection concerns, you may also contact our Data Protection Officer at ${companyInfo.email.primary}.`,
      highlights: [
        "Business hours",
        "Multiple contact methods",
        "DPO contact",
        "Physical address",
      ],
    },
  ];

  const dataTypes = [
    {
      type: "Personal Data",
      collected: true,
      purpose: "Service delivery, communication",
      retention: "7 years",
    },
    {
      type: "Payment Data",
      collected: true,
      purpose: "Transaction processing",
      retention: "7 years",
    },
    {
      type: "Usage Data",
      collected: true,
      purpose: "Analytics, improvements",
      retention: "2 years",
    },
    {
      type: "Cookies",
      collected: true,
      purpose: "User experience, tracking",
      retention: "30 days-2 years",
    },
    {
      type: "Location Data",
      collected: false,
      purpose: "Not collected",
      retention: "N/A",
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
              Privacy Policy
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
            <PrivacyTip sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
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
              Privacy Policy
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 2 }}
            >
              Your privacy matters to us. Learn how we collect, use, and protect
              your information
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
                id="privacy-content"
              >
                {/* Introduction */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    At {companyInfo.name}, we take your privacy seriously. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our website and
                    services. Please read this policy carefully.
                  </Typography>
                </Box>

                {/* Data Collection Table */}
                <Alert
                  severity="info"
                  sx={{
                    mb: 4,
                    borderRadius: 3,
                    background: "rgba(102,126,234,0.05)",
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Data Collection Summary
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <strong>Data Type</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Collected</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Purpose</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Retention</strong>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dataTypes.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>
                              {item.collected ? (
                                <CheckCircle
                                  sx={{ fontSize: 16, color: "#10B981" }}
                                />
                              ) : (
                                <CloseIcon
                                  sx={{ fontSize: 16, color: "#EF4444" }}
                                />
                              )}
                            </TableCell>
                            <TableCell>{item.purpose}</TableCell>
                            <TableCell>{item.retention}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Alert>

                {/* Sections */}
                {sections.map((section) => (
                  <Box
                    key={section.id}
                    id={section.id}
                    sx={{
                      mb: 3,
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
                  severity="success"
                  sx={{
                    mt: 4,
                    mb: 3,
                    borderRadius: 3,
                    background: "rgba(16,185,129,0.05)",
                  }}
                >
                  <Typography variant="body2">
                    By using our services, you acknowledge that you have read
                    and understood this Privacy Policy and agree to the
                    collection and use of your information as described.
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

// CloseIcon component
const CloseIcon = () => <span style={{ fontSize: "16px" }}>✕</span>;

// UpdateIcon component
const UpdateIcon = () => <Settings />;

export default PrivacyPolicyPage;
