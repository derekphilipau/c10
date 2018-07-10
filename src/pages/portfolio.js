import React from "react";
import Link from "gatsby-link";
import Breadcrumbs from "../components/Utility/breadcrumbs";
import Architecture from "../images/portfolio/architecture_square.jpg";
import Shopping from "../images/portfolio/shopping_square.jpg";
import Info from "../images/portfolio/info_square.jpg";
import Video from "../images/portfolio/video_square.jpg";

const PortfolioPage = () => (
  <div className="flex-1 w-100">
    <div className="bg-black p-8">
      <div className="mb-8">
        <p className="text-5xl font-hairline text-white">Robert Redford</p>
        <p className="text-2xl font-hairline text-orange mt-1">Digital Product Designer</p>
        <p className="text-grey font-light text-sm mt-2">
          I produce elegant solutions with a human-centered design approach,
          Feel free to get in touch with me via email.
        </p>
      </div>

      <Breadcrumbs />

      <div className="flex flex-wrap flex-row items-stretch justify-between p-4 mt-8 text-sm">

        <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-darkest">
            <img classNameName="w-full" src={Architecture} alt="Architecture"/>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Architectural Photography</div>
              <p className="text-grey text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-darkest">
            <img classNameName="w-full" src={Shopping} alt="Shopping"/>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Automated Shopping</div>
              <p className="text-grey text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-darkest">
            <img classNameName="w-full" src={Info} alt="Data Visualization"/>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Data Visualization</div>
              <p className="text-grey text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 px-4 mb-8 flex-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-darkest">
            <img classNameName="w-full" src={Video} alt="Process Documentation"/>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Process Documentation</div>
              <p className="text-grey text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

      </div>



    </div>

  </div>
);

export default PortfolioPage;
