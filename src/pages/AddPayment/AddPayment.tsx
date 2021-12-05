import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createPayment } from '../../services/paymentService'

import { Button, FormControl, InputLabel, Input, InputAdornment, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
    userProfile: any,
}

interface State {
    amount: string;
    person: string;
    note: string;
    methodIsPay: boolean;
  }

const AddPayment: React.FC<IProps> = ({ userProfile }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    amount: '',
    person: '',
    note: '',
    methodIsPay: true
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
      createPayment(formData)
      .then(newPaymentData => {
        if(newPaymentData?.methodIsPay) {
          navigate(`/checkout/${newPaymentData?._id}`)
        } else {
          navigate('/')
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  const { amount, person, note } = formData

  const isFormInvalid = () => {
    return !(parseInt(amount) && person)
  }

  return (
      <>
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
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="name">Note</InputLabel>
          <Input
            id="name"
            value={note}
            onChange={handleChange('note')}
          />
        </FormControl>
      <Button color={'primary'} variant="outlined" 
        type='submit' name='pay' 
        onClick={() => (setFormData({ ...formData, methodIsPay: true }))} 
        disabled={isFormInvalid()}>
            Pay
        </Button>
      <Button color={'primary'} variant="outlined" 
        type='submit' name='request' 
        onClick={() => (setFormData({ ...formData, methodIsPay: false }))} 
        disabled={isFormInvalid()} >
            Request
        </Button>
    </form>
    </>
  );
}
 
export default AddPayment;