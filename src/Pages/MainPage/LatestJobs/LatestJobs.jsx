/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import style from './LatestJobs.module.css'

const LatestJobs = ({Item: { companyName, logo, position,}}) => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="700" className={style.latest_item}>

      <div className={style.latest_job}>
          <div></div>

          <div className={style.latestJobImage}>
              <img src={logo} alt="" />
              <h3>{companyName}</h3>
            <small>{position}</small>
          </div>

          <div className={style.jobbtns}>
              <button>show detail</button>
          </div>

        </div>

    </div>



  )
}

export default LatestJobs
