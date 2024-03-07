import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import { FaPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "../../../styling/payments.css";
import { useReducer, useEffect, useState } from "react";
import { bookingReducer } from "../../reducers/BookingReducer.js";
import { paymentsReducer } from "../../reducers/PaymentsReducer.js";
import { getPropertyDetails } from "../../apiCalls/propertyApiCalls.js";
import {
  getPaymentDetails,
  submitPaymentMethod,
} from "../../apiCalls/paymentApiCalls.js";
export default function Payments() {
  const [bookingState, bookingDispatch] = useReducer(bookingReducer);
  const { currentBooking, loading } = bookingState || {};

  const [paymentState, paymentDispatch] = useReducer(paymentsReducer);
  const { paymentMethods, currentPayment } = paymentState || {};
  useEffect(() => {
    getPropertyDetails(bookingDispatch);
    getPaymentDetails(paymentDispatch);
  }, []);

  useEffect(() => {
    console.log("state", bookingState);
  }, [bookingState]);

  useEffect(() => {
    console.log("state", paymentState);
  }, [paymentState]);

  const handlePaymentMethodSubmit = async (e) => {
    e.preventDefault();
    console.log("payment method submitted", e);
    const payload = {
      cardNumber: e.target.cardNumber.value,
      expiryDate: e.target.expiryDate.value,
      cvv: e.target.cvv.value,
      cardHolder: e.target.cardHolder.value,
      cardType: e.target.cardType.value,
    };
    console.log("payload", payload);
    await submitPaymentMethod(payload);
  };
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const showAddPayments = () => {
    if (showPaymentForm) {
      setShowPaymentForm(false);
    } else setShowPaymentForm(true);
  };

  return (
    <div className="payment">
      <h1 className="bookingdetailsh1">Your booking</h1>
      <div className="payment-grid">
        <div className="summary-flex">
          <div className="container-bookingdetails">
            <p className="bookingdetailsh4">booking details</p>
            <div className="bookingdetails">
              <p className="property-name">{currentBooking?.name} </p>
              <p className="property-location">
                {currentBooking?.state}, {currentBooking?.country}{" "}
              </p>
              <p>Check in : </p>
              <p>Check out : </p>
              <p>Guests: </p>
              <p className="property-rooms">
                Number of Rooms: {currentBooking?.numberOfBedrooms}
              </p>
              <p>Notes:</p>
              <div />
            </div>
            <button className="booking-btn">edit booking</button>
          </div>
          <div className="container-pricesummary">
            <h4 className="pricesummaryh4"> your price summary</h4>
            <div className="pricesummary-total">
              <p className="ps-text">total: </p>
              <div className="ps-value-conatiner">
                <p className="ps-value">{currentBooking?.pricePerNight} € </p>
                <p className="taxesandcharges">including taxes and charges</p>
              </div>
            </div>
            <div className="addedtax">
              <h5>price information </h5>
              <p>includes taxes and charges:</p>
              <div className="vat-container">
                <p>VAT @ 10 %</p>
                <p>{(currentBooking?.pricePerNight * 0.1).toFixed(2)}</p>
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
              <th>credit/debit card type</th>
              <th>card number</th>
              <th>card holder</th>
              <th>expiry date</th>
              <th>cvv</th>
            </tr>
            {paymentMethods?.map((payment) => {
              return (
                <tr className="payment-info">
                  <td>{payment.cardType}</td>
                  <td>{payment.cardNumber}</td>
                  <td>{payment.cardHolder}</td>
                  <td>{payment.expiryDate}</td>
                  <td>
                    <input type="number" name="cvv" placeholder="cvv.." />
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
            <form onSubmit={handlePaymentMethodSubmit}>
              <div className="container1">
                <div className="left-column">
                  <label htmlFor="cardNumber">card number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Card number..."
                    className="card-number-input"
                    required
                  />
                  <label htmlFor="cardType">card type *</label>
                  <select
                    type="text"
                    name="cardType"
                    placeholder="Card type..."
                    className="card-type-select"
                  >
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                  </select>

                  {/* 
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" name="cvv" placeholder="CVV..." /> */}
                </div>
                <div className="right-column">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="Expiry date..."
                    className="expiry-date-input"
                    required
                  />
                </div>
              </div>
              <div className="payment-options-container">
                <button className="payment-option-button">
                  <FaPaypal className="icon-payments" /> <p class="space"> </p>{" "}
                  Paypal
                </button>
                <button className="payment-option-button">
                  <FaCcApplePay className="icon-payments" />
                  <p class="space"> </p> Applepay
                </button>
                <button className="payment-option-button">
                  <SiAmericanexpress className="icon-payments" />
                  <p class="space"> </p> American express
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
