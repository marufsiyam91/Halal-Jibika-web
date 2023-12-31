import { createContext, useState } from 'react'
import { useSignInWithGoogle, signInWithGoogle } from 'react-firebase-hooks/auth';

export const StateContext = createContext(null)

// eslint-disable-next-line react/prop-types
const StateContextProvider = ({children}) => {


  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const [userData, setUserData] = useState({
      fullName: '',
      email: '',
       password: '',
       confirmPassword: ''
    })

    const [allUser, setAlluser] = useState([])

    const handleChange = (e) => {
      setUserData({
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setAlluser([
        ...allUser,
        {
          fullName: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          confirmPassword: e.target.confirmPassword.value
        }
      ])
    }
    
    console.log(allUser)

    const values = {
      userData,
      handleChange,
      handleSubmit,
      signInWithGoogle
    }

  return (
     <StateContext.Provider value={values}>
          {children}
     </StateContext.Provider>
  )
}

export default StateContextProvider
