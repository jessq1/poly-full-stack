import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import * as authService from '../../services/authService'
import {Box,  Button, TextField } from '@mui/material';

// interface IState {
//     user: {
//         name: string,
//         email: string,
//         password: string,
//         passwordConf: string,
//     }[]
// }

function SignupForm() {

    const [input, setInput] = useState({
            name: '',
            email: '',
            password: '',
            passwordConf: '',
    })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
//     props.updateMessage('')
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
  }

//   handleSubmit = async e => {
//     const { history, updateMessage, handleSignupOrLogin } = props
//     e.preventDefault()
//     try {
//       await authService.signup(state)
//       handleSignupOrLogin()
//       history.push('/')
//     } catch (err) {
//       updateMessage(err.message)
//     }
//   }

  const isFormInvalid = () => {
    const { name, email, password, passwordConf } = input
    return !(name && email && password === passwordConf)
  }


    const { name, email, password, passwordConf } = input
    return (
      <form
        autoComplete="off"
    //     onSubmit={handleSubmit}
      >
         <div >
           <TextField
             type="text"
             autoComplete="off"
             id="name"
             value={name}
             name="name"
             onChange={handleChange}
             label="Name"
             variant="outlined"
           />
         </div>
         <div >
           <TextField
             type="text"
             autoComplete="off"
             id="email"
             value={email}
             name="email"
             onChange={handleChange}
             label="Email"
             variant="outlined"
           />
         </div>
         <div >
           <TextField
             type="password"
             autoComplete="off"
             id="password"
             value={password}
             name="password"
             onChange={handleChange}
             label="Password"
             variant="outlined"
           />
         </div>
         <div >
           <TextField
             type="password"
             autoComplete="off"
             id="confirm"
             value={passwordConf}
             name="passwordConf"
             onChange={handleChange}
             label="Confirm Password"
             variant="outlined"
           />
         </div>
         <div >
           <Button  color={'primary'} variant="outlined" type='submit' disabled={isFormInvalid()} >Sign Up</Button>
           <Button component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>

         </div>
      </form>
    // <div>SignupForm</div>
    )

}

export default SignupForm
