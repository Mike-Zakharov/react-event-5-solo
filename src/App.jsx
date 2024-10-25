import './App.css';
import AppBar from './components/AppBar';

import RandomCatBlock from './components/testing-zustand/block';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <RandomCatBlock />
    </>
  );
}

export default App;
