import style from './Applyedjobs.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import ApplyedJob from "./ApplyedJob/ApplyedJob";

const ApplyedJobs = () => {

  const [isUpdating, setIsUpdating] = useState(true)

     const [applyedjobs, setApplyedjobs] = useState([])

     const Url = 'http://localhost:9000/jobs';

     useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(Url);
              const data = response.data;
              setApplyedjobs(data)
              setIsUpdating(prev => !prev)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, [ isUpdating]);
 
        const filteredJobs = applyedjobs.filter((applyed) => applyed.status === true)
      
        console.log(filteredJobs)
  return (
    <div className={style.applyedpage}>


        {
          filteredJobs.map((applyed) => <ApplyedJob key={applyed.id} applyed={applyed}/>)
        }


        
    </div>
  )
}

export default ApplyedJobs
