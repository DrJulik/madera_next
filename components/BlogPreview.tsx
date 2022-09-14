import React from "react";
import GalleryItem from "./GalleryItem";
import Router from "next/router";

const BlogPreview = ({ blogs }: any) => {
  return (
    <>
      <div className="featured-gallery">
        {blogs.map((blog: any) => {
          return (
            <GalleryItem
              key={blog.id}
              id={blog.id}
              mainImage={blog.image.url}
              title={blog.title}
              blog={true}
            />
          );
        })}
      </div>
      <div className="center">
        <button className="btn" onClick={() => Router.push("/blog")}>
          Read more
        </button>
      </div>
    </>
  );
};

export default BlogPreview;
