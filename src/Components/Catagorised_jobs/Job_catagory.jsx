import style from "./Job_catagory.module.css";
import Single_Catagorised_job from "../Single_Catagorised_job/Single_Catagorised_job";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import {  Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Job_catagory = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className={style.job_catagory_wrapper}>
        <div className={style.catagory_headline}>
          <h2>Job catagories</h2>
          <p>
            Choose your desired dream job. <br /> we are here to provide you
            jobs from top rated companies
          </p>
        </div>

        <div className={style.job_catagories_wrapper}>
          <Swiper
            modules={[ Pagination, A11y, Autoplay]}
            spaceBetween={50}
            autoplay
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon01.png"
                }
                title="UI/UX Design"
                heading="12k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon02.png"
                }
                title="Marketing"
                heading="8k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon03.png"
                }
                title="Development"
                heading="14k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon04.png"
                }
                title="Helth & Care"
                heading="5k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon05.png"
                }
                title="Automotive"
                heading="9k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon03.png"
                }
                title="Development"
                heading="14k + jobs"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon01.png"
                }
                title="UI/UX Design"
                heading="12k + jobs"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Single_Catagorised_job
                icon={
                  "https://job-circle.miraclesoftsolutions.com/images/line-icon02.png"
                }
                title="Marketing"
                heading="8k + jobs"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Job_catagory;
