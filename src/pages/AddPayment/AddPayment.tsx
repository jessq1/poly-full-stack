import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, OutlinedInput, FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import { CardElement } from '@stripe/react-stripe-js';

interface IProps {
    handleCreatePayment: (PaymentData: any) => void,
}

interface State {
    amount: string;
    person: string;
    method: string;
  }

const AddPayment: React.FC<IProps> = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    amount: '',
    person: '',
    method: 'pay'
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [prop]: event.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      props.handleCreatePayment(formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  const { amount, person, method } = formData

  const isFormInvalid = () => {
    return !(parseInt(amount) && person)
  }

  return (
      <>
        {/* <CardElement /> */}
    <Button component={Link} to="/" color={'primary'} variant="text" >Cancel</Button>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    > 
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            value={amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            value={person}
            onChange={handleChange('person')}
          />
        </FormControl>
      <Button color={'primary'} variant="outlined" 
        type='submit' name='pay' 
        onClick={() => (setFormData({ ...formData, method: 'pay' }))} 
        disabled={isFormInvalid()}>
            Pay
        </Button>
      <Button color={'primary'} variant="outlined" 
        type='submit' name='request' 
        onClick={() => (setFormData({ ...formData, method: 'request' }))} 
        disabled={isFormInvalid()} >
            Request
        </Button>
    </form>
    </>
  );
}
 
export default AddPayment;