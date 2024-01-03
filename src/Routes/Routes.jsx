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
import Addjobs from "../Pages/MainPage/Addjobs/Addjobs"

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
                    fetch(`http://localhost:9000/jobs/${params.id}`)
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
                    path: '/favourite',
                    element: <Favourite/>
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
     {
          path: '/addjobs',
          element: <Addjobs/>
     }
])

export default routes
