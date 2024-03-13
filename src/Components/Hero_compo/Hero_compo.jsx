import Hero_searchbar from "../Hero_searchbar/Hero_searchbar";
import style from "./Hero_compo.module.css";

const Hero_compo = () => {
  return (
    <div className={style.Hero_compo_container}>
      <h2>Join us & <span>Explore <br /> Thousands</span> of Jobs</h2>
      <p>Find Jobs, Employment & Career Opportunities. Some of the companies</p>
      <p>we've helped recruit excellent applicants over the years.</p>
      <Hero_searchbar/>
      <p>Popular Searches : Designer, Developer, Web, IOS, PHP Senior Engineer</p>
    </div>
  );
};

export default Hero_compo;
