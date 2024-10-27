import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
  CardMedia,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import avatar from '../../assets/avatar.svg';

export const UserInfoCard = () => {
  const { auth, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!!auth) {
      logout();
      navigate('/');
    }
  };

  return (
    <Box sx={{ flex: '0 1 20%' }}>
      <Card
        variant="outlined"
        sx={{
          paddingBlock: 2.5,
          maxHeight: 420,
          borderRadius: 1,
        }}
      >
        <CardMedia sx={{ p: '20px 53px' }}>
          <img src={avatar} alt="" />
        </CardMedia>
        <Divider />
        <CardContent sx={{ mb: '30px', p: 2.5, textAlign: 'left' }}>
          <Typography variant="h6" sx={{ mb: '10px' }}>
            Ангелина Фомина
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Статус: Начинающий
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2.5 }}>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            sx={{ width: '100%' }}
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
