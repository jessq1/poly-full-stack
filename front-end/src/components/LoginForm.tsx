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
}

const LoginForm: React.FC<IProps> = (props) => {

    const [input, setInput] = useState({
            email: '',
            password: '',
    })

    const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    props.setMessage('')
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { handleSignupOrLogin } = props
    e.preventDefault()
    try {
      await authService.login(input)
      handleSignupOrLogin()
      navigate('/notifications')
    } catch (err: any) {
      alert('Invalid Credentials')
    }
  }
  const isFormInvalid = () => {
    const { email, password } = input
    return !( email && password !== '')
  }

    const { email, password } = input
    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
         <div style={{margin: '.8rem'}} >
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
         <div style={{margin: '.8rem'}} >
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
           <Button style={{margin: '.5rem'}} color={'primary'} variant="outlined" type='submit' disabled={isFormInvalid()} >Login</Button>
           <Button style={{margin: '.5rem'}} component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>

         </div>
      </form>
    )

}

export default LoginForm
