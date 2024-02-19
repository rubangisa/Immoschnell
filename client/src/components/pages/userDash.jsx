import { useState, useEffect } from "react";

const UserFavourites = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("property_API_URL")
      .then((response) => response.json())
      .then((data) => setPropertyData(data));

    fetch("user_API_URL")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
      {/*LOGO ICON*/}
      <ul>
      <li>home</li>
      <li>properties</li>
      <li>about</li>
      <li>contact us</li>
      </ul>
      {/*USER ICON*/}
      </nav>

      <div className="user-data">
        {userData.map((user) => (
          <div key={user.id}>
            <h2>welcome back, {user.name}</h2>
            <p>last login: {user.updated_at}</p>
            <button>manage profile</button>
          </div>
        ))}
      </div>

      <div className="favourites">
        {propertyData.map((property) => (
          <div key={property.id}>
            <p>{property.name}</p> 
            <button>View Property</button>
          </div>
        ))}
        <button>manage favourites</button>
      </div>
    </div>
  );
};

export default UserFavourites;
