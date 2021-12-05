import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Card, Box, Divider, Button, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
    handleDeletePayment: (id: string) => void,
}

const PendingPayments: React.FC<IProps> = ({ payment, handleDeletePayment }) => {

  return (
    <>
    {(payment.methodIsPay) ? 
            <Typography variant={'subtitle1'} key={payment._id}> Your request to pay {payment.person.firstName} {payment.person.lastName}  $ {payment.amount} is still pending</Typography> : <Typography variant={'subtitle1'} key={payment._id}> Your request to {payment.person.firstName} {payment.person.lastName} is still pending </Typography>} 
      <Button onClick={()=> handleDeletePayment(payment._id)}>Delete</Button>
    </>
  );
}
 
export default PendingPayments;
