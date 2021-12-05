import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPayments, getIncompeltePayments, getPendingPayments } from '../../services/paymentService'

import {IPayment} from '../../types/models'

import {Box, Grid, Typography} from '@mui/material';

interface IProps {
    userProfile: any,
}

const Notification: React.FC<IProps> = ({ userProfile }) => {
    const [allPayments, setAllPayments] = useState<IPayment[]>([])
    const [incompeletePayments, setIncompeletePayments] = useState<IPayment[]>([])
    const [pendingPayments, setPendingPayments] = useState<IPayment[]>([])


    useEffect(()=> {
		getPayments()
		.then(allPayments => setAllPayments(allPayments))
	}, [])

    useEffect(()=> {
		getIncompeltePayments()
		.then(incompeletePayments => setIncompeletePayments(incompeletePayments))
	}, [])

    useEffect(()=> {
		getPendingPayments()
		.then(pendingPayments => setPendingPayments(pendingPayments))
	}, [])

  return (
      <>
      <Box ml={5} mr={5} my={3}>
      <Typography variant={'h4'}>Incompelte Requests:</Typography>
      {incompeletePayments.map((payment) => {
        return     (payment.methodIsPay) ? 
            <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to pay you $ {payment.amount} </Typography> : <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to request $ {payment.amount} from you </Typography>
          }
          )}
    <Typography variant={'h4'}>Pending Requests:</Typography>
      {pendingPayments.map((payment) => {
        return     (payment.methodIsPay) ? 
            <Typography variant={'subtitle1'} key={payment._id}> Your request to pay {payment.person.firstName} {payment.person.lastName}  $ {payment.amount} is still pending</Typography> : <Typography variant={'subtitle1'} key={payment._id}> Your request to {payment.person.firstName} {payment.person.lastName} is still pending </Typography>
          }
          )}
    <Typography variant={'h4'}>Previouse payments:</Typography>
        {allPayments.map((payment) => {
            return <Typography variant={'h4'} key={payment._id}>{payment._id}</Typography>
          }
          )}
      </Box>
    </>
  );
}
 
export default Notification;