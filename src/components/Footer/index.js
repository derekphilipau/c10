import React from "react";
import ContactForm from "../Form/contact.js";

const Footer = () => (
  <div className="bg-black pt-8">
    <div className="flex items-stretch justify-between p-4 text-sm">
      <div className="w-2/3 p-4">
        <h3 className="uppercase mb-4">Get in touch</h3>
        <p className="mb-4">
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat.
        </p>
        <ContactForm />
      </div>
      <div className="w-1/3 p-4">
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare massa, at consequat ipsum. Sed ullamcorper, dui consequat vehicula volutpat dolor.
      </div>
    </div>
    <div className="flex items-center justify-between p-4 text-sm">
      <div className="">
        <p className="hover:text-white text-grey-light font-hairline">
          <a
            href="/"
            className="no-underline text-white"
          >
            <svg style={{fill: '#b8c2cc'}} width="2rem" viewBox="0 0 100 100">
              <path id="svg_3" d="m27.796,41.026l0,-3.801l15.063,-11.051l0,46.947l-3.731,0l0,-40.19l-11.332,8.095z"/>
              <path id="svg_4" d="m86.358,59.044c0,5.279 -0.845,8.305 -3.027,10.699c-2.392,2.604 -6.123,4.083 -10.558,4.083c-4.505,0 -8.235,-1.478 -10.628,-4.153c-2.252,-2.534 -2.815,-4.857 -2.815,-11.896l0,-15.695c0,-6.335 0.563,-8.798 2.604,-11.403c2.182,-2.815 5.983,-4.365 10.77,-4.365c4.294,0 7.812,1.197 10.277,3.449c2.533,2.393 3.379,4.927 3.379,10.417l0,18.864l-0.002,0zm-23.298,-1.267c0,6.265 0.282,7.391 2.112,9.431c1.829,1.901 4.645,3.027 7.742,3.027c3.308,0 6.335,-1.337 7.953,-3.449c1.197,-1.689 1.76,-4.012 1.76,-7.742l0,-18.722c0,-3.942 -0.774,-5.983 -2.886,-7.953c-1.829,-1.619 -4.223,-2.463 -6.897,-2.463c-3.449,0 -6.406,1.407 -8.095,3.942c-1.337,1.97 -1.689,3.73 -1.689,8.375l0,15.554z"/>
              <path id="svg_6" d="m57.322,100c-13.356,0 -25.911,-5.201 -35.355,-14.645c-9.444,-9.444 -14.645,-22 -14.645,-35.355c0,-13.356 5.201,-25.911 14.645,-35.355c9.444,-9.444 21.999,-14.645 35.355,-14.645c13.355,0 25.911,5.201 35.356,14.645l-2.63,2.629c-8.741,-8.741 -20.364,-13.555 -32.726,-13.555s-23.985,4.814 -32.726,13.555c-8.741,8.741 -13.555,20.364 -13.555,32.726s4.814,23.985 13.556,32.726c8.741,8.742 20.363,13.556 32.726,13.556s23.985,-4.814 32.726,-13.556l2.63,2.63c-9.446,9.443 -22.002,14.644 -35.357,14.644z"/>
            </svg>
          </a>
        </p>
      </div>
      <div className="">
        <a
            href="/"
            className="no-underline hover:text-white text-grey-dark"
          >
        &nbsp; copyright &copy; c10, 2018
        </a>
      </div>
      <div className="float-right">
        <a
          href="https://github.com/derekphilipau/c10"
          className="no-underline hover:text-white text-grey-dark"
        >
          <svg style={{fill: '#b8c2cc'}} height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
