import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
    <div className="flex-1 w-100">

      <div className="h-64 bg-black mb-8 pt-24 text-center">
        <span className="text-5xl">Code is craft.</span>
      </div>

      <div className="flex flex-wrap flex-row items-start px-4">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
          <div className="h-32 w-full rounded shadow bg-grey p-3 mb-4">b</div>
          <div className="h-64 w-full rounded shadow bg-grey p-3 mb-4">a</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
          <div className="h-64 w-full rounded shadow bg-grey p-3 mb-4">b</div>
          <div className="h-32 w-full rounded shadow bg-grey p-3 mb-4">a</div>
        </div>
      </div>

    <p className="leading-loose mx-8 py-24">
      This is a barebones starter for Gatsby styled using{" "}
      <a
        href="https://tailwindcss.com/"
        className="font-bold no-underline text-grey-darkest"
      >
        Tailwind
      </a>, a utility-first CSS framework.
    </p>

  </div>
);

export default IndexPage;
