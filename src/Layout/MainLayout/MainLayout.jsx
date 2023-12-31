import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import style from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div>
      <div className={style.mainLayout_header}>
          <Header/>
      </div>

      <div className={style.mainlayout_outlet}>
          <Outlet/>
      </div>

      <div className={style.mainlayout_footer}>
          <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
