import { FaPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import "../../../styling/payments.css";
import { useEffect, useState, useContext } from "react";
import {
  getPaymentMethodsOfUser,
  submitPaymentMethod,
} from "../../apiCalls/paymentApiCalls.js";
import { BookingContext, LoginContext } from "../../contexts/AppContext.jsx";
import { getListingById } from "../../apiCalls/listingApi";
import { useNavigate } from "react-router-dom";
import { updateBookingSuccess } from "../../apiCalls/bookingApiCalls.js";

export default function Payments() {
  const { booking, dispatchBooking } = useContext(BookingContext);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [listing, setListing] = useState(null);

  const [newCard, setNewCard] = useState({
    user: null,
    cardNumber: "",
    cvc: null,
    nameOnCard: "",
    type: "MasterCard",
    month: null,
    year: null,
    isDefault: false,
  });
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    if (login.loggedIn) {
      getPaymentMethodsOfUser(login.user._id).then((response) => {
        setPaymentMethods(response.data);
      });
    } else {
      navigate("/login");
    }
  }, [showPaymentForm, login.loggedIn]);

  useEffect(() => {
    if (booking.booking) {
      getListingById(booking.booking.listing).then((response) => {
        if (response) {
          setListing(response.data);
        }
      });
    } else {
      navigate("/properties");
    }
  }, [booking]);

  const handlePaymentMethodSubmit = async (e) => {
    e.preventDefault();

    await submitPaymentMethod(newCard);
    setShowPaymentForm(false);
  };

  const showAddPayments = () => {
    if (showPaymentForm) {
      setShowPaymentForm(false);
    } else setShowPaymentForm(true);
  };

  const handleNewCardChange = (e) => {
    if (!newCard.user && login.loggedIn) {
      setNewCard({
        ...newCard,
        [e.target.name]: e.target.value,
        user: login.user._id,
      });
    } else {
      setNewCard({ ...newCard, [e.target.name]: e.target.value });
    }
  };

  const handleEdit = () => {
    dispatchBooking({ type: "reset" });
    navigate(`/listing-info/${booking.booking.listing}`);
  };

  const handlePay = () => {
    updateBookingSuccess(booking.booking._id);
    navigate("/my-booking");
  };

  return (
    <div className="payment">
      <h1 className="bookingdetailsh1">Your booking</h1>
      <div className="payment-grid">
        <div className="summary-flex">
          <div className="container-bookingdetails">
            <p className="bookingdetailsh4">booking details</p>
            <div className="bookingdetails">
              <p className="property-name">{booking.booking?.name} </p>
              <div className="property-location">
                <p>{listing?.name}</p>
                <p>{listing?.state}</p>
                <p>{listing?.country}</p>{" "}
              </div>
              <p>Check in : {booking.booking?.checkIn.slice(0, 10)} </p>
              <p>Check out : {booking.booking?.checkOut.slice(0, 10)} </p>
              <p>Guests: {booking.booking?.guestCount}</p>
              <p className="property-rooms">
                Name of the Guest: {login.user?.firstName}
              </p>
              {/* <p>Notes:</p> */}
              <div />
            </div>
            <button onClick={handlePay} className="booking-btn">
              Pay
            </button>
            <button onClick={handleEdit} className="booking-btn">
              Edit Booking
            </button>
          </div>
          <div className="container-pricesummary">
            <h4 className="pricesummaryh4"> your price summary</h4>
            <div className="pricesummary-total">
              <p className="ps-text">total: </p>
              <div className="ps-value-conatiner">
                <p className="ps-value">{booking.booking?.price} € </p>
                <p className="taxesandcharges">including taxes and charges</p>
              </div>
            </div>
            <div className="addedtax">
              <h5>price information </h5>
              <p>includes taxes and charges:</p>
              <div className="vat-container">
                <p>VAT @ 10 %</p>
                <p>{(booking.booking?.price * 0.1).toFixed(2)}</p>
              </div>

              <div className="vat-container">
                <p>City tax</p>
                <p>€ 2.60</p>
              </div>
            </div>
          </div>
        </div>
        <div className="paymentwrapper">
          <strong className="bookingdetailsh4">
            how would you like to pay
          </strong>
          <table className="payment-table">
            <tr className="payment-header">
              <th className="exp-date" >Card Type</th>
              <th>Card Number</th>
              <th className="exp-date" >Card Holder</th>
              <th className="exp-date">Month</th>
              <th className="exp-date">Year</th>
              <th>cvc</th>
            </tr>
            {paymentMethods?.map((payment, index) => {
              return (
                <tr className="payment-info" key={index}>
                  <td>{payment.type}</td>
                  <td>{payment.cardNumber}</td>
                  <td>{payment.nameOnCard}</td>
                  <td>{payment.month}</td>
                  <td>{payment.year}</td>
                  <td>
                    <input type="number" name="cvc" placeholder="cvc.." />
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="payment-methods-btn-container">
            <button
              className="add-payment-method-btn"
              onClick={showAddPayments}
            >
              {showPaymentForm ? "cancel" : "+ add new card"}
            </button>
          </div>
          {showPaymentForm && (
            <form className="payment-form" onSubmit={handlePaymentMethodSubmit}>
              <div className="container1">
                <div className="left-column">
                  <label htmlFor="nameOnCard">Card holder *</label>
                  <input
                    onChange={handleNewCardChange}
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    placeholder="Card holder..."
                    className="card-number-input"
                    required
                  />

                  <label htmlFor="cardNumber">Card number *</label>
                  <input
                    onChange={handleNewCardChange}
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Card number..."
                    className="card-number-input"
                    required
                  />
                  <label htmlFor="cardType">Card type *</label>
                  <select
                    onChange={handleNewCardChange}
                    type="text"
                    name="type"
                    placeholder="Card type..."
                    className="card-type-select"
                    required
                  >
                    <option value="MasterCard">MasterCard</option>
                    <option value="Visa">Visa</option>
                    <option value="American Express">American Express</option>
                  </select>
                </div>
                <div className="right-column">
                  <label htmlFor="expiryMonth">Expiry Month *</label>
                  <input
                    onChange={handleNewCardChange}
                    type="number"
                    id="month"
                    name="month"
                    placeholder="Expiry month..."
                    className="expiry-date-input"
                    required
                  />

                  <label htmlFor="expiryYear">Expiry Year *</label>
                  <input
                    onChange={handleNewCardChange}
                    type="number"
                    id="year"
                    name="year"
                    placeholder="Expiry year..."
                    className="expiry-date-input"
                    required
                  />
                  <label htmlFor="cvc">Cvc *</label>
                  <input
                    onChange={handleNewCardChange}
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="cvc..."
                    className="expiry-date-input"
                    required
                  />
                </div>
              </div>
              <div className="payment-options-container">
                <button className="payment-option-button">
                  <FaPaypal className="icon-payments" />{" "}
                  <p className="space"> </p> <span className="icon-text">Paypal</span>
                </button>
                <button className="payment-option-button">
                  <FaCcApplePay className="icon-payments" />
                  <p className="space"> </p>  <span className="icon-text">Applepay</span>
                </button>
                <button className="payment-option-button">
                  <SiAmericanexpress className="icon-payments" />
                  <p className="space"> </p> <span className="icon-text">American express</span>
                </button>
              </div>
              <div className="container-terms">
                <ul className="termslist">
                  <li className="li-header">
                    By proceeding with your payment, you agree to the following
                    terms and conditions:
                  </li>
                  <li>
                    -All payments made are non-refundable unless otherwise
                    specified.
                  </li>
                  <li>
                    -We reserve the right to cancel bookings at our discretion.
                  </li>
                  <li>
                    -Any damages caused to the property during your stay will be
                    your responsibility and may result in additional charges.
                  </li>
                  <li>
                    -By providing your payment information, you authorize us to
                    charge the specified amount to your chosen payment method.
                  </li>
                  <li>
                    -We take all necessary precautions to ensure the security of
                    your payment information, but we cannot be held liable for
                    any unauthorized access or breaches.
                  </li>
                </ul>
              </div>
              <div className="container2">
                <div className="containerButton">
                  <button type="submit" className="submitButton">
                    submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
