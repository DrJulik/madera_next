import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact us | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <h3>ADDRESS:</h3> <p></p>81C Ronald Avenue, Toronto, Ontario M6E 4M9
            Tel. 416-782-7882, e-mail: info@skona.ca SHOWROOM HOURS Monday to
            Friday – 9:00 am to 5:00 pm – by appointment only Saturday – 10:00
            am to 4:00 pm – walk-ins Sunday – Closed By Private Appointment
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contact;
