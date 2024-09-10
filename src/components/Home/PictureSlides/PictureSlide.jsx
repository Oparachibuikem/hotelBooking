import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PictureSlide.css";

import image1 from "../../images/Slides/bar.jpg";
import image2 from "../../images/Slides/beachview.jpg";
import image3 from "../../images/Slides/bedroom.jpg";
import image4 from "../../images/Slides/bedroom2.jpg";
import image5 from "../../images/Slides/conference.jpg";
import image6 from "../../images/Slides/gym.jpg";
import image7 from "../../images/Slides/reception.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function PictureSlide() {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          20: {
            slidesPerView: 1, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 2, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Default (3 slides) at 1024px and above
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src={image1} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt=" of services" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt=" of services" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
