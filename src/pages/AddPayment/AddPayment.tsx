import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, FormControl, InputLabel, Input, InputAdornment, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CardElement } from '@stripe/react-stripe-js';

interface IProps {
    handleCreatePayment: (PaymentData: any) => void,
    userProfile: any,
}

interface State {
    amount: string;
    person: string;
    method: string;
  }

const AddPayment: React.FC<IProps> = ({ handleCreatePayment, userProfile }) => {
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
  const handlePersonChange = (event: SelectChangeEvent) => {
    setFormData({...formData, person: event.target.value as string});
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      handleCreatePayment(formData)
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
          {/* <Input
            id="name"
            value={person}
            onChange={handleChange('person')}
          /> */}
          <Select
            labelId="label"
            id="standard"
            value={person}
            onChange={handlePersonChange}
            label="Name"
        >
          {userProfile?.friends.map((friend: any) => {
            return <MenuItem value={friend?._id}>{friend?.firstName}  {friend?.lastName} </MenuItem>
          }
          )}
        </Select>
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