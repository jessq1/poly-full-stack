import React from 'react'
import {Typography, Card, Box, Avatar, CardMedia, Grid } from '@mui/material';
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
}

const PaymentCard: React.FC<IProps> = ({ payment }) => {

  return (
    <>
    <Grid item xs={12} md={6} lg={4}>
    <Box m={3} sx={{
        width:'16rem',
        margin: 'auto',
      }}>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, }}>
        <Avatar alt={payment.paymentFrom?.firstName} src={payment.paymentFrom?.avatar} sx={{bgcolor: 'secondary.main', width:'3rem', height: '3rem'}} />

    <Box ml={2}>
        
            <Typography variant={'h6'} key={payment._id}> 
                {payment.paymentFrom?.firstName} {payment.paymentFrom?.lastName} 
            </Typography>
            <Typography variant={'subtitle2'} key={payment._id}> 
                paid {payment.paymentTo?.firstName} {payment.paymentTo?.lastName} $ {payment.amount}.
            </Typography>
            <Box mt={1}>
            <Typography variant={'body2'} color='secondary' key={payment._id}>
                {payment.note}
            </Typography>
            </Box>
    </Box>
    </Card>
    </Box>
    </Grid>
    </>
  );
}
 
export default PaymentCard;
