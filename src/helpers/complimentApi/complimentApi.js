import { api } from "../authApi/authApi";

export const saveCommentCompliment = async (dataWithUserIdAndCommentId) => {
  try {
    const response = await api().post(
      "/compliment/comment",
      dataWithUserIdAndCommentId
    );
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};

export const savePostCompliment = async (dataWithUserIdAndPostId) => {
  try {
    const response = await api().post(
      "/compliment/post",
      dataWithUserIdAndPostId
    );
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
