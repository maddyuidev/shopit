import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./components/posts";
import Users from "./components/Users";
import ListUsers from "./components/ListUsers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <h3>Implementing Redux thunk</h3>
      <Users />
      {/* <ListUsers /> */}
      <Posts />
    </div>
  );
};

export default App;
