import React, { useEffect } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckboxGroup = ({ options = ['option1', 'option2'], label = 'Name' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const selectedOptions = query.get('options') ? query?.get('options').split(',') : [];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedOptions;

    if (checked) {
      updatedOptions = [...selectedOptions, name];
    } else {
      updatedOptions = selectedOptions.filter((option) => option !== name);
    }

    query.set('options', updatedOptions.join(','));
    navigate({ search: query.toString() });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup
        sx={{
          padding: '12px',
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
                name={option}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroup;
