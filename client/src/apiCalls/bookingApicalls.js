import axios from "axios";

//! Add an item to the booking
export const addBookingItem = async (
  dispatchBookings,
  bookingsState,
  record,
  bookingId
) => {
  try {
    //! check for item existence in the state
    const itemToUpdate = bookingsState.items?.find(
      (item) => item.record._id === record._id
    );

    /* 
   ! If item is exist: 
      * create patch request to update the quantity of the item in DB and increase it by one
      * Update the state with the new changes 
      * return to exit the function
   */
    if (itemToUpdate) {
      const response = await axios.patch(
        `http://localhost:8000/bookings/${bookingId}`,
        {
          quantity: itemToUpdate.quantity + 1,
          record: record._id,
        }
      );
      dispatchBookings({ type: "UPDATE_BOOKING_ITEM", payload: response.data.data });
      return;
    }

    //! Otherwise submit the new item to the DB
    const response = await axios.post(`http://localhost:8000/bookings/${bookingId}`, {
      record: record._id,
      quantity: 1,
    });

    dispatchBookings({ type: "ADD_BOOKING_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

//! Get all items from the booking
export const getBookingData = async (dispatchBookings, bookingId) => {
  try {
    const response = await axios.get(`http://localhost:8000/bookings/${bookingId}`);
    dispatchBookings({ type: "GET_BOOKING_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

//! Delete an item from the booking by its ID
export const deleteBookingItem = async (dispatchBookings, recordId, bookingId) => {
  try {
    await axios.put(`http://localhost:8000/bookings/${bookingId}`, {
      record: recordId,
    });

    dispatchBookings({ type: "DELETE_FROM_BOOKING", payload: recordId });
  } catch (error) {
    console.log(error);
  }
};