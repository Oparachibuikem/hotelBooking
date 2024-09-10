import "./Home.scss";
import video from "../images/bgvideo.mp4";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Navbar from "../Navbar/Navbar";
import Bookings from "../Bookings/Bookings";
import PictureSlide from "./PictureSlides/PictureSlide";
import { RoomSample } from "../RoomSample/RoomSample";
import { AmenitiesSample } from "../AmenitiesSample/AmenitiesSample";
import Footer from "../Footer/Footer";
import whatsapp from "../../svgs/whatsapp.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="titlebg">
        <video
          src={video}
          alt="background Image"
          className="backgroundImage"
          autoPlay
          muted
        />

        <div className="MainBody">
          <h1 className="title">SUNTAN HOTELS</h1>
          <Link
            to="https://www.whatsapp.com/"
            target="_blank"
            className="whatsapp-button"
            title="Chat with us on WhatsApp"
          >
            <img src={whatsapp} alt="Chat with us on WhatsApp" />
          </Link>

          <Bookings />
          <div className="main">
            WELCOME TO SUNTAN HOTEL
            <p className="motto">Home away from home</p>
            <p className="location">HERE IN CALIFORNIA</p>
            <p className="mainText">
              A warm welcome to Suntan Hotel’s website. Our luxury hotel nestled
              in Suntan Estate, the heart of the United States of America – a
              classic commercial district of the US, offers a wide range of
              business and leisure facilities. We provide you with premium
              hospitality services with efficient and capable in-house team
              looking to fulfill our promise of delectable cuisines and
              impeccable service. We trust your stay in our serene Parkview
              Astoria Hotel will be enjoyable, rejuvenating giving you an edge
              in overall everyday performance.
            </p>
            <PictureSlide />
            <RoomSample />
            <AmenitiesSample />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
