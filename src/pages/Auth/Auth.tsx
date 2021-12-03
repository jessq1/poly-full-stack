import React, {useEffect} from 'react'
import * as profileService from '../../services/profileService'

interface IProps {
  user: any,
}

const Auth: React.FC<IProps> = ({user}) => {
    useEffect(()=> {
        profileService.directToStripeAuth()
      }, [])

      return (
        <>
          
          <main >
            <h1>
              stripe auth
            </h1>
          </main>
  
        </>
      )
  };
   
export default Auth