import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import extractUniqueFilters from '../../utils/extractUniqueFilters';

const requests = [
  {
    id: 'request-id-1',
    requesterType: 'person',
    helpType: 'finance',
    helperRequirements: {
      helperType: 'group',
      isOnline: true,
      qualification: 'professional',
    },
  },
  {
    id: 'request-id-2',
    requesterType: 'organization',
    helpType: 'donation',
    helperRequirements: {
      helperType: 'individual',
      isOnline: false,
      qualification: 'amateur',
    },
  },
];

const FilterPanel = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { helpType, helperRequirements, requesterType } = extractUniqueFilters(requests);

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
        <CheckboxGroup options={requesterType} label="Комy мы помогаем" key={'requesterType'} />
        <CheckboxGroup options={helpType} label="Чем мы помогаем" key={'helpType'} />
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ backgroundColor: 'white', border: '1px solid #E0E0E0', padding: '12px 42px' }}
      >
        Волонтерство
      </Typography>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '12px 42px' }}>
        <CheckboxGroup options={qualification} label="Специализация" key={'qualification'} />
        <CheckboxGroup options={isOnline} label="Формат" key={'isOnline'} />
        <CheckboxGroup options={helperType} label="Необходимо волонтеров" key={'helperType'} />
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
