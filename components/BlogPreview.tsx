import React from "react";
import GalleryItem from "./GalleryItem";
import Router from "next/router";

const BlogPreview = ({ featuredBlogposts }: any) => {
  return (
    <>
      <div className="featured-gallery">
        {featuredBlogposts.map((blog: any) => {
          const {image, title} = blog.attributes;
          return (
            <GalleryItem
              key={blog.id}
              id={blog.id}
              mainImage={image.data.attributes.url}
              title={title}
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
