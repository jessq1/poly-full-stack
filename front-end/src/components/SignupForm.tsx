import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../services/authService'
import { Button, TextField } from '@mui/material';
import {MemoryHistory} from 'history'


interface IProps {
    history: MemoryHistory,
    handleSignupOrLogin: () => Promise<void>,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
    userProfile: any,
}

const SignupForm: React.FC<IProps> = (props) => {

    const navigate = useNavigate()
    const [input, setInput] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
    })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    props.setMessage('')
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { setMessage, handleSignupOrLogin } = props
    e.preventDefault()
    try {
      await authService.signup(input)
      handleSignupOrLogin()
      navigate('/')
    } catch (err: any) {
        setMessage(err.message)
    }
  }

  const isFormInvalid = () => {
    const { firstName, lastName, email, password, passwordConf } = input
    return !(firstName && lastName && email && password === passwordConf && password !== '')
  }


    const { firstName, lastName, email, password, passwordConf } = input
    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
         <div style={{margin: '.8rem'}}>
           <TextField
             type="text"
             autoComplete="off"
             id="firstName"
             value={firstName}
             name="firstName"
             onChange={handleChange}
             label="First Name"
             variant="outlined"
           />
         </div>
         <div style={{margin: '.8rem'}}>
           <TextField
             type="text"
             autoComplete="off"
             id="lastName"
             value={lastName}
             name="lastName"
             onChange={handleChange}
             label="Last Name"
             variant="outlined"
           />
         </div>
         <div style={{margin: '.8rem'}}>
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
         <div style={{margin: '.8rem'}}>
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
         <div style={{margin: '.8rem'}}>
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
           <Button style={{margin: '.5rem'}} color={'primary'} variant="outlined" type='submit' disabled={isFormInvalid()} >Sign Up</Button>
           <Button style={{margin: '.5rem'}} component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>
         </div>

      </form>
    )

}

export default SignupForm
