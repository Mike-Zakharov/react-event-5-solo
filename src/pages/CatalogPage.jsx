<<<<<<< HEAD
import React from 'react';
//import RequestsList from '../components/RequestsList/RequestsList';
=======
import React, { useEffect } from 'react';
import RequestsList from '../components/RequestsList/RequestsList';
>>>>>>> 5290d0616a86def0b95fb31077b85c67a9f0ba29
import Search from '../components/Search/Search';
import { useAuthContext } from '../context/AuthContext';
import { Box } from '@mui/material';

const CatalogPage = () => {
<<<<<<< HEAD
=======
  const { auth, token } = useAuthContext();

  useEffect(() => {
    if (auth) {
      console.log('User is authenticated with token:', token);
    } else {
      console.log('User is not authenticated');
    }
  }, [auth, token]);
>>>>>>> 5290d0616a86def0b95fb31077b85c67a9f0ba29

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexGrow: 1,
        height: '100%',
      }}
    >
      <Search />
      <RequestsList />
    </Box>
  );
};
export default CatalogPage;
