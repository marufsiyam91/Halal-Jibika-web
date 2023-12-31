import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={style.contact_page_wrapper}>
        <div className={style.contact_top_area}>
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







        <div className={style.contact_form}>
          <div className={style.form_wrapper}>
            <form className={style.contact_form}>
              
                <label>
                  Your Name
                  <input type="text" name="name" placeholder="Your Name"/>
                </label>

                <label>
                  Your Mail
                  <input type="email" name="email" placeholder="example@gmail.com"/>
                </label>
                <label>
                  Company
                  <input type="text" placeholder="Your company name"/>
                </label>

                <label>
                  Phone no
                  <input type="text" placeholder="Your phone number"/>
                </label>

                <label>
                  Your Query
                  <textarea name="Query" id="" cols="57" rows="10">
                  </textarea>

                  <button>Upload file</button>
                </label>
            </form>
            </div>
        </div>






        <div className={style.contact_info}>
          <h3>Get in touch</h3>
          <p>Get in touch via mail, call and direct address</p>

          <div className={style.contact_address}>
            <span className={style.contact_icon}>
              <CiLocationOn />
            </span>
            <div className={style.address_info}>
              <h4>Reach us:</h4>
              <p>
                Morolpara bazar, Chandertek <br /> Badda, Dhaka
              </p>
            </div>
            </div>

            <div className={style.contact_mail}>
              <div>
                <span className={style.contact_icon}>
                  <CiMail />
                </span>
              </div>
              
              <div>
                <h4>Drop a mail:</h4>
                <p>halaljibika912@gmail.com</p>
              </div>
            </div>

            <div className={style.contact_phone}>
              <div>
                <span className={style.contact_icon}>
                  <BsTelephoneFill />
                </span>
              </div>

              <div>
                <h4>Call us: </h4>
                <p>+91 256 258 4759</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
