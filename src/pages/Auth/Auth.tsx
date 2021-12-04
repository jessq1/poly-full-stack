import React, {useEffect} from 'react'
import * as profileService from '../../services/profileService'

interface IProps {
  user: any,
  userProfile: any
}

const Auth: React.FC<IProps> = ({user, userProfile}) => {
    useEffect(()=> {
        async function fetchUrl(userProfile: any){
            const url = await profileService.directToStripeAuth(userProfile)
            console.log(url)
        }
        fetchUrl(userProfile)
      }, [userProfile])

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