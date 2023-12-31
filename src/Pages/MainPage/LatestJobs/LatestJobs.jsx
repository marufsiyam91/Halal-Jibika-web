/* eslint-disable react/prop-types */
import style from './LatestJobs.module.css'

const LatestJobs = ({Item: {title, companyName, logo}}) => {
     console.log(logo)
  return (
    <div className={style.latest_item}>

          <div>
               <img src={logo} alt="" />
               <h4>{title}</h4>
               <h2>{companyName}</h2>
          </div>
    </div>
  )
}

export default LatestJobs
