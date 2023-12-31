import { PiShareNetworkFill } from "react-icons/pi";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaPencilRuler } from "react-icons/fa";
import { LuPaintBucket } from "react-icons/lu";
import { TfiWorld } from "react-icons/tfi";
import style from './Job_catagory.module.css'

const Job_catagory = () => {
  return (
    <div>
          <div className={style.job_catagory_wrapper}>
            <div className={style.catagory_headline}>
                <h2>Job catagories</h2>
                <p>Choose your desired dream job. <br /> we are here to provide you jobs from top rated companies</p>
            </div>


              <div className={style.job_catagories_wrapper}>
                  <div className={style.catagory}>
                      {/* <div className={style.catagory_hover}></div> */}
                      <p><PiShareNetworkFill /></p>
                      <h4>It & Networking <br /> Services</h4>
                      <h5>120 Jobs</h5>
                  </div>
                  <div className={style.catagory}>
                      <p><TbAdjustmentsSearch /></p>
                      <h4>Share Market <br /> Analysis</h4>
                      <h5>90 Jobs</h5>
                  </div>
                  <div className={style.catagory}>
                      <p><TiWeatherPartlySunny /></p>
                      <h4>Weather & <br /> Enviournment</h4>
                      <h5>150 Jobs</h5>
                  </div>
                  <div className={style.catagory}>
                      <p><FaPencilRuler /></p>
                      <h4>Writing & Translation</h4>
                      <h5>144 Jobs</h5>
                  </div>
                  <div className={style.catagory}>
                      <p><LuPaintBucket /></p>
                      <h4>Graphics & Design</h4>
                      <h5>110 Jobs</h5>
                  </div>
                  <div className={style.catagory}>
                      <p><TfiWorld /></p>
                      <h4>Digital Marketing</h4>
                      <h5>100 Jobs</h5>
                  </div>


              </div>
          </div>

          
    </div>
  )
}

export default Job_catagory
