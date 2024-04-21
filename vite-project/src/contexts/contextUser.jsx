import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext(null)

export function UserData({children}) {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
 
 function createUser (newUser) {
    setUser(newUser)
    navigate(paths.MAIN)
 }

 function exitUser () {
    setUser(null)
    navigate(paths.LOGIN)
 }


 return <UserContext.Provider value={{user, createUser, exitUser}}>
            {children}
        </UserContext.Provider>
        
}