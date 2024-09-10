import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="../../images/SuntanHotelLogo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mx-auto">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
              <Link className="nav-link" to="/amenities">
                Amenities
              </Link>
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
