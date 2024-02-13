import style from './Contact_us_top.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Contact_us_top = () => {
  return (
    <div className={style.contact_top_container }>
        <div className={style.contact_top_wrapper}>
        <div data-aos="zoom-out-right" data-aos-duration="600" >
          <h1>Contact Us</h1>
          <h3>Feel free to ask any question</h3>

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
  )
}

export default Contact_us_top