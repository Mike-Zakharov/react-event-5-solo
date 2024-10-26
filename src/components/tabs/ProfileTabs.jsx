import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, List, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import { ProfilePanel } from '../profile/ProfilePanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const ProfileTabs = ({ userData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flex: '0 1 80%', backgroundColor: '#fff' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Личные данные" {...a11yProps(0)} />
          <Tab label="Контакты" {...a11yProps(1)} />
          <Tab label="Избранное" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <ProfilePanel value={value} index={0}>
        <Typography variant="h6" component="h3">
          Профиль
        </Typography>
        <List>
          <ListItemText primary="Фамилия:" secondary={userData?.lastName} />
          <ListItemText primary="Имя:" secondary={userData?.name} />
        </List>

        <Typography variant="h6" component="h3">
          Дата рождения
        </Typography>
        <List>
          <ListItemText secondary={userData?.birthdate} />
        </List>

        <Typography variant="h6" component="h3">
          Локация для помощи
        </Typography>
        {userData?.baseLocations.map((data) => (
          <List key={uuidv4()}>
            <ListItemText primary="Область:" secondary={data.district} />
            <ListItemText primary="Насленный пункт:" secondary={data.city} />
          </List>
        ))}

        <Typography variant="h6" component="h3">
          Образование
        </Typography>
        {userData?.educations.map((data) => (
          <List key={uuidv4()}>
            <ListItemText primary="Учреждение:" secondary={data.organizationName} />
            <ListItemText primary="Уровень образования:" secondary={data.level} />
            <ListItemText primary="Специализация:" secondary={data.specialization} />
            <ListItemText primary="Год окончания:" secondary={data.graduationYear} />
          </List>
        ))}

        <Typography variant="h6" component="h3">
          Обо мне
        </Typography>
        <List>
          <ListItemText secondary={userData?.additionalInfo} />
        </List>
      </ProfilePanel>
      <ProfilePanel value={value} index={1}>
        Контакты
      </ProfilePanel>
      <ProfilePanel value={value} index={2}>
        Избранное
      </ProfilePanel>
    </Box>
  );
};
