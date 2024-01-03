import style from "./Home.module.css";
import Data from '../../../../public/Data/Data.json'
import LatestJobs from "../LatestJobs/LatestJobs";
import Job_catagory from "../../../Components/Catagorised_jobs/Job_catagory";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate()
  const data = Data.jobs


  return (
    <div className={style.home_page}>
      <div className={style.home_wrapper}>
        <div className={style.hero_container}>
          <div className={style.hero_content_area}>
            <h1>
              Jobs that you want <br /> You can apply for <span>your desired dream jobs.</span>
            </h1>

            <button onClick={() => navigate('/jobs')}>Explore more</button>
          </div>
        </div>
      </div>

      <Job_catagory/>


      <div className={style.latest_job_wrapper}>
      <h2>5205 Latest jobs are added recently</h2>
        <div className={style.home_latest_job_area}>
              {
                data.map((item) => <LatestJobs key={item.id} Item={item}/>)
              }
        </div>
        <button onClick={() => navigate('/jobs')} className={style.alljobs_btn}>Explore all jobs</button>
      </div>
     

    </div>
  );
};

export default Home;
