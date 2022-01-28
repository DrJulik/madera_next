import React from "react";
import { useRouter } from "next/router";
const GalleryItem = () => {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push("/projects/123")}>
      <img
        src="https://www.skona.ca/wp-content/uploads/2019/10/SKONA-70-Otter-kitchen-1.jpg"
        className="card__image"
      />
      <div className="gallery_card__overlay">
        <div className="overlay__text">
          <h3>Mountain Trips</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
