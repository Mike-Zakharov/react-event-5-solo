import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckboxGroup = ({ options, label = 'Name', key }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(options, 'options');

  const query = new URLSearchParams(location.search);
  const selectedOptions = query.get(key) ? query.get(key).split(',') : [];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedOptions;

    if (checked) {
      updatedOptions = [...selectedOptions, name];
    } else {
      updatedOptions = selectedOptions.filter((option) => option !== name);
    }

    query.set(key, updatedOptions.join(','));

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
