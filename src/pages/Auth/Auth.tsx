import React, {useEffect} from 'react'
import * as profileService from '../../services/profileService'

interface IProps {
  user: any,
  userProfile: any,
  handleVerifyAccount: (userProfile: any) => Promise<void>
  verificationLink: any,
}

const Auth: React.FC<IProps> = ({user, userProfile, handleVerifyAccount, verificationLink}) => {
    useEffect(()=> {
        // async function fetchUrl(userProfile: any){
        //     const url = await profileService.directToStripeAuth(userProfile)
        //     console.log('auth check')
        //     console.log(url)
        // }
        // fetchUrl(userProfile)
        handleVerifyAccount(userProfile)
      }, [userProfile])
      
      return (
        <>
          
          <main >
            <a href={verificationLink}>
              Verify
            </a>
          </main>
  
        </>
      )
  };
   
export default Auth