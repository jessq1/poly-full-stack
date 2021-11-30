import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import * as authService from '../../services/authService'
import {Box,  Button, TextField } from '@mui/material';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  }

//   handleChange = (e: any) => {
//     this.props.updateMessage('')
//     this.setState({
//       [e.target.name]: e.target.value,
//     })
//   }

//   handleSubmit = async e => {
//     const { history, updateMessage, handleSignupOrLogin } = this.props
//     e.preventDefault()
//     try {
//       await authService.signup(this.state)
//       handleSignupOrLogin()
//       history.push('/')
//     } catch (err) {
//       updateMessage(err.message)
//     }
//   }

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state
    return !(name && email && password === passwordConf)
  }

  render() {
    const { name, email, password, passwordConf } = this.state
    return (
    //   <form
    //     autoComplete="off"
    //     onSubmit={this.handleSubmit}
    //     className={styles.container}
    //   >
    //     <div className={styles.inputContainer}>
    //       {/* <label htmlFor="name" className={styles.label}>
    //         Name
    //       </label> */}
    //       <TextField
    //         type="text"
    //         autoComplete="off"
    //         id="name"
    //         value={name}
    //         name="name"
    //         onChange={this.handleChange}
    //         label="Name"
    //         variant="outlined"
    //       />
    //     </div>
    //     <div className={styles.inputContainer}>
    //       <TextField
    //         type="text"
    //         autoComplete="off"
    //         id="email"
    //         value={email}
    //         name="email"
    //         onChange={this.handleChange}
    //         label="Email"
    //         variant="outlined"
    //       />
    //     </div>
    //     <div className={styles.inputContainer}>
    //       <TextField
    //         type="password"
    //         autoComplete="off"
    //         id="password"
    //         value={password}
    //         name="password"
    //         onChange={this.handleChange}
    //         label="Password"
    //         variant="outlined"
    //       />
    //     </div>
    //     <div className={styles.inputContainer}>
    //       <TextField
    //         type="password"
    //         autoComplete="off"
    //         id="confirm"
    //         value={passwordConf}
    //         name="passwordConf"
    //         onChange={this.handleChange}
    //         label="Confirm Password"
    //         variant="outlined"
    //       />
    //     </div>
    //     <div className={styles.inputContainer}>
    //       <Button className={styles.Button} color={'primary'} variant="outlined" type='submit' disabled={this.isFormInvalid()} >Sign Up</Button>
    //       <Button component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>

    //     </div>
    //   </form>
    <div>SignupForm</div>
    )
  }
}

export default SignupForm
