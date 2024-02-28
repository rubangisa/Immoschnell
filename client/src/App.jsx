import React from "react";
import { Routes, Route } from "react-router-dom";
//import { useReducer, useState } from "react";
import Home from "./components/pages/homePage.jsx";
import SignUp from "./components/pages/signUp.jsx";
import NavBar from "./components/navbar.jsx";
import MyBooking from "./components/pages/myBookings.jsx";
import "./App.css";
import Payments from "./components/pages/payments.jsx";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bookings" element={<MyBooking />} exact />
        <Route path="/login" element={<SignUp />} />
        <Route path="/payments" element={<Payments />} />

        {/* Add more routes as needed */}
        {/* 404 Page Not Found */}
        <Route render={() => <h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};
export default App;
