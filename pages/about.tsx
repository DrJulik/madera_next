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
          <h2>A bit about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nisi repellendus consequatur minima nesciunt facere odit, natus
            ullam soluta sit quam laborum. Ullam, voluptatem beatae.
          </p>
        </div>
        <div className="about-text">
          <h2>A bit about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nisi repellendus consequatur minima nesciunt facere odit, natus
            ullam soluta sit quam laborum. Ullam, voluptatem beatae.
          </p>
        </div>
        <img src="/about1.jpg" alt="" />
      </div>
    </>
  );
};

export default about;
