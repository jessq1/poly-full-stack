import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
// import styles from './Signup.module.css'
import {Box, Grid, Card, Typography, Divider,Chip } from '@mui/material';
import {MemoryHistory} from 'history'

interface IProps {
  history: MemoryHistory,
  handleSignupOrLogin: () => Promise<void>,
}

const Signup: React.FC<IProps> = ({history, handleSignupOrLogin}) => {

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
          setMessage={setMessage} />
        </Box>
        <div className='player-wrapper'>
            
        </div>

      </>
    )
}

export default Signup
