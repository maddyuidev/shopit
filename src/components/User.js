import React from "react";
import { useDispatch } from "react-redux";

function User({ data }) {
  // console.log(data, "from user page");
  const dispatch = useDispatch();
  const handleDel = () => {};
  return (
    <div>
      {data.firstName}
      <button type="button" onClick={handleDel}>
        del
      </button>
    </div>
  );
}

export default User;
