import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Создаем светлую и темную темы
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function ThemeSwitcher({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // Состояние для переключения темы

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode); // Меняем тему
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
      {/* Переключатель темы */}
      <Switch checked={isDarkMode} onChange={handleThemeChange} />
    </ThemeProvider>
  );
}
