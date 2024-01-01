/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import style from './LatestJobs.module.css'

const LatestJobs = ({Item: { company, logo, position,}}) => {
     console.log(logo)
  return (
    <div className={style.latest_item}>

      <div className={style.latest_job}>

          <div className={style.jobfabourite}>
              <span><CiHeart /></span>
          </div>

          <div className={style.latestJobImage}>
              <img src={logo} alt="" />
              <h3>{company}</h3>
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
