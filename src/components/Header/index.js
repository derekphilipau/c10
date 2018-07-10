import React from "react";
import Link from "gatsby-link";


const headerLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Portfolio",
    link: "/portfolio"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];

const NavLink = props =>
  <Link
    exact
    to={props.to}
    activeStyle={{
      color: '#DAE1E7',
      textDecoration: 'underline'
    }}
    className="block mt-4 md:inline-block md:mt-0 mr-4 no-underline hover:text-grey-light text-grey-dark font-light"
    >
    {props.name}
  </Link>

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (


    <nav className="z-10 sticky pin-t flex flex-wrap items-stretch justify-between bg-black px-8 py-3">

      <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="/">
        <svg className="fill-current w-8 h-8" style={{fill: '#f6993f'}} viewBox="0 0 100 100">
          <path id="svg_3" d="m27.796,41.026l0,-3.801l15.063,-11.051l0,46.947l-3.731,0l0,-40.19l-11.332,8.095z"/>
          <path id="svg_4" d="m86.358,59.044c0,5.279 -0.845,8.305 -3.027,10.699c-2.392,2.604 -6.123,4.083 -10.558,4.083c-4.505,0 -8.235,-1.478 -10.628,-4.153c-2.252,-2.534 -2.815,-4.857 -2.815,-11.896l0,-15.695c0,-6.335 0.563,-8.798 2.604,-11.403c2.182,-2.815 5.983,-4.365 10.77,-4.365c4.294,0 7.812,1.197 10.277,3.449c2.533,2.393 3.379,4.927 3.379,10.417l0,18.864l-0.002,0zm-23.298,-1.267c0,6.265 0.282,7.391 2.112,9.431c1.829,1.901 4.645,3.027 7.742,3.027c3.308,0 6.335,-1.337 7.953,-3.449c1.197,-1.689 1.76,-4.012 1.76,-7.742l0,-18.722c0,-3.942 -0.774,-5.983 -2.886,-7.953c-1.829,-1.619 -4.223,-2.463 -6.897,-2.463c-3.449,0 -6.406,1.407 -8.095,3.942c-1.337,1.97 -1.689,3.73 -1.689,8.375l0,15.554z"/>
          <path id="svg_6" d="m57.322,100c-13.356,0 -25.911,-5.201 -35.355,-14.645c-9.444,-9.444 -14.645,-22 -14.645,-35.355c0,-13.356 5.201,-25.911 14.645,-35.355c9.444,-9.444 21.999,-14.645 35.355,-14.645c13.355,0 25.911,5.201 35.356,14.645l-2.63,2.629c-8.741,-8.741 -20.364,-13.555 -32.726,-13.555s-23.985,4.814 -32.726,13.555c-8.741,8.741 -13.555,20.364 -13.555,32.726s4.814,23.985 13.556,32.726c8.741,8.742 20.363,13.556 32.726,13.556s23.985,-4.814 32.726,-13.556l2.63,2.63c-9.446,9.443 -22.002,14.644 -35.357,14.644z"/>
        </svg>
      </a>

      <button
        className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
        onClick={handleClick}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div
        id="nav"
        className="hidden md:flex md:items-center w-full md:w-auto"
      >
        <div className="">
          <NavLink to="/" name="Home" />
          <NavLink to="/portfolio" name="Portfolio" />
          <NavLink to="/about" name="About" />
          <NavLink to="/contact" name="Contact" />

          {/* https://leungwensen.github.io/svg-icon/#zocial */}
          <a href="https://facebook.com" className="block mt-4 md:inline-block md:mt-0 mr-4 no-underline hover:text-grey-light text-grey-dark font-light" >
            <svg className="fill-current w-4 h-4" viewBox="0 0 275.45599365234375 512" aria-labelledby="bdsi-zocial-facebook-title" id="si-zocial-facebook" width="100%" height="100%"><path d="M0 274.944v-97.776h78.865V128c0-35.504 11.504-65.697 34.544-90.624C136.449 12.463 164.369 0 197.12 0h78.336v97.792H197.12c-5.105 0-9.712 2.816-13.808 8.448-4.097 5.632-6.144 12.544-6.144 20.735v50.177h98.288v97.775h-98.304V512H78.847V274.943H0z"></path></svg>
          </a>
          <a href="https://instagram.com" className="block mt-4 md:inline-block md:mt-0 mr-4 no-underline hover:text-grey-light text-grey-dark font-light" >
            <svg className="fill-current w-4 h-4" viewBox="0 0 512.800048828125 512.800048828125" aria-labelledby="busi-zocial-instagram-title" id="si-zocial-instagram" width="100%" height="100%"><path d="M45.8 2.1C50.9.9 82.7.7 255.8.6 482.2.5 465.6 0 480.2 7.2c10.3 5.1 20.4 15.2 25.3 25.3 7.3 14.8 6.8-2.3 6.5 226.5l-.2 206-2.2 6.4c-6.6 18.7-19.701 31.8-38.4 38.4l-6.4 2.2-206 .2c-223.6.3-211 .6-223.9-5.1-12.4-5.5-23.4-16.4-29.1-28.9C0 465.7.3 477.9.4 256 .4 58.5.5 51.8 2.3 44.7 5.1 34.1 9.8 26.1 17.8 18c7.9-7.8 17.9-13.5 28-15.9zM444.4 63l-4.3-3-34.6-.3-34.7-.3-5 2.5c-5.4 2.7-8.8 7-10.2 12.6-.5 1.9-.9 18.4-.8 36.5l.1 33.1 3 4.4c1.7 2.6 4.9 5.6 7.4 7l4.5 2.4 33 .1c36.2.1 38.8-.2 44.3-5.6 6.1-5.9 6.3-7.8 6-44.9-.3-38.1-.5-38.7-8.7-44.5zm-168.2 97.1c-9.4-1.9-20-2.4-30.2-1.4-24.9 2.4-50.3 16.2-66 35.9-28.8 35.9-29.5 84.9-1.9 121.5 12.2 16.1 28.2 27.5 47.799 33.9 13.9 4.5 29 6.1 41.4 4.3 3-.5 7-1.1 8.9-1.3 5.9-.9 18.4-5.5 26.4-9.8 27.2-14.5 47-42.8 51.3-73.6 1.2-8.1.6-24.4-1.1-32.5-8.1-38.7-38.3-69.1-76.6-77zM102.1 225l1.8-8H82c-14 0-22.1.4-22.3 1-.3.6-.3 50.7-.2 111.5l.3 110.5 2.4 3.8c1.3 2.1 4.2 5 6.4 6.5l4.1 2.7 182.5.2 182.6.3 4.5-2.3c2.6-1.4 5.8-4.2 7.5-6.6l3-4.3.3-111.1c.1-66.9-.1-111.3-.7-111.601-.7-.5-39.6-.6-43.4-.2-.5.1-.6.5-.3 1 1 1.6 3.5 14.5 4.1 21.6 1.9 21.1.7 36.8-4.1 56-15.1 59.7-67.2 107.1-127.4 116-51.2 7.7-99.9-8.2-136.1-44.4-13.6-13.7-21.7-24.8-29.9-41.1-15.4-30.7-20.3-68.5-13.2-101.5z"></path></svg>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Header;
