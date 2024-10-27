import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useLocation, useNavigate } from 'react-router-dom';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const dateParam = searchParams.get('date');
    if (dateParam) {
      setSelectedDate(new Date(dateParam));
    }
  }, [location.search]);

  const handleDateChange = (newDate) => {
    const searchParams = new URLSearchParams(location.search);
    if (newDate) {
      searchParams.set('date', newDate.toISOString());
    } else {
      searchParams.delete('date');
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    setSelectedDate(newDate);
  };

  return (
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
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerComponent;
