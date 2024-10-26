import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Icon, Paper, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const HelpRequestPage = () => {
  const { itemId } = useParams();

  return (
    <>
      {itemId ? 
        <Paper>
          <Typography variant='h4' component={h4}>Запрос о помощи</Typography>
          <Paper>
            <Button>
              <StarOutlineIcon/>
              В избранное
            </Button>
          </Paper>
        </Paper>  
       : <p>Page item is not present</p>}
    </>
  );
};
export default HelpRequestPage;
