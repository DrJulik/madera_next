import React from "react";
import { useRouter } from "next/router";
const GalleryItem = ({ id, mainImage, title, blog }: any) => {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={
        blog
          ? () => router.push(`/blog/${id}`)
          : () => router.push(`/projects/${id}`)
      }
    >
      <img src={mainImage} className="card__image" alt={title} />
      <div className="gallery_card__overlay">
        <div className="overlay__text">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
