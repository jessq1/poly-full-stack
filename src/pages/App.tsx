import React, {Component, useState} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { createMemoryHistory } from 'history';

// connection to backend
import * as authService from '../services/authService'
import * as profileAPI from '../services/profileService'
import { createPayment, getPayments, deletePayment, updatePayment } from '../services/paymentService'


// Component and pages
import NavBar from '../components/NavBar';
import SideNavBar from '../components/SideNavBar';
import SpeedAdd from '../components/SpeedAdd';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Landing from './Landing/Landing'
import AddPayment from './AddPayment/AddPayment';

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
  const [open, setOpen] = React.useState(false);
  const [payments, setPayments] = useState<any>([])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    authService.logout()
    setInfo({user:null, userProfile: null,})
    navigate('/')
  }

  const handleSignupOrLogin = async () => {
		setInfo({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}

  const handleCreatePayment = (PaymentData: any) => {
		createPayment(PaymentData)
		.then(newPaymentData => setPayments([...payments, newPaymentData]))
	}
  return (
    <ThemeProvider theme={theme}>
        <NavBar title = 'poly' user={info.user} handleLogout={handleLogout} open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideNavBar  user={info.user} open={open} handleDrawerClose={handleDrawerClose} >
          <Routes>

            <Route path='/' element={<Landing user={info.user} />} />
            <Route path='/signup' element={<Signup history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
            <Route path='/login' element={<Login history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
            <Route path='/addpayment' element={<AddPayment handleCreatePayment={handleCreatePayment} />}  />
          </Routes>
        </SideNavBar>
        <SpeedAdd />
    </ThemeProvider>
  );
}

export default App;
