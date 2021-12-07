import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { createMemoryHistory } from 'history';

// connection to backend
import * as authService from '../services/authService'
import * as profileService from '../services/profileService'
import { createPayment } from '../services/paymentService'

// Component and pages
import NavBar from '../components/NavBar';
import SideNavBar from '../components/SideNavBar';
import SpeedAdd from '../components/SpeedAdd';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Landing from './Landing/Landing'
import Auth from './Auth/Auth';
import Users from './Users/Users';
import AddPayment from './AddPayment/AddPayment';
import PaymentIndex from './PaymentIndex/PaymentIndex';
import Notification from './Notification/Notification';
import Checkout from './Checkout/Checkout';
import NotFound from './NotFound/NotFound';

// styles:
import {ThemeProvider} from '@mui/material/styles';
import { theme } from '../styles/theme';

//types:
import {IProfile} from '../types/models'

interface infoProps {
  user: any,
	userProfile: any,
  verificationLink: any, 
}

function App() {
  let history = createMemoryHistory();
  const navigate = useNavigate()
  const [info, setInfo] = useState<infoProps>({
    user: authService.getUser(),
		userProfile: null,
    verificationLink: null
  })
  const [open, setOpen] = React.useState(false);
  const [payments, setPayments] = useState<any>([])

  useEffect( () => {
    async function fetchProfile(){
      if (!info.userProfile){
        const profile = await profileService.getUserProfile()
        setInfo({
          ...info,
          userProfile: profile,
      })
      }
    }
    fetchProfile()
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    authService.logout()
    setInfo({user:null, userProfile: null,verificationLink: null,})
    navigate('/')
  }

  const handleSignupOrLogin = async () => {
		setInfo({ user: authService.getUser(), userProfile: await profileService.getUserProfile(), verificationLink: null })
	}

  const handleVerifyAccount = async (userProfile: any) => {
		const verificationLink = await profileService.directToStripeAuth(userProfile)
		setInfo({
      ...info,
      verificationLink: verificationLink,
  })
	}

  const handleAddFriend = async (friendId: string) => {
		const updatedProfile = await profileService.friend(friendId)
    setInfo({
      ...info,
      userProfile: updatedProfile,
  })
	}

	const handleRemoveFriend = async (friendId: string) => {
		const updatedProfile = await profileService.unfriend(friendId)
		setInfo({
      ...info,
      userProfile: updatedProfile,
  })
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
            <Route path='*' element={<NotFound />} />

            <Route path='/' element={<Landing user={info.user} />} />
            <Route path='/signup' element={<Signup history={history} handleSignupOrLogin={handleSignupOrLogin} userProfile={info.userProfile} />} />
            <Route path='/login' element={<Login history={history} handleSignupOrLogin={handleSignupOrLogin} />} />
            <Route path='/stripeauth' element={info.user ? <Auth user={info.user} userProfile={info.userProfile} handleVerifyAccount={handleVerifyAccount} verificationLink={info.verificationLink} />: <Navigate to='/login' /> } />
            <Route path='/users' element={info.user ? <Users userProfile={info.userProfile} handleAddFriend={handleAddFriend} handleRemoveFriend={handleRemoveFriend} /> : <Navigate to='/login' />} />
            <Route path='/addpayment' element={info.user ? <AddPayment userProfile={info.userProfile}/>: <Navigate to='/login' /> }  />
            <Route path='/payments' element={info.user ? <PaymentIndex userProfile={info.userProfile}/>: <Navigate to='/login' /> }  />
            <Route path='/checkout/:id' element={info.user ? <Checkout userProfile={info.userProfile}/>: <Navigate to='/login' /> }  />
            <Route path='/notifications' element={info.user ? <Notification userProfile={info.userProfile} /> : <Navigate to='/login' />  }  />

          </Routes>
        </SideNavBar>
        <SpeedAdd />
    </ThemeProvider>
  );
}

export default App;
