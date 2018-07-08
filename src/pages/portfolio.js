import React from "react";
import Link from "gatsby-link";
import cautiousDog from "../images/cautious-dog.svg";

const PortfolioPage = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
        Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
      </p>
      <p className="font-bold mt-4 text-right text-xs uppercase">
        — Thomas Nagel
      </p>
    </div>

    <div className="w-2/3 md:w-1/3">
      <img src={cautiousDog} />
    </div>
  </div>
);

export default PortfolioPage;
