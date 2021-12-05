import React from 'react'
import {Typography, Card, Box, Avatar, Button, Grid } from '@mui/material';
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
}

const PaymentCard: React.FC<IProps> = ({ payment }) => {

  return (
    <>
    <Grid item xs={12} md={6} lg={4}>
    <Box m={2}>
    </Box>
    <Card>
    <Box m={2}>
    <Grid container spacing={2}>
        <Grid item xs={4} sm={2}>
            <Avatar alt="User Avatar" src={payment.paymentFrom?.avatar} variant="rounded"/>
        </Grid>
        <Grid item xs={8} sm={10}>
            <Typography variant={'h6'} key={payment._id}> 
                {payment.paymentFrom?.firstName} {payment.paymentFrom?.lastName} paid {payment.paymentTo?.firstName} {payment.paymentTo?.lastName} $ {payment.amount}.
            </Typography>
            <Box mx={1}>
            <Typography variant={'subtitle1'} key={payment._id}>
                {payment.note}
            </Typography>
            </Box>
        </Grid>
    </Grid>
    </Box>
    </Card>
    </Grid>
    </>
  );
}
 
export default PaymentCard;
