import React from "react";
import Link from "gatsby-link";

import Portrait1 from '../images/about/portrait1.jpg';
import Portrait2 from '../images/about/portrait2.jpg';
import AboutHeader from '../images/header/about.jpg';

const headerStyle = {
  background: 'linear-gradient(transparent, #000000), url(' + AboutHeader + ')',
  height: '20rem'
};

const AboutPage = () => (

  <div className="flex-1 w-100">

    <div className="p-8 pt-32 text-center bg-cover" style={headerStyle}>
      <svg className="fill-current w-16 h-16" style={{fill: '#f6993f'}} viewBox="0 0 100 100">
        <path id="svg_3" d="m27.796,41.026l0,-3.801l15.063,-11.051l0,46.947l-3.731,0l0,-40.19l-11.332,8.095z"/>
        <path id="svg_4" d="m86.358,59.044c0,5.279 -0.845,8.305 -3.027,10.699c-2.392,2.604 -6.123,4.083 -10.558,4.083c-4.505,0 -8.235,-1.478 -10.628,-4.153c-2.252,-2.534 -2.815,-4.857 -2.815,-11.896l0,-15.695c0,-6.335 0.563,-8.798 2.604,-11.403c2.182,-2.815 5.983,-4.365 10.77,-4.365c4.294,0 7.812,1.197 10.277,3.449c2.533,2.393 3.379,4.927 3.379,10.417l0,18.864l-0.002,0zm-23.298,-1.267c0,6.265 0.282,7.391 2.112,9.431c1.829,1.901 4.645,3.027 7.742,3.027c3.308,0 6.335,-1.337 7.953,-3.449c1.197,-1.689 1.76,-4.012 1.76,-7.742l0,-18.722c0,-3.942 -0.774,-5.983 -2.886,-7.953c-1.829,-1.619 -4.223,-2.463 -6.897,-2.463c-3.449,0 -6.406,1.407 -8.095,3.942c-1.337,1.97 -1.689,3.73 -1.689,8.375l0,15.554z"/>
        <path id="svg_6" d="m57.322,100c-13.356,0 -25.911,-5.201 -35.355,-14.645c-9.444,-9.444 -14.645,-22 -14.645,-35.355c0,-13.356 5.201,-25.911 14.645,-35.355c9.444,-9.444 21.999,-14.645 35.355,-14.645c13.355,0 25.911,5.201 35.356,14.645l-2.63,2.629c-8.741,-8.741 -20.364,-13.555 -32.726,-13.555s-23.985,4.814 -32.726,13.555c-8.741,8.741 -13.555,20.364 -13.555,32.726s4.814,23.985 13.556,32.726c8.741,8.742 20.363,13.556 32.726,13.556s23.985,-4.814 32.726,-13.556l2.63,2.63c-9.446,9.443 -22.002,14.644 -35.357,14.644z"/>
      </svg>
      <p className="text-5xl font-hairline text-white mt-4">Code is craft.</p>
    </div>

    <div className="flex flex-wrap bg-white p-8">

      <div className="w-full sm:w-1/2 md:w-1/4 px-4">
        <div className="max-w-sm rounded overflow-hidden">
          <div className="relative text-grey-light">
            <div class="absolute font-extrabold" style={{top: '0', left: '0', fontSize: '8rem'}}>01.</div>
            <div className="text-black font-bold text-3xl mb-2 absolute"  style={{top: '4rem', left: '0'}}>Research</div>
            <p className="text-grey-dark text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <a className="text-black font-bold no-underline hover:text-grey-darker" href="">Read More</a>
          </div>
        </div>
      </div>


      <div className="w-full sm:w-1/2 md:w-1/4 px-4">
        <div className="max-w-sm rounded overflow-hidden">
          <div className="relative text-grey-light">
            <div class="absolute font-extrabold" style={{top: '0', left: '0', fontSize: '8rem'}}>02.</div>
            <div className="text-black font-bold text-3xl mb-2 absolute"  style={{top: '4rem', left: '0'}}>Idea &<br/>Concept</div>
            <p className="text-grey-dark text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <a className="text-black font-bold no-underline hover:text-grey-darker" href="">Read More</a>
          </div>
        </div>
      </div>


      <div className="w-full sm:w-1/2 md:w-1/4 px-4">
        <div className="max-w-sm rounded overflow-hidden">
          <div className="relative text-grey-light">
            <div class="absolute font-extrabold" style={{top: '0', left: '0', fontSize: '8rem'}}>03.</div>
            <div className="text-black font-bold text-3xl mb-2 absolute"  style={{top: '4rem', left: '0'}}>Design &<br/>Develop</div>
            <p className="text-grey-dark text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <a className="text-black font-bold no-underline hover:text-grey-darker" href="">Read More</a>
          </div>
        </div>
      </div>


      <div className="w-full sm:w-1/2 md:w-1/4 px-4">
        <div className="max-w-sm rounded overflow-hidden">
          <div className="relative text-grey-light">
            <div class="absolute font-extrabold" style={{top: '0', left: '0', fontSize: '8rem'}}>04.</div>
            <div className="text-black font-bold text-3xl mb-2 absolute"  style={{top: '4rem', left: '0'}}>Test &<br/>Support</div>
            <p className="text-grey-dark text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <a className="text-black font-bold no-underline hover:text-grey-darker" href="">Read More</a>
          </div>
        </div>
      </div>

    </div>

    <div className="flex flex-wrap bg-grey-lighter p-8">
      <div className="flex-1 w-full text-center">
        <p className="text-5xl font-hairline text-orange mt-4">Teamwork.</p>
        <p className="text-2xl font-bold text-black mt-2">Our Team</p>
      </div>
    </div>

    <div className="flex flex-wrap bg-grey-lighter p-8">

      <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
        <div className="max-w-sm">
          <img className="w-full rounded shadow-lg" src={Portrait1} alt="John Doe"/>
          <div className="px-6 py-4">
            <div className="text-black font-bold text-xl mb-2">John Doe</div>
            <div className="text-grey-dark font-bold uppercase text-sm mb-2">Founder</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
        <div className="max-w-sm">
          <img className="w-full rounded shadow-lg" src={Portrait2} alt="James Black"/>
          <div className="px-6 py-4">
            <div className="text-black font-bold text-xl mb-2">James Black</div>
            <div className="text-grey-dark font-bold uppercase text-sm mb-2">CTO</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

    </div>


    <div className="flex flex-wrap flex-row items-start mt-8 py-8">
      <div className="w-full md:w-1/2 lg:w-1/2 px-4">
        <div className="h-64 w-full rounded shadow bg-grey p-3 mb-4">b</div>
        <div className="h-32 w-full rounded p-3 mb-4">
          The point is... to live one's life in the full complexity of what one
          is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/2 px-4">
        <div className="h-64 w-full rounded shadow bg-grey p-3 mb-4"></div>
        <div className="h-32 w-full rounded p-3 mb-4">
          The point is... to live one's life in the full complexity of what one
          is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
