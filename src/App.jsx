import { useState } from 'react';
import './App.css';
import AppBar  from './components/AppBar';

import BearCounter from './components/testing-zustand/block';

function App() {

  return (
    <>
      <AppBar />
      <BearCounter />
    </>
  );
}

export default App;
