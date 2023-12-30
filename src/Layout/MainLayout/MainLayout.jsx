import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div>
      <div className="mainLayout_header">
          <Header/>
      </div>

      <div className="mainlayout_outlet">
          <Outlet/>
      </div>

      <div className="mainlayout_footer">
          <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
