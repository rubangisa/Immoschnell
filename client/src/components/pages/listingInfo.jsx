import { useEffect, useState, useContext } from "react";
import "./listingInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { getListingById } from "../../apiCalls/listingApi";
import { createBooking } from "../../apiCalls/bookingApiCalls";
import { BookingContext, LoginContext } from "../../contexts/AppContext";

function calculatePrice(checkInStr, checkOutStr, pricePerNight, guestCount) {
  const checkIn = new Date(checkInStr);
  const checkOut = new Date(checkOutStr);
  const oneDay = 1000 * 60 * 60 * 24;

  const totalPrice =
    Math.round((checkOut.getTime() - checkIn.getTime()) / oneDay) *
    pricePerNight *
    guestCount;
  return totalPrice;
}

const ListingInfo = () => {
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
    const newTotalPrice = calculatePrice(
      e.target.value,
      checkOut,
      listing.pricePerNight,
      guestCount
    );
    setCurrentTotalPrice(newTotalPrice);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    const newTotalPrice = calculatePrice(
      checkIn,
      e.target.value,
      listing.pricePerNight,
      guestCount
    );
    setCurrentTotalPrice(newTotalPrice);
  };

  const handleGuestCountChange = (e) => {
    setGuestCount(e.target.value);
    const newTotalPrice = calculatePrice(
      checkIn,
      checkOut,
      listing.pricePerNight,
      e.target.value
    );
    setCurrentTotalPrice(newTotalPrice);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    const userId = login.user._id;
    const totalPrice = calculatePrice(
      checkIn,
      checkOut,
      listing.pricePerNight,
      guestCount
    );
    console.log(totalPrice);
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

  const handleClickGalleryImage = (index) => {
    setListing((prevListing) => {
      const updatedImages = [...prevListing.images];
      const temp = updatedImages[index];
      updatedImages[index] = updatedImages[0];
      updatedImages[0] = temp;
      return { ...prevListing, images: updatedImages };
    });
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
    if (booking.booking) {
      navigate("/payments");
    } else if (booking.error !== "") {
      console.log(booking.error);
    }
  }, [booking]);

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
        </div>
        <div className="box-5">
          <div className="main-image">
            <img src={listing?.images[0]} alt="main-image" />
          </div>

          <div className="gallery">
            {listing?.images.slice(1).map((image, index) => (
              <img
                key={index + 1}
                className="gallery-img"
                src={image}
                alt={`prop-${index + 2}`}
                onClick={() => handleClickGalleryImage(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="box-6">
          <div className="property-details">
            <p>{listing?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
