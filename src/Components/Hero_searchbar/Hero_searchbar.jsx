import style from "./Hero_searchbar.module.css";
import { VscSymbolKeyword } from "react-icons/vsc";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiOfficeChair } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Hero_searchbar = () => {
  return (
    <div className={style.Hero_searchbar_wrapper}>
      <div className={style.first_row}>
        <label htmlFor="">
          <VscSymbolKeyword />
          <input type="text" name="keyword" placeholder="Keyword" />
        </label>
        <label htmlFor="">
          <CiLocationArrow1 />
          <input type="text" name="locaiton" placeholder="Locaiton" />
        </label>
      </div>
      <div className={style.second_row}>
        <label htmlFor="">
          <PiOfficeChair />
          <input type="text" name="type" placeholder="Job Type" />
        </label>
        <button className={style.search_btn}>
          <CiSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero_searchbar;
