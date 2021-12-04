import React, { useState, useEffect } from 'react';
import { getAllProfiles } from '../../services/profileService'
import {IProfile} from '../../types/models'

import {Box, Grid, Typography} from '@mui/material';
import UserCard from '../../components/UserCard';

interface IProps {
    userProfile: any,
    handleAddFriend: (friendId: string) => Promise<void>,
    handleRemoveFriend: (friendId: string) => Promise<void>
}

const Users: React.FC<IProps> = ({userProfile, handleAddFriend, handleRemoveFriend}) => {
  const [profiles, setProfiles] = useState<IProfile[]>([])

  useEffect(()=> {
    getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
    <Box ml={35} mr={5} my={3}>
      <Typography variant={'h4'}>All Users</Typography>
      <Box my={3}>
        <Grid container spacing={3}>
      {profiles.length ? 
      <>
        {profiles.map(profile=>
        // <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
        <UserCard 
            profile={profile}
            key={profile._id}
            userProfile={userProfile}
            handleAddFriend={handleAddFriend}
            handleRemoveFriend={handleRemoveFriend}
        />
        //   <p key={user._id}>{user.firstName} {user.lastName}</p>
        //   </Grid>
        )}
      </>
      :
        <p>An error occured</p>
      }
        </Grid>
      </Box>
    </Box>
    </>
  );
}
 
export default Users;