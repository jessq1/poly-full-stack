import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import { Box, Button, Typography, Divider } from '@mui/material';
import {MemoryHistory} from 'history'

interface IProps {
  history: MemoryHistory,
  handleSignupOrLogin: () => Promise<void>,
}

const Login: React.FC<IProps> = ({history, handleSignupOrLogin}) => {

  const [message, setMessage] = useState('')

    return (
      <>
        <Box mr={5} my={3} p={5} sx={{
          display: 'flex',
        }}  >
        <Box sx={{
          margin: 'auto',
          textAlign: 'center',
        }}>

        <Typography variant={'h5'} color={'primary'}
          sx={{
            letterSpacing:8,
          }}>LOG IN</Typography>
        <Typography variant={'body1'} color={'primary'}>{message}</Typography>

        <Box mx={5} my={3} >
        <Divider/>
        </Box>
        <LoginForm 
          history={history} 
          handleSignupOrLogin={handleSignupOrLogin}
          message={message} 
          setMessage={setMessage} />
        <Typography variant={'subtitle1'} color={'black'}>Don't have an account yet? Sign up</Typography>
        <div>
        <Button style={
            {display: 'inline', 
            textDecoration:'underline',
            fontWeight: 600}} 
            color={'secondary'} href='/signup'>HERE</Button>
        </div>
        </Box>
        </Box>

      </>
    )
}

export default Login
