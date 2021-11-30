import { Component } from 'react'
// import SignupForm from '../../components/SignupForm'
// import styles from './Signup.module.css'
import {Box, Grid, Card, Typography, Divider,Chip } from '@mui/material';

class Signup extends Component {
  state = {
    message: '',
  }

  updateMessage = (msg: string) => {
    this.setState({ message: msg })
  }

  render() {
    return (
      <>
        <Box mr={5} my={3} p={5} >

        <Typography variant={'h4'} color={'primary'}>SIGN UP</Typography>
        {/* <Typography variant={'p'} color={'primary'}>{this.state.message}</Typography> */}

        <Box mr={5} my={3} >
        <Divider/>
        </Box>
        {/* <SignupForm {...this.props} updateMessage={this.updateMessage} /> */}
        </Box>
        <div className='player-wrapper'>
            
        </div>

      </>
    )
  }
}

export default Signup
