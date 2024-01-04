import { NavLink, useNavigate } from 'react-router-dom'
import style from './SignIn.module.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Config/Firebase';

const SingIn = () => {


  const [ signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);

  const handleSignInSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    signInWithEmailAndPassword(email, password)
    console.log('logged')
  }



  return (
    <div>
          <div className={style.sigin_form_container}>
          <div className={style.signin_form_wrapper}>
            <form className={style.singin_form}>

              <label>
                Email
                <input type="email" name="email" placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input type="password" name="password" placeholder="Your password"/>
              </label>


              <button onClick={handleSignInSubmit} className={style.login_btn}>
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
