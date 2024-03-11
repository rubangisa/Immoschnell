import { useEffect, useState, useContext } from "react";
import "./listingInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { getListingById } from "../../apiCalls/listingApi";
import { createBooking } from "../../apiCalls/bookingApiCalls";
import { BookingContext, LoginContext } from "../../contexts/AppContext";

function calculatePrice (checkInStr, checkOutStr, pricePerNight, guestCount) {
  const checkIn = new Date(checkInStr);
  const checkOut = new Date(checkOutStr);
  const oneDay = 1000 * 60 * 60 * 24;

  const totalPrice =
    Math.round((checkOut.getTime() - checkIn.getTime()) / oneDay) *
    pricePerNight * guestCount;
    return totalPrice
}

const ListingInfo = () => {
  const {booking, dispatchBooking} = useContext(BookingContext);
  const { login } = useContext(LoginContext);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [currentTotalPrice, setCurrentTotalPrice] = useState(0);
  const [listing, setListing] = useState(null);
  const { listingId } = useParams();
  const navigate = useNavigate();

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
    const newTotalPrice = calculatePrice(e.target.value, checkOut, listing.pricePerNight, guestCount);
    setCurrentTotalPrice(newTotalPrice)
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    const newTotalPrice = calculatePrice(checkIn, e.target.value, listing.pricePerNight, guestCount);
    setCurrentTotalPrice(newTotalPrice)
  };

  const handleGuestCountChange = (e) => {
    setGuestCount(e.target.value);
    const newTotalPrice = calculatePrice(checkIn, checkOut, listing.pricePerNight, e.target.value);
    setCurrentTotalPrice(newTotalPrice)
  };
  
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)

    const userId = login.user._id;
    const totalPrice = calculatePrice(checkIn, checkOut, listing.pricePerNight, guestCount)
    console.log(totalPrice)
    const data = {
      user: userId,
      listing: listingId,
      guestCount: guestCount,
      checkIn: checkIn,
      checkOut: checkOut,
      price: totalPrice,
      status: "pending",
    };
    
     await createBooking(data, dispatchBooking)

  };

  useEffect(() => {
    getListingById(listingId).then((response) => {
      if (response) {
        setListing(response.data);
      } else {
        navigate("/error");
      }
    });
  }, [listingId]);


  useEffect(() => {
    if(booking.booking) {
      navigate("/payments")
    } else if (booking.error !== "") {
      console.log(booking.error)
    } 
  }, [booking])
 
  return (
    <div className="prop-listing-info">
      <div className="listing-grid-container">
        <div className="box-4">
          <div className="listing-info">
            <div className="property-info">
              <h2>{listing?.name}</h2>
            </div>
            <p>{listing?.city + "," + listing?.country}</p>
            <p>{listing?.pricePerNight} € per night</p>
            <p>user rating: {listing?.rating}</p>
            <p>{listing?.numberOfBedrooms} bedrooms</p>
            <p>{listing?.numberOfBeds} beds</p>
            <p>{listing?.numberOfBathrooms} bathrooms</p>
            <p>
              hosted by:{" "}
              {listing?.user?.firstName + ", " + listing?.user?.lastName}
            </p>
            <hr />
          </div>
          <div className="vl"></div>
          <div className="booking-dates">
            <form onSubmit={handleSubmit}>
              <label htmlFor="check-in">check-in:</label>
              <input
                onChange={handleCheckInChange}
                type="date"
                id="check-in"
                name="check-in"
              />
              <label htmlFor="check-out">check-out:</label>
              <input
                onChange={handleCheckOutChange}
                type="date"
                id="check-out"
                name="check-out"
              />
              <label htmlFor="guest">Guest Count</label>
              <input
                onChange={handleGuestCountChange}
                type="number"
                id="guest"
                name="guest"
                min={0}
              />
              <p>Total Price: {currentTotalPrice}€</p>
              <button type="submit">book now</button>
              <p>{booking.error}</p>
            </form>
          </div>
          <hr />
          <div className="booking-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4990.716715127345!2d1.1790615206835688!3d51.286129046748954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deb450937d6a8d%3A0xd375b0159f3216b9!2sWickhambreaux%2C%20Canterbury%2C%20UK!5e0!3m2!1sen!2sde!4v1708012969083!5m2!1sen!2sde"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="box-5">
          <div className="main-image">
            <img src={listing?.images[0]} alt="main-image" />
          </div>

          <div className="gallery">
            <img
              className="gallery-img"
              id="image-2"
              src={listing?.images[1]}
              alt="prop2"
            />
            <img
              className="gallery-img"
              id="image-3"
              src={listing?.images[2]}
              alt="prop3"
            />
            <img
              className="gallery-img"
              id="image-4"
              src={listing?.images[3]}
              alt="prop4"
            />
            <img
              className="gallery-img"
              id="image-5"
              src={listing?.images[4]}
              alt="prop5"
            />
          </div>
        </div>

        <div className="box-6">
          <div className="property-details">
            <p>{listing?.description}</p>
          </div>
          <div className="amen-icons">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="icon"
              title="verified host"
            />

            <FontAwesomeIcon
              icon={faDoorOpen}
              className="icon"
              title="self check-in"
            />

            <FontAwesomeIcon
              icon={faWifi}
              className="icon"
              title="high speed wifi"
            />
            <FontAwesomeIcon icon={faBath} className="icon" title="bath tub" />
            <FontAwesomeIcon
              icon={faHotTub}
              className="icon"
              title="private outdoor hot tub"
            />

            <FontAwesomeIcon
              icon={faHouseFire}
              className="icon"
              title="log fireplace"
            />
            <FontAwesomeIcon
              icon={faCar}
              className="icon"
              title="secure parking"
            />
            <FontAwesomeIcon
              icon={faKitchenSet}
              className="icon"
              title="full kitchen"
            />
            <FontAwesomeIcon
              icon={faDumbbell}
              className="icon"
              title="private gym"
            />
            <FontAwesomeIcon
              icon={faWheelchair}
              className="icon"
              title="wheelchair accessible"
            />

            <FontAwesomeIcon
              icon={faSeedling}
              className="icon"
              title="eco friendly"
            />

            <FontAwesomeIcon icon={faTv} className="icon" title="smart tv" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
