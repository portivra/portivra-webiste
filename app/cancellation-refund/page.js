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
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Cancel,
  AccountBalance,
  Schedule,
  Gavel,
  Warning,
  HelpOutline,
  ExpandMore,
  VerifiedUser,
  MonetizationOn,
  Timer,
  CreditCard,
  AssignmentLate,
  Payment,
  DisplaySettingsOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";

const CancellationRefundPage = () => {
  const [lastUpdated, setLastUpdated] = useState("March 28, 2024");
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "overview",
      title: "1. Policy Overview",
      icon: <Gavel />,
      content: `At ${companyInfo.name}, we strive to provide the best possible service to our clients. This Cancellation and Refund Policy outlines the circumstances under which cancellations and refunds may be processed. By booking our services, you acknowledge and agree to the terms outlined in this policy.`,
      highlights: [
        "Clear terms",
        "Service commitment",
        "Client acknowledgment",
      ],
    },
    {
      id: "cancellation-policy",
      title: "2. Cancellation Policy",
      icon: <Cancel />,
      content: `Once a service is booked and payment is completed, the following cancellation terms apply:

• No Cancellation by Client: Once a service is booked and payment is successfully processed, no cancellation requests from the client will be accepted.
• Service Confirmation: Upon payment confirmation, our team begins processing your service request immediately.
• No Cooling-off Period: There is no cooling-off period or cancellation window after payment confirmation.
• Change of Mind: Change of mind or change in business plans does not qualify for cancellation.

Important: Please ensure you have reviewed the service details carefully before making payment.`,
      highlights: [
        "No client cancellations",
        "Immediate processing",
        "No cooling-off period",
        "Final sale",
      ],
    },
    {
      id: "admin-cancellation",
      title: "3. Admin-Initiated Cancellation",
      icon: <AssignmentLate />,
      content: `In certain circumstances, ${companyInfo.name} reserves the right to cancel a service booking. This may occur due to:

• Technical issues with the booking system
• Service unavailability
• Incomplete or incorrect information provided
• Legal or regulatory restrictions
• Force majeure events

When a cancellation is initiated by the admin, affected clients will be notified immediately via email and phone.`,
      highlights: [
        "Admin cancellation rights",
        "Notification requirement",
        "Service unavailability",
        "Technical issues",
      ],
    },
    {
      id: "refund-policy",
      title: "4. Refund Policy",
      icon: <MonetizationOn />,
      content: `Refunds are processed exclusively under the following condition:

Admin-Initiated Cancellation:
If ${companyInfo.name} cancels a service booking due to any reason mentioned in Section 3, a full refund will be processed.

Refund Process:
• Refund amount: 100% of the paid service fee
• Processing time: 7-10 working days
• Refund method: Original source of payment (credit card, debit card, UPI, net banking, etc.)
• No deductions: The full amount will be refunded without any deductions

No Other Refunds:
Except in the case of admin-initiated cancellation, no refunds will be issued under any circumstances.`,
      highlights: [
        "Admin cancellation only",
        "100% refund",
        "7-10 working days",
        "Original payment source",
        "No other refunds",
      ],
    },
    {
      id: "dispute-resolution",
      title: "5. Dispute Resolution and Special Cases",
      icon: <DisplaySettingsOutlined />,
      content: `We understand that exceptional circumstances may arise. For special cases and disputes:

• Each case will be reviewed on its individual merits
• Decisions are made at the discretion of ${companyInfo.name} management
• Factors considered include:
  - Nature of the service
  - Work already completed
  - Client history and relationship
  - Specific circumstances of the case

Dispute Process:
1. Submit a written complaint to ${companyInfo.email.primary}
2. Include booking reference, service details, and reason for dispute
3. Allow 5-7 working days for review
4. Our team will respond with the decision

All disputes are subject to discussion and final decision by the management.`,
      highlights: [
        "Case-by-case review",
        "Management discretion",
        "Written complaints",
        "5-7 day review",
        "Final decision binding",
      ],
    },
    {
      id: "refund-timeline",
      title: "6. Refund Processing Timeline",
      icon: <Timer />,
      content: `When a refund is approved (only in admin-initiated cancellations), follow this timeline:

• Day 1-2: Refund initiated and processed by our team
• Day 3-4: Refund sent to payment gateway/bank
• Day 5-7: Processing by payment gateway
• Day 7-10: Refund credited to original payment source

Note: The actual time may vary depending on your bank or payment service provider. Some banks may take additional 2-3 days to reflect the refund in your account.`,
      highlights: [
        "7-10 working days total",
        "Payment gateway processing",
        "Bank processing time",
        "Refund initiation",
      ],
    },
    {
      id: "payment-methods",
      title: "7. Payment Methods and Refund Process",
      icon: <CreditCard />,
      content: `Refunds are processed to the original source of payment based on the payment method used:

Credit/Debit Cards:
• Refund processed to the same card
• Appears in statement within 7-10 working days

UPI (Google Pay, PhonePe, etc.):
• Refund credited to the same UPI ID
• Immediate reflection in some apps, 2-3 days in others

Net Banking:
• Refund processed to the same bank account
• Takes 7-10 working days to reflect

Razorpay Wallet:
• Refund credited to Razorpay wallet
• 2-3 working days for processing

Important: Please ensure the original payment source is active to receive refunds.`,
      highlights: [
        "Original payment source",
        "Card refunds",
        "UPI refunds",
        "Net banking refunds",
        "Wallet refunds",
      ],
    },
    {
      id: "non-refundable",
      title: "8. Non-Refundable Situations",
      icon: <Warning />,
      content: `The following situations do NOT qualify for any refund:

• Change of mind after payment
• Delay in providing required documents
• Incomplete or incorrect information provided by client
• Government processing delays
• Service already completed or partially completed
• Client not responding to follow-up communications
• Technical issues from client's end
• Failure to meet eligibility criteria for services

We strongly recommend reviewing all service requirements before making payment.`,
      highlights: [
        "No refund for change of mind",
        "No refund for delays",
        "No refund for incomplete info",
        "No refund after service start",
      ],
    },
    {
      id: "chargebacks",
      title: "9. Chargeback Policy",
      icon: <AccountBalance />,
      content: `Disputing a transaction through your bank or payment provider (chargeback) without first contacting ${companyInfo.name}:

• May result in permanent account suspension
• Legal action may be taken for fraudulent chargebacks
• Additional fees may apply for chargeback processing
• All chargebacks are disputed with proof of service delivery

We encourage clients to contact us first to resolve any concerns before initiating chargebacks.`,
      highlights: [
        "Contact us first",
        "Account suspension risk",
        "Legal action",
        "Chargeback fees",
      ],
    },
    {
      id: "contact",
      title: "10. Contact Information",
      icon: <HelpOutline />,
      content: `For questions about this policy or to discuss special cases, please contact us:

${companyInfo.name}
Address: ${companyInfo.address.full}
Phone: ${companyInfo.phoneFormatted}
Email: ${companyInfo.email.primary}
Working Hours: ${companyInfo.workingHours.weekdays}

For Dispute Submission:
Email disputes to: ${companyInfo.email.primary}
Subject: "Dispute - [Booking Reference]"

Our team will acknowledge receipt within 24 hours and provide a resolution within 5-7 working days.`,
      highlights: [
        "Multiple contact methods",
        "Dispute email format",
        "24-hour acknowledgment",
        "5-7 day resolution",
      ],
    },
  ];

  const refundTimeline = [
    {
      stage: "Admin Cancellation Initiated",
      duration: "Day 1",
      description: "Service cancelled by admin, refund process starts",
    },
    {
      stage: "Refund Processed by Portivra",
      duration: "Day 2",
      description: "Refund request sent to payment gateway",
    },
    {
      stage: "Payment Gateway Processing",
      duration: "Day 3-4",
      description: "Payment gateway processes the refund",
    },
    {
      stage: "Bank Processing",
      duration: "Day 5-7",
      description: "Your bank processes the refund",
    },
    {
      stage: "Refund Credited",
      duration: "Day 7-10",
      description: "Refund appears in your account",
    },
  ];

  const refundMethods = [
    {
      method: "Credit/Debit Card",
      time: "7-10 days",
      process: "Refund to same card",
    },
    {
      method: "UPI (GPay, PhonePe, etc.)",
      time: "2-5 days",
      process: "Refund to same UPI ID",
    },
    {
      method: "Net Banking",
      time: "7-10 days",
      process: "Refund to bank account",
    },
    {
      method: "Razorpay Wallet",
      time: "2-3 days",
      process: "Refund to wallet",
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
              Cancellation & Refund Policy
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
            <Cancel sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
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
              Cancellation & Refund Policy
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 2 }}
            >
              Understand our policies regarding cancellations, refunds, and
              dispute resolution
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
                id="refund-content"
              >
                {/* Key Policy Summary Cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        background:
                          "linear-gradient(135deg, #FFF5E6 0%, #FFF0E0 100%)",
                      }}
                    >
                      <CardContent>
                        <Cancel
                          sx={{ fontSize: 32, color: "#F97316", mb: 1 }}
                        />
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          No Client Cancellation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Once booked and paid, no cancellation by client is
                          permitted
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        background:
                          "linear-gradient(135deg, #E6F7E6 0%, #E0F0E0 100%)",
                      }}
                    >
                      <CardContent>
                        <VerifiedUser
                          sx={{ fontSize: 32, color: "#10B981", mb: 1 }}
                        />
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          Admin Cancellation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Full refund if cancelled by admin
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        background:
                          "linear-gradient(135deg, #E6F0FF 0%, #E0E8FF 100%)",
                      }}
                    >
                      <CardContent>
                        <Timer sx={{ fontSize: 32, color: "#3B82F6", mb: 1 }} />
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          7-10 Days Refund
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Full refund to original payment source
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                {/* Refund Timeline */}
                <Alert
                  severity="info"
                  sx={{
                    mb: 4,
                    borderRadius: 3,
                    background: "rgba(102,126,234,0.05)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    gutterBottom
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Schedule /> Refund Processing Timeline
                  </Typography>
                  <Timeline position="right" sx={{ mt: 2 }}>
                    {refundTimeline.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary">
                          {item.duration}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary" />
                          {index < refundTimeline.length - 1 && (
                            <TimelineConnector />
                          )}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography variant="body2" fontWeight={600}>
                            {item.stage}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Alert>

                {/* Refund Methods Table */}
                <Alert
                  severity="success"
                  sx={{
                    mb: 4,
                    borderRadius: 3,
                    background: "rgba(16,185,129,0.05)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    gutterBottom
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Payment /> Refund Methods and Timeframes
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <strong>Payment Method</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Refund Timeframe</strong>
                          </TableCell>
                          <TableCell>
                            <strong>Process</strong>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {refundMethods.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.method}</TableCell>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>{item.process}</TableCell>
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

                {/* Important Notice */}
                <Alert
                  severity="warning"
                  sx={{
                    mt: 4,
                    mb: 3,
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="body2">
                    <strong>Important:</strong> By making a payment and booking
                    our services, you confirm that you have read, understood,
                    and agree to this Cancellation and Refund Policy. No refunds
                    will be issued for client-initiated cancellations. All
                    disputes are subject to discussion and final decision by the
                    management.
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

export default CancellationRefundPage;
