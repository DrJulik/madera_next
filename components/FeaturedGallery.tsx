import React from "react";
import GalleryItem from "./GalleryItem";
import Router from "next/router";

const FeaturedGallery = ({ featuredProjects }: any) => {
  return (
    <>
      <div className="featured-gallery">
        {featuredProjects.map((proj: any) => {
          const {main_image, title} = proj.attributes;
          return (
            <GalleryItem
              key={proj.id}
              id={proj.id}
              mainImage={main_image.data.attributes.url}
              title={title}
            />
          );
        })}
      </div>
      <div className="center">
        <button className="btn" onClick={() => Router.push("/projects")}>
          See more
        </button>
      </div>
    </>
  );
};

export default FeaturedGallery;
