import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Jobs.module.css';
import Single_job from '../../../Components/Single_job/Single_job';

const Jobs = () => {
  const Url = 'https://jobs-info.onrender.com/data';

  const [jobData, setJobData] = useState([]);
  const [isDataUpdating, setIsDataUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        const data = response.data;
        setJobData(data);
        setIsLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isDataUpdating]);

  return (
    <div className={style.jobs_wrapper}>
      {isLoading ? ( // Render loading indicator if data is still loading
        <p>Loading...</p>
      ) : (
        jobData.jobs.map((job) => <Single_job setIsDataUpdating={setIsDataUpdating} key={job.id} job={job} />)
      )}
    </div>
  );
};

export default Jobs;
