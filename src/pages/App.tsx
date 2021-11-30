import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from '../components/Header';
import Signup from './Signup/Signup';

// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header title = 'poly'/>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/landing' />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
