import style from './Addjobs.module.css'

const Addjobs = () => {
  return (
    <div className={style.Addjobs_form_wrapper}>
          <form className={style.addjob_form}>
               <label>
                    Your job title
                <input type="text" placeholder='Title'/>
               </label>

               <label>
                    Logo
                <input type="url" placeholder='Logo'/>
               </label>

             <label>
                    Company Name
                <input type="text" placeholder='Company Name'/>
               </label>

                <label>
                    Position
                <input type="text" placeholder='Position'/>
               </label>

               <label>
                    Description
                <input type="text" placeholder='Description'/>
               </label>

               <button>Add Job</button>

          </form>
    </div>
  )
}

export default Addjobs
