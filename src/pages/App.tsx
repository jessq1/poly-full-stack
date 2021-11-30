import React from 'react';
import Header from '../components/Header';

// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Header title = 'poly'/>
        
    </div>
    </ThemeProvider>
  );
}

export default App;
