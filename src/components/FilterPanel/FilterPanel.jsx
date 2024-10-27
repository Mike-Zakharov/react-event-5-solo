import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, FormLabel, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { useNavigate, useLocation } from 'react-router-dom';

const FilterPanel = ({ data }) => {
  const [selectedDate, setselectedDate] = [];
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (value === '*') {
      deleteQuery(name, location, navigate);
    } else {
      setQuery(name, value, location, navigate);
    }
  };

  const handleFilterClear = () => {
    const searchParams = new URLSearchParams(location.search);
    Object.keys(data).forEach((filter) => {
      searchParams.delete(filter);
    });
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <Box
      sx={{
        padding: '20px',
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        backgroundColor: 'white',
        maxWidth: 320,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '0.15px',
          textAlign: 'left',
          color: 'black',
          marginBottom: '25px',
        }}
      >
        Фильтрация
      </Typography>

      <Box>
        <CheckboxGroup options={['option1', 'option2']} label="Some label" />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ backgroundColor: 'white', border: '1px solid #E0E0E0', padding: '12px 42px' }}
      >
        Волонтерство
      </Typography>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '12px 42px' }}>
        <CheckboxGroup options={['option1', 'option2']} label="Some label" />
        <CheckboxGroup options={['option1', 'option2']} label="Some label" />
        {/* map volunteers list */}
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: '40px' }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.15px',
            textAlign: 'left',
            color: 'rgba(0, 0, 0, 0.6)',
            paddingBottom: '10px',
          }}
        >
          Помощь актуальна до:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Выберите дату"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Box>

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={handleFilterClear}
        sx={{
          color: 'rgba(0, 0, 0, 0.87)',
          borderColor: 'rgba(0, 0, 0, 0.87)',
        }}
      >
        Сбросить
      </Button>
    </Box>
  );
};

export default FilterPanel;
