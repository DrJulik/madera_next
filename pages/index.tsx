import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FeaturedGallery from "../components/FeaturedGallery";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home: NextPage = ({ featuredProjects }: any) => {
  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <img
      src="https://www.skona.ca/wp-content/uploads/2021/04/Skona-Southlea-Kitchen-Appliances-main-scaled.jpg"
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
    <img
      src="https://www.skona.ca/wp-content/uploads/2021/04/Skona-Strathearn-Kitchen-Angle-Picture-slider-scaled.jpg"
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
    <img
      src="https://www.skona.ca/wp-content/uploads/2020/12/SKONA-585-Hillsdale-Kitchen-CloseUp-2560x1440-1.jpg"
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
  ];

  const titles = ["IKEA", "NOKIA", "PUTINKA"];
  const [slideTitle, setSlideTitle] = useState(titles[0]);

  const router = useRouter();
  useEffect(() => {
    if (router.query.success === "true") {
      alert("Thank you for reaching out to us!");
    }
  }, [router.isReady]);

  // const [isHome, setIsHome] = useState(false);

  // useEffect(() => {
  //   console.log(router.isReady);
  //   console.log(router.pathname);
  //   clg
  //   if (router.isReady && router.pathname === "/") {
  //     setIsHome(true);
  //     console.log(isHome);
  //   }
  // }, [router.isReady, router.pathname]);
  return (
    <>
      <Head>
        <title>Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        disableSlideInfo={false}
        // onSlideChanged={(slideInfo) => {
        //   setSlideTitle(titles[slideInfo.item]);
        // }}
        // renderSlideInfo={() => {
        //   return <h1>{slideTitle}</h1>;
        // }}
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
        <FeaturedGallery featuredProjects={featuredProjects} />
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
            <h4>ADDRESS:</h4>
            <p>
              81C Ronald Avenue, Toronto, Ontario M6E 4M9 Tel. 416-782-7882,
              e-mail: info@skona.ca
            </p>
            <h4>SHOWROOM HOURS</h4>
            <p>
              Monday to Friday – 9:00 am to 5:00 pm – by appointment only
              Saturday – 10:00 am to 4:00 pm – walk-ins Sunday – Closed By
              Private Appointment
            </p>
          </div>
          <ContactForm />
        </div>
        <hr />
      </div>
    </>
  );
};
export async function getStaticProps(context: any) {
  const res = await fetch("https://madera-strapi.herokuapp.com/projects");
  const projects = await res.json();

  const featuredProjects = projects.filter((proj: any) => {
    return proj.Favorite === true;
  });
  return {
    props: {
      featuredProjects,
    }, // will be passed to the page component as props
  };
}

export default Home;
