import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Divider, Button } from '@mui/material';
import {IPayment} from '../types/models'
import {dateDM} from '../styles/date'


interface IProps {
    payment: IPayment,
    
}

const IncompeletePayments: React.FC<IProps> = ({ payment }) => {
  const dateString = dateDM(payment.created)

  return (
    <>
    <Divider />
    <Box sx={{display: 'flex', m: 1, justifyContent: 'space-between'}} >
      <Box>
      {(payment.methodIsPay) ? 
        <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to pay you $ {payment.amount} </Typography> : <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to request $ {payment.amount} from you </Typography>}
        <Typography variant={'body2'} color={'primary'}>{dateString}</Typography>
        <Typography variant={'body2'} sx={{color: 'text.secondary'}}>Note: {payment.note}</Typography>
      </Box>
    {(payment.methodIsPay) ? 
        <Button>OK</Button> :
        <Button component={Link} to={`/checkout/${payment._id}`} color={'primary'} variant="text" sx={{ mx: 2 }}>Complete</Button>}
    </Box>
    </>
  );
}
 
export default IncompeletePayments;
