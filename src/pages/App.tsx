import React, {Component, useState} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { createMemoryHistory } from 'history';

// connection to backend
import * as authService from '../services/authService'
import * as profileAPI from '../services/profileService'

// Component and pages
import Header from '../components/Header';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Landing from './Landing/Landing'

// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';


function App() {
  let history = createMemoryHistory();
  const navigate = useNavigate()
  const [info, setInfo] = useState({
    user: authService.getUser(),
		userProfile: null,
})

  const handleLogout = () => {
    authService.logout()
    setInfo({user:null, userProfile: null,})
    navigate('/')
  }

  const handleSignupOrLogin = async () => {
		setInfo({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}
  return (
    <ThemeProvider theme={theme}>
        <Header title = 'poly'/>
        <Routes>
        
          <Route path='/' element={<Landing user={info.user} />} />
          <Route path='/signup' element={<Signup history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
          <Route path='/login' element={<Login history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
