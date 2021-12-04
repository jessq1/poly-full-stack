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
        handleVerifyAccount(userProfile)
      }, [userProfile])
      
      return (
        <>
          
          <main >
            {(userProfile.stripeOnboard)?
              <a href='/addpayment'>
                Add a payment
              </a> : 
              <a href={verificationLink}>
                Verify with Stripe
              </a>
            }
          </main>
  
        </>
      )
  };
   
export default Auth