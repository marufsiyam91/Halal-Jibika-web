import axios from "axios";
import { useEffect, useState } from "react";
import Favourite_job from "../../../Components/Favourite_job/Favourite_job";
import style from './Favourite.module.css'

const Favourite = () => {

  const [isUpdating, setIsUpdating] = useState(true)

     const [favourite, setFavourite] = useState([])

     const Url = 'http://localhost:9000/jobs';

     useEffect(() => {
          const fetchData = async (url) => {
            try {
              const response = await axios.get(url);
              const data = response.data;
              setFavourite(data)
              setIsUpdating(prev => !prev)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData(Url)
        }, [isUpdating]);

        const filtered = favourite.filter((job) => job.favourite === true)



  return (
    <div className={style.favourite_job_wrapper}>

        {
          filtered ?
          (filtered.map((favourite) => <Favourite_job key={favourite.id} setIsUpdating={setIsUpdating} favourite={favourite} isUpdating={isUpdating}/>))
          :
          (<div>
              <h2>No Favourite jobs are added yet</h2>
          </div>)
        }

    </div>
  )
}

export default Favourite



