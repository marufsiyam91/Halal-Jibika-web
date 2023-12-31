import { createContext } from "react";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children}) =>{

     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

     return(
          <AuthContext.Provider value={value}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthContextProvider