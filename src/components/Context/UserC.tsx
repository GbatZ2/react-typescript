import React,{useContext} from 'react'
import {UserContext,UserContextProvider} from './UserContext'
 


export default function UserC() {


    const userContext = useContext(UserContext);

    const handleLogin = ()=>{
  
                userContext.setUser({
                    name:"Carlaosasd",
                    email:"carlos@gmail.com",
                })
            
    }
    const handleLogOut = ()=>{
  
            userContext.setUser(null)
        
    }
    console.log(userContext?.user)
  return (

        <div>
        <UserContextProvider>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogOut}>Logout</button>
                <div>User Name is {userContext.user?.name}</div>
                <div>User Email is {userContext.user?.email}</div>
        </UserContextProvider>
        </div>

 
  )
}
