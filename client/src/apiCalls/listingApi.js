import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;

export const createListing = async (data) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/listings`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getListingById = async (id) => {
  try{
    const response = await axios.get(`${API_ENDPOINT}/listings/${id}`);
    console.log(response)
    return response.data
  } catch(error) {
    console.log(error);
  }
};

export const getListingsOfUser = async (userId, currentPage, limit) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/listings/user/${userId}?page=${currentPage}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
};