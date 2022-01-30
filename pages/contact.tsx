import React from "react";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
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
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contact;
