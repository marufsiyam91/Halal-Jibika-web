import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './SingUp.css'

const SignUp = () => {

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })



  return (
    <div> 
        <div className="signup_form_container">
          <div className="signup_form_wrapper">
            <form className='singup_form'>
              <div className="form_content">
                <h2>Sign up to create account</h2>
                <h4>Already have a account? <NavLink to={'/signin'}>Sign in</NavLink></h4>
              </div>
              
              <label>
                Full Name
                <input type="text" name="fullName" placeholder="Your Full Name Here"/>
              </label>

              <label>
                Email
                <input type="email" name="email" placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input type="password" name="password" placeholder="New password"/>
              </label>

              <label>
                Confirm Password
                <input type="password" name="confirmPassword" placeholder="Confirm password"/>
              </label>

              <button className='create_account_btn'>Create Account</button>

              <div className="signup_google_github">
                  <button> Sign up with Google <span className='social_icons'><FcGoogle /></span></button>
                  <button> Sign up with Github <span className='social_icons'><FaGithub /></span></button>
              </div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp
