import React,{useState} from 'react'



type AuthUser ={
    name: string,
    email:string
}


export default function User(props:AuthUser) {

    const [user,setUser] = useState<AuthUser | null>({} as AuthUser)
    const handleLogin = ()=>{
            setUser(
               { 
                   name: props.name,
                   email:props.email
                }
            )
    }
    const handleLogOut = () =>{
        setUser(null)
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
        {user!==null?`User name is ${user?.name}`:""}
    </div>
    
    <div>
        {user!==null?`User name is ${user?.email}`:""}
    </div>

    </div>
  )
}
