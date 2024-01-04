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
              <div   className={style.hero_content}>
                <h1>HALAL JIBIKA</h1>
                <h3>Discover a diverse range of job opportunities  that align with your values and beliefs.</h3>

                <button className={style.hero_btn} onClick={() => navigate('/jobs')}>Explore more</button>
              </div>

              <div data-aos="fade-up" data-aos-duration="1000"  className={style.hero_image}>
                <img src={'https://i.postimg.cc/MKgZKdW3/3682888.jpg'} alt="Hero-Image" />
              </div>
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
