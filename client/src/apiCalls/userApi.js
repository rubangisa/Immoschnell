import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;

export const signUp = async (data) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/users`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (data, dispatchLogin ) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/login`, data);
    if(response.data.status === 200) {
        dispatchLogin({type: "loggedIn",  user: response.data.user})
        return true
    } else {
        dispatchLogin({type: "loggedOut", user:""})
    }
  } catch (error) {
    dispatchLogin({type: "loggedOut", user:""})
    console.log(error);
    return false
  }
};
