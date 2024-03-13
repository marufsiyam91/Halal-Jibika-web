import style from "./Home.module.css";
// import Data from '../../../../public/Data/Data.json'
import LatestJobs from "../LatestJobs/LatestJobs";
import Job_catagory from "../../../Components/Catagorised_jobs/Job_catagory";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero_compo from "../../../Components/Hero_compo/Hero_compo";

const Home = () => {
  const Url = "https://jobs-info.onrender.com/data";
  const [data, setData] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  // const data = Data.jobs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        const data = response.data;
        setData(data);
        // setIsUpdating(prev => !prev)
        setIsLoading(!isLoading);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isUpdating]);

  console.log(data);

  const handleNavigate = () => {
    console.log("button clicked");
    navigate("/jobs");
  };

  return (
    <div className={style.home_page}>

        <Hero_compo/>

      <Job_catagory />

      <div className={style.latest_job_wrapper}>
        <h2>5205 Latest jobs are added recently</h2>
        <div className={style.home_latest_job_area}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.jobs
              .slice(0, 9)
              .map((item) => <LatestJobs key={item.id} Item={item} />)
          )}
        </div>
        <button onClick={() => navigate("/jobs")} className={style.alljobs_btn}>
          Explore all jobs
        </button>
      </div>
    </div>
  );
};

export default Home;
