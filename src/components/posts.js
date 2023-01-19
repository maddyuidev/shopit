import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Form from "./form/Form";

function Posts() {
  const products = useSelector(({ posts }) => {
    // console.log(posts);
    return posts.posts.products;
  });
  // console.log(products);
  return (
    <div>
      {products &&
        products
          .slice(0, 3)
          .map((product) => <Post data={product} key={product.id} />)}
      <Form />
    </div>
  );
}

export default Posts;
