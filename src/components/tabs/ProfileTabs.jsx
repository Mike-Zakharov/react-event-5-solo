import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ProfilePanel } from '../profile/ProfilePanel';
import telegramIcon from '../../assets/telegram.svg';
import vkIcon from '../../assets/vk.svg';
import whatsappIcon from '../../assets/whatsapp.svg';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const subtitleStyle = {
  mb: 1.25,
};

const listStyle = {
  p: 0,
};

export const ProfileTabs = ({ userData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flex: '0 1 80%', p: 4.5, backgroundColor: '#fff' }}>
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
          <ListItem>
            <ListItemText primary="Фамилия:" secondary={userData?.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Имя:" secondary={userData?.name} />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3">
          Дата рождения
        </Typography>
        <List>
          <ListItem>
            <ListItemText secondary={userData?.birthdate} />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3">
          Локация для помощи
        </Typography>
        {userData?.baseLocations.map((data) => (
          <List key={uuidv4()}>
            <ListItem>
              <ListItemText primary="Область:" secondary={data.district} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Насленный пункт:" secondary={data.city} />
            </ListItem>
          </List>
        ))}

        <Typography variant="h6" component="h3">
          Образование
        </Typography>
        {userData?.educations.map((data) => (
          <List key={uuidv4()}>
            <ListItem>
              <ListItemText primary="Учреждение:" secondary={data.organizationName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Уровень образования:" secondary={data.level} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Специализация:" secondary={data.specialization} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Год окончания:" secondary={data.graduationYear} />
            </ListItem>
          </List>
        ))}

        <Typography variant="h6" component="h3">
          Обо мне
        </Typography>
        <List>
          <ListItem>
            <ListItemText secondary={userData?.additionalInfo} />
          </ListItem>
        </List>
      </ProfilePanel>

      <ProfilePanel value={value} index={1}>
        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            E-mail
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <Link color="inherit" underline="hover" href={`mailto:${userData?.contacts.email}`}>
                {userData?.contacts.email}
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Телефон
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <Link color="inherit" underline="hover" href={`tel:${userData?.contacts.phone}`}>
                {userData?.contacts.phone}
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Социальные сети
          </Typography>
          <List sx={{ ...listStyle, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <img src={vkIcon} alt="" width="24" height="24" />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.vk}
                target="_blank"
                rel="noopener"
              >
                Vkontakte
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <img src={telegramIcon} alt="" width="24" height="24" />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.telegram}
                target="_blank"
                rel="noopener"
              >
                Telegram
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <img src={whatsappIcon} alt="" width="24" height="24" />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.whatsapp}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </Link>
            </ListItem>
          </List>
        </Box>
      </ProfilePanel>
      <ProfilePanel value={value} index={2}>
        Избранное
      </ProfilePanel>
    </Box>
  );
};
