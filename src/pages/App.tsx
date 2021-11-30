import React from 'react';
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom'


// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header title = 'poly'/>
        <Routes>
        <Route path='/landing'>
        		</Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
