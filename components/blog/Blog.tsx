import React from "react";
import Post from "./Post";

const Blog = ({ blogposts }: any) => {
  return (
    <>
      {blogposts.map((post: any) => {
        const {title, text, image, publishedAt} = post.attributes;
        return (
          <Post
            key={post.id}
            id={post.id}
            title={title}
            text={text}
            image={image.data.attributes.url}
            // tags={post.tags}
            published_at={publishedAt}
          />
        );
      })}
    </>
  );
};

export default Blog;
