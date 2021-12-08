import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPaymentInfo, updatePaymentStatus } from '../../services/paymentService'

import { Button, Box } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface IProps {
    userProfile: any,
}

const Checkout: React.FC<IProps> = ({ userProfile }) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
        return;
      }
    const paymentInfo = await getPaymentInfo(id!)
    console.log(paymentInfo)

    const result = await stripe.confirmCardPayment(paymentInfo.stripePaymentIntentId!, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: 'Poly Transactions',
          },
        }
    });
    if (result.error) {
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          paymentInfo.completed = true
          updatePaymentStatus(paymentInfo)
          navigate('/notifications')
        }

      }
  }


  return (
      <>
      <Box mx={6} my={3} >
      <Button component={Link} to="/" color={'primary'} variant="text" >Cancel</Button>
      <Box sx={{
          margin: 'auto',
          my: 3,
        }}>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        > 
            <CardElement/>
            <Button disabled={!stripe} variant="contained" type='submit' sx={{my: 5}} >Confirm Payment</Button>
        </form>
        </Box>
      </Box>
    </>
  );
}
 
export default Checkout;