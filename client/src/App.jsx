import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import UserDash from "./components/pages/userDash.jsx";
import ListingInfo from "./components/pages/listingInfo.jsx";
import Footer from "./components/pages/footer.jsx";
import SignUp from "./components/pages/signUp.jsx";
import MyBooking from "./components/pages/myBookings.jsx";
import Home from "./components/pages/homePage.jsx";
// import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/navbar.jsx";
// import UserDash from "./components/pages/userDash.jsx";
// import ListingInfo from "./components/pages/listingInfo.jsx";
// import Footer from "./components/pages/footer.jsx";
// import SignUp from "./components/pages/signUp.jsx";
// import MyBooking from "./components/pages/myBookings.jsx";
// import Home from "./components/pages/homePage.jsx";
import Login from "./components/pages/login.jsx";
import About from "./components/pages/about.jsx";
import AddListing from "./components/pages/addListing.jsx";
import NotFound from "./components/pages/notFound.jsx";
import ContactPage from "./components/pages/contactUs.jsx";
import Payments from "./components/pages/payments.jsx";
import AllProperties from "./components/pages/properties.jsx";
import "./App.css";
import { LoginContext } from "./contexts/AppContext.jsx";
import { useReducer } from "react";
import { loginReducer } from "./reducers/LoginReducer.js";
const App = () => {
  const [login, dispatchLogin] = useReducer(loginReducer, {
    loggedIn: false,
    user: "",
  });
  return (
    <div>
      <LoginContext.Provider value={{ login, dispatchLogin }}>
        <NavBar />
        <Routes>
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/" element={<Home />} />
          <Route path="/listing-info/:listingId" element={<ListingInfo />} />
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
          {/* <Route path="/properties" element={<Properties />} />\ */}
          <Route path="/payments" element={<Payments />} />
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/addProperty" element={<AddListing />} />
          <Route path="/userDash" element={<UserDash />} />

          <Route path="*" element={<NotFound />} />

          {/* Add more routes as needed */}
          {/* 404 Page Not Found */}
          <Route render={() => <h2>Page not found</h2>} />
        </Routes>
        <Footer />
      </LoginContext.Provider>
    </div>
  );
};
export default App;
