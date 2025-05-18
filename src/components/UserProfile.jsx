import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser, deleteUser, getCurrentUser } from '../services/userService';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Alert, 
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userData = await getUserById(id);
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          role: userData.role
        });
        
        // Get current user to check permissions
        const currentUserData = getCurrentUser();
        setCurrentUser(currentUserData);
      } catch (err) {
        setError(err.message || 'Failed to load user data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    try {
      await updateUser(id, formData);
      setSuccess('Profile updated successfully');
      setIsEditing(false);
      
      // Refresh user data
      const updatedUser = await getUserById(id);
      setUser(updatedUser);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this account? This action cannot be undone.')) {
      try {
        await deleteUser(id);
        navigate('/');
      } catch (err) {
        setError(err.message || 'Failed to delete account');
      }
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  const isOwnProfile = currentUser && currentUser.user && currentUser.user.id === parseInt(id);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Profile
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        
        {isEditing ? (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="role"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled
            />
            
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
              
              <Button
                variant="outlined"
                onClick={() => setIsEditing(false)}
                disabled={saving}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Name</Typography>
              <Typography variant="body1">{user.name}</Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Email</Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Role</Typography>
              <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>{user.role}</Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Member Since</Typography>
              <Typography variant="body1">
                {new Date(user.created_at).toLocaleDateString()}
              </Typography>
            </Box>
            
            {isOwnProfile && (
              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
                
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete Account
                </Button>
              </Box>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
};

export default UserProfile; 