import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Card, Box, Divider, Button, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
    
}

const IncompeletePayments: React.FC<IProps> = ({ payment }) => {

  return (
    <>
    {(payment.methodIsPay) ? 
            <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to pay you $ {payment.amount} </Typography> : <Typography variant={'subtitle1'} key={payment._id}> {payment.initiator.firstName} {payment.initiator.lastName} wants to request $ {payment.amount} from you </Typography>}
                <Button>Complete</Button>
    </>
  );
}
 
export default IncompeletePayments;
