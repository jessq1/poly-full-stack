import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as authService from '../services/authService'
import { Button, TextField } from '@mui/material';
import {MemoryHistory} from 'history'


interface IProps {
    history: MemoryHistory,
    handleSignupOrLogin: () => Promise<void>,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

const LoginForm: React.FC<IProps> = (props) => {

    const [input, setInput] = useState({
            email: '',
            password: '',
    })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    props.setMessage('')
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { history, handleSignupOrLogin } = props
    e.preventDefault()
    try {
      await authService.login(input)
      handleSignupOrLogin()
      history.push('/')
    } catch (err: any) {
      alert('Invalid Credentials')
    }
  }

    const { email, password } = input
    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
           <Button  color={'primary'} variant="outlined" type='submit' >Login</Button>
           <Button component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>

         </div>
      </form>
    )

}

export default LoginForm
