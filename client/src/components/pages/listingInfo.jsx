import { useState, useEffect } from "react";
import "./listingInfo.css";

const UserDash = () => {
    const [propertyData, setPropertyData] = useState([
      {
        id: "test123",
        image:
          "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "cottonflower lane",
        location: "new jersey",
        price: 300,
      },
      {
        id: "test123",
        image:
          "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "cottonflower lane",
        location: "new jersey",
        price: 300,
      },
      {
        id: "test123",
        image:
          "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "cottonflower lane",
        location: "new jersey",
        price: 300,
      },
    ]);