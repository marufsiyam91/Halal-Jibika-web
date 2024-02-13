import style from './Info.module.css'

const Info = ({icon, title, info,extraInfo}) => {
  return (
    <div className={style.info_area}>
        <div className={style.contact_info_wrapper}>
            <span className={style.contact_icon}>
              {icon}
            </span>
            <div className={style.address_info}>
              <h4>{title}</h4>
              <p>{info}</p>

              {
                extraInfo &&
                <p>{extraInfo}</p>
              }
            </div>
            </div>
    </div>
  )
}

export default Info