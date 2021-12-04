import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import {IUser} from '../../types/models'

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

  return (
    <>
      <h1>All Users</h1>
      {users.length ? 
      <>
        {users.map(user=>
          <p key={user._id}>{user.firstName} {user.lastName}</p>
        )}
      </>
      :
        <p>An error occured</p>
      }
    </>
  );
}
 
export default Users;