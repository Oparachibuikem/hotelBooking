import React from "react";
import "./AboutUs.scss";
import Navbar from "../Navbar/Navbar";
import Bookings from "../Bookings/Bookings";

const AboutUs = () => {
  return (
    <div className="div">
      <Navbar />
      <h1 className="header">ABOUT US</h1>
      <Bookings />

      <p className="mainText">
        A warm welcome to Suntan Hotel’s website. Our luxury hotel nestled in
        Suntan Estate, the heart of the United States of America – a classic
        commercial district of the US, offers a wide range of business and
        leisure facilities. We provide you with premium hospitality services
        with efficient and capable in-house team looking to fulfill our promise
        of delectable cuisines and impeccable service. We trust your stay in our
        serene Parkview Astoria Hotel will be enjoyable, rejuvenating giving you
        an edge in overall everyday performance.
      </p>
    </div>
  );
};

export default AboutUs;
