import React from "react";
import { NavLink } from "react-router-dom";
import Cult from "./images/Cultural.jpeg";
import Tech from "./images/Technical.jpeg";

function SocietiesHome() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full p-10 md:flex-row">
      <div className="w-full">
        <NavLink
          to="/Societies/CulturalSocieties"
          className="flex flex-wrap items-center w-full h-40 max-w-3xl mx-auto mb-10 bg-no-repeat bg-cover shadow-lg cursor-pointer hover:scale-105 rounded-3xl md:h-60 justify-cenyer"
          style={{ backgroundImage: `url(${Cult})` }}
        >
          <div className="md:mb-20">
            <p className="px-3 mx-auto text-2xl font-bold text-black bg-white bg-opacity-40 backdrop-blur-sm md:text-3xl">
              Cultural Societies
            </p>
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <NavLink
          to="/Societies/TechnicalSocieties"
          className="flex flex-wrap items-center w-full h-40 max-w-3xl mx-auto mb-5 bg-no-repeat bg-cover shadow-lg cursor-pointer hover:scale-105 rounded-3xl md:h-60 justify-cenyer"
          style={{ backgroundImage: `url(${Tech})` }}
        >
          <div className="md:mb-20">
            <p className="px-3 mx-auto text-2xl font-bold text-black bg-white bg-opacity-40 backdrop-blur-sm md:text-3xl">
              Technical Societies
            </p>
          </div>
        </NavLink>
      </div>
    </div>

  );
}

export default SocietiesHome;
