import { api } from "../authApi/authApi";

export const createPost = async (post) => {
  try {
    const response = await api().post("/post", post);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
