import React from "react";
import Link from "gatsby-link";

const ContactForm = () => (
  <form className="mx-auto">
    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="name"
    >
      Name
    </label>
    <input
      className="appearance-none block bg-black border border-grey-darkest mb-6 p-3 rounded-md text-grey w-full"
      id="name"
      type="text"
      placeholder="Name"
    />

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="email"
    >
      Email Address
    </label>
    <input
      className="appearance-none block bg-black border border-grey-darkest mb-6 p-3 rounded-md text-grey w-full"
      id="email"
      type="text"
      placeholder="Email Address"
    />

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
      Message
    </label>
    <textarea
      className="appearance-none block bg-black border border-grey-darkest mb-6 p-3 rounded-md text-grey w-full"
      placeholder="Say something..."
      rows="6"
    />

    <button className="border-grey-darkest hover:border-grey-dark bg-grey-darkest hover:bg-grey-darker hover:text-grey-lighter font-bold px-6 py-3 rounded text-sm text-grey">
      Send
    </button>
  </form>
);

export default ContactForm;
