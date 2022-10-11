import React from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
  return (
    <>
      <form
        name="madera-form"
        method="POST"
        // data-netlify="true"
        // netlify-honeypot="bot-field"
        action="https://api.web3forms.com/submit"
      >
        {/* <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p> */}
        <input
          type="hidden"
          name="access_key"
          value="d28e8c28-2ad8-4b3b-9c80-1aa3a10c76de"
        ></input>
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" required type="text" />
        <label htmlFor="email">E-mail Address *</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required></textarea>
        <input type="hidden" name="form-name" value="madera-form" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
