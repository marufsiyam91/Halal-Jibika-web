import style from "./Home.module.css";
import Data from '../../../Data/Data.json'
import LatestJobs from "../LatestJobs/LatestJobs";
import Job_catagory from "../../../Components/Catagorised_jobs/Job_catagory";

const Home = () => {

  const data = Data.jobs


  return (
    <div className={style.home_page}>
      <div className={style.home_wrapper}>
        <div className={style.hero_container}>
          <div className={style.hero_content_area}>
            <h1>
              Jobs that you want <br /> You can apply for <span>your desired dream jobs.</span>
            </h1>

            <button>Explore more</button>
          </div>
        </div>
      </div>

      <Job_catagory/>


      <div className={style.home_latest_job_area}>
            {
              data.map((item) => <LatestJobs key={item.id} Item={item}/>)
            }
      </div>
    </div>
  );
};

export default Home;
