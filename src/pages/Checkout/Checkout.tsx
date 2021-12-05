import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

interface IProps {
    payment: any,
}

const Checkout: React.FC<IProps> = ({ payment }) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
        return;
      }
    const result = await stripe.confirmCardPayment(payment.stripePaymentIntentId, {
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
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
        }
      }
  }


  return (
      <>
    <Button component={Link} to="/" color={'primary'} variant="text" >Cancel</Button>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    > 
        <CardElement options={CARD_ELEMENT_OPTIONS}/>
        <Button disabled={!stripe}>Confirm</Button>
    </form>
    </>
  );
}
 
export default Checkout;