import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  Paper,
  Tabs,
  Tab,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import SupportIcon from "@mui/icons-material/Support";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      description:
        "Looking for an experienced React developer for a long-term project.",
      budget: "$2000 - $3000",
      category: "Web Development",
      location: "Remote",
      postedDate: "2 days ago",
      proposals: 12,
      clientRating: 4.8,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description:
        "Need a creative designer for a mobile app redesign project.",
      budget: "$1500 - $2000",
      category: "Design",
      location: "Remote",
      postedDate: "1 day ago",
      proposals: 8,
      clientRating: 4.9,
    },
    {
      id: 3,
      title: "Content Writer",
      description: "Seeking a skilled writer for technical blog content.",
      budget: "$500 - $800",
      category: "Writing",
      location: "Remote",
      postedDate: "3 days ago",
      proposals: 15,
      clientRating: 4.7,
    },
  ];

  // Popular categories with icons and stats
  const categories = [
    { name: "Web Development", count: 150, icon: "💻", growth: "+15%" },
    { name: "Design", count: 120, icon: "🎨", growth: "+12%" },
    { name: "Writing", count: 90, icon: "✍️", growth: "+8%" },
    { name: "Marketing", count: 80, icon: "📢", growth: "+10%" },
    { name: "Mobile Development", count: 70, icon: "📱", growth: "+20%" },
    { name: "Data Science", count: 60, icon: "📊", growth: "+18%" },
  ];

  // Testimonials with more details
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Freelance Developer",
      rating: 5,
      text: "Found amazing projects and clients through this platform. Highly recommended!",
      avatar: <PersonIcon />,
      earnings: "$25,000+",
      completedJobs: 15,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Client",
      rating: 5,
      text: "Great platform for finding talented freelancers. The process was smooth and efficient.",
      avatar: <PersonIcon />,
      postedJobs: 8,
      totalSpent: "$12,000+",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "UI/UX Designer",
      rating: 5,
      text: "The best freelancing platform I've used. The community is supportive and professional.",
      avatar: <PersonIcon />,
      earnings: "$18,000+",
      completedJobs: 12,
    },
    {
      id: 4,
      name: "John Smith",
      role: "Content Writer",
      rating: 4.8,
      text: "This platform has helped me grow my freelance career significantly. Highly reliable!",
      avatar: <PersonIcon />,
      earnings: "$10,000+",
      completedJobs: 20,
    },
  ];

  // How it works steps
  const howItWorks = [
    {
      title: "Post a Job",
      description: "Describe your project and set your budget",
      icon: <WorkIcon />,
    },
    {
      title: "Get Proposals",
      description: "Receive proposals from qualified freelancers",
      icon: <GroupsIcon />,
    },
    {
      title: "Choose & Pay",
      description: "Select the best freelancer and pay securely",
      icon: <SecurityIcon />,
    },
  ];

  // Platform stats
  const stats = [
    { label: "Active Freelancers", value: "10,000+", icon: <PersonIcon /> },
    { label: "Jobs Posted", value: "5,000+", icon: <WorkIcon /> },
    { label: "Client Satisfaction", value: "98%", icon: <StarIcon /> },
    { label: "Total Earnings", value: "$2M+", icon: <AttachMoneyIcon /> },
  ];

  return (
    <Box>
      {/* Hero Section with Search */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Find Your Next Freelance Project
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Connect with clients and grow your freelance business
          </Typography>

          {/* Search Section */}
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              maxWidth: 600,
              mx: "auto",
              bgcolor: "white",
            }}
          >
            <SearchIcon sx={{ color: "text.secondary" }} />
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                bgcolor: "white",
                color: "white",
                outline: "none",
                width: "100%",
                fontSize: "1rem",
                padding: "0.5rem",
              }}
            />
            <Button
              variant="contained"
              color="white"
              onClick={() => navigate("/jobs")}
            >
              Search
            </Button>
          </Paper>

          {/* Quick Category Selection */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categories.slice(0, 4).map((category) => (
              <Chip
                key={category.name}
                label={`${category.icon} ${category.name}`}
                onClick={() => navigate("/jobs")}
                sx={{
                  bgcolor: "rgba(215, 21, 21, 0.1)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <Card sx={{ textAlign: "center", height: "100%" }}>
                <CardContent>
                  <Box sx={{ color: "primary.main", mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h4" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: "grey.50", py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={step.title}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent>
                    <Box sx={{ color: "primary.main", mb: 2 }}>{step.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {index + 1}. {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Jobs Section with Enhanced Cards */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <TrendingUpIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="h4" component="h2">
              Featured Jobs
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featuredJobs.map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {job.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocationOnIcon
                        sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <AccessTimeIcon
                        sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {job.postedDate}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AttachMoneyIcon
                        sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {job.budget}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AttachMoneyIcon
                        sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {job.budget}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Chip label={job.category} size="small" />
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <StarIcon
                          sx={{ fontSize: 16, color: "warning.main", mr: 0.5 }}
                        />
                        <Typography variant="body2">
                          {job.clientRating}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Categories Section with Growth Indicators */}
      <Box sx={{ bgcolor: "grey.50", py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Popular Categories
          </Typography>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.name}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {category.icon} {category.name}
                      </Typography>
                      <Chip
                        label={category.growth}
                        size="small"
                        color="success"
                        sx={{ bgcolor: "success.light", color: "success.dark" }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {category.count} active jobs
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Testimonials Section */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar sx={{ mr: 2, bgcolor: "primary.main" }}>
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {testimonial.text}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      {testimonial.earnings && (
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            Earnings
                          </Typography>
                          <Typography variant="subtitle2" color="primary">
                            {testimonial.earnings}
                          </Typography>
                        </Box>
                      )}
                      {testimonial.completedJobs && (
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            Completed Jobs
                          </Typography>
                          <Typography variant="subtitle2" color="primary">
                            {testimonial.completedJobs}
                          </Typography>
                        </Box>
                      )}
                      {testimonial.postedJobs && (
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            Posted Jobs
                          </Typography>
                          <Typography variant="subtitle2" color="primary">
                            {testimonial.postedJobs}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: "grey.50", py: 6 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <SecurityIcon
                    sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Secure Payments
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your payments are protected with our secure escrow system
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <SupportIcon
                    sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    24/7 Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our support team is always here to help you
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <CheckCircleIcon
                    sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Quality Guarantee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We ensure high-quality work through our verification system
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Start Your Freelancing Journey?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Join thousands of successful freelancers and clients
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/register")}
            startIcon={<StarIcon />}
          >
            Get Started Today
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate("/jobs")}
            startIcon={<WorkIcon />}
          >
            Browse Jobs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
