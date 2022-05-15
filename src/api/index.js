import axios from "axios";
const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/post`);
export const createPost = (data) => axios.post(`${URL}/post`, data);
