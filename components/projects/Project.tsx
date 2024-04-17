import React from "react";
import { useRouter } from "next/router";

const Project = ({ id, title, mainImage }: any) => {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push(`/projects/${id}`)}>
      <img src={mainImage} className="card__image" alt={title} />
      <div className="gallery_card__overlay">
        <div className="overlay__text">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
