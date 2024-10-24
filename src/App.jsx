import { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';

import RandomCatBlock from './components/testing-zustand/block';

function App() {
  return (
    <>
      <AppBar />
      <RandomCatBlock />
    </>
  );
}

export default App;
