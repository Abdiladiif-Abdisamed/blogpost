import { createContext , useState } from "react";


const AuthContext = createContext();


export const AuthProvider =({children})=>{

    const [isAuthenticated , setIsAuthenticated] = useState(false);

    const Login = ()=>(
        setIsAuthenticated(true)
    )

     const Logout = ()=>(
        setIsAuthenticated(false)
    )
    return (
        <AuthContext.Provider value={{isAuthenticated, Login, Logout, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
 

}

export default AuthContext;