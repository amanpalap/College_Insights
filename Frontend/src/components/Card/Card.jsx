import React from "react";
import { Link } from "react-router-dom";

function Card({
  ImgLabel,
  Label = "Enter Label",
  Description = "Enter your paras",
  Path,
  className
}) {
  return (
    <Link
      to={Path}
      className={`${className} hover:scale-105 flex md:flex-row w-32 text-white  md:w-full flex-wrap md:flex-nowrap p-1 md:p-6 mb-10 cursor-pointer bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-30 backdrop-blur-3xl md:max-w-lg mx-auto text-center rounded-2xl shadow-2xl items-center justify-center space-x-4`}
    >
      <div className="mb-1 md:mx-0 md:mb-0">
        <img className="w-24 md:w-32 rounded-xl" src={ImgLabel} alt="wait..." />
      </div>
      <div className="">
        <h1 className="mr-3 text-sm font-bold md:mb-2 md:mr-0 md:text-lg">
          {Label}
        </h1>

        <p className="hidden text-sm md:w-80 md:block w-31 leading-1">
          {Description}
        </p>
      </div>
    </Link>
  );
}

export default Card;
