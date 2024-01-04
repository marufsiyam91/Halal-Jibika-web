 import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import style from './SingUp.module.css'
import { auth } from '../../../Config/Firebase';
import { useCreateUserWithEmailAndPassword,  useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";


const SignUp = () => {

  //signUp with email and password
  const [
    createUserWithEmailAndPassword,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth);


  const handleSubmit = (e) => {
    e.preventDefault()
    const fullName = e.target.fullName.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value


    if (password!== confirmPassword) {
      alert("Passwords do not match")
    } else {
      createUserWithEmailAndPassword(email, password)
      
    }
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
                <input type="text" name="fullName"  placeholder="Your Full Name Here"/>
              </label>

              <label>
                Email
                <input type="email" name="email"  placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input type="password" name="password"  placeholder="New password"/>
              </label>

              <label>
                Confirm Password
                <input type="password" name="confirmPassword"  placeholder="Confirm password"/>
              </label>


              <button  className={style.create_account_btn}>Create Account</button>

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
