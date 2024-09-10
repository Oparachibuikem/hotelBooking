import React, { useState, useEffect, useRef } from "react";
import "./CartPage.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useBooking } from "../Bookings/BookingContext";
import Navbar from "../Navbar/Navbar";
import emailjs from "emailjs-com";

const CartPage = () => {
  const { bookingData, setBookingData } = useBooking();
  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    adult: 1,
    children: 0,
    room: 1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    roomType: "single",
  });

  const [openDate, setOpenDate] = useState(false);
  const dateRef = useRef(null);

  useEffect(() => {
    if (bookingData) {
      setFormData({
        startDate: new Date(bookingData.startDate),
        endDate: new Date(bookingData.endDate),
        adult: bookingData.options.adult,
        children: bookingData.options.children,
        room: bookingData.options.room,
        roomType: bookingData.options.roomType || "single",
      });
    }
  }, [bookingData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (item) => {
    setFormData((prev) => ({
      ...prev,
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setBookingData({
      startDate: format(formData.startDate, "yyyy-MM-dd"),
      endDate: format(formData.endDate, "yyyy-MM-dd"),
      options: {
        adult: parseInt(formData.adult, 10),
        children: parseInt(formData.children, 10),
        room: parseInt(formData.room, 10),
        roomType: formData.roomType,
      },
    });

    // Send email to both the booker and the owner
    sendEmail(formData.email); // Passing the email from the form data
  };

  const sendEmail = (recipientEmail) => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      user_email: formData.email, // Booker's email
      owner_email: "chibuikemopara@yahoo.com", // Owner's email
      startDate: format(formData.startDate, "yyyy-MM-dd"),
      endDate: format(formData.endDate, "yyyy-MM-dd"),
      adults: formData.adult,
      children: formData.children,
      room: formData.room,
      roomType: formData.roomType,
    };

    emailjs
      .send("noreplyy", "template_0x69p6p", templateParams, "cUVcdnR88dltLDAQE")
      .then(
        (result) => {
          console.log(
            `Email successfully sent to ${recipientEmail}:`,
            result.text
          );

          // Send email to the owner after sending to the booker
          emailjs
            .send(
              "noreplyy",
              "template_0x69p6p",
              {
                ...templateParams,
                user_email: "chibuikemopara@yahoo.com", // Send to owner after booker
              },
              "cUVcdnR88dltLDAQE"
            )
            .then(
              (ownerResult) => {
                alert(
                  "Email successfully sent to the owner:",
                  ownerResult.text
                );
              },
              (ownerError) => {
                alert.error(
                  "Error sending email to the owner:",
                  ownerError.text
                );
              }
            );
        },
        (error) => {
          console.error("Error sending email to the user:", error.text);
        }
      );
  };

  return (
    <div className="CartPage">
      <Navbar />
      <h2 className="header">COMPLETE BOOKING</h2>
      <div className="bookingDetails">
        <h2 className="title">Booking Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div
              className={`dateRang ${openDate ? "open" : ""} inputFields`}
              ref={dateRef}
            >
              <label htmlFor="date">Date</label>
              <div className="date" onClick={() => setOpenDate(!openDate)}>
                {`${format(formData.startDate, "dd/MM/yyyy")} to ${format(
                  formData.endDate,
                  "dd/MM/yyyy"
                )}`}
              </div>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[
                    {
                      startDate: formData.startDate,
                      endDate: formData.endDate,
                      key: "selection",
                    },
                  ]}
                  className="datePicker"
                />
              )}
            </div>
            <div className="inputFields">
              <label htmlFor="children">Children</label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                value={formData.children}
                onChange={handleChange}
                placeholder="No. of Children"
              />
            </div>
            <div className="inputFields">
              <label htmlFor="adult">Adult</label>
              <input
                type="number"
                id="adult"
                name="adult"
                min="1"
                value={formData.adult}
                onChange={handleChange}
                placeholder="No. of Adults"
              />
            </div>
          </div>
          <div className="fields2">
            <div className="inputFields">
              <label htmlFor="roomType">Room Type</label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="dropdown"
              >
                <option value="single">Single Room 20,000</option>
                <option value="double">Double Room 40,000</option>
                <option value="suite">Suite 60,000</option>
                <option value="deluxe">Deluxe Room 80,000</option>
              </select>
            </div>
            <div className="inputFields">
              <label htmlFor="room">Rooms</label>
              <input
                type="number"
                id="room"
                name="room"
                min="1"
                value={formData.room}
                onChange={handleChange}
                placeholder="No. of Rooms"
              />
            </div>
          </div>
          <div className="fields3">
            <div className="inputFields">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="inputFields">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="fields4">
            <div className="inputFields">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="inputFields">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
