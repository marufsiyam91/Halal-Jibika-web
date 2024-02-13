import style from "./Contact.module.css";
import Contact_us_top from "../../../Components/Contact_us_top/Contact_us_top";
import Contact_info from "../../../Components/Contact_info/Contact_info";

const Contact = () => {
  return (
    <div className={style.contact_page_container}>
      <div className={style.contact_page_wrapper}>
          <Contact_us_top/>


          <Contact_info/>           
      
        
      </div>
    </div>
  );
};

export default Contact;
