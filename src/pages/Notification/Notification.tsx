import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deletePayment, getIncompeltePayments, getPendingPayments } from '../../services/paymentService'
import IncompeletePayments from '../../components/IncompeletePayments'
import PendingPayments from '../../components/PendingPayments'

import {IPayment} from '../../types/models'

import {Box, Grid, Typography} from '@mui/material';

interface IProps {
    userProfile: any,
}

const Notification: React.FC<IProps> = ({ userProfile }) => {
    const [incompeletePayments, setIncompeletePayments] = useState<IPayment[]>([])
    const [pendingPayments, setPendingPayments] = useState<IPayment[]>([])

    const handleDeletePayment = (id:string) => {
		deletePayment(id)
		.then(deletedPayment => {
			setPendingPayments(pendingPayments.filter((payment: any) => payment._id !== deletedPayment._id))
		})
	}

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
      <Box ml={5} mr={5} my={3}>
      {incompeletePayments.map((payment) => (
        <IncompeletePayments payment={payment}/>
      )
          )}
      </Box>
    <Typography variant={'h4'}>Pending Requests:</Typography>
    <Box ml={5} mr={5} my={3}>
      {pendingPayments.map((payment) => (
        <PendingPayments payment={payment} handleDeletePayment={handleDeletePayment} />
      )
          )}
    </Box>
    
      </Box>
    </>
  );
}
 
export default Notification;