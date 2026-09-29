import axios from "axios";
export const getPost = async () => {
  let res = await axios.get("https://dummyjson.com/posts");
  return res.data.posts;
};

export const singlePost = async (id) => {
  let res = await axios.get(`https://dummyjson.com/posts/${id}`);
  return res.data;
};
