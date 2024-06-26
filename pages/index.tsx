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
import Partners from "../components/Partners";
import Image from "next/image";
import BlogPreview from "../components/BlogPreview";

const Home: NextPage = ({featuredProjects, featuredBlogposts}:any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const match = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(match);
    };

    // Check on mount
    checkIfMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);


  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <img
      alt="Slider image"
      src={isMobile ? "index/2_mobile.jpg" : "index/2.jpg"}
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
    <img
      alt="Slider image"
      src={isMobile ? "index/1_mobile.jpg" : "index/1.jpg"}
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
    <img
      alt="Slider image"
      src={isMobile ? "index/3_mobile.jpg" : "index/3.jpg"}
      onDragStart={handleDragStart}
      style={{ height: "100vh", width: "100vw" }}
    />,
  ];

  const router = useRouter();
  useEffect(() => {
    if (router.query.success === "true") {
      alert("Thank you for reaching out to us!");
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We are makers of fine custom kitchens and closets. Let us make your vision come to life."
        />
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
        <h2 className="section-heading">We Create And Design Your Dreams</h2>
        <hr />
        <div className="about-wrapper">
          <img src="vuzh.jpg" alt="about-image" />
          <p className="about-text text-line">
            <b>Madera</b> is a group of people that loves bringing people joy.
            And what better way to bring joy than by transforming parts of your
            living space into exquisite and functional works of art. With our
            personalized approach we can make sure that your dreams are realized
            to their full potential, without breaking the bank.
          </p>
        </div>

        {/* <hr />  */}
      </div>
      {/* projects */}
      <div className="container">
        <h2 className="section-heading">Featured projects</h2>
        <hr />
        <FeaturedGallery featuredProjects={featuredProjects} />
        {/* <hr /> */}
      </div>
      <div className="container">
        <h2 className="section-heading">Our blog</h2>
        <hr />
        <BlogPreview featuredBlogposts={featuredBlogposts} />
        {/* <hr /> */}
      </div>
      {/* contact block */}
      <Partners />
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
            <h4>CONTACT INFORMATION:</h4>
            <p>
              <p>94 Kenhar Dr, Unit 38, North York ON M9L 1N2</p>
              <p>
                <b>Tel:</b> 416-417-1944{" "}
              </p>
              <p>
                <b>e-mail:</b> sales.maderaproducts@gmail.com
              </p>
            </p>
            <h4>SHOWROOM HOURS</h4>
            <p>Monday to Saturday – 8:00 am to 6:00 pm</p>
          </div>
          <ContactForm />
        </div>
        <hr />
      </div>
    </>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://strapi-production-7c79.up.railway.app/api/projects?filters[featured][$eq]=true&populate=*");
  const featuredProjects = await res.json();

  
  const res1 = await fetch("https://strapi-production-7c79.up.railway.app/api/blogposts?filters[featured][$eq]=true&populate=*");
  const featuredBlogposts = await res1.json();
  
  return {
    props: {
      featuredProjects:featuredProjects.data,
      featuredBlogposts: featuredBlogposts.data,
    }, 
  };
}

export default Home;
