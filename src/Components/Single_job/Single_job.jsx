import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import style from "./Single_job.module.css";

// eslint-disable-next-line react/prop-types
const Single_job = ({job: { id, title, logo, companyName, position, description }}) => {
  return (
    <div className={style.jobCard}>
            <div className={style.jobcard_wrapper}>     

                  <div className={style.top_buttons}>
                        <span><CiHeart /></span>
                        <span><MdDeleteOutline /></span>
                  </div>

                  <div className={style.jobcard_content}>
                        <img src={logo} alt="logo" />
                        <h2>{companyName}</h2>
                        <h4>{position}</h4>
                        <p>{description}</p>
                  </div>

                  <div className={style.bottom_button}>
                        <span><FiEdit /></span>

                        <Link to={`/userDetails/${id}`}>
                        <button className={style.button}>details</button>
                        </Link>
                  </div>           


          </div>
    </div>
  );
};

export default Single_job;
