import { useState } from 'react'
import style from './Addjobs.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'


const Addjobs = () => {


  const notify = () => toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  const URL= 'http://localhost:9000/jobs'

  const [jobData, setJobData] = useState({
    title: '',
    logo: '',
    company: '',
    position: '',
    description: '',
    salary: '',
  })


  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setJobData({
      ...jobData,
       [name]: value
      })
  }




  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post(URL, jobData).then((response) => {
      // Assuming the response.data is the updated job data from the server
      setJobData(response.data);
    });
    notify();
  };






  return (
    <div className={style.Addjobs_form_wrapper}>
          <form onSubmit={handleFormSubmit} className={style.addjob_form}>
               <label>
                    Your job title
                <input onChange={handleFormChange} name='title' value={jobData.title} type="text" placeholder='Title'/>
               </label>

               <label>
                    Logo
                <input onChange={handleFormChange} name='logo' value={jobData.logo} type="url" placeholder='Logo'/>
               </label>

             <label>
                    Company Name
                <input onChange={handleFormChange} name='company' value={jobData.company} type="text" placeholder='Company Name'/>
               </label>

                <label>
                    Position
                <input onChange={handleFormChange} name='position' value={jobData.position}  type="text" placeholder='Position'/>
               </label>

               <label>
                    Description
                <input onChange={handleFormChange} name='description' value={jobData.description} type="text" placeholder='Description'/>
               </label>

               <label>
                    salary
                    <input onChange={handleFormChange} name='salary' value={jobData.salary} type="text" placeholder='Salary'/>
               </label>

               <button type='submit'>Add Job</button>

          </form>
    </div>
  )
}

export default Addjobs
