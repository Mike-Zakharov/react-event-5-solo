import React from 'react';
import useCat  from './store.js';
import { Box, Button } from '@mui/material';

const RandomCatBlock = () => {
  let cat = useCat((store) => store.cat);
  const getACat = useCat((store) => store.getACat);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        height: '400px',
        m: '0 auto',
        mt: '25px',
      }}
    >
      <img src={cat} alt="cat" style={{ maxWidth: 300 + 'px', height: 300 + 'px' }} />

      <Button onClick={() => getACat()} variant="outlined" sx={{ mt: '25px', width: '120px' }}>
        Click Me!
      </Button>
    </Box>
  );
};

export default RandomCatBlock;
