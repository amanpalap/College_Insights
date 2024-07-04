import React from "react";
import art from "./Images/digital_artist.png";
import bg from "./Images/hobg.jpg";
import Logo from "./Images/Logo.png";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-wrap justify-center w-full mx-auto bg-transparent">
        <div className="flex flex-wrap w-full mt-5 md:mt-0">
          <div
            className="flex flex-wrap items-center justify-center w-full px-6 py-10 mx-10 bg-no-repeat bg-cover h-96 rounded-2xl opacity-84"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="flex flex-row flex-wrap items-center justify-between w-full">
              <div className="flex flex-wrap justify-center w-full">
                <div className="flex flex-wrap justify-center w-full">
                  <img className="w-40" src={Logo} alt="wait..." />
                </div>
                <div className="flex flex-wrap justify-center w-1/2 mt-8 text-center">
                  <p className="text-white">
                  College Life, Decoded: Your Daily Dose of Campus Chronicles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 m-10 rounded-xl">
            <div className="items-center justify-center py-2 text-2xl font-extrabold text-center text-white backdrop-blur-2xl rounded-xl">
              <p>Latest Updates</p>
            </div>
            <div className="flex flex-wrap items-center justify-center px-10 py-4 text-lg text-center text-white rounded-2xl">
              <Link
              to="/Vecell"
              className="flex flex-wrap items-center justify-center w-full h-20 max-w-sm mx-2 backdrop-blur-xl hover:bg-white hover:bg-opacity-30 rounded-xl hover:text-blue-300"
              >
               <p>Dhristi by Ve-cell</p>
              </Link>
               
              <Link
              to="/BB"
              className="flex flex-wrap items-center justify-center w-full h-20 max-w-sm mx-2 backdrop-blur-xl hover:bg-white hover:bg-opacity-30 rounded-xl hover:text-blue-300"
              >
               <p>Fit India Week</p>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
