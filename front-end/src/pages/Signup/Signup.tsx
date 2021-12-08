import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
import { Box, Button, Typography, Divider } from '@mui/material';
import { MemoryHistory } from 'history'
import { Link } from 'react-router-dom'


interface IProps {
  history: MemoryHistory,
  handleSignupOrLogin: () => Promise<void>,
  userProfile: any,
}

const Signup: React.FC<IProps> = ({history, handleSignupOrLogin, userProfile}) => {

  const [message, setMessage] = useState('')

    return (
      <>
        <Box mr={5} my={3} p={5} sx={{
          display: 'flex',
        }} >
        <Box sx={{
          margin: 'auto',
          textAlign: 'center',
        }}>
          <Typography variant={'h5'} color={'primary'}
            sx={{
              letterSpacing:8,
            }} >SIGN UP</Typography>
          <Typography variant={'body1'} color={'primary'}>{message}</Typography>

          <Box mx={2} my={3} >
          <Divider/>
          </Box>
          <SignupForm 
            history={history} 
            handleSignupOrLogin={handleSignupOrLogin}
            message={message} 
            setMessage={setMessage}
            userProfile={userProfile} />
          <div>
          <Typography variant={'subtitle1'} color={'black'}>Already have an account? Login</Typography>
          <Button style={
            {display: 'inline', 
            textDecoration:'underline',
            fontWeight: 600}} 
            color={'secondary'} href='/login'>HERE</Button>
          </div>
        </Box>
        </Box>

      </>
    )
}

export default Signup
