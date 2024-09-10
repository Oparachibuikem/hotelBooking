import React, { useState } from "react";
import "./RoomSample.scss";

// import image from "../images/Slides/bar.jpg";
import bedroom2 from "../images/Slides/bedroom2.jpg";
import bedroom3 from "../images/Slides/bedroom3.jpg";
import bedroom4 from "../images/Slides/bedroom4.jpg";
import contact from "../../svgs/contact.svg";
import wifi from "../../svgs/wifi.svg";
import bed from "../../svgs/bed.svg";
import payment from "../../svgs/payment.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";

export const RoomSample = () => {
  const navigate = useNavigate();
  const handleCheckAvailability = () => {
    navigate("/rooms");
  };
  const [setSwiperRef] = useState(null);

  return (
    <div className="swiperContainer">
      <p className="worldclass">Enjoy World Class stay experience</p>
      <p className=" roomTitle">Our Rooms</p>
      <Swiper
        onSwiper={setSwiperRef}
        effect="coverflow"
        // loop={true}
        grabCursor={true}
        initialSlide={1} // Start from the second slide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1.5, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides per view at 768px screen width
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 2 slides per view at 768px screen width
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <img src={bedroom2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="roomTitle">Standard Room</p>
              <div className="features">
                <div className="subFeatures">
                  <img height={20} src={contact} alt="img" />
                  <span>2 Guests</span>
                </div>
                <div className="subFeatures">
                  <img src={wifi} alt="img" />
                  <span>Internet connection</span>
                </div>
                <div className="subFeatures">
                  <img src={bed} alt="img" />
                  <span>Comfortable bedding</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={payment} alt="img" />
                  <span>N50,000</span>
                </div>
              </div>
              <p className="card-text">
                Our newly-redesigned Parkview Astoria – Diplomatic Suites are
                spacious, comfortable and come with the very latest in modern
                luxury features and amenities.
              </p>
              <button
                type="button"
                onClick={handleCheckAvailability}
                class="btn btn-primary btn-sm"
              >
                Book now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={bedroom3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="roomTitle">Super Deluxe Room</p>
              <div className="features">
                <div className="subFeatures">
                  <img height={20} src={contact} alt="img" />
                  <span>2 Guests</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={wifi} alt="img" />
                  <span>Internet connection</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={bed} alt="img" />
                  <span>Comfortable bedding</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={payment} alt="img" />
                  <span>N50,000</span>
                </div>
              </div>
              <p className="card-text">
                At Parkview Astoria, Our luxury deluxe is seated mostly on the
                first floor, the rooms are easily accessible and the room
                ambience is astonishing. The room offers a desk space, private
                bathroom, access to WiFi and cable TV. Book a stay at our Luxury
                Deluxe room for an unforgettable experience.
              </p>
              <button
                type="button"
                onClick={handleCheckAvailability}
                class="btn btn-primary btn-sm"
              >
                Book now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={bedroom4} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="roomTitle">Duluxe Room</p>
              <div className="features">
                <div className="subFeatures">
                  <img height={20} src={contact} alt="img" />
                  <span>2 Guests</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={wifi} alt="img" />
                  <span>Internet connection</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={bed} alt="img" />
                  <span>Comfortable bedding</span>
                </div>
                <div className="subFeatures">
                  <img height={20} src={payment} alt="img" />
                  <span>N50,000</span>
                </div>
              </div>
              <p className="card-text">
                Our Executive Suite provides you with a TV, air conditioning and
                satellite channels. There is also a refrigerator. Private
                bathroom also comes with free toiletries. Extras include a desk,
                a safety deposit box and bed linen.
              </p>
              <button
                type="button"
                onClick={handleCheckAvailability}
                class="btn btn-primary btn-sm"
              >
                Book now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
