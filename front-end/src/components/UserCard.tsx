import React from 'react'
import {Avatar, Card, Box, Divider, Button, Grid, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {date} from '../styles/date'
import { CgProfile } from 'react-icons/cg';

interface IProps {
    profile: any,
    userProfile: any,
    handleAddFriend: (friendId: string) => Promise<void>,
    handleRemoveFriend: (friendId: string) => Promise<void>
}


const UserCard: React.FC<IProps> = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
  const dateString = date(profile.createdAt)

  return (
    <>
    <Grid item xs={12} md={6} lg={4} >
    <Box m={3} 
      sx={{
        width:'18rem',
        margin: 'auto',
      }}
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
        alt="User Avatar" src={profile.avatar}
        sx={{ width: '3.5rem', height: '3.5rem', mb: 1.5 }} />

        <Typography variant="h6" >{profile.firstName} {profile.lastName}</Typography>
        <Typography variant="body2" >Member since {dateString}</Typography>

      <Divider/>
      <Box m={1} >
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some((eachProfile: any) => eachProfile._id === profile._id)) &&
      <Button 
        size="small" variant="contained" 
        disableElevation color="secondary" startIcon={<PersonAddIcon />} onClick={() => handleAddFriend(profile._id)}> Friend</Button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some((eachProfile: any) => eachProfile._id === profile._id)) &&
      <Button 
        size="small" variant="contained" 
        disableElevation startIcon={<RemoveCircleIcon />} onClick={() => handleRemoveFriend(profile._id)}> Unfriend</Button> 
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
