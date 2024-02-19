import { useState, useEffect } from 'react';
import './myBooking.css'


const MyBooking = () => {
  const [propertyData, setPropertyData] = useState([{id:'test123', image:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',name:'pop', location:'berlin', price:300}]);

  useEffect(() => {
    fetch('API')
      .then(response => response.json())
      .then(data => setPropertyData(data));
  }, []);

  return (
    <div className="container">

    <h2>my bookings</h2>
      <div className="main-content">
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
