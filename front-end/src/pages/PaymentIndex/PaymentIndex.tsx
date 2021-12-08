import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPayments, getIncompeltePayments, getPendingPayments } from '../../services/paymentService'
import PaymentCard from '../../components/PaymentCard'
import {IPayment} from '../../types/models'

import {Box, Grid, Typography} from '@mui/material';

interface IProps {
    userProfile: any,
}

const PaymentIndex: React.FC<IProps> = ({ userProfile }) => {
    const [allPayments, setAllPayments] = useState<IPayment[]>([])


    useEffect(()=> {
		getPayments()
		.then(allPayments => setAllPayments(allPayments))
	}, [])

  return (
      <>
      <Box mx={5} my={3}>
      <Typography variant={'h4'}>All Payments:</Typography>
      <Box my={3}>
      <Grid container spacing={3}>
        {allPayments.map((payment) => (
          <PaymentCard payment={payment}/>
          )
          )}
        </Grid>
        </Box>
      </Box>
    </>
  );
}
 
export default PaymentIndex;