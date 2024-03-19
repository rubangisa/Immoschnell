import { useContext, useEffect, useState } from "react";
import "./myBooking.css";
import { LoginContext } from "../../contexts/AppContext";
import { cancelBooking, getBookingsOfUser, updateBookingFavorite } from "../../apiCalls/bookingApiCalls";
import { useNavigate } from "react-router-dom";
import Star from "./star";



const MyBooking = () => {
  const [filter, setFilter] = useState("upcoming");
  const [bookings, setBookings] = useState([]);
  const {login} = useContext(LoginContext);
  const navigate = useNavigate();
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [refreshToggle, setRefreshToggle] = useState(false);

  

  

  const handleFilterChange = (e) => {
    setFilter(e.target.getAttribute("name"))
    
  };


  useEffect(() => {
    if(login.loggedIn) {
      getBookingsOfUser(login.user._id, filter).then((response) => {
        console.log(response.data)
           setBookings(response.data)
      })
    } else {
      navigate("/login")
    }
    
  }, [filter, login.loggedIn, refreshToggle])

  

  const handleCancelBooking = async (e) => {
    
    await cancelBooking(e.target.getAttribute("name"))
    setFilter("cancelled")
  }
     

  const handleReeBook =  (e) => {
    navigate(`/listing-info/${e.target.getAttribute("name")}`)
  }

  const handleBookingDetails = () => {
    setShowBookingDetails(!showBookingDetails)
  }

  const handleAddFavorite = async (e) => {
    await updateBookingFavorite(e.target.getAttribute("name"), true)
    setRefreshToggle(!refreshToggle)
   
  }

  const handleRemoveFavorite = async (e) => {
    await updateBookingFavorite(e.target.getAttribute("name"), false)
    setRefreshToggle(!refreshToggle)
   
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
                  <br/>
                  {booking.price}€
                </h2>
                <h4 hidden={!showBookingDetails}>{new Date(booking.checkIn).toLocaleDateString()}</h4>
                <h4 hidden={!showBookingDetails}>{new Date(booking.checkOut).toLocaleDateString()}</h4>
                <h4 hidden={!showBookingDetails}>{booking.listing.pricePerNight}€ per night</h4>
                <h4 hidden={!showBookingDetails}>{booking.guestCount} guest</h4>
              </div>
            </div>
            <div className="right-content">
              <button onClick={handleBookingDetails} >
                <p>Booking details</p>
              </button>
              <button onClick={handleReeBook} name={booking.listing._id}> Re-book property</button>
              <button onClick={handleCancelBooking} name={booking._id} hidden={filter=== "upcoming" ? false : true} >Cancel</button>
              <button onClick={booking.favorite ? handleRemoveFavorite : handleAddFavorite} name={booking._id} hidden = {filter === "upcoming" ? true : false}>{booking.favorite ? "Remove favorite" : "Add to favorites"} </button>
              <Star bookingId={booking._id} userId={login?.user?._id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
