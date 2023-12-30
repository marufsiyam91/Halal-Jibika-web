import { createContext, useState } from 'react'
import { StateContext } from './StateContext'

export const stateContext = createContext()

const StateContextProvider = ({children}) => {

    const [userData, setUserData] = useState({
      fullName: '',
      email: '',
       password: '',
       confirmPassword: ''
    })

    const handleChange = (e) => {
      setUserData({
        [e.target.name]: e.target.value
      })
    }

    const values = {
      userData,
      handleChange
    }

  return (
     <StateContext.Provider value={values}>
          {children}
     </StateContext.Provider>
  )
}

export default StateContextProvider
