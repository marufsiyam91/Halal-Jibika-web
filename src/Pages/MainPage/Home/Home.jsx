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
        {/* <div className={style.hero_container}>
          <div className={style.hero_content_area}>
              <div   className={style.hero_content}>
                <h1>HALAL JIBIKA</h1>
                <h3>Discover a diverse range of job opportunities  that align with your values and beliefs.</h3>

                <button className={style.hero_btn} onClick={() => navigate('/jobs')}>Explore more</button>
              </div>

              <div data-aos="fade-up" data-aos-duration="1000"  className={style.hero_image}>
                <img src={'https://i.postimg.cc/R0wp9ggB/Design-inspiration-bro.png'} alt="Hero-Image" />
              </div>
          </div>
        </div> */}
        <div className={style.homePageContainer}>
      <div className={style.leftContent}>
        <h2>Halal Jobs Opportunities</h2>
        <p>Discover meaningful Halal jobs connecting individuals with businesses that align with their values.</p>

        <h2>Trusted by Many</h2>
        <p>Join thousands who trust Halal Jibika, benefiting from our transparent and integrity-driven services.</p>

        <h2>Service Statistics</h2>
        <p>[X] people successfully employed, [Y] successful matches. Connecting talent with reputable Halal organizations.</p>

        <button className={style.exploreButton}>Explore More</button>
      </div>

      <div className={style.rightContent}>
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
