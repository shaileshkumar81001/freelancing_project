import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  Tabs,
  Tab,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Experienced web developer with 5+ years of experience',
    skills: ['React', 'Node.js', 'MongoDB'],
    location: 'New York, USA',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update - connect to backend API
    console.log('Profile updated:', profileData);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ width: 100, height: 100, mr: 3 }}>
            <PersonIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Box>
            <Typography variant="h4" gutterBottom>
              {profileData.firstName} {profileData.lastName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {profileData.location}
            </Typography>
          </Box>
        </Box>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Profile Information" />
          <Tab label="Skills" />
          <Tab label="Portfolio" />
        </Tabs>

        {tabValue === 0 && (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {profileData.skills.map((skill, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                  }}
                >
                  {skill}
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Portfolio
            </Typography>
            <Typography color="text.secondary">
              No portfolio items added yet.
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Profile; 