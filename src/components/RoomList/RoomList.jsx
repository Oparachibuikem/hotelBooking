import React, { useEffect, useRef, useState } from "react";
import "./Bookings.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./BookingContext"; // Import the context hook

const Bookings = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { setBookingData } = useBooking(); // Get the setter from the context

  const dateRef = useRef(null); // Create a ref for the date component
  const optionsRef = useRef(null); // Create a ref for the options component

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };

  const handleCheckAvailability = () => {
    const formattedStartDate = format(date[0].startDate, "yyyy-MM-dd");
    const formattedEndDate = format(date[0].endDate, "yyyy-MM-dd");

    // Save data in context
    setBookingData({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      options,
    });

    // Navigate to CartPage
    navigate("/cartpage");
  };

  return (
    <div className="BookingSession">
      {/* Date range picker */}
      <div className="box">
        <span className="Calendar" onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
        {openDate && (
          <div ref={dateRef} className="date-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          </div>
        )}
      </div>
      {/* Options dropdown */}
      <div className="box">
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="GuestCount"
        >{`${options.adult} adult | ${options.children} children | ${options.room} room`}</span>
        {openOptions && (
          <div className="options" ref={optionsRef}>
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  disabled={options.children <= 0}
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 1}
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Check Availability button */}
      <button
        type="button"
        className="btn btn-primary btn-lg check"
        onClick={handleCheckAvailability}
      >
        Check Availability
      </button>
    </div>
  );
};

export default Bookings;
