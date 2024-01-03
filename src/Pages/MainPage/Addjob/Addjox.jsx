
const Addjox = () => {
  return (
    <div> 
          <div className="addjobs_wrapper">
               <form>
                    <label>
                         Title
                         <input type="text"placeholder="Job title" />
                    </label>
                         Logo
                         <input type="file" placeholder="Choose logo"/>
                    <label>

                         <label>
                              Company Name
                              <input type="text" placeholder="Company name here"/>
                         </label>

                         <label>
                              Position
                              <input type="text" placeholder="Position for job"/>
                         </label>

                         <label>
                              Description
                              <textarea name="" id="" cols="30" rows="10">Job description</textarea>
                         </label>

                    </label>
               
               </form>
          </div>
    </div>
  )
}

export default Addjox
