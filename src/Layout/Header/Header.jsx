import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import style from "./Header.module.css";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Config/Firebase";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const navWrapper = navbar ? "main_menu_area" : "mobile_menu";

  const handleSignout = () => {
    signOut();
  };



  return (
    <div className={style.navbar_container}>
      <div className={style.navbar_wrapper}>
        <div className={style.logo_area}>
          <span className={style.logo}>HALAL JIBIKA</span>

          <div className={style.menubar_wrapper}>
            <button onClick={() => setNavbar(!navbar)} className={style.menub_btn}>
              <RiMenu4Line />
            </button>
          </div>
        </div>

        <div className={style[navWrapper]}>
          <div className={style.mobile_logo}>
            <h2>HALAL JIBIKA</h2>
          </div>

          <ul id={style.activeLink}>
            <div className={style.main_menus}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/jobs"}>Jobs</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/favourite"}>Favourite</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              {user && (
                <>
                  <NavLink to={"/addjobs"}>Post Job</NavLink>
                  <NavLink to={"/applyedjobs"}>Applyed Jobs</NavLink>
                </>
              )}
            </div>
            <div className={style.sign_in_up_btns}>
              {user ? (
                <>
                  <button onClick={handleSignout} className={style.logout_btn}>
                    Log out{" "}
                  </button>
                  <img className={style.user_image} src={user.photoURL} />
                </>
              ) : (
                <>
                  <NavLink to={"/signup"} id={style.register}>
                    Register
                  </NavLink>
                  <NavLink to={"/signin"} id={style.signin_btn}>
                    Sign In
                  </NavLink>
                </>
              )}
            </div>
          </ul>

          <div className={style.social_icon_wrapper}>
            <h2>Contact Info</h2>
            <p>MorolPara, Chandertek, Dhaka</p>
            <p>+88 01682648101</p>
            <p>info@example.com</p>


            <div className={style.social_icons}>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaDiscord />
              </li>
            </ul>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
