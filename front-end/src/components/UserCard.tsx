import React from 'react'
import { Link } from 'react-router-dom'
import {Avatar, Card, Box, Divider, Button, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { styled } from '@mui/material/styles';

interface IProps {
    profile: any,
    userProfile: any,
    handleAddFriend: (friendId: string) => Promise<void>,
    handleRemoveFriend: (friendId: string) => Promise<void>
}


const UserCard: React.FC<IProps> = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
    // const classes = useStyles();

  return (
    <>
    <Grid item xs={12} md={6} lg={4} >
    <Box m={3} 
        >
    <Card >
      <Box m={1} pt={2}
        sx={{ 
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
             }} >
    <Avatar 
        className="avatar"
        alt="User Avatar" src={profile.avatar} variant="rounded"/>

        <h4>{profile.firstName} {profile.lastName}</h4>
      <Divider/>
      <Box m={1} >
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some((eachProfile: any) => eachProfile._id === profile._id)) &&
      <Button 
        size="small" variant="contained" color="secondary" startIcon={<PersonAddIcon />} onClick={() => handleAddFriend(profile._id)}> Friend</Button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some((eachProfile: any) => eachProfile._id === profile._id)) &&
      <Button 
        size="small" variant="contained" startIcon={<RemoveCircleIcon />}onClick={() => handleRemoveFriend(profile._id)}> Unfriend</Button> 
      }   
      </Box>
      </Box>
    </Card>
    </Box>
    </Grid>
    </>
  );
}
 
export default UserCard;
