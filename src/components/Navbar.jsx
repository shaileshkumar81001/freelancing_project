import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <WorkIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            FreelanceHub
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={RouterLink} to="/jobs">
            Browse Jobs
          </Button>
          <Button color="inherit" component={RouterLink} to="/post-job">
            Post a Job
          </Button>
          <Button color="inherit" component={RouterLink} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/register"
            sx={{ ml: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;