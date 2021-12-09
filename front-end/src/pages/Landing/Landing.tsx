import React from 'react'

interface IProps {
  user: any,
  userProfile: any,
}

const Landing: React.FC<IProps> = ({user,userProfile}) => {
  
      return (
        <>
          
          <main >
            <h1>
              hello, {user ? user.firstName : "friend"}
            </h1>
            {(!user || userProfile?.stripeOnboard) ? <></> : <h1>To transfer money between freinds you need to verify with stripe</h1> }
          </main>
  
        </>
      )
  };
   
export default Landing