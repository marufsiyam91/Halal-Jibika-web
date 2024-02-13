import style from './Single_catorised_job.module.css'

const Single_Catagorised_job = ({icon, title, heading,}) => {
  return (
    <div className={style.catagory}>
         {/* <p>{icon}</p> */}
         <p>
         <img src={icon} alt="" />
         </p>
         <h4>{title}</h4>
         <h5>{heading}</h5>
    </div>
  )
}

export default Single_Catagorised_job