import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"
import banner1 from "../../../assets/Banner-1.jpg"
import banner2 from "../../../assets/Banner-2.jpg"
import banner3 from "../../../assets/Banner-3.jpg"
import { Autoplay, Pagination, Navigation } from "swiper";

const SlideShow = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div  className="w-full max-h-96" >
            <img className="w-full" src={banner1}></img>
            </div>
              
            </SwiperSlide>
            <SwiperSlide><div  className="w-full max-h-96" >
            <img className="w-full" src={banner2}></img>
            </div>
              
            </SwiperSlide>
            <SwiperSlide><div  className="w-full max-h-96" >
            <img className="w-full" src={banner3}></img>
            </div>
              
            </SwiperSlide>
            
          </Swiper>
        </>
      );
};

export default SlideShow;