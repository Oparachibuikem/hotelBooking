import React, { useState, useRef, useEffect } from "react";
import "./Bookings.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./BookingContext";

const Bookings = ({
  buttonLabel = "Check Availability",
  redirectTo = "/rooms",
}) => {
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

  const dateRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleCheckAvailability = () => {
    const formattedStartDate = format(date[0].startDate, "yyyy-MM-dd");
    const formattedEndDate = format(date[0].endDate, "yyyy-MM-dd");

    setBookingData({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      options,
    });

    navigate(redirectTo);
  };

  return (
    <div className="BookingSession">
      <div className="box" ref={dateRef}>
        <span className="Calendar" onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="box" ref={optionsRef}>
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="GuestCount"
        >{`${options.adult} adult | ${options.children} children | ${options.room} room`}</span>
        {openOptions && (
          <div className="options">
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
      <button
        type="button"
        className="btn btn-primary btn-lg check"
        onClick={handleCheckAvailability}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Bookings;
