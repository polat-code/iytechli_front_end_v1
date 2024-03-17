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
export const getAllPosts = async (pages) => {
  try {
    const response = await api().post("/post/all", pages);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
export const likePost = async (dataWithUserIdAndPostId) => {
  try {
    const response = await api().post("/post/like", dataWithUserIdAndPostId);
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
export const getPostDetailByPostId = async (dataWithUserIdAndPostId) => {
  try {
    const response = await api().get(
      "/post/post-detail/" +
        dataWithUserIdAndPostId.postId +
        "/" +
        dataWithUserIdAndPostId.userId
    );
    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    return { success: false, message: err.message };
  }
};
