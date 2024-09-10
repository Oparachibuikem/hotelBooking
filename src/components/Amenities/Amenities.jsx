import React from "react";
import "./Amenities.scss";
import Navbar from "../Navbar/Navbar";
import Bookings from "../Bookings/Bookings";

import swim from "../images/Slides/swimming.jpg";
import gym from "../images/Slides/gym.jpg";
import nightclub from "../images/Slides/nightclub.jpg";

const Amenities = () => {
  return (
    <div>
      <Navbar />
      <h1 className="header">AMENITIES</h1>
      <Bookings />
      <div className="">
        <p className="worldclass subheader">Unforgettable Experience</p>
        <p className=" roomTitle subheader">Our Amenities</p>
        <div className="card mb-3 w-100 ">
          <div className="row g-0 ">
            <div className="col-md-10 col-xxl-6">
              <img src={swim} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-10 col-xxl-6 order-1">
              <div className="card-body">
                <h5 className="card-title">Swimming Pool</h5>
                <p className="card-text">
                  Our state-of-the-art swimming pool offers an unparalleled
                  experience with a range of luxurious amenities. Enjoy
                  breathtaking views from the infinity pool, swim comfortably
                  year-round in the heated pool, and take in the panoramic
                  cityscape from the exclusive rooftop pool. Families will
                  appreciate the dedicated children's pool, while those seeking
                  relaxation can unwind in the Jacuzzi with therapeutic jets.
                  Fitness enthusiasts can stay active in the lap pool, and all
                  guests can refresh at the poolside bar, which serves a variety
                  of beverages and light snacks. Relax in style on comfortable
                  lounge chairs or in private cabanas, and enjoy the soothing
                  ambiance created by our elegant water features.
                </p>
                <p className="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-10 col-xxl-6 order-1">
              <div className="card-body">
                <h5 className="card-title">Gym</h5>
                <p className="card-text">
                  Our fitness center is designed to cater to all your workout
                  needs, providing a comprehensive range of modern equipment and
                  facilities to ensure a fulfilling and effective exercise
                  experience. Equipped with state-of-the-art cardio machines,
                  strength training equipment, and free weights, our gym allows
                  guests to perform a wide variety of workouts. Certified
                  personal trainers are available for one-on-one coaching and
                  personalized workout plans, while a variety of group fitness
                  classes, including yoga, pilates, spinning, and HIIT sessions,
                  offer a fun and engaging way to stay fit. Additionally, our
                  gym features spacious locker rooms with showers, a relaxing
                  sauna, and complimentary towels, ensuring a comfortable and
                  convenient workout environment.
                </p>
                <p className="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-10 col-xxl-6">
              <img src={gym} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-10 col-xxl-6">
              <img src={nightclub} class="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-10 col-xxl-6 order-1">
              <div className="card-body">
                <h5 className="card-title">Club House</h5>
                <p className="card-text">
                  Our luxurious clubhouse provides an elegant and inviting space
                  for socializing and relaxation, featuring a variety of
                  top-tier amenities to enhance your experience. The spacious
                  lounge area is perfect for unwinding with friends, complete
                  with comfortable seating, a large flat-screen TV, and a cozy
                  fireplace. For those looking to host events, the clubhouse
                  offers a fully equipped kitchen and a stylish dining area,
                  ideal for private parties and gatherings. Stay productive with
                  our high-speed Wi-Fi and designated workspace, or enjoy some
                  leisure time in the game room, which includes a pool table,
                  foosball, and board games. The clubhouse also extends to an
                  outdoor patio with BBQ grills and seating, providing a perfect
                  spot for alfresco dining and enjoying the scenic views.
                </p>
                <p className="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
