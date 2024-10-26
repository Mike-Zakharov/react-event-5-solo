import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { ProfilePanel } from '../profile/ProfilePanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const ProfileTabs = () => {
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
        Личные данные
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
