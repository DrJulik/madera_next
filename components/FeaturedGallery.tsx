import React from "react";
import GalleryItem from "./GalleryItem";
import Router from "next/router";

const FeaturedGallery = ({ featuredProjects }: any) => {
  return (
    <>
      <div className="featured-gallery">
        {featuredProjects.map((proj: any) => {
          return (
            <GalleryItem
              key={proj.id}
              id={proj.id}
              mainImage={proj.mainImage.url}
              title={proj.title}
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
