import React from "react";
import "../../../styling/properties.css";
import { useReducer, useEffect, useState } from "react";
import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbGrid3X3 } from "react-icons/tb";
import {
  getPropertyDetails,
  getAllPropertyList,
} from "../../apicalls/propertyApicalls.js";
import { bookingReducer } from "../../context/Bookingreducer.js";

export default function Allproperties() {
  const [bookingState, bookingDispatch] = useReducer(bookingReducer, {
    propertyList: [],
  });
  const { propertyList, loading } = bookingState || {};

  useEffect(() => {
    getAllPropertyList(bookingDispatch);
  }, []);

  useEffect(() => {
    console.log("state", bookingState);
  }, [bookingState]);

  return (
    <div className="listingsbody">
      <h1 className="listingsh1">our properties</h1>
      <div className="listings-card-container">
        {loading ? (
          <p>Loading property details...</p>
        ) : (
          propertyList.map((property, index) => (
            <div key={index} className="listings-card">
              <div className="card-img">
                <img
                  src={
                    property.images[0].url ||
                    "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg"
                  }
                  alt="property"
                />
              </div>
              <div className="card-content">
                <h3 className="property-name-listing">
                  {property.name.toLowerCase()}
                </h3>
                <p className="propertylocation">{property.state}</p>
                <p className="pricepernight">
                  {property.pricePerNight} € per night
                </p>
              </div>
              <div className="listing-icons">
                <div className="listing-icon">
                  <IoBed />
                  {property.numberOfBeds}
                </div>
                <div className="listing-icon">
                  <GiBathtub />
                  {property.numberOfBathrooms}
                </div>

                <div className="listing-icon">
                  <TbGrid3X3 />
                  {property.numberOfBedrooms}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
