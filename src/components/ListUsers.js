import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "./User";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const list = useSelector(({ users }) => users.users);
  // console.log(list, " listuserpage");
  useEffect(() => {
    if (list) setUsers(list);
    // console.log(list);
    // return () => {};
  }, [list]);
  // console.log(users);
  return (
    <div>
      {users.slice(0, 3).map((user) => (
        <User data={user} key={user.id} />
      ))}
    </div>
  );
}

export default ListUsers;
