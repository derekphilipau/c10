import React from "react";
import ContactForm from "../Form/contact.js";

const Footer = () => (
  <div className="bg-black pt-8">
    <div className="flex flex-wrap flex-row items-stretch justify-between p-4 text-sm">
      <div className="w-full md:w-1/3 px-4 mb-8 flex-auto">
        <h3 className="uppercase mb-6 pb-4 border-b">Get in touch</h3>
        <p className="mb-4">
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat.
        </p>
        <ContactForm />
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 flex-none">
        <h3 className="uppercase mb-4 pb-4 border-b">
          Contact Info
        </h3>
        <p className="py-2">
          {/* https://leungwensen.github.io/svg-icon/ */}
          <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="https://twitter.com/c10dev">
            <svg className="fill-current w-6 h-6" viewBox="0 0 1024 768" aria-labelledby="egsi-ant-mail-title" id="si-ant-mail" width="100%" height="100%"><path d="M1024 59q-2-25-20.5-42T960 0H64Q38 0 19 19T0 64v640q0 26 19 45t45 19h896q26 0 45-19t19-45V59zm-112 5L512 367 130 64h782zm48 640H64V93l428 339q19 16 39 1l429-325v596z"></path></svg>
            <span className="ml-4">contact@c10.co</span>
          </a>
        </p>
        <p className="py-2">
          {/* https://leungwensen.github.io/svg-icon/ */}
          <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="https://twitter.com/c10dev">
            <svg className="fill-current w-6 h-6" viewBox="0 0 1042.666748046875 1024" aria-labelledby="eysi-ant-phone-title" id="si-ant-phone" width="100%" height="100%"><title id="eysi-ant-phone-title">icon phone</title><path d="M829.333 64q15 0 36 20 22 20 50 64 37 57 45 127 8 73-16 155-23 79-73 160-51 80-125 154-52 52-108 93-55 41-112 68-55 27-109 41t-103 14q-92 0-164-47-42-27-62-47-20-21-22-37-1-12 12-25 45-45 85-73 47-32 74-32h8q5 3 16 13 12 10 44 41 41 41 57 52v1h1q22 15 50 15 26 0 57-13t69-41q48-34 122-105l1-1 2-2q87-92 123-148 18-28 27-53 8-21 9-40 2-33-16-58-10-15-49-54l-3-3q-30-30-41-43-10-11-13-17-7-22 26-72 28-45 79-95 12-12 23-12zm0-64q-38 0-68 30-55 55-88 106-49 75-33 126 5 15 20 33t50 53q37 38 45 49 15 21-22 80-32 50-116 138-71 68-115 100-58 42-89 42-8 0-14-4-12-9-49-45-35-35-53-50t-33-20q-13-4-27-4-46 0-110 45-45 31-95 80-34 34-29 77 6 63 112 131 88 57 199 57 116 0 240.5-61.5t236.5-173.5q79-78 134-165 55-88 80-176 56-192-36-335-33-50-66.5-81.5T829.333 0z"></path></svg>
            <span className="ml-4">1-800-222-4545</span>
          </a>
        </p>
        <p className="py-2">
          {/* https://leungwensen.github.io/svg-icon/ */}
          <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="https://twitter.com/c10dev">
            <svg className="fill-current w-6 h-6" viewBox="0 0 894.5 894" aria-labelledby="fjsi-ant-pushpin-o-title" id="si-ant-pushpin-o" width="100%" height="100%"><title id="fjsi-ant-pushpin-o-title">icon pushpin-o</title><path d="M238.5 103q2 10 1 20l-1 36 29 23 214 170 30 24 37-12q44-15 90-15 49 0 95 16 26 10 51 24l-169 170-43 43-13 13-169 170q-27-45-36-96-13-72 10-141l12-37-24-30-170-214-23-29-36 1h-4q-8 0-16-1zm15-103q-14 0-24 10l-219 219q-11 11-9.5 27t14.5 24q48 31 104 31h6l170 215q-28 84-11.5 175.5T358.5 865q11 13 27 13 14 0 24-10l206-207 223 223q10 10 23.5 10t23-9.5 9.5-23-10-23.5l-223-223 206-207q11-11 10-26t-13-25q-98-80-226-80-57 0-112 18l-215-170q2-60-30-110-10-15-28-15z"></path></svg>
            <span className="ml-4">Alfred, NY</span>
          </a>
          <div className="mt-4 h-64">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11812.443474393653!2d-77.7975740037964!3d42.254804877099694!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1531099586659" width="400" height="300"></iframe>
          </div>
        </p>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <h3 className="uppercase mb-4 pb-4 border-b">
          About Us
        </h3>
        <p className="py-2">
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ornare massa, at consequat ipsum. Sed ullamcorper, dui consequat vehicula volutpat dolor.
        </p>
        <h3 className="uppercase mb-4 py-4 border-b">
          Socialize
        </h3>
        <p className="py-2">
          <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="https://github.com/derekphilipau/c10">
            <svg className="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
            <span className="ml-4">GitHub</span>
          </a>
        </p>
        <p className="py-2">
          <a className="block flex items-center no-underline hover:text-white text-grey-dark" href="https://twitter.com/c10dev">
            <svg className="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
            <span className="ml-4">Twitter</span>
          </a>
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between p-4 text-sm">
      <div className="flex-1">
        <p className="hover:text-white text-grey-light font-hairline px-4">
          <a
            href="/"
            className="block flex items-center no-underline hover:text-white text-grey-darker"
          >
            <svg style={{fill: '#606f7b'}} width="2rem" viewBox="0 0 100 100">
              <path id="svg_3" d="m27.796,41.026l0,-3.801l15.063,-11.051l0,46.947l-3.731,0l0,-40.19l-11.332,8.095z"/>
              <path id="svg_4" d="m86.358,59.044c0,5.279 -0.845,8.305 -3.027,10.699c-2.392,2.604 -6.123,4.083 -10.558,4.083c-4.505,0 -8.235,-1.478 -10.628,-4.153c-2.252,-2.534 -2.815,-4.857 -2.815,-11.896l0,-15.695c0,-6.335 0.563,-8.798 2.604,-11.403c2.182,-2.815 5.983,-4.365 10.77,-4.365c4.294,0 7.812,1.197 10.277,3.449c2.533,2.393 3.379,4.927 3.379,10.417l0,18.864l-0.002,0zm-23.298,-1.267c0,6.265 0.282,7.391 2.112,9.431c1.829,1.901 4.645,3.027 7.742,3.027c3.308,0 6.335,-1.337 7.953,-3.449c1.197,-1.689 1.76,-4.012 1.76,-7.742l0,-18.722c0,-3.942 -0.774,-5.983 -2.886,-7.953c-1.829,-1.619 -4.223,-2.463 -6.897,-2.463c-3.449,0 -6.406,1.407 -8.095,3.942c-1.337,1.97 -1.689,3.73 -1.689,8.375l0,15.554z"/>
              <path id="svg_6" d="m57.322,100c-13.356,0 -25.911,-5.201 -35.355,-14.645c-9.444,-9.444 -14.645,-22 -14.645,-35.355c0,-13.356 5.201,-25.911 14.645,-35.355c9.444,-9.444 21.999,-14.645 35.355,-14.645c13.355,0 25.911,5.201 35.356,14.645l-2.63,2.629c-8.741,-8.741 -20.364,-13.555 -32.726,-13.555s-23.985,4.814 -32.726,13.555c-8.741,8.741 -13.555,20.364 -13.555,32.726s4.814,23.985 13.556,32.726c8.741,8.742 20.363,13.556 32.726,13.556s23.985,-4.814 32.726,-13.556l2.63,2.63c-9.446,9.443 -22.002,14.644 -35.357,14.644z"/>
            </svg>
            <span className="ml-4">Copyright &copy; c10, 2018</span>
          </a>
        </p>
      </div>
      <div className="flex-1 float-right block">
        <div className="flex items-center justify-end mx-4">
          <div className="mx-2">
            <span className="text-grey-dark">Built with</span>
          </div>
          <div className="mx-2">
            <a
              href="https://tailwindcss.com"
              className="no-underline hover:text-white text-grey-dark"
            >
              <svg style={{fill: '#606f7b'}} className="w-8 h-8 lg:w-12 lg:h-12 block" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" transform="translate(5 16)"></path></svg>
            </a>
          </div>
          <div className="mx-2">
            <a
              href="https://github.com/derekphilipau/c10"
              className="no-underline hover:text-white text-grey-dark"
            >
              <svg style={{fill: '#606f7b'}} height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
