import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FeaturedGallery from "../components/FeaturedGallery";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Slider
        images={[
          {
            src: "https://www.skona.ca/wp-content/uploads/2021/04/Skona-Southlea-Kitchen-Appliances-main-scaled.jpg",
            text: "IKEA",
          },
          {
            src: "https://www.skona.ca/wp-content/uploads/2021/04/Skona-Strathearn-Kitchen-Angle-Picture-slider-scaled.jpg",
            text: "NOKIA",
          },
          {
            src: "https://www.skona.ca/wp-content/uploads/2020/12/SKONA-585-Hillsdale-Kitchen-CloseUp-2560x1440-1.jpg",
            text: "DISCOMALYARIA",
          },
        ]}
      />
      {/* About block */}
      <div className="container" id="about">
        <h2 className="section-heading">A little bit about us</h2>
        <hr />
        <div className="about-wrapper">
          <img
            src="https://www.skona.ca/wp-content/uploads/2019/10/SKONA-70-Otter-kitchen-1.jpg"
            alt=""
          />
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam
            deleniti molestias consectetur ea vitae quaerat expedita odio
            impedit ex repellendus, facere debitis qui esse!
          </p>
        </div>

        <hr />
      </div>
      {/* projects */}
      <div className="container">
        <h2 className="section-heading">Featured projects</h2>
        <hr />
        <FeaturedGallery />
        <hr />
      </div>
      {/* contact block */}
      <div className="container">
        <h2 className="section-heading">Contact us</h2>
        <hr />
        <div className="contact-wrapper">
          <div className="contact_text">
            <h3>
              If you like our work, or have an idea that we can help you with,
              don't hesitate to reach out to us!
            </h3>
            <p>
              Whether it's a big project or just a dream that you've had for a
              long time, drop us a line and we will be more than happy to bring
              your dreams one step closer to being reality.
            </p>
          </div>
          <ContactForm />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
