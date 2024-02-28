import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/homePage.jsx";
import Login from './components/pages/login.jsx';
import AddListing from './components/pages/addListing.jsx';
import ContactPage from './components/pages/contactUs.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bookings" element={<MyBooking />} exact />
        <Route path="/login-signup" element= {<div> <Login/> <SignUp/> </div>} exact />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/properties" element={<AddListing />} />
        {/* Add more routes as needed */}
        {/* 404 Page Not Found */}
        <Route render={() => <h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};
export default App;
