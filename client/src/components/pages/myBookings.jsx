import { useContext, useEffect, useState } from "react";
import "./myBooking.css";
import { LoginContext } from "../../contexts/AppContext";
import { cancelBooking, getBookingsOfUser } from "../../apiCalls/bookingApiCalls";
import { useNavigate } from "react-router-dom";



const MyBooking = () => {
  const [filter, setFilter] = useState("upcoming");
  const [bookings, setBookings] = useState([])
  const {login} = useContext(LoginContext)
  const navigate = useNavigate()

  const handleFilterChange = (e) => {
    console.log(e.target.getAttribute("name"))
    setFilter(e.target.getAttribute("name"))
    
  };
  useEffect(() => {
    if(login.loggedIn) {
      getBookingsOfUser(login.user._id, filter).then((response) => {
        console.log(response.data)
           setBookings(response.data)
      })
    } else {
      navigate("/login-signup")
    }
    
  }, [filter, login.loggedIn])

  const handleCancelBooking = async (e) => {
    
    await cancelBooking(e.target.getAttribute("name"))
    setFilter("cancelled")
  }
     

  return (
    <div className="booking-container">
      <div className="booking-title">
        <h1>My bookings</h1>
      </div>
      <div className="booking-tabs">
        <ul >
          <li onClick={handleFilterChange} name="previous">
            Previous bookings
          </li>
          <li onClick={handleFilterChange} name="upcoming">
            Upcoming bookings
          </li>
          <li onClick={handleFilterChange} name="cancelled">
            Cancelled bookings
          </li>
        </ul>
      </div>
      <div className="main-content">
        {bookings?.map((booking) => (
          <div key={booking._id} className="booking-box">
            <div className="left-content">
              <div className="prop-pic">
                <img src={booking.listing.images[0]} alt={booking.id} />
              </div>
              <div className="property-details">
                <h2>
                  {booking.listing.name},
                  <br />
                  {booking.listing.city}
                </h2>
                <h3>dates</h3>
                <h4>{booking.listing.pricePerNight}€ per night</h4>
              </div>
            </div>
            <div className="right-content">
              <button>
                <p>Booking details</p>
              </button>
              <button>Re-book property</button>
              <button onClick={handleCancelBooking} name={booking._id} hidden={filter=== "upcoming" ? false : true} >Cancel</button>
              <button hidden = {filter === "upcoming" ? true : false}>Add to favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
