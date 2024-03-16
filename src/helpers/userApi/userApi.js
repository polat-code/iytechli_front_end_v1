import { api } from "../authApi/authApi";

export const getAllInfoOfUser = async (userId, hostUserId) => {
  try {
    const response = await api().get("/user/" + userId + "/" + hostUserId);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};

export const getAllInfoOfUserByEmail = async (email) => {
  try {
    const response = await api().get("/user/email/" + email);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
