import style from "./Contact_info.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import Info from "./Info/Info";

const Contact_info = () => {
  return (
    <div className={style.contact_info_container}>
      <div className={style.contact_info_wrapper}>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="800"
          className={style.contact_info}
        >
          <h3>Get in touch</h3>
          <p>Get in touch via mail, call and direct address</p>

          <Info
            icon={<CiLocationOn />}
            title={"Reach us:"}
            info={"Morolpara bazar, Chandertek"}
            extraInfo={"Badda, Dhaka"}
          />
          <Info
            icon={<BsTelephoneFill />}
            title={"Call us: "}
            info={"+91 256 258 4759"}
          />

          <Info
            icon={<CiMail />}
            title={"Drop a mail:"}
            info={"halaljibika@gmail.com"}
          />
        </div>

        <div className={style.contact_form}>
          <div className={style.form_wrapper}>
            <form className={style.contact_form}>
              <label>
                Your Name
                <input type="text" name="name" placeholder="Your Name" />
              </label>

              <label>
                Your Mail
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </label>
              <label>
                Company
                <input type="text" placeholder="Your company name" />
              </label>

              <label>
                Phone no
                <input type="text" placeholder="Your phone number" />
              </label>

              <label>
                Your Query
                <textarea name="Query" id="" cols="57" rows="10"></textarea>
                <button>Upload file</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_info;
