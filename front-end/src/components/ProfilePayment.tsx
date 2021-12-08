import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Divider, Button, Grid } from '@mui/material';
import {dateDM} from '../styles/date'
import {IPayment} from '../types/models'

interface IProps {
    payment: IPayment,
    userProfile: any,
}

const ProfilePayment: React.FC<IProps> = ({ userProfile, payment }) => {
    const dateString = dateDM(payment.created)

  return (
    <>
    <Divider light sx={{width: '90%', my: 1.5 }}/>
    <Box sx={{display: 'flex', gap: '1rem'}}>
    {(payment.paymentFrom?._id === userProfile?._id ) ? 
            <Typography variant={'subtitle2'} > Your paid  {payment.paymentTo.firstName} {payment.paymentTo.lastName}  $ {payment.amount}</Typography> : <Typography variant={'subtitle2'} > {payment.paymentFrom.firstName} {payment.paymentFrom.lastName} paid you $ {payment.amount} </Typography>} 

    <Typography variant={'body2'} sx={{color: 'text.secondary'}}  >{dateString}</Typography>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant={'body2'} color='primary' >{payment.note}</Typography>
    </Box>
    </>
  );
}
 
export default ProfilePayment;
