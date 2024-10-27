import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

<<<<<<< HEAD
const CheckboxGroup = ({ options, label = 'Name', key }) => {
=======
const CheckboxGroup = ({ options, label = 'Name', paramkey }) => {
>>>>>>> 67a30d8936d9d63efc610cce0f4f8499941d79cd
  const navigate = useNavigate();
  const location = useLocation();

  console.log(options, 'options');

  const query = new URLSearchParams(location.search);
<<<<<<< HEAD
  const selectedOptions = query.get(key) ? query.get(key).split(',') : [];
=======
  const selectedOptions = query.get(paramkey) ? query.get(paramkey).split(',') : [];
>>>>>>> 67a30d8936d9d63efc610cce0f4f8499941d79cd

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedOptions;

    if (checked) {
      updatedOptions = [...selectedOptions, name];
    } else {
      updatedOptions = selectedOptions.filter((option) => option !== name);
    }

<<<<<<< HEAD
    query.set(key, updatedOptions.join(','));
=======
    query.set(paramkey, updatedOptions.join(','));
>>>>>>> 67a30d8936d9d63efc610cce0f4f8499941d79cd

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
