import React from "react";
import GalleryItem from "./GalleryItem";

const FeaturedGallery = ({ featuredProjects }: any) => {
  return (
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
  );
};

export default FeaturedGallery;
