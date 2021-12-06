import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
// import styles from './Signup.module.css'
import { Box, Typography, Divider } from '@mui/material';
import { MemoryHistory } from 'history'

interface IProps {
  history: MemoryHistory,
  handleSignupOrLogin: () => Promise<void>,
  userProfile: any,
}

const Signup: React.FC<IProps> = ({history, handleSignupOrLogin, userProfile}) => {

  const [message, setMessage] = useState('')

    return (
      <>
        <Box mr={5} my={3} p={5} >

        <Typography variant={'h4'} color={'primary'}>SIGN UP</Typography>
        <Typography variant={'body1'} color={'primary'}>{message}</Typography>

        <Box mr={5} my={3} >
        <Divider/>
        </Box>
        <SignupForm 
          history={history} 
          handleSignupOrLogin={handleSignupOrLogin}
          message={message} 
          setMessage={setMessage}
          userProfile={userProfile} />
        </Box>
        <div className='player-wrapper'>
        <Typography variant={'subtitle1'} color={'black'}>Already have an account? Login</Typography>
        <a href="/login">HERE</a>
        </div>

      </>
    )
}

export default Signup
