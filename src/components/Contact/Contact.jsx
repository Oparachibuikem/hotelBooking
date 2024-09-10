import React from "react";
import "./Contact.scss";
import Navbar from "../Navbar/Navbar";
import Bookings from "../Bookings/Bookings";
import { Link } from "react-router-dom";

import location from "../../svgs/location.svg";
import email from "../../svgs/email.svg";
import phone from "../../svgs/phone.svg";

const Contact = () => {
  return (
    <div className="all">
      <Navbar />
      <h1 className="header">OUR CONTACT</h1>
      <Bookings />
      <div className="container">
        <div className="row">
          <div className="col left">
            <div className="contactTitle">
              <h2>Get In Touch</h2>
              <p>you can message us here</p>
            </div>
            <div className="contactInfo">
              <div className="iconGroup">
                <img
                  src={phone}
                  height={40}
                  width={40}
                  className="icon"
                  alt="..."
                />
                <div className="details">
                  <span>PHONE</span>
                  <span className="number">+123 456 7890</span>
                </div>
              </div>
              <div className="iconGroup">
                <img
                  src={email}
                  height={40}
                  width={40}
                  className="icon"
                  alt="..."
                />
                <div className="details">
                  <span>EMAIL</span>
                  <span className="number">123@abc.com</span>
                </div>
              </div>
              <div className="iconGroup">
                <img
                  src={location}
                  height={40}
                  width={40}
                  className="icon"
                  alt="..."
                />
                <div className="details">
                  <span>LOCATION</span>
                  <span className="number">@ 12 Address street</span>
                </div>
              </div>
              <div className="socialMedia">
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../images/instagram.png"
                    alt="img"
                    width={20}
                    style={{ marginLeft: 10 }}
                  />
                </Link>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../images/facebook.png"
                    alt="img"
                    width={30}
                    style={{ marginLeft: 10 }}
                  />
                </Link>
                <Link
                  to="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../images/youtube.png"
                    alt="img"
                    width={25}
                    style={{ marginLeft: 10 }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col right">
            <form action="" className="messageForm">
              <div className="inputGroup halfwidth">
                <input
                  type="text"
                  required="required"
                  placeholder="Your Name"
                />
              </div>

              <div className="inputGroup halfwidth">
                <input
                  type="email"
                  required="required"
                  placeholder="Your Email"
                />
              </div>

              <div className="inputGroup fullwidth">
                <input type="text" required="required" placeholder="Subject" />
              </div>

              <div className="inputGroup fullwidth">
                <textarea required="required" placeholder="Text"></textarea>
              </div>

              <div className="inputGroup fullwidth">
                <button type="button" class="btn btn-primary btn-sm">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
