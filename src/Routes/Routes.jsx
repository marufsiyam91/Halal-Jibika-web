import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/MainPage/Home/Home"
import Contact from "../Pages/MainPage/Contact/Contact"
import Favourite from "../Pages/MainPage/Fovourite/Favourite"
import SingIn from "../Pages/MainPage/SingIn/SingIn"
import SignUp from "../Pages/MainPage/SingUp/SignUp"
import NotFound from "../Pages/NotFound/NotFound"
import About from '../Pages/MainPage/About/About'
import Jobs from "../Pages/MainPage/Jobs/Jobs"
import UserDetails from "../Pages/UserDetails/UserDetails"
import ApplyedJobs from "../Pages/MainPage/ApplyedJobs/ApplyedJobs"
import Addjobs from "../Pages/MainPage/Addjobs/Addjobs"
import Single_job from "../Components/Single_job/Single_job"

const routes = createBrowserRouter([
     {
          path: '/',
          element: <App/>,
          
          children: [
               {
                    path: '/',
                    element: <Home/>
               },
               {
                    path: '/jobs',
                    element: <Jobs/>,
               },
 
               {
                    path: 'userDetails/:id',
                    element: <UserDetails/>,
                    loader: ({params}) => 
                    fetch(`https://jobs-info.onrender.com/data/${params.id}`)
               },
               {
                    element: <Single_job/>,
                    loader:({params}) =>
                    fetch(`https://jobs-info.onrender.com/data/${params.id}`)
               },
               {
                    path: '/about',
                    element: <About/>
               },
               {
                    path: '/contact',
                    element: <Contact/>
               },
               {
                    path: '/addjobs',
                    element: <Addjobs/>
               },
               {
                    path: '/favourite',
                    element: <Favourite/>,

               },
               {
                    path: 'applyedjobs',
                    element: <ApplyedJobs/>
               },
               {
                    path: '/signin',
                    element: <SingIn/>
               },
               {
                    path: '/signup',
                    element: <SignUp/>
               }
          ]
     },   
     {
          path: '*',
          element: <NotFound/>
     },

])

export default routes
