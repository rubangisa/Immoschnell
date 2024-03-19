import { useEffect, useState, useContext } from "react";
import "./listingInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { getListingById } from "../../apiCalls/listingApi";
import { createBooking } from "../../apiCalls/bookingApiCalls";
import { BookingContext, LoginContext } from "../../contexts/AppContext";

function ListingInfo() {
  const { booking, dispatchBooking } = useContext(BookingContext);
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
    setCurrentTotalPrice(calculatePrice(e.target.value, checkOut, listing.pricePerNight, guestCount));
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    setCurrentTotalPrice(calculatePrice(checkIn, e.target.value, listing.pricePerNight, guestCount));
  };

  const handleGuestCountChange = (e) => {
    setGuestCount(e.target.value);
    setCurrentTotalPrice(calculatePrice(checkIn, checkOut, listing.pricePerNight, e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = login.user._id;
    const totalPrice = calculatePrice(checkIn, checkOut, listing.pricePerNight, guestCount);
    const data = {
      user: userId,
      listing: listingId,
      guestCount: guestCount,
      checkIn: checkIn,
      checkOut: checkOut,
      price: totalPrice,
      status: "pending",
    };

    await createBooking(data, dispatchBooking);
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

  const calculatePrice = (checkInStr, checkOutStr, pricePerNight, guestCount) => {
    const checkInDate = new Date(checkInStr);
    const checkOutDate = new Date(checkOutStr);
    const oneDay = 1000 * 60 * 60 * 24;

    const totalDays = Math.round(
      (checkOutDate.getTime() - checkInDate.getTime()) / oneDay
    );
    const totalPrice = totalDays * pricePerNight * guestCount;
    return totalPrice;
  };

  const handleClickGalleryImage = (index) => {
    const updatedImages = [...listing.images];
    const temp = updatedImages[index];
    updatedImages[index] = updatedImages[0];
    updatedImages[0] = temp;
    setListing({ ...listing, images: updatedImages });
  };

  return (
    <div className="prop-listing-info">
      {listing && (
        <div className="listing-grid-container">
          <div className="box-4">
            <div className="listing-info">
              <div className="property-info">
                <h2>{listing.name}</h2>
              </div>
              <p>
                {listing.city}, {listing.country}
              </p>
              <p>{listing.pricePerNight} € per night</p>
              <p>user rating: {listing.rating}</p>
              <p>{listing.numberOfBedrooms} bedrooms</p>
              <p>{listing.numberOfBeds} beds</p>
              <p>{listing.numberOfBathrooms} bathrooms</p>
              <p>
                hosted by: {listing.user.firstName}, {listing.user.lastName}
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
          </div>
          <div className="box-5">
            <div className="main-image">
              <img
                src={listing.images[0]}
                alt="main-image"
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            </div>
            <div className="gallery">
              {listing.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  className="gallery-img"
                  src={image}
                  alt={`gallery-${index}`}
                  onClick={() => handleClickGalleryImage(index + 1)}
                />
              ))}
            </div>
          </div>
          <div className="box-6">
            <div className="property-details">
              <p>{listing.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingInfo;
