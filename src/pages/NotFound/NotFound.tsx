import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const NotFound = () => {
  
      return (
        <>
          
          <main >
            <h1>
              404 - Page Not found
            </h1>
            <Button component={Link} to="/" color={'primary'} variant="text" >Home</Button>

          </main>
  
        </>
      )
  };
   
export default NotFound