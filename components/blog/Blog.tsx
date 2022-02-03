import React from "react";
import Post from "./Post";

const Blog = ({ blogposts }: any) => {
  return (
    <>
      {blogposts.map((post: any) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            image={post.image.url}
            tags={post.tags}
          />
        );
      })}
    </>
  );
};

export default Blog;
