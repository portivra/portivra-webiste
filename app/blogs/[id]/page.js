"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  IconButton,
  Stack,
  Divider,
  TextField,
  Avatar,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Alert,
  Collapse,
  Skeleton,
  Tooltip,
} from "@mui/material";
import {
  ArrowBack,
  Share,
  BookmarkBorder,
  Bookmark,
  ThumbUp,
  ThumbUpAltOutlined,
  CalendarToday,
  Person,
  Visibility,
  AccessTime,
  Comment,
  Reply,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  ContentCopy,
  CheckCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
  FormatQuote,
  LocalOffer,
  TrendingUp,
  MenuBook,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

// Mock comments data
const mockComments = [
  {
    id: 1,
    name: "Rajesh Sharma",
    email: "rajesh@example.com",
    avatar: "/avatars/rajesh.jpg",
    date: "2024-01-15",
    content:
      "This is an excellent article! Very helpful for understanding company registration process. Thank you for sharing such detailed information.",
    likes: 12,
    replies: [
      {
        id: 101,
        name: "Kausik Maity",
        email: "kausik@portivra.com",
        avatar: "/avatars/kausik.jpg",
        date: "2024-01-16",
        content:
          "Thank you Rajesh! Glad you found it helpful. Let us know if you have any specific questions.",
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    avatar: "/avatars/priya.jpg",
    date: "2024-01-14",
    content:
      "Great insights on GST filing. The step-by-step guide is very useful for beginners. Would love to see more such content.",
    likes: 8,
    replies: [],
  },
];

const BlogDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.id;
  console.log(slug);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [replyingTo, setReplyingTo] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find blog by slug
  useEffect(() => {
    if (slug) {
      const foundBlog = blogs.find((b) => b.slug === slug);
      setBlog(foundBlog);
      setLoading(false);
    }
  }, [slug]);

  // Get related posts (same category)
  const relatedPosts = blog
    ? blogs
        .filter((b) => b.category === blog.category && b.id !== blog.id)
        .slice(0, 3)
    : [];

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  // Handle bookmark
  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  // Handle like
  const handleLike = () => {
    setLiked(!liked);
  };

  // Handle share
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  // Handle copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Handle comment submit
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      const comment = {
        id: Date.now(),
        name: newComment.name,
        email: newComment.email,
        avatar: "/avatars/default.jpg",
        date: new Date().toISOString(),
        content: newComment.content,
        likes: 0,
        replies: [],
      };

      if (replyingTo) {
        setComments(
          comments.map((comment) =>
            comment.id === replyingTo.id
              ? {
                  ...comment,
                  replies: [
                    ...comment.replies,
                    { ...comment, id: Date.now(), replyTo: replyingTo.name },
                  ],
                }
              : comment,
          ),
        );
        setReplyingTo(null);
      } else {
        setComments([comment, ...comments]);
      }

      setNewComment({ name: "", email: "", content: "" });
    }
  };

  // Table of Contents
  const tableOfContents = [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "key-benefits", title: "Key Benefits", level: 2 },
    { id: "process", title: "Step-by-Step Process", level: 2 },
    { id: "documents-required", title: "Documents Required", level: 2 },
    { id: "common-challenges", title: "Common Challenges", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ];

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Skeleton
            variant="rounded"
            height={400}
            sx={{ borderRadius: 4, mb: 4 }}
          />
          <Skeleton variant="text" height={60} width="80%" sx={{ mb: 2 }} />
          <Skeleton variant="text" height={30} width="60%" sx={{ mb: 4 }} />
          <Skeleton variant="rounded" height={200} sx={{ mb: 2 }} />
          <Skeleton variant="rounded" height={200} sx={{ mb: 2 }} />
        </Container>
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h4" gutterBottom>
              Blog Post Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              The article you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </Typography>
            <Button variant="contained" onClick={() => router.push("/blogs")}>
              Back to Blogs
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        pt: { xs: 2, md: 4 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
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
            <MuiLink href="/blogs" underline="hover" color="inherit">
              Blogs
            </MuiLink>
            <Typography color="primary.main" fontWeight={600}>
              {blog.title}
            </Typography>
          </Breadcrumbs>
        </motion.div>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                startIcon={<ArrowBack />}
                onClick={() => router.back()}
                sx={{ mb: 3, color: "text.secondary" }}
              >
                Back
              </Button>
            </motion.div>

            {/* Blog Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "white",
                  mb: 4,
                }}
              >
                {/* Featured Image */}
                <Box
                  sx={{ position: "relative", height: { xs: 250, md: 400 } }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={blog.category}
                      size="small"
                      sx={{
                        background: "white",
                        color: "#667eea",
                        fontWeight: 600,
                      }}
                    />
                    {blog.popular && (
                      <Chip
                        label="Popular"
                        size="small"
                        icon={<TrendingUp sx={{ fontSize: 14 }} />}
                        sx={{
                          background:
                            "linear-gradient(135deg, #F97316, #EF4444)",
                          color: "white",
                        }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Blog Content */}
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>
                    {blog.title}
                  </Typography>

                  {/* Author Info */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    sx={{ mb: 3 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        src={blog.authorImage}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box>
                        <Typography variant="body2" fontWeight={600}>
                          {blog.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Author
                        </Typography>
                      </Box>
                    </Stack>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", sm: "block" } }}
                    />
                    <Stack direction="row" spacing={2}>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <CalendarToday
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(blog.date)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <AccessTime
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {blog.readTime}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Visibility
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {blog.views} views
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                    <Tooltip title={liked ? "Unlike" : "Like"}>
                      <Button
                        variant={liked ? "contained" : "outlined"}
                        startIcon={liked ? <ThumbUp /> : <ThumbUpAltOutlined />}
                        onClick={handleLike}
                        sx={{
                          borderRadius: 3,
                          background: liked
                            ? "linear-gradient(135deg, #667eea, #764ba2)"
                            : "transparent",
                        }}
                      >
                        {liked ? "Liked" : "Like"}
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={bookmarked ? "Remove Bookmark" : "Bookmark"}
                    >
                      <IconButton
                        onClick={handleBookmark}
                        sx={{ borderRadius: 2 }}
                      >
                        {bookmarked ? (
                          <Bookmark sx={{ color: "#667eea" }} />
                        ) : (
                          <BookmarkBorder />
                        )}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share">
                      <IconButton
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        sx={{ borderRadius: 2 }}
                      >
                        <Share />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Link">
                      <IconButton
                        onClick={handleCopyLink}
                        sx={{ borderRadius: 2 }}
                      >
                        {copied ? (
                          <CheckCircle sx={{ color: "#10B981" }} />
                        ) : (
                          <ContentCopy />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Stack>

                  {/* Share Menu */}
                  <Collapse in={showShareMenu}>
                    <Paper
                      sx={{
                        p: 2,
                        mb: 3,
                        borderRadius: 3,
                        background: "rgba(0,0,0,0.02)",
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Button
                        startIcon={<Facebook />}
                        onClick={() => handleShare("facebook")}
                        sx={{ color: "#1877f2" }}
                      >
                        Facebook
                      </Button>
                      <Button
                        startIcon={<Twitter />}
                        onClick={() => handleShare("twitter")}
                        sx={{ color: "#1da1f2" }}
                      >
                        Twitter
                      </Button>
                      <Button
                        startIcon={<LinkedIn />}
                        onClick={() => handleShare("linkedin")}
                        sx={{ color: "#0077b5" }}
                      >
                        LinkedIn
                      </Button>
                      <Button
                        startIcon={<WhatsApp />}
                        onClick={() => handleShare("whatsapp")}
                        sx={{ color: "#25D366" }}
                      >
                        WhatsApp
                      </Button>
                    </Paper>
                  </Collapse>

                  {/* Blog Content */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      id="introduction"
                    >
                      Introduction
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ mt: 3 }}
                      id="key-benefits"
                    >
                      Key Benefits
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>

                    <Box
                      sx={{
                        background:
                          "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)",
                        p: 3,
                        borderRadius: 3,
                        my: 3,
                        position: "relative",
                      }}
                    >
                      <FormatQuote
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          fontSize: 48,
                          color: "rgba(102,126,234,0.2)",
                        }}
                      />
                      <Typography
                        variant="body1"
                        fontStyle="italic"
                        sx={{ mb: 1 }}
                      >
                        The key to successful business compliance is staying
                        informed and proactive. Regular updates and professional
                        guidance can save both time and money.
                      </Typography>
                      <Typography
                        variant="caption"
                        color="primary.main"
                        fontWeight={600}
                      >
                        - Expert Insight
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ mt: 3 }}
                      id="process"
                    >
                      Step-by-Step Process
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ mt: 3 }}
                      id="documents-required"
                    >
                      Documents Required
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ mt: 3 }}
                      id="common-challenges"
                    >
                      Common Challenges
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur.
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{ mt: 3 }}
                      id="conclusion"
                    >
                      Conclusion
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </Typography>
                  </Box>

                  {/* Tags */}
                  <Box sx={{ mb: 4 }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <LocalOffer
                        sx={{ fontSize: 20, color: "text.secondary" }}
                      />
                      <Typography variant="subtitle2" fontWeight={600}>
                        Tags:
                      </Typography>
                    </Stack>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {blog.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ background: "rgba(102,126,234,0.08)" }}
                          onClick={() => router.push(`/blogs?tag=${tag}`)}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  {/* Comments Section */}
                  <Box>
                    <Button
                      fullWidth
                      onClick={() => setShowComments(!showComments)}
                      sx={{
                        justifyContent: "space-between",
                        py: 2,
                        borderRadius: 3,
                        background: "rgba(102,126,234,0.05)",
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Comment />
                        <Typography variant="h6" fontWeight={600}>
                          Comments ({comments.length})
                        </Typography>
                      </Box>
                      {showComments ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </Button>

                    <Collapse in={showComments}>
                      {/* Comment Form */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          background: "rgba(0,0,0,0.02)",
                          mb: 3,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          gutterBottom
                        >
                          {replyingTo
                            ? `Replying to ${replyingTo.name}`
                            : "Leave a Comment"}
                        </Typography>
                        {replyingTo && (
                          <Button
                            size="small"
                            onClick={() => setReplyingTo(null)}
                            sx={{ mb: 2 }}
                          >
                            Cancel Reply
                          </Button>
                        )}
                        <form onSubmit={handleCommentSubmit}>
                          <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                              <TextField
                                fullWidth
                                label="Name"
                                size="small"
                                value={newComment.name}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    name: e.target.value,
                                  })
                                }
                                required
                              />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                              <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                size="small"
                                value={newComment.email}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                              <TextField
                                fullWidth
                                label="Your Comment"
                                multiline
                                rows={3}
                                size="small"
                                value={newComment.content}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    content: e.target.value,
                                  })
                                }
                                required
                              />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                              <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                  background:
                                    "linear-gradient(135deg, #667eea, #764ba2)",
                                  borderRadius: 3,
                                }}
                              >
                                Post Comment
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Paper>

                      {/* Comments List */}
                      <Stack spacing={3}>
                        {comments.map((comment) => (
                          <Paper
                            key={comment.id}
                            elevation={0}
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              background: "white",
                            }}
                          >
                            <Stack direction="row" spacing={2}>
                              <Avatar
                                src={comment.avatar}
                                sx={{ width: 48, height: 48 }}
                              />
                              <Box sx={{ flex: 1 }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 1,
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                  >
                                    {comment.name}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    {formatDate(comment.date)}
                                  </Typography>
                                </Box>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mb: 2 }}
                                >
                                  {comment.content}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                  <Button
                                    size="small"
                                    startIcon={
                                      <ThumbUpAltOutlined
                                        sx={{ fontSize: 14 }}
                                      />
                                    }
                                    sx={{ fontSize: "0.7rem" }}
                                  >
                                    {comment.likes} Likes
                                  </Button>
                                  <Button
                                    size="small"
                                    startIcon={<Reply sx={{ fontSize: 14 }} />}
                                    onClick={() => setReplyingTo(comment)}
                                    sx={{ fontSize: "0.7rem" }}
                                  >
                                    Reply
                                  </Button>
                                </Stack>

                                {/* Replies */}
                                {comment.replies.length > 0 && (
                                  <Box
                                    sx={{
                                      mt: 2,
                                      pl: { xs: 2, sm: 4 },
                                      borderLeft:
                                        "2px solid rgba(102,126,234,0.2)",
                                    }}
                                  >
                                    {comment.replies.map((reply) => (
                                      <Box key={reply.id} sx={{ mt: 2 }}>
                                        <Stack direction="row" spacing={2}>
                                          <Avatar
                                            src={reply.avatar}
                                            sx={{ width: 36, height: 36 }}
                                          />
                                          <Box sx={{ flex: 1 }}>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 0.5,
                                              }}
                                            >
                                              <Typography
                                                variant="body2"
                                                fontWeight={600}
                                              >
                                                {reply.name}
                                              </Typography>
                                              <Typography
                                                variant="caption"
                                                color="text.secondary"
                                              >
                                                {formatDate(reply.date)}
                                              </Typography>
                                            </Box>
                                            <Typography
                                              variant="body2"
                                              color="text.secondary"
                                            >
                                              {reply.content}
                                            </Typography>
                                          </Box>
                                        </Stack>
                                      </Box>
                                    ))}
                                  </Box>
                                )}
                              </Box>
                            </Stack>
                          </Paper>
                        ))}
                      </Stack>
                    </Collapse>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <MenuBook sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Table of Contents
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {tableOfContents.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            pl: item.level === 2 ? 2 : 0,
                            color: "text.secondary",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "#667eea",
                              pl: item.level === 2 ? 2.5 : 0.5,
                            },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Related Posts */}
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
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Related Posts
                  </Typography>
                  <Stack spacing={2}>
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blogs/${post.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Box
                            sx={{
                              width: 80,
                              height: 60,
                              borderRadius: 2,
                              overflow: "hidden",
                              position: "relative",
                              flexShrink: 0,
                            }}
                          >
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </Box>
                          <Box>
                            <Typography
                              variant="body2"
                              fontWeight={600}
                              sx={{ mb: 0.5 }}
                            >
                              {post.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {formatDate(post.date)}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Newsletter */}
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
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Subscribe for Updates
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                    Get the latest articles delivered to your inbox
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    size="small"
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        background: "white",
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "white",
                      color: "#667eea",
                      borderRadius: 3,
                      "&:hover": {
                        background: "rgba(255,255,255,0.9)",
                      },
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

export default BlogDetailsPage;
