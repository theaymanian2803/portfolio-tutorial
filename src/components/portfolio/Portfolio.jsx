import React from "react";
import "./portfolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Button from "../button/Button";
import "swiper/css";

import "swiper/css/pagination";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="top">
        <h1>my creative works latest projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iure.
        </p>
        <Button text="show more" />
      </div>
      <div className="bottom">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <img src="/aa.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/d.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/dd.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/ddd.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
