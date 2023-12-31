import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div>
          <div className={style.footer_wrapper}>
            <div className={style.footer_content_container}>
              <div className={style.footer_content}>
                <h1>Halal Jibika</h1>
                <p>Morolpara bazar, Chandertek <br /> Badda, Dhaka</p>

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

          <div className={style.footer_content_links}>
            <h3>USEFUL LINKS</h3>
            <p>About us</p>
            <p>FAQ</p>
            <p>Checkout</p>
            <p>Log in</p>
          </div>

          <div className={style.footer_content_developers}>
            <h3>DEVELOPERS</h3>
            <p>Tearms of use</p>
            <p>Tearms & condition</p>
            <p>Privecy</p>
            <p>Cookie policy</p>
          </div>


          <div className={style.footer_content_support}>
            <h3>SUPPORTS</h3>
            <p>Booking</p>
            <p>Stays</p>
            <p>Adventures</p>
            <p>Author Detail</p>
          </div>


          <div className={style.footer_content_employee}>
            <h3>FOR EMPLOYEE</h3>
            <p>Browse candidates</p>
            <p>Jobs page</p>
            <p>Add job</p>
            <p>Job package</p>
          </div>

            </div>
          </div>


          

    </div>
  )
}

export default Footer
