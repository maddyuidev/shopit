import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const products = useSelector(({ posts }) => posts.products);
  //   console.log(products);
  return (
    <div>
      {products &&
        products
          .slice(0, 3)
          .map((product) => <Post data={product} key={product.id} />)}
    </div>
  );
}

export default Posts;
