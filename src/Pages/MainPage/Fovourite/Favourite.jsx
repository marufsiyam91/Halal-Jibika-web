import axios from "axios";
import { useEffect, useState } from "react";
import Favourite_job from "../../../Components/Favourite_job/Favourite_job";

const Favourite = () => {

  const [isUpdating, setIsUpdating] = useState(true)

     const [favourite, setFavourite] = useState([])

     const Url = 'http://localhost:9000/jobs';

     useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(Url);
              const data = response.data;
              setFavourite(data)
              setIsUpdating(prev => !prev)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, [ isUpdating]);

        const filtered = favourite.filter((job) => job === favourite)


  return (
    <div>
          {
            filtered.map((favourite) => <Favourite_job key={favourite.id} favourite={favourite}/>)
          }
    </div>
  )
}

export default Favourite
