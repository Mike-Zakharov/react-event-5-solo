import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Icon, Paper, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const data = {
  "id": "request-id-1",
  "title": "Помощь в проекте",
  "organization": {
    "title": "Благотворительная организация",
    "isVerified": true
  },
  "description": "Описание запроса на помощь.",
  "goalDescription": "Цель данного запроса.",
  "actionsSchedule": [
    {
      "stepLabel": "Шаг 1",
      "isDone": true
    }
  ],
  "endingDate": "2023-12-31",
  "location": {
    "latitude": 40.712776,
    "longitude": -74.005974,
    "district": "Пресненский",
    "city": "Москва"
  },
  "contacts": {
    "email": "contact@example.com",
    "phone": "+123456789",
    "website": "https://example.com"
  },
  "requesterType": "person",
  "helpType": "finance",
  "helperRequirements": {
    "helperType": "group",
    "isOnline": true,
    "qualification": "professional"
  },
  "contributorsCount": 10,
  "requestGoal": 10000,
  "requestGoalCurrentValue": 2500
}


const HelpRequestPage = () => {
  const { itemId } = useParams();

  return (
    <>
      
        <Paper>
          <Typography variant='h4' component={h4}>Запрос о помощи</Typography>
          <Paper>
            <Box>
              <Typography>{data.tit}</Typography>
              <Button>
                <StarOutlineIcon/>
                В избранное
              </Button>
            </Box>

          </Paper>
        </Paper>  
      
      {itemId ? <div>HelpRequestPage with itemId: {itemId}</div> : <p>Page item is not present</p>}
    </>
  );
};

export default HelpRequestPage;
