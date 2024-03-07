import React from "react";
import "../../../styling/properties.css";
import { useReducer, useEffect, useState } from "react";
//import listingReducer from "../../context/listingReducer.js";
import { getPropertyDetails } from "../../apicalls/propertyApicalls.js";
import { bookingReducer } from "../../context/Bookingreducer.js";

export default function Properties() {
  const [bookingState, bookingDispatch] = useReducer(bookingReducer);
  const { currentBooking, loading } = bookingState || {};

  useEffect(() => {
    getPropertyDetails(bookingDispatch);
  }, []);

  useEffect(() => {
    console.log("state", bookingState);
  }, [bookingState]);

  return (
    <div className="listingsbody">
      <h1 className="listingsh1">Our Properties</h1>
      <div className="listings-card-conatiner">
        <div className="listings-card">
          <div className="card-img">
            <img
              src="https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg"
              alt="property"
            />
          </div>
          <div className="card-content">
            <h3>{currentBooking?.name}</h3>
            <p>
              {" "}
              {currentBooking?.state}, {currentBooking?.country}{" "}
            </p>
            <p>{currentBooking?.pricePerNight} €</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
