import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock data - replace with actual API call
  const jobs = [
    {
      id: 1,
      title: 'Web Developer Needed',
      description: 'Looking for an experienced web developer to build a modern e-commerce website. Must be proficient in React, Node.js, and MongoDB.',
      category: 'Web Development',
      budget: '$1000 - $2000',
      postedDate: '2024-04-03',
    },
    {
      id: 2,
      title: 'Mobile App Design',
      description: 'Need a UI/UX designer for a fitness tracking mobile application. Experience with Figma and mobile design patterns required.',
      category: 'Design',
      budget: '$500 - $1000',
      postedDate: '2024-04-02',
    },
    {
      id: 3,
      title: 'Content Writer for Tech Blog',
      description: 'Seeking a skilled content writer with expertise in technology and software development. Must have experience writing technical articles.',
      category: 'Writing',
      budget: '$300 - $500',
      postedDate: '2024-04-01',
    },
    {
      id: 4,
      title: 'Social Media Marketing Expert',
      description: 'Looking for a social media marketing specialist to manage our brand presence across platforms. Experience with Facebook, Instagram, and LinkedIn required.',
      category: 'Marketing',
      budget: '$800 - $1200',
      postedDate: '2024-03-31',
    },
    {
      id: 5,
      title: 'Python Developer for Data Analysis',
      description: 'Need a Python developer to create data analysis scripts and visualizations. Experience with pandas, numpy, and matplotlib required.',
      category: 'Data Science',
      budget: '$700 - $1000',
      postedDate: '2024-03-30',
    },
    {
      id: 6,
      title: 'iOS App Developer',
      description: 'Seeking an experienced iOS developer to build a productivity app. Must be proficient in Swift and have published apps on the App Store.',
      category: 'Mobile Development',
      budget: '$1500 - $2500',
      postedDate: '2024-03-29',
    },
    {
      id: 7,
      title: 'SEO Specialist',
      description: 'Looking for an SEO expert to optimize our website and improve search rankings. Experience with keyword research and technical SEO required.',
      category: 'Marketing',
      budget: '$600 - $900',
      postedDate: '2024-03-28',
    },
    {
      id: 8,
      title: 'UI/UX Designer for Web Platform',
      description: 'Need a UI/UX designer to create a modern and intuitive interface for our web platform. Experience with user research and wireframing required.',
      category: 'Design',
      budget: '$1000 - $1500',
      postedDate: '2024-03-27',
    },
  ];

  const categories = ['Web Development', 'Design', 'Writing', 'Marketing', 'Data Science', 'Mobile Development'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Find Your Next Project
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {job.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Chip label={job.category} size="small" />
                  <Typography variant="subtitle2" color="primary">
                    {job.budget}
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                  Posted: {job.postedDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Jobs; 