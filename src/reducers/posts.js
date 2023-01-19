const initialState = {
  posts: [],
  post: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, posts: action.payload };
    case "GET_POST":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
