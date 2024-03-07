import SignUp from "./components/pages/signUp.jsx";
import NavBar from "./components/navbar.jsx";
import MyBooking from "./components/pages/myBookings.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/homePage.jsx";
import Login from "./components/pages/login.jsx";
import About from "./components/pages/about.jsx";
import AddListing from "./components/pages/addListing.jsx";
import ContactPage from "./components/pages/contactUs.jsx";
import Payments from "./components/pages/payments.jsx";
import Properties from "./components/pages/properties.jsx";
import "./App.css";
import Allproperties from "./components/pages/properties.jsx";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/" element={<Home />} />
        {/* // <Route path="/listing-info" element={<ListingInfo />} />  */}
        <Route path="/" exact element={<Home />} />
        <Route
          path="/login-signup"
          element={
            <div>
              {" "}
              <Login /> <SignUp />{" "}
            </div>
          }
          exact
        />
        <Route path="/about" element={<About />} exact />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/allproperties" element={<Allproperties />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/addProperty" element={<AddListing />} />
        {/* <Route path="/userDash" element={<UserDash />} /> */}

        {/* Add more routes as needed */}
        {/* 404 Page Not Found */}
        <Route render={() => <h2>Page not found</h2>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
