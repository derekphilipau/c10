import React from "react";

const Footer = () => (
  <div className="bg-grey-darkest">
    <div className="flex justify-between max-w-xl mx-auto p-4 text-sm">
      <p className="text-white">
        <a
          href="/"
          className="no-underline text-white"
        >
          copyright &copy; c10, 2018
        </a>
      </p>
      <p>
        <a
          href="https://github.com/derekphilipau/c10"
          className="no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
