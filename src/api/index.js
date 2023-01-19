import axios from "axios";

const url = "https://dummyjson.com/products";
const users = "https://dummyjson.com/users";

export const fetchPosts = () => axios.get(url);
export const fetchUsers = () => axios.get(users);
