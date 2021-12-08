import React, { useState, useEffect } from 'react'
import { getProfilePayments } from '../services/paymentService'

import {Avatar, Box, Divider, Button, Typography } from '@mui/material';
import ProfilePayment from '../components/ProfilePayment'
import {date} from '../styles/date'
import {IPayment} from '../types/models'

interface IProps {
    user: any,
    userProfile: any,
    handleVerifyAccount: (userProfile: any) => Promise<void>
    verificationLink: any,
}


const MyProfileBar: React.FC<IProps> = ({ user, userProfile, handleVerifyAccount, verificationLink }) => {
    const dateString = date(user.createdAt)
    const [profilePayments, setProfilePayments] = useState<IPayment[]>([])

    useEffect(()=> {
		getProfilePayments()
		.then(profilePayments => setProfilePayments(profilePayments))
	}, [])

    useEffect(()=> {
        handleVerifyAccount(userProfile)
      }, [userProfile])

    return (
        <>
        <Box sx={{
            mx: 3,
            my: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Avatar 
            className="avatar"
            alt={user.firstName} 
            sx={{ width: '5rem', height: '5rem', mb: 2, color: 'primary' }}/>
        <Typography variant="h6" >{user.firstName} {user.lastName}</Typography>
        {userProfile?.stripeOnboard?
            <Typography variant="subtitle2" >Member since {dateString}</Typography> : 
            <Button href={verificationLink} >Verify with Stripe</Button>
        }
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