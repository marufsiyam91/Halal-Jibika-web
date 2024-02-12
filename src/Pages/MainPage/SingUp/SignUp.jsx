 import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import style from './SingUp.module.css'
import { auth } from '../../../Config/Firebase';
import { useCreateUserWithEmailAndPassword,  useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { toast } from 'react-toastify';



const SignUp = () => {

  //signUp with email and password
  const [
    createUserWithEmailAndPassword,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [entredValue, setEntredValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (identifier, value) => {
    setEntredValue(prevValue => ({
      ...prevValue,
      [identifier]: value 
    }))
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(entredValue.email, entredValue.password)
    if (entredValue.password!== entredValue.confirmPassword) {
      alert("Passwords do not match")
    } else {
      createUserWithEmailAndPassword(entredValue.email, entredValue.password)
    }

    setEntredValue({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const handleToast = () => {
    toast.success('successfully signed up')
  }




  const [signInWithGoogle, ] = useSignInWithGoogle(auth);
  const [signInWithGithub, ] = useSignInWithGithub(auth);

  const handleGoogleSignup = () => {
    signInWithGoogle()

  }

  const handleGithubSignup = () => {
    signInWithGithub()
  }



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
                <input onChange={(e) => handleChange('email', e.target.value)} type="text" name="fullName"  placeholder="Your Full Name Here"/>
              </label>

              <label>
                Email
                <input onChange={(e) => handleChange('email', e.target.value)} type="email" name="email"  placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input onChange={(e) => handleChange('password', e.target.value)} type="password" name="password"  placeholder="New password"/>
              </label>

              <label>
                Confirm Password
                <input onChange={(e) => handleChange('confirmPassword', e.target.value)} type="password" name="confirmPassword"  placeholder="Confirm password"/>
              </label>


              <button onClick={handleToast}  className={style.create_account_btn}>Create Account</button>

              <div className={style.signup_google_github}>
              
                  <button onClick={handleGoogleSignup}> Sign up with Google <span className={style.social_icons}><FcGoogle /></span></button>
                  <button onClick={handleGithubSignup}> Sign up with Github <span className={style.social_icons}><FaGithub /></span></button>
              </div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp
