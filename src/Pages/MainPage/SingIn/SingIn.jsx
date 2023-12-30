import { NavLink } from 'react-router-dom'
import './SignIn.css'

const SingIn = () => {
  return (
    <div>
          <div className="sigin_form_container">
          <div className="signin_form_wrapper">
            <form className='singin_form'>

              <label>
                Email
                <input type="email" name="email" placeholder="Your Email"/>
              </label>

              <label>
                Password
                <input type="password" name="password" placeholder="Your password"/>
              </label>


              <button className="login_btn">
                Log in
              </button>


                <button className="create_account_btn"><NavLink  to={'/signup'}>Create an account</NavLink></button>


              </form>
          </div>
        </div>
    </div>
  )
}

export default SingIn
