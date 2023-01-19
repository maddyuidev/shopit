import React from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../actions/posts";

function Post({ data }) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(getPost(data));
  };
  return (
    <div>
      <h4>
        {data.title}
        <button type="button" onClick={handleEdit}>
          edit
        </button>
      </h4>
    </div>
  );
}

export default Post;
