/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import style from './ApplyedJob.module.css'

const ApplyedJob = ({applyed: {id, logo, companyName, position, description, salary}}) => {

     const handleDelete = async ( id) => {
          await axios.delete(`http://localhost:9000/jobs/${id}`);
        };


return (
<div data-aos="fade-up" data-aos-duration="1000" className={style.jobCard}>
        <div className={style.jobcard_wrapper}>     

              <div className={style.top_buttons}>
                    <span><CiHeart /></span>
                    <span onClick={() => handleDelete(id)}><MdDeleteOutline /></span>
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

export default ApplyedJob
