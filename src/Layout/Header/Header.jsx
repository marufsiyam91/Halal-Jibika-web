import { NavLink } from "react-router-dom"
import './Header.css'


const Header = () => {
  return (
    <div>
          <div className="Navbar_wrapper">
               <div className="logo_area">
                    <h2>HALAL JIBIKA</h2>
               </div>

               <div className="main_menu_area">
                    <ul>
                         <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/about'}>About</NavLink></li>
                         <li><NavLink to={'/favourite'}>Favourite</NavLink></li>
                         <li><NavLink to={'/contact'}>Contact</NavLink></li>
                         <div className="sign_in_up_btns">
                              <li><NavLink to={'/signup'} className={'register'}>Register</NavLink></li>
                              <li><NavLink to={'/signin'} id={'signin_btn'}>Sign In</NavLink></li>
                         </div>
                    </ul>
               </div>
          </div>
    </div>
  )
}

export default Header
