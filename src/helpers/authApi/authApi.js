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
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
export const verifyOtp = async (verificationData) => {
  try {
    const response = await api().post("/auth/verify-otp", verificationData);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
export const authenticate = async (userCredentials) => {
  try {
    const response = await api().post("/auth/authenticate", userCredentials);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
