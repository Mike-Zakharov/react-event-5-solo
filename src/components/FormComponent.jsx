import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const FormComponent = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });
  const [isDataReady, setIsDataReady] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name && data.email) {
      setIsDataReady(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Form Headline
      </Typography>
      <Typography variant="body1" gutterBottom>
        Add your name and email and see what happens
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginTop: 2,
        }}
      >
        <TextField
          label="Your name"
          variant="outlined"
          name="name"
          value={data.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Your email"
          variant="outlined"
          name="email"
          value={data.email}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </Box>

      {isDataReady && (
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            border: '1px solid',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Your data</Typography>
          <Typography>
            <strong>Name:</strong> {data.name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {data.email}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default FormComponent;
