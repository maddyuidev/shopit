import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/posts";
import User from "./User";

function Users() {
  const dispatch = useDispatch();
  const handleGetUsers = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      <button type="button" onClick={handleGetUsers}>
        Get Users
      </button>
    </div>
  );
}

export default Users;
