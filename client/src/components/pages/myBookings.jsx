import { useState, useEffect } from 'react';
import './myBooking.css'


const MyBooking = () => {
  const [propertyData, setPropertyData] = useState([{id:'test123', image:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',name:'cottonflower lane', location:'new jersey', price:300}, {id:'test567', image:'https://3.bp.blogspot.com/-cuDVUdL2uGE/T9MbF4P98uI/AAAAAAAACoI/ev0R2e86nDc/s1600/Nice+house+design+Toronto+Canada+1.jpg',name:'stonesmith point', location:'toronto', price:780},{id:'test8910', image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUOhBzBEXm74Pza7zLMpRdmFjFymcYV7WhFfVY8zaQnPvzF9eh-Sj7kS4N3-frLNKJx4mzYIE7UtvT-HaC7ZOCUiY8DlWBLcXRLcWrzt7IT_wzGBvuZFi7YajSgaYjhbcATXLe91XogRASz5McuRcEiJJhOhVs1lKL1DZOi783tfjT9cEk9vWUY1d2g6k/s750/MED445FC27DDAA8433B8055AF6336724710_20230602130501_w2200_q80.jpg',name:'fika lagom cottage', location:'djurgården', price:420} ]);

  // useEffect(() => {
  //   fetch('API')
  //     .then(response => response.json())
  //     .then(data => setPropertyData(data));
  // }, []);

  return (
    <div className="container">

    <h1>my bookings</h1>
      <div className="main-content">
        {propertyData.map(property => (
          <div key={property.id} className="booking-box">
            <div className="left-content">
              <img src={property.image} alt={property.id} />
              <div className="property-details">
                <h2>{property.name}, {property.location}</h2>
                <h3>dates</h3>
                <h3>{property.price}€ per night</h3>
              </div>
            </div>
            <div className="right-content">
              <button><p>booking details</p></button>
              <button>re-book property</button>
              <button>add to favorites</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
