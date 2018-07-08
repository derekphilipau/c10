import React from "react";

const Footer = () => (
  <div className="bg-blue">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        <a
          href="/"
          className="font-bold no-underline text-white"
        >
          &copy; c10, 2018
        </a>
      </p>
      <p>
        <a
          href="https://github.com/derekphilipau/c10"
          className="font-bold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
