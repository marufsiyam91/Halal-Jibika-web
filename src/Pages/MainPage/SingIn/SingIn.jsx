import { NavLink } from 'react-router-dom'
import style from './SignIn.module.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Config/Firebase';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const SingIn = () => {

  const [entredValue, setEntredValue] = useState({
    email: '',
    password: ''
  })

  const [ signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);

  const handleSignInSubmit = (e) => {
    e.preventDefault()
    toast.success('submitted data successfully')
    signInWithEmailAndPassword(entredValue.email, entredValue.password)
    console.log('logged')
  }

  const handleChange = (identifier, value) => {
    setEntredValue(prevValue => ({
      ...prevValue,
      [identifier] : value
    }))
    console.log(entredValue)
  } 


  return (
    <div>
          <div className={style.sigin_form_container}>
          <div className={style.signin_form_wrapper}>
            <form onSubmit={handleSignInSubmit} className={style.singin_form}>

              <label>
                Email
                <input onChange={(e) => handleChange('email', e.target.value)} type="email" name="email" placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input onChange={(e) => handleChange('password', e.target.value)} type="password" name="password" placeholder="Your password"/>
              </label>


              <button className={style.login_btn}>
                Log in
              </button>



                <button className={style.create_account_btn}><NavLink  to={'/signup'}>Create an account</NavLink></button>


              </form>
          </div>
        </div>
    </div>
  )
}

export default SingIn
