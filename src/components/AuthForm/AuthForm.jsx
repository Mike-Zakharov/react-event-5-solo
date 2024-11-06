import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthNotification from '../AuthNotification';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';


const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { authenticate, loading, error } = useAuth(); // Получаем authenticate, loading, error
  const { login, logout, auth } = useAuthContext();

  const navigate = useNavigate(); // Инициализируем навигацию
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Состояние для уведомления
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success', // or 'error'
  });

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  // Обертка для handleSubmit, чтобы обрабатывать уведомления
  const handleFormSubmit = async (formData) => {
    const result = await authenticate(formData);
    if (result) {
      setNotification({
        open: true,
        message: 'Успешная авторизация!',
        severity: 'success',
      });
        // Устанавливаем тайм-аут, чтобы переход был через 2 секунды после отображения уведомления
    setTimeout(() => {
      // Переход на страницу после паузы
      login(result.token);  // Вход через контекст
      navigate('/catalog');
    }, 2000);  // Пауза 2 секунды 
    } else {
      setNotification({
        open: true,
        message: error || 'Ошибка авторизации',
        severity: 'error',
      });
    }
  };

  useEffect(() => {
    if (auth) {
      navigate('/catalog');
    }
  }, [auth, navigate]);




  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h5" align="left" gutterBottom color="#212121">
        Вход
      </Typography>

      {/* Поле для логина */}
      <TextField
        label="Логин"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="Введите e-mail"
        {...register('login', {
          required: 'Введите корректный e-mail адрес',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: 'Введите корректный e-mail',
          },
        })}
        error={!!errors.login}
        helperText={errors.login ? errors.login.message : ''}
        fullWidth
      />

      {/* Поле для пароля с кнопкой "глазок" */}
      <TextField
        label="Пароль"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="Введите пароль"
        type={showPassword ? 'text' : 'password'}
        {...register('password', { required: 'Введите корректный пароль' })}
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ''}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Кнопка входа */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Войти
      </Button>

      {/* Компонент уведомления */}
      <AuthNotification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleCloseNotification}
      />
    </Box>
  );
};

export default AuthForm;
