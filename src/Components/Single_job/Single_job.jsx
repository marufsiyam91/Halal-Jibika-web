import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import style from "./Single_job.module.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Single_job = ({job: { id, title, logo, companyName, position, description, salary }}) => {



            const handleDelete = async () => {
                  await axios.delete(`http://localhost:9000/jobs/${id}`);
                  window.location.reload();
                }

  return (
    <div className={style.jobCard}>
            <div className={style.jobcard_wrapper}>     

                  <div className={style.top_buttons}>
                        <span><CiHeart /></span>
                        <span onClick={handleDelete}><MdDeleteOutline /></span>
                  </div>

                  <div className={style.jobcard_content}>
                        <img src={logo} alt="logo" />
                        <h2>{companyName}</h2>
                        <h4>{position}</h4>
                        <p>{description}</p> <br />
                        <hr />
                        <br />
                        <h3>position: {position}</h3>
                        <h3>salary: <span className={style.salary_color}>{salary}</span></h3>
                        <h3></h3>
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
