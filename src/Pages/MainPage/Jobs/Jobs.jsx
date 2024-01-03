import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Jobs.module.css';
import Single_job from '../../../Components/Single_job/Single_job';

const Jobs = () => {
  const Url = 'http://localhost:9000/jobs';

  const [jobData, setJobData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        const data = response.data;
        setJobData(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [Url]);





  return (
    <div className={style.jobs_wrapper}>
        {
            jobData.map((job) =>  <Single_job key={job.id} job={job}/>)
        }
    </div>
  );
};

export default Jobs;


