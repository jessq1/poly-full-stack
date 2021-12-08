import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Divider, Button } from '@mui/material';
import {IPayment} from '../types/models'
import {dateDM} from '../styles/date'

interface IProps {
    payment: IPayment,
    handleDeletePayment: (id: string) => void,
}

const PendingPayments: React.FC<IProps> = ({ payment, handleDeletePayment }) => {
  const dateString = dateDM(payment.created)

  return (
    <>
    <Divider />
    <Box sx={{display: 'flex', m: 1, justifyContent: 'space-between', alignItems: 'center' }} >
      <Box>
    {(payment.methodIsPay) ? 
        <Typography variant={'subtitle1'} key={payment._id}> Your request to pay {payment.person.firstName} {payment.person.lastName}  $ {payment.amount} is incomplete</Typography> : <Typography variant={'subtitle1'} key={payment._id}> Your request to {payment.person.firstName} {payment.person.lastName} is still pending </Typography>} 
        <Typography variant={'body2'} color={'primary'}>{dateString}</Typography>
        <Typography variant={'body2'} sx={{color: 'text.secondary'}}>Note: {payment.note}</Typography>
      </Box>
      {(payment.methodIsPay) ? 
          <Button component={Link} to={`/checkout/${payment._id}`} color='primary' disableElevation variant="contained">Complete</Button> :
          <Button onClick={()=> handleDeletePayment(payment._id)} color='secondary' disableElevation variant="contained">Delete</Button> }
    </Box>
    </>
  );
}
 
export default PendingPayments;
