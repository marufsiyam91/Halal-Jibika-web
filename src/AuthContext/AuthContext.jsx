import { createContext } from "react";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children}) =>{

     return(
          <AuthContext.Provider value={}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthContextProvider