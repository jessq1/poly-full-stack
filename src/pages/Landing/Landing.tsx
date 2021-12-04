import React from 'react'

interface IProps {
  user: any,
}

const Landing: React.FC<IProps> = ({user}) => {
  
      return (
        <>
          
          <main >
            <h1>
              hello, {user ? user.firstName : "friend"}
            </h1>
          </main>
  
        </>
      )
  };
   
export default Landing