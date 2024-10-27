import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import extractUniqueFilters from '../../utils/extractUniqueFilters';

const FilterPanel = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { helpType, helperRequirements, requesterType } = extractUniqueFilters(data);

  const { helperType, isOnline, qualification } = helperRequirements;
  const handleFilterClear = () => {
    navigate(`${location.pathname}`, { replace: true });
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
        <CheckboxGroup
          options={requesterType}
          label="Комy мы помогаем"
          paramkey={'requesterType'}
        />
        <CheckboxGroup options={helpType} label="Чем мы помогаем" paramkey={'helpType'} />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ backgroundColor: 'white', border: '1px solid #E0E0E0', padding: '12px 42px' }}
      >
        Волонтерство
      </Typography>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '12px 42px' }}>
        <CheckboxGroup options={qualification} label="Специализация" paramkey={'qualification'} />
        <CheckboxGroup options={isOnline} label="Формат" paramkey={'isOnline'} />
        <CheckboxGroup options={helperType} label="Необходимо волонтеров" paramkey={'helperType'} />
      </Box>

      <DatePickerComponent />

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
