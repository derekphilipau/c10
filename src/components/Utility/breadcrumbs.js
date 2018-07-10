import React from "react";
import Link from "gatsby-link";

const Breadcrumbs = () => (
  <div className="text-white font-bold text-xs">
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">All</a>
    /
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">Mockup</a>
    /
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">Branding</a>
    /
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">Artwork</a>
    /
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">Motion</a>
    /
    <a className="px-2 text-grey-lighter font-bold text-xs no-underline hover:text-white" href="">Stills</a>
  </div>
);

export default Breadcrumbs;
