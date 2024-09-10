import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

// Create provider component
export const BookingProvider = ({ children }) => {
  // Initialize state from localStorage or default to null
  const [bookingData, setBookingData] = useState(() => {
    const savedData = localStorage.getItem("bookingData");
    return savedData ? JSON.parse(savedData) : null;
  });

  // Update localStorage whenever bookingData changes
  useEffect(() => {
    if (bookingData) {
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    } else {
      localStorage.removeItem("bookingData");
    }
  }, [bookingData]);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
