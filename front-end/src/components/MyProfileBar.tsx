import React from 'react'
import {Avatar, Card, Box, Divider, Button, Grid, Typography } from '@mui/material';
import { drawerWidth } from '../styles/nav'
import {date} from '../styles/date'

interface IProps {
    user: any,
    // userProfile: any,
}


const MyProfileBar: React.FC<IProps> = ({ user }) => {
    const dateString = date(user.createdAt)

    return (
        <>
        <Box sx={{
            width: drawerWidth, 
            m: 3,
            mt: 6,
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

        </Box>

        </>
    )
    }

export default MyProfileBar