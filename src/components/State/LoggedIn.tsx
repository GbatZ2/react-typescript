import React, {useState} from 'react'

export default function LoggedIn() {

    const [isloggedIn,setIsLoggedIn] =useState<boolean>(false)

    const handleLogin = ()=>{
            setIsLoggedIn(true)
    } 
    const handleLogOut = ()=>{
        setIsLoggedIn(false)
    }
 
    return (
    <div>
    <button onClick={handleLogin}>
        Login
    </button>
    <button onClick={handleLogOut}>
        LogOut
    </button>

    <div>
        User is {isloggedIn?"looged in":"logged out"}
    </div>
    </div>
  )
}
