import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (data) => (dispatch) => {
  try {
    // console.log(data);
    // console.log(data);
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    // console.log(data);
    dispatch({
      type: "FETCH_USERS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
