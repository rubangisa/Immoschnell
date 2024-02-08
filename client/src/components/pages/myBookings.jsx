import { useState, useEffect } from 'react';

const MyBooking = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    fetch('API')
      .then(response => response.json())
      .then(data => setPropertyData(data));
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

      <div className="main-content">
      <h2>my bookings</h2>
        {propertyData.map(property => (
          <div key={property.id} className="booking-box">
            <div className="left-content">
              <img src={property.image} alt="Property" />
              <div className="property-details">
                <h2>{property.name}</h2>
                <p>{property.location}</p>
                <p>{property.price}</p>
              </div>
            </div>
            <div className="right-content">
              <button>Booking Details</button>
              <button>Re-book Property</button>
              <button>Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
