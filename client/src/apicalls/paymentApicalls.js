import axios from "axios";

const dummyPaymentData = [
  {
    id: 1,
    cardType: "Visa",
    cardNumber: "123    456    789",
    cardHolder: "John Doe",
    expiryDate: "12/25",
    cvv: "123",
  },
  {
    id: 2,
    cardType: "Mastercard",
    cardNumber: "123    456    789",
    cardHolder: "John Doe",
    expiryDate: "12/25",
    cvv: "123",
  },
];

const getPaymentDetails = async (dispatchPayment) => {
  try {
    const response = await axios.get("http://localhost:8000/payment-methods");
    dispatchPayment({
      type: "FETCH_PAYMENT_METHODS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error fetching payment details:", error);
    dispatchPayment({
      type: "FETCH_PAYMENT_METHODS_SUCCESS",
      payload: dummyPaymentData,
    });
  }
};

const submitPaymentMethod = async (paymentMethod, dispatchPayment) => {
  try {
    const response = await axios.post("http://localhost:8000/payment-methods", {
      body: paymentMethod,
    });
    dispatchPayment({
      type: "PAYMENT_METHOD_SUBMITTED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error submitting payment method:", error);
  } finally {
    getPaymentDetails(dispatchPayment);
  }
};

// const addPaymentMethod = async (paymentMethod, dispatchPayment) => {
//   try {
//     const response = await axios.get("http://localhost:8000/payment-methods")
//     dispatchPayment({
//       type: "ADD_PAYMENT_METHOD",
//       payload: response.data,
//     });
//   } catch (error) {
//     console.log("Error adding payment method:", error);
//   }
// };

export { getPaymentDetails, submitPaymentMethod };
