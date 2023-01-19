import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Form() {
  const [title, setTitle] = useState("");
  const data = useSelector(({ posts }) => posts.post.title);
  // data ? console.log(data) : console.log("no title");
  const handleInput = ({ target }) => {
    setTitle(target.value);
  };
  useEffect(() => {
    if (data) setTitle(data);
  }, [data]);
  // setTitle(useSelector(({ posts }) => posts.post.title));
  return (
    <div>
      <form>
        <input value={title} onChange={(e) => handleInput(e)} />
      </form>
    </div>
  );
}

export default Form;
