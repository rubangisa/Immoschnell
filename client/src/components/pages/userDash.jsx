import { useState, useEffect } from "react";
import "./userDash.css";

const UserDash = () => {
  const [propertyData, setPropertyData] = useState([
    {
      id: "test123",
      name: "cottonflower lane",
      location: "new jersey",
      price: 300,
    },
  ]);

  const [userData, setUserData] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1647888774545-96f662a65e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "bugmakesthree",
      updated_at: "14.02.2024",
    },
  ]);

  return (
    <div className="container">
      <div className="grid-container">
        <div className="profile-box">
          <div className="user-data">
            {userData.map((user, index) => (
              <div key={index}>
                <img className="profile-pic" src={user.image} alt={user.name} />
                <h2>welcome back, {user.name}</h2>
                <p>last login: {user.updated_at}</p>
                <button>manage profile</button>
              </div>
            ))}
          </div>
        </div>

        <div className="favourites-box">
          <h2>your favourites</h2>
          {propertyData.map((property, index) => (
            <div key={index}>
              <p>{property.name}</p>
              <button>view property</button>
            </div>
          ))}
          <button>manage favourites</button>
        </div>
        <div className="member-status">
          <h2>member status</h2>
        </div>
        <div className="your-listings">
          <h2>your listings</h2>
        </div>
        <div className="socials">
          <h2>socials</h2>
        </div>
        <div className="help-center">
          <h2>help center</h2>
        </div>
        <div className="bookings">
          <h2>your bookings</h2>
          <h3>previous bookings</h3>
          <h3>upcoming bookings</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
