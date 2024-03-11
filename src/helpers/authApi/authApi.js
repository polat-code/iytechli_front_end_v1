import axios from "axios";
// get jwt from
import { getFromLocalStorage } from "../LocalStorage";

const baseAppUrl = "http://localhost:8080/api/v1";

export const api = () => {
  const token = getFromLocalStorage(process.env.jwtStorageName);

  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  return axios.create({
    baseURL: baseAppUrl,

    headers,
  });
};

export const register = async (user) => {
  try {
    const response = await api().post("/auth/register", user);
    return response;
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        success: false,
        errorCode: err.response.status,
        message: err.response.data.message,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { success: false, message: err.message };
    }
  }
};
