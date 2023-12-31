import { NavLink } from "react-router-dom"
import style from './Header.module.css'


const Header = () => {
  return (
    <div>
          <div className={style.Navbar_wrapper}>
               <div className={style.logo_area}>
                    <span className={style.logo}>HALAL JIBIKA</span>
               </div>

               <div className={style.main_menu_area}>
                    <ul>
                         <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/jobs'}>Jobs</NavLink></li>
                         <li><NavLink to={'/about'}>About</NavLink></li>
                         <li><NavLink to={'/favourite'}>Favourite</NavLink></li>
                         <li><NavLink to={'/contact'}>Contact</NavLink></li>
                         <div className={style.sign_in_up_btns}>
                              <li><NavLink to={'/signup'} className={style.register}>Register</NavLink></li>
                              <li><NavLink to={'/signin'} className={style.signin_btn}>Sign In</NavLink></li>
                         </div>
                    </ul>
               </div>
          </div>
    </div>
  )
}

export default Header
