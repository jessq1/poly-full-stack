import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPaymentInfo, updatePaymentStatus } from '../../services/paymentService'

import { Button } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {IPayment} from '../../types/models'

interface IProps {
    userProfile: any,
}

const Checkout: React.FC<IProps> = ({ userProfile }) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams()

  const [payment, setPayment] = useState<IPayment>()

//   useEffect(()=>{
//       async function fetchPayment(id: string){
//           if (!payment) {
//               const paymentInfo = await getPaymentInfo(id!)
//               setPayment(paymentInfo)
//           }
//       }
//       fetchPayment(id!)
//   },[id])

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
    <Button component={Link} to="/" color={'primary'} variant="text" >Cancel</Button>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    > 
        <CardElement/>
        <Button disabled={!stripe} type='submit' >Confirm</Button>
    </form>
    </>
  );
}
 
export default Checkout;