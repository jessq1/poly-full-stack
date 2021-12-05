import React from 'react'
import {Typography, Card, Box, Avatar, Button, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
}

const PaymentCard: React.FC<IProps> = ({ payment }) => {

  return (
    <>
    <Box m={2}>

    </Box>
    <Card>
    <Box m={2}>
    <Avatar 
        // className={classes.avatar} 
        alt="User Avatar" src={payment.paymentFrom?.avatar} variant="rounded"/>
    <Typography variant={'h6'} key={payment._id}> 
        {payment.paymentFrom?.firstName} {payment.paymentFrom?.lastName} paid {payment.paymentTo?.firstName} {payment.paymentTo?.lastName} $ {payment.amount}.
    </Typography>
    <Box mx={1}>
    <Typography variant={'subtitle1'} key={payment._id}>
        {payment.note}
    </Typography>
    </Box>
    </Box>
    </Card>
    </>
  );
}
 
export default PaymentCard;
