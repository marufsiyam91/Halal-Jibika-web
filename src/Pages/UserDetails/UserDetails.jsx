import axios from 'axios';
import style from './UserDetails.module.css'
import { useLoaderData } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import ApplyedJobs from '../MainPage/ApplyedJobs/ApplyedJobs';

const UserDetails = () => {
  const data = useLoaderData();
  const { logo, description, companyName, location, position, postDate, salary, title, expireDate} = data;

  const handleApplyed = (data) => {
    const status = data.status === undefined ? true : !data.status;

    axios.put(`http://localhost:9000/jobs/${data.id}`, {
      ...data,
      status: status,
    })
  }

  return (
    <div className={style.jobcard_wrapper}>
    <div className={style.jobCard}>
      <div className={style.jobHeader}>
        <h1 className={style.jobTitle}>{title}</h1>
        <p className={style.jobCompany}>{companyName}</p>
      </div>
      <div className={style.jobDetails}>
        <img src={logo} alt='company image' />
        <p><strong>Location:</strong>{location}</p>
        <p><strong>Job Type:</strong> Full-time</p>
        <p><strong>Salary:</strong>{salary}</p>
        <p><strong>Industry:</strong> Information Technology</p>
        <p><strong>position: </strong>{position}</p>

        <h2>Job Description</h2>
        <p>{description}</p>

        <h3>Key Responsibilities</h3>
        <ul>
          <li>Collaborate with cross-functional teams...</li>
          <li>Participate in code reviews...</li>
          <li>Troubleshoot, debug, and optimize application code...</li>
        </ul>

        <h3>Requirements</h3>
        <ul>
          <li>Bachelor's degree in Computer Science or a related field...</li>
          <li>X+ years of experience in software development...</li>
          <li>Proficiency in [specific technologies or programming languages]...</li>
          <li>Strong problem-solving and analytical skills...</li>
        </ul>

        <h3>Qualifications</h3>
        <p>Bachelor's degree in Computer Science or a related field...</p>

        <h3>Benefits</h3>
        <ul>
          <li>Competitive salary</li>
          <li>Health and dental insurance</li>
          <li>Flexible work hours</li>
          <li>Professional development opportunities</li>
          <li>Friendly and collaborative work environment</li>
        </ul>

        <h3>How to Apply</h3>
        <p>If you are passionate about software development and want to be part of an innovative team...</p>

        <p><strong>Application Deadline:</strong> {expireDate ?? '01, 02, 2024'}</p>

        <span onClick={() => handleApplyed(data)}><NavLink >Apply Now</NavLink></span>
      </div>
    </div>
    </div>
  )
}

export default UserDetails
