import React, { useState } from 'react';
import { Box, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    logout();
    handleMenuClose();
  };

  return (
    <Box>
      <IconButton onClick={handleMenuOpen}>
        <AccountCircleIcon sx={{ color: 'grey', fontSize: 40 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            boxShadow: 3,
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleProfileClick}>
          <Person2Icon sx={{ color: 'grey', mr: 1 }} />
          <Typography variant="body1">Мой профиль</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <LogoutIcon sx={{ color: 'grey', mr: 1 }} />
          <Typography variant="body1">Выйти</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
