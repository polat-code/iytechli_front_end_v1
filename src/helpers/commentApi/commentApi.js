import { api } from "../authApi/authApi";

export const getComments = async (dataWithUserIdAndPostId) => {
  try {
    const response = await api().post("/comment/all", dataWithUserIdAndPostId);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
