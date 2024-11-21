import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from './Error-img.svg'
const ErrorComponent = () => {

  const imgStyles ={
    width: 419 + 'px',
    height: 240 + 'px', 
  }

  return (
    <Box sx={{textAlign: 'center'}}>
      <img src={Image} alt="Error" style={imgStyles} />  
      <Typography sx={{marginTop: '20px'}} variant="h5" component="h5" color="error">
        Ошибка! Не удалось загрузить запросы
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
