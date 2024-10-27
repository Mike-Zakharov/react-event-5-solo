import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid2, Icon, Paper, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const data = {
  id: 'request-id-1',
  title: 'Помощь в проекте',
  organization: {
    title: 'Благотворительная организация',
    isVerified: true,
  },
  description: 'Описание запроса на помощь.',
  goalDescription: 'Цель данного запроса.',
  actionsSchedule: [
    {
      stepLabel: 'Шаг 1',
      isDone: false,
    },
  ],
  endingDate: '2023-12-31',
  location: {
    latitude: 40.712776,
    longitude: -74.005974,
    district: 'Пресненский',
    city: 'Москва',
  },
  contacts: {
    email: 'contact@example.com',
    phone: '+123456789',
    website: 'https://example.com',
  },
  requesterType: 'person',
  helpType: 'finance',
  helperRequirements: {
    helperType: 'group',
    isOnline: true,
    qualification: 'professional',
  },
  contributorsCount: 10,
  requestGoal: 10000,
  requestGoalCurrentValue: 2500,
};

const HelpRequestPage = () => {
  const { itemId } = useParams();

  let favoriterIconColor = 'disabled';

  const actionStep = data.actionsSchedule.map((step) => {
    return (
      <Grid2 size={12} key={step.stepLabel}>
        <Typography>
          {step.isDone ? (
            <CheckCircleOutlineIcon color="success" sx={{ mr: '4px' }} />
          ) : (
            <CheckCircleOutlineIcon
              color="disabled"
              sx={{ mr: '4px', verticalAlign: 'middle', width: '24px', height: '24px' }}
            />
          )}
          {step.stepLabel}
        </Typography>
      </Grid2>
    );
  });

  return (
    <>
      {itemId ? (
        <Paper sx={{ p: '30px 40px 64px 40px' }}>
          <Typography variant="h4" component="h4" sx={{ marginBlockStart: '0' }}>
            Запрос о помощи
          </Typography>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              mt: '30px',
              width: '1080px',
              p: '40px 36px',
            }}
          >
            <Grid2 container rowSpacing="30px" sx={{ width: '550px' }}>
              <Grid2 size={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h5" component="h5">
                    {data.title} для {data.requesterType}
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  Организация
                </Typography>
                <Typography sx={{ mt: '10px' }}>{data.organization.title}</Typography>
                {data.organization.isVerified && (
                  <Typography>
                    <VerifiedIcon
                      color="success"
                      sx={{ mr: '4px', width: '20px', height: '20px', verticalAlign: 'middle' }}
                    />
                    Организация проверена
                  </Typography>
                )}
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  Кому мы помогаем
                </Typography>
                <Typography sx={{ mt: '10px' }}>{data.description}</Typography>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  Цель сбора
                </Typography>
                <Typography sx={{ mt: '10px' }}>{data.goalDescription}</Typography>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  План действий
                </Typography>
                <Grid2 container sx={{ mt: '10px' }}>
                  {actionStep}
                </Grid2>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  Завершение
                </Typography>
                <Typography sx={{ mt: '10px' }}>{data.endingDate}</Typography>
              </Grid2>
              <Grid2>
                <Typography variant="h6" component="h6">
                  Локация
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                  <Typography sx={{ mr: '4px', mt: '10px', fontWeight: '500' }}>
                    Область:
                  </Typography>
                  {data.location.district}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '4px' }}>
                  <Typography sx={{ mr: '4px', mt: '4px', fontWeight: '500' }}>
                    Насленный пункт:
                  </Typography>
                  {data.location.city}
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" component="h6">
                  Контакты
                </Typography>
                <Grid2 container size={12} columnSpacing={5} sx={{ mt: '10px' }}>
                  <Grid2 size={3}>
                    <Typography sx={{ mb: '4px', fontWeight: '500' }}>Телефон</Typography>
                    {data.contacts.phone}
                  </Grid2>
                  <Grid2 size={5}>
                    <Typography sx={{ mb: '4px', fontWeight: '500' }}>E-mail</Typography>
                    {data.contacts.email}
                  </Grid2>
                  <Grid2 size={4}>
                    <Typography sx={{ mb: '4px', fontWeight: '500' }}>Сайт</Typography>
                    {data.contacts.website}
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
            <Button variant="outlined" sx={{ p: '4px 10px', color: 'black' }}>
              <StarOutlineIcon
                color={favoriterIconColor}
                sx={{ mr: '8px', width: '18px', height: '18px', verticalAlign: 'middle' }}
              />
              В избранное
            </Button>
          </Paper>

        </Paper>
        
      ) : (
        <p>Page item is not present</p>
      )}
    </>
  );
};

export default HelpRequestPage;
