import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import {Box, Typography, Divider } from '@mui/material';
import {MemoryHistory} from 'history'

interface IProps {
  history: MemoryHistory,
  handleSignupOrLogin: () => Promise<void>,
}

const Login: React.FC<IProps> = ({history, handleSignupOrLogin}) => {

  const [message, setMessage] = useState('')

    return (
      <>
        <Box mr={5} my={3} p={5} >

        <Typography variant={'h4'} color={'primary'}>LOG IN</Typography>
        <Typography variant={'body1'} color={'primary'}>{message}</Typography>

        <Box mr={5} my={3} >
        <Divider/>
        </Box>
        <LoginForm 
          history={history} 
          handleSignupOrLogin={handleSignupOrLogin}
          message={message} 
          setMessage={setMessage} />
        </Box>
        <Typography variant={'subtitle1'} color={'black'}>Don't have an account yet? Sign up</Typography>
        <a href="/signup">HERE</a>

      </>
    )
}

export default Login
