import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;

export const createBooking = async (data , dispatchBooking) => {
  let response;
  try{
    response = await axios.post(`${API_ENDPOINT}/bookings`, data)
    console.log(response)
    if(response.data.status === 200) {
      dispatchBooking({type:"create", booking:response.data.data})
    } else {
      dispatchBooking({type:"error", error: response.data.message})
    }
  } catch (error) {
    console.log(error)
    dispatchBooking({type:"error", error: error.response.data.message})
  }
};

export const updateBookingSuccess= async ( id , dispatchBooking) => {
  let response;
  try{
    const data = {status:"active"}
    response = await axios.patch(`${API_ENDPOINT}/bookings/${id}`, data)
    console.log(response)
    if(response.data.status === 200) {
      dispatchBooking({type:"reset"})
    } else {
      dispatchBooking({type:"error", error: response.data.message})
    }
  } catch (error) {
    console.log(error)
    dispatchBooking({type:"error", error: error.response.data.message})
  }
};
