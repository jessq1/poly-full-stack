import React, {Component, useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history';

// connection to backend
import * as authService from '../services/authService'
import * as profileAPI from '../services/profileService'

// Component and pages
import Header from '../components/Header';
import Signup from './Signup/Signup';
import Login from './Login/Login';

// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';


function App() {
  let history = createMemoryHistory();
  const [info, setInfo] = useState({
    user: authService.getUser(),
		userProfile: null,
})

  const handleSignupOrLogin = async () => {
		setInfo({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}
  return (
    <ThemeProvider theme={theme}>
        <Header title = 'poly'/>
        <Routes>
          <Route path='/signup' element={<Signup history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
          <Route path='/login' element={<Login history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
          <Route path='/landing' />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
