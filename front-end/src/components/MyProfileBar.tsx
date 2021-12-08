import React, { useState, useEffect } from 'react'
import { getProfilePayments } from '../services/paymentService'

import {Avatar, Card, Box, Divider, Button, Grid, Typography } from '@mui/material';
import { drawerWidth } from '../styles/nav'
import ProfilePayment from '../components/ProfilePayment'
import {date} from '../styles/date'
import {IPayment} from '../types/models'

interface IProps {
    user: any,
    userProfile: any,
    verificationLink: any,
}


const MyProfileBar: React.FC<IProps> = ({ user, userProfile, verificationLink }) => {
    const dateString = date(user.createdAt)
    const [profilePayments, setProfilePayments] = useState<IPayment[]>([])

    useEffect(()=> {
		getProfilePayments()
		.then(profilePayments => setProfilePayments(profilePayments))
	}, [])

    return (
        <>
        <Box sx={{
            width: drawerWidth, 
            mx: 3,
            my: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Avatar 
            className="avatar"
            alt="User Avatar" src={user.avatar} 
            sx={{ width: '5rem', height: '5rem', mb: 2 }}/>
        <Typography variant="h6" >{user.firstName} {user.lastName}</Typography>
        <Typography variant="subtitle2" >Member since {dateString}</Typography>
        <Divider sx={{width: '100%', my: 2}} />
        <Typography variant="subtitle2" >Recent Transactions:</Typography>

        {profilePayments.map((payment) => (
            <ProfilePayment userProfile={userProfile} payment={payment} key={payment._id} />
        )
        )}
            
        </Box>

        </>
    )
    }

export default MyProfileBar