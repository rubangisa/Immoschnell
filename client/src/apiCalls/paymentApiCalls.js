import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;



export const submitPaymentMethod = async (paymentMethod) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/payment-methods`,  paymentMethod);
    console.log(response)
  } catch (error) {
    console.log(error);
  } 
};

export const getPaymentMethodsOfUser = async (userId) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/payment-methods?userId=${userId}`)
    return response.data
  } catch(error) {
    console.log(error)
  }
}



