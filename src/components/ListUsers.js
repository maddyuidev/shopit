import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function ListUsers() {
  const users = useSelector(({ users }) => users.users);
  return (
    <div>{users & users.map((user) => <User data={user} key={user.id} />)}</div>
  );
}

export default ListUsers;
