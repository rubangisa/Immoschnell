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
