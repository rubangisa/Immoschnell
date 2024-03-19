import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;


export const createPropertyReview = async (data) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/property-reviews`, data);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

export const getPropertyReviewOfUser = async (bookingId, userId) => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/property-reviews/${bookingId}/user/${userId}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
};