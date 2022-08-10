import React from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
  return (
    <>
      {formVisible ? (
        <form
          name="madera-form"
          method="POST"
          data-netlify="true"
          action="/?success=true"
        >
          {/* <input type="hidden" name="form-name" value="madera-form" /> */}
          <label htmlFor="random">Name *</label>
          <input name="random" id="random" type="text" />
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>
          Thank you for submitting this form. Someone should get back to you
          within 24-48 hours
        </p>
      )}
    </>

    // <form
    //   name="madera-form"
    //   method="POST"
    //   data-netlify="true"
    //   // netlify-honeypot="bot-field"
    //   action="/success"
    // >
    //   {/* <p className="hidden">
    //     <label>
    //       Don’t fill this out if you’re human: <input name="bot-field" />
    //     </label>
    //   </p> */}
    //   <label htmlFor="name">Name *</label>
    //   <input id="name" name="name" required type="text" />
    //   <label htmlFor="email">E-mail Address *</label>
    //   <input id="email" type="email" name="email" required />
    //   <label htmlFor="message">Message *</label>
    //   <textarea id="message" name="message" required></textarea>
    //   <input type="hidden" name="form-name" value="madera-form" />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default ContactForm;
