import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import style from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(true);

  console.log(isShow)

  return (
    <div>
      <div className={style.Navbar_wrapper}>
        <div className={style.logo_area}>
          <span className={style.logo}>HALAL JIBIKA</span>
        </div>

        <div className={style.menubar_area}>
          <label onClick={() => setIsShow(!isShow)}>
            <RiMenu4Line />
          </label>
        </div>
        {isShow && (
          <div className={style.main_menu_area}>
            <ul>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/jobs"}>Jobs</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/favourite"}>Favourite</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <div className={style.sign_in_up_btns}>
                <NavLink to={"/signup"} id={style.register}>
                  Register
                </NavLink>
                <NavLink to={"/signin"} id={style.signin_btn}>
                  Sign In
                </NavLink>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import style from './Header.module.css';

// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div>
//       <div className={`${style.Navbar_wrapper} ${isMobileMenuOpen ? style.mobile_menu_open : ''}`}>
//         <div className={style.logo_area}>
//           <span className={style.logo}>HALAL JIBIKA</span>
//         </div>

//         <div className={style.main_menu_area}>
//           <ul className={isMobileMenuOpen ? style.mobile_menu : ''}>
//             <NavLink to={'/'} onClick={toggleMobileMenu}>Home</NavLink>
//             <NavLink to={'/jobs'} onClick={toggleMobileMenu}>Jobs</NavLink>
//             <NavLink to={'/about'} onClick={toggleMobileMenu}>About</NavLink>
//             <NavLink to={'/favourite'} onClick={toggleMobileMenu}>Favourite</NavLink>
//             <NavLink to={'/contact'} onClick={toggleMobileMenu}>Contact</NavLink>
//             <div className={style.sign_in_up_btns}>
//               <NavLink to={'/signup'} id={style.register} onClick={toggleMobileMenu}>Register</NavLink>
//               <NavLink to={'/signin'} id={style.signin_btn} onClick={toggleMobileMenu}>Sign In</NavLink>
//             </div>
//           </ul>
//           <div className={style.hamburger_menu} onClick={toggleMobileMenu}>
//             <div className={style.bar}></div>
//             <div className={style.bar}></div>
//             <div className={style.bar}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import { NavLink } from "react-router-dom";
// import style from './Header.module.css';

// const Header = () => {
//   return (
//     <div>
//       <div className={style.Navbar_wrapper}>
//         <div className={style.logo_area}>
//           <span className={style.logo}>HALAL JIBIKA</span>
//         </div>

//         <input type="checkbox" id="menuToggle" className={style.menu_toggle} />
//         <label htmlFor="menuToggle" className={style.hamburger_menu}>
//           <div className={style.bar}></div>
//           <div className={style.bar}></div>
//           <div className={style.bar}></div>
//         </label>

//         <div className={style.main_menu_area}>
//         <ul className={style.mobile_menu}>
//           <NavLink to={'/'}>Home</NavLink>
//           <NavLink to={'/jobs'}>Jobs</NavLink>
//           <NavLink to={'/about'}>About</NavLink>
//           <NavLink to={'/favourite'}>Favourite</NavLink>
//           <NavLink to={'/contact'}>Contact</NavLink>
//           <div className={style.sign_in_up_btns}>
//             <NavLink to={'/signup'} id={style.register}>Register</NavLink>
//             <NavLink to={'/signin'} id={style.signin_btn}>Sign In</NavLink>
//           </div>
//         </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
