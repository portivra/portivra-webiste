"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  Pagination,
  Skeleton,
  Avatar,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import {
  Search,
  Article,
  CalendarToday,
  Person,
  Visibility,
  AccessTime,
  ArrowForward,
  BookmarkBorder,
  Bookmark,
  Share,
  ThumbUp,
  ThumbUpAltOutlined,
  FilterList,
  GridView,
  ViewList,
  TrendingUp,
  LocalOffer,
  ChevronRight,
  MenuBook,
  EmojiEvents,
  School,
  Lightbulb,
} from "@mui/icons-material";
import Business from "@mui/icons-material/Business";
import Receipt from "@mui/icons-material/Receipt";
import AccountBalance from "@mui/icons-material/AccountBalance";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs, blogCategories } from "@/data/blogs";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 6;

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle bookmark
  const handleBookmark = (blogId) => {
    if (bookmarkedPosts.includes(blogId)) {
      setBookmarkedPosts(bookmarkedPosts.filter((id) => id !== blogId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, blogId]);
    }
  };

  // Handle like
  const handleLike = (blogId) => {
    if (likedPosts.includes(blogId)) {
      setLikedPosts(likedPosts.filter((id) => id !== blogId));
    } else {
      setLikedPosts([...likedPosts, blogId]);
    }
  };

  // Popular tags
  const allTags = blogs.flatMap((blog) => blog.tags);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
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
      <Container maxWidth="xl">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs
            separator={<ChevronRight fontSize="small" />}
            sx={{ mb: 3, color: "text.secondary" }}
          >
            <MuiLink href="/" underline="hover" color="inherit">
              Home
            </MuiLink>
            <Typography color="primary.main" fontWeight={600}>
              Blogs
            </Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 4,
              background: "white",
              mb: 4,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <TextField
                  fullWidth
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <Chip
                      label="All"
                      onClick={() => {
                        setSelectedCategory("all");
                        setCurrentPage(1);
                      }}
                      sx={{
                        background:
                          selectedCategory === "all"
                            ? "linear-gradient(135deg, #667eea, #764ba2)"
                            : "transparent",
                        color:
                          selectedCategory === "all" ? "white" : "text.primary",
                        border:
                          selectedCategory === "all"
                            ? "none"
                            : "1px solid rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        "&:hover": {
                          background:
                            selectedCategory === "all"
                              ? "linear-gradient(135deg, #667eea, #764ba2)"
                              : "rgba(102,126,234,0.1)",
                        },
                      }}
                    />
                    {blogCategories.slice(1).map((category) => (
                      <Chip
                        key={category.slug}
                        label={category.name}
                        onClick={() => {
                          setSelectedCategory(category.slug);
                          setCurrentPage(1);
                        }}
                        sx={{
                          background:
                            selectedCategory === category.slug
                              ? "linear-gradient(135deg, #667eea, #764ba2)"
                              : "transparent",
                          color:
                            selectedCategory === category.slug
                              ? "white"
                              : "text.primary",
                          border:
                            selectedCategory === category.slug
                              ? "none"
                              : "1px solid rgba(0,0,0,0.1)",
                          cursor: "pointer",
                          "&:hover": {
                            background:
                              selectedCategory === category.slug
                                ? "linear-gradient(135deg, #667eea, #764ba2)"
                                : "rgba(102,126,234,0.1)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={(e, value) => value && setViewMode(value)}
                    size="small"
                  >
                    <ToggleButton value="grid">
                      <GridView fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="list">
                      <ViewList fontSize="small" />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* Blogs Grid/List */}
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <AnimatePresence mode="wait">
              {loading ? (
                <Grid container spacing={3}>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={item}>
                      <Skeleton
                        variant="rounded"
                        height={300}
                        sx={{ borderRadius: 4 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : paginatedBlogs.length > 0 ? (
                <motion.div
                  key={viewMode + selectedCategory + searchQuery}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Grid container spacing={3}>
                    {paginatedBlogs.map((blog, index) => (
                      <Grid
                        size={{ xs: 12, sm: viewMode === "grid" ? 6 : 12 }}
                        key={blog.id}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          whileHover={{ y: -5 }}
                        >
                          <Link
                            href={`/blogs/${blog.slug}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Card
                              sx={{
                                display: viewMode === "list" ? "flex" : "block",
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  position: "relative",
                                  height: viewMode === "list" ? 200 : 220,
                                  width:
                                    viewMode === "list"
                                      ? { xs: "100%", sm: 250 }
                                      : "100%",
                                  flexShrink: 0,
                                }}
                              >
                                <Image
                                  src={blog.image}
                                  alt={blog.title}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                                {blog.popular && (
                                  <Chip
                                    label="Popular"
                                    size="small"
                                    icon={<TrendingUp sx={{ fontSize: 12 }} />}
                                    sx={{
                                      position: "absolute",
                                      top: 12,
                                      left: 12,
                                      background:
                                        "linear-gradient(135deg, #F97316, #EF4444)",
                                      color: "white",
                                      fontSize: "0.7rem",
                                      height: 24,
                                    }}
                                  />
                                )}
                              </Box>
                              <CardContent sx={{ flex: 1, p: 3 }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    mb: 1,
                                  }}
                                >
                                  <Chip
                                    label={blog.category}
                                    size="small"
                                    sx={{
                                      background: "rgba(102,126,234,0.1)",
                                      color: "#667eea",
                                    }}
                                  />
                                </Box>
                                <Typography
                                  variant="h6"
                                  fontWeight={700}
                                  gutterBottom
                                >
                                  {blog.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ mb: 2 }}
                                >
                                  {blog.excerpt}
                                </Typography>
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  alignItems="center"
                                  sx={{ mb: 2 }}
                                >
                                  <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="center"
                                  >
                                    <CalendarToday
                                      sx={{
                                        fontSize: 12,
                                        color: "text.secondary",
                                      }}
                                    />
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {formatDate(blog.date)}
                                    </Typography>
                                  </Stack>
                                  <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="center"
                                  >
                                    <AccessTime
                                      sx={{
                                        fontSize: 12,
                                        color: "text.secondary",
                                      }}
                                    />
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {blog.readTime}
                                    </Typography>
                                  </Stack>
                                </Stack>
                                <Button
                                  endIcon={<ArrowForward />}
                                  sx={{
                                    color: "#667eea",
                                    "&:hover": {
                                      transform: "translateX(5px)",
                                    },
                                  }}
                                >
                                  Read More
                                </Button>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              ) : (
                <Box sx={{ textAlign: "center", py: 8 }}>
                  <Article
                    sx={{ fontSize: 64, color: "text.secondary", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    No articles found
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting your search or filter to find what you&apos;re
                    looking for.
                  </Typography>
                </Box>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
            )}
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {/* About Section */}
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
                    background: "white",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <MenuBook sx={{ fontSize: 48, color: "#667eea", mb: 2 }} />
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    About Our Blog
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expert insights and guides on business compliance, taxation,
                    company registration, and more to help you navigate the
                    business landscape.
                  </Typography>
                </Paper>
              </motion.div>

              {/* Popular Tags */}
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
                    <LocalOffer sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Popular Tags
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {popularTags.map(([tag, count]) => (
                      <Chip
                        key={tag}
                        label={`${tag} (${count})`}
                        onClick={() => {
                          setSearchQuery(tag);
                          setCurrentPage(1);
                        }}
                        sx={{
                          background: "rgba(102,126,234,0.08)",
                          "&:hover": {
                            background: "rgba(102,126,234,0.15)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>

              {/* Categories */}
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
                    <FilterList sx={{ color: "#667eea" }} />
                    <Typography variant="h6" fontWeight={700}>
                      Categories
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {blogCategories.map((category) => (
                      <Box
                        key={category.slug}
                        onClick={() => {
                          setSelectedCategory(category.slug);
                          setCurrentPage(1);
                        }}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          py: 1,
                          px: 1.5,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          background:
                            selectedCategory === category.slug
                              ? "rgba(102,126,234,0.08)"
                              : "transparent",
                          "&:hover": {
                            background: "rgba(102,126,234,0.08)",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight={
                            selectedCategory === category.slug ? 600 : 400
                          }
                        >
                          {category.name}
                        </Typography>
                        <Chip
                          label={category.count}
                          size="small"
                          sx={{ background: "rgba(0,0,0,0.05)" }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
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
                  <Lightbulb
                    sx={{ fontSize: 48, mb: 2, color: "rgba(255,255,255,0.9)" }}
                  />
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Subscribe to Newsletter
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

// Icon components for categories
const BusinessIcon = () => <Business sx={{ fontSize: 20 }} />;
const ReceiptIcon = () => <Receipt sx={{ fontSize: 20 }} />;
const AccountBalanceIcon = () => <AccountBalance sx={{ fontSize: 20 }} />;
const TrendingUpIcon = () => <TrendingUp sx={{ fontSize: 20 }} />;

export default BlogsPage;
