import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact us | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We are makers of fine custom kitchens and closets. Let us make your vision come to life."
        />
      </Head>
      <div className="banner-image__contact"></div>

      <div className="contact-page">
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
      </div>
    </>
  );
};

export default contact;
