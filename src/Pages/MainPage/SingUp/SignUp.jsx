
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import style from './SingUp.module.css'
import { useContext } from 'react';
import { StateContext } from '../../../StateContext/StateContextProvider';

const SignUp = () => {

  const {userData, handleChange, handleSubmit} = useContext(StateContext);


  return (
    <div> 
        <div className={style.signup_form_container}>
          <div className={style.signup_form_wrapper}>
            <form onSubmit={handleSubmit} className={style.singup_form}>
              <div className={style.form_content}>
                <h2>Sign up to create account</h2>
                <h4>Already have a account? <NavLink to={'/signin'}>Sign in</NavLink></h4>
              </div>
              
              <label>
                Full Name
                <input onChange={handleChange} type="text" name="fullName" value={userData.fullName} placeholder="Your Full Name Here"/>
              </label>

              <label>
                Email
                <input onChange={handleChange} type="email" name="email" value={userData.email} placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input onChange={handleChange} type="password" name="password" value={userData.password} placeholder="New password"/>
              </label>

              <label>
                Confirm Password
                <input onChange={handleChange} type="password" name="confirmPassword" value={userData.confirmPassword} placeholder="Confirm password"/>
              </label>

              <button className={style.create_account_btn}>Create Account</button>

              <div className={style.signup_google_github}>
                  <button> Sign up with Google <span className={style.social_icons}><FcGoogle /></span></button>
                  <button> Sign up with Github <span className={style.social_icons}><FaGithub /></span></button>
              </div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp
