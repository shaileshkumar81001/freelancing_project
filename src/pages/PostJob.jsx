import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  MenuItem,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  Alert,
  Snackbar,
  IconButton,
  InputAdornment,
  Tooltip,
} from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    jobType: '',
    experienceLevel: '',
    budget: '',
    currency: 'USD',
    deadline: '',
    duration: '',
    skills: [],
    attachments: [],
  });

  const [errors, setErrors] = useState({});
  const [skillInput, setSkillInput] = useState('');

  const categories = [
    'Web Development',
    'Design',
    'Writing',
    'Marketing',
    'Mobile Development',
    'Data Science',
  ];

  const jobTypes = ['Fixed Price', 'Hourly Rate'];
  const experienceLevels = ['Entry Level', 'Intermediate', 'Expert'];
  const currencies = ['USD', 'EUR', 'GBP', 'INR'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.jobType) newErrors.jobType = 'Job type is required';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission - connect to backend API
      console.log('Form submitted:', formData);
      setSnackbar({
        open: true,
        message: 'Job posted successfully!',
        severity: 'success',
      });
      setTimeout(() => navigate('/jobs'), 2000);
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillAdd = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()],
        }));
      }
      setSkillInput('');
    }
  };

  const handleSkillDelete = (skillToDelete) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToDelete),
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const handleFileDelete = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Post a New Job
          </Typography>
          <Button
            variant="outlined"
            startIcon={<PreviewIcon />}
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? 'Edit' : 'Preview'}
          </Button>
        </Box>

        {showPreview ? (
          <Box>
            <Typography variant="h5" gutterBottom>{formData.title || 'Job Title'}</Typography>
            <Box sx={{ mb: 2 }}>
              <Chip label={formData.category || 'Category'} sx={{ mr: 1 }} />
              <Chip label={formData.jobType || 'Job Type'} sx={{ mr: 1 }} />
              <Chip label={formData.experienceLevel || 'Experience Level'} />
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {formData.description || 'Job Description'}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">Budget: {formData.currency} {formData.budget}</Typography>
              <Typography variant="subtitle1">Duration: {formData.duration}</Typography>
              <Typography variant="subtitle1">Deadline: {formData.deadline}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">Required Skills:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>Job Description</Typography>
                <Editor
                  apiKey="your-tinymce-api-key"
                  value={formData.description}
                  onEditorChange={(content) => {
                    setFormData((prev) => ({ ...prev, description: content }));
                  }}
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  error={!!errors.category}
                  helperText={errors.category}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Job Type"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  error={!!errors.jobType}
                  helperText={errors.jobType}
                >
                  {jobTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Experience Level"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  error={!!errors.experienceLevel}
                  helperText={errors.experienceLevel}
                >
                  {experienceLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  {currencies.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  error={!!errors.budget}
                  helperText={errors.budget}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{formData.currency}</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Estimated Duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  error={!!errors.duration}
                  helperText={errors.duration}
                  placeholder="e.g., 2 weeks"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="date"
                  label="Deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  error={!!errors.deadline}
                  helperText={errors.deadline}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Add Skills (Press Enter to add)"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillAdd}
                />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {formData.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      onDelete={() => handleSkillDelete(skill)}
                      color="primary"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<AttachFileIcon />}
                  sx={{ mb: 2 }}
                >
                  Attach Files
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={handleFileUpload}
                  />
                </Button>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {formData.attachments.map((file, index) => (
                    <Chip
                      key={index}
                      label={file.name}
                      onDelete={() => handleFileDelete(index)}
                      color="secondary"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Post Job
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PostJob; 