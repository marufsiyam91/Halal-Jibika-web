import style from "./Home.module.css";
// import Data from '../../../../public/Data/Data.json'
import LatestJobs from "../LatestJobs/LatestJobs";
import Job_catagory from "../../../Components/Catagorised_jobs/Job_catagory";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

  const Url = 'http://localhost:9000/jobs'
  const [data, setData] = useState([])
  const [isUpdating, setIsUpdating] = useState([])
  
  const navigate = useNavigate()
  // const data = Data.jobs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        const data = response.data;
        setData(data)
        setIsUpdating(prev => !prev)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ isUpdating]);


  return (
    <div className={style.home_page}>
      <div className={style.home_wrapper}>
        <div  className={style.homePageContainer}>
      <div data-aos="zoom-out-up" data-aos-duration="600" className={style.leftContent}>
        <h1>Find your <br />
        Job without any <br /> hassle.</h1>

        <h3>With the largest professional creative community online, <br /> simply search through from our website</h3>

        <button className={style.exploreButton}>Explore More</button>
      </div>

      <div data-aos="zoom-out-up" data-aos-duration="800" className={style.rightContent}>
        <img src="https://i.postimg.cc/R0wp9ggB/Design-inspiration-bro.png" alt="Halal Jobs Image" />
      </div>
    </div>
      </div>

      <Job_catagory/>


      <div className={style.latest_job_wrapper}>
      <h2>5205 Latest jobs are added recently</h2>
        <div className={style.home_latest_job_area}>
              {
                data.slice(0, 8).map((item) => <LatestJobs key={item.id} Item={item}/>)
              }
        </div>
        <button onClick={() => navigate('/jobs')} className={style.alljobs_btn}>Explore all jobs</button>
      </div>
     

    </div>
  );
};

export default Home;
