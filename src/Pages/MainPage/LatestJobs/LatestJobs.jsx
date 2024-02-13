/* eslint-disable react/prop-types */
// import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom'
import style from './LatestJobs.module.css'

const LatestJobs = ({Item, Item: { companyName, logo, position, location, salary, id}}) => {
  console.log(Item)
  return (
    <div /* data-aos="zoom-in-up" data-aos-duration="700" */ className={style.latest_item}>

      {/* <div className={style.latest_job}>
          <div></div>

          <div className={style.latestJobImage}>
              <img src={logo} alt="" />
              <h3>{companyName}</h3>
            <small>{position}</small>
          </div>

          <div className={style.jobbtns}>
              <button>show detail</button>
          </div>

        </div> */}
        <div className={style.latest_item_main}>
          <div className={style.latest_item_main_info}>
              <img src={logo} alt="" />
            <div>
              <h3>{position}</h3>
              <div>
                <span>{companyName}</span> <span>{location}</span>
              </div>
            </div>
          </div>
          <div className={style.main_info_btns}>
            <button>Full-Time</button>
            <button>Part-time</button>
            <button>Remote</button>
          </div>
        </div>
        <div className={style.latest_item_info}>
          <h4>{salary}/month</h4>
          <Link to={`/userDetails/${id}`}>
            <button>Details</button>
          </Link>
        </div>

    </div>



  )
}

export default LatestJobs
