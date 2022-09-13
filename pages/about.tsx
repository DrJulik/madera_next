import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="banner-image"></div>

      <div className="about-grid">
        <img src="/about1.jpg" alt="" />
        <div className="about-text">
          <h2>Our ultimate goal</h2>
          <p style={{ lineHeight: "2rem" }}>
            Humans feel most comfortable at home. Our aim has always been to
            make your house into a fortress of comfort. From the moment we start
            designing your furniture to the moment you see us installing it, the
            goal is always to fulfill your vision.
          </p>
        </div>
        <div className="about-text">
          <h2>A bit about us</h2>
          <p style={{ lineHeight: "2rem" }}>
            We are a young team of people who have spent most of our lives
            designing, creating and installing furniture. We offer a very
            personal approach, guiding you through the entire process, starting
            from the choice of materials and finishing with any questions you
            may have after we are done with the installation.
          </p>
        </div>
        <img src="/about1.jpg" alt="" />
      </div>
    </>
  );
};

export default about;
