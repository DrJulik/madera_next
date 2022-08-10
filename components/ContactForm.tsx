import React from "react";

const ContactForm = () => {
  return (
    <form
      name="madera-form"
      method="POST"
      data-netlify="true"
      // action="/thank-you"
    >
      {/* <input type="hidden" name="form-name" value="madera-form" /> */}
      <input name="random" id="random" type="text"></input>
      <button type="submit">Send</button>
    </form>

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
