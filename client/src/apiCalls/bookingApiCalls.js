import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;

export const createBooking = async (data , dispatchBooking) => {
  let response;
  try{
    response = await axios.post(`${API_ENDPOINT}/bookings`, data)
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

export const getBookingsOfUser = async (userId, filter) => {
  try{
    const response = await axios.get(`${API_ENDPOINT}/bookings?userId=${userId}&filter=${filter}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const data = {status:"cancelled"}
    const response = await axios.patch(`${API_ENDPOINT}/bookings/${bookingId}`, data)
    return response.data.status
  } catch(error){
    console.log(error)
  }

}

export const updateBookingFavorite= async (id, isFavorite) => {
  let response;
  try{
    const data = {favorite:isFavorite}
    response = await axios.patch(`${API_ENDPOINT}/bookings/${id}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
};

export const getFavoriteBookingsOfUser = async (userId, limit) => {
  try{
    const response = await axios.get(`${API_ENDPOINT}/bookings?userId=${userId}&favorite=true&limit=${limit}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
};