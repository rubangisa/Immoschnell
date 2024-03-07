import { createContext, useReducer, useContext } from "react";

const initialState = {
  bookings: null,
  currentBooking: null,
  propertyList: [],
  loading: true,
  error: null,
};

const UPDATE_PROPERTY = "UPDATE_PROPERTY";
const CHECKIN = "CHECKIN";
const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";

export const bookingReducer = (state, action) => {
  if (!state) {
    state = initialState;
    console.log("state inside", state, initialState);
  }

  switch (action.type) {
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, currentBooking: action.payload, loading: false };
    case LOCATION:
      return { ...state, location: action.payload };
    case CHECKIN:
      return { ...state, checkin: action.payload };

    default:
      return state;
  }
};

const BookingContext = createContext();

// const handlePropertyChange = (newPropertyValue) => {
//     dispatch({ type: PROPERTY, payload: newPropertyValue });
//   };

//   const handleLocationChange = (newLocationValue) => {
//     dispatch({ type: LOCATION, payload: newLocationValue });
//   };

//   const handleCheckinChange = (newCheckinValue) => {
//     dispatch({ type: CHECKIN, payload: newCheckinValue });
//   };
