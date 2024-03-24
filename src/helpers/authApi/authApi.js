import axios from "axios";
// get jwt from
import { getFromLocalStorage } from "../LocalStorage";

const baseAppUrl =
  "iytechli-back-q04e2qa4d-ozgurhan-polats-projects.vercel.app/api/v1";

export const api = () => {
  let token = getFromLocalStorage("_tkn");

  const headers = { "Content-Type": "application/json" };
  if (token) {
    token = token.slice(1, -1);
    headers["Authorization"] = `Bearer ${token}`;
  }

  const instance = axios.create({
    baseURL: baseAppUrl,
    headers,
  });

  return instance;
};

export const register = async (user) => {
  try {
    const response = await api().post("/auth/register", user);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    console.log(err);
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
