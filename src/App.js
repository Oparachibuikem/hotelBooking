import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Amenities from "./components/Amenities/Amenities";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import CartPage from "./components/CartPage/CartPage";
import { BookingProvider } from "./components/Bookings/BookingContext"; // Import the BookingProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/amenities",
    element: <Amenities />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/cartpage",
    element: <CartPage />,
  },
]);

function App() {
  return (
    <BookingProvider>
      {" "}
      {/* Wrap the entire RouterProvider in BookingProvider */}
      <RouterProvider router={router} />
    </BookingProvider>
  );
}

export default App;
