import React from "react";
import { Link } from "react-router-dom";

function ExamCard({
  Label = "Enter Label",
  Path,
}) {
  return (
    <div className='flex flex-wrap items-center hover:scale-105 md:px-10'>

        <Link
          to={Path}
          className="flex items-center justify-center w-full h-40 mb-5 text-center bg-black shadow-2xl cursor-pointer bg-opacity-40 md:h-52 hover:text-black hover:bg-white hover:bg-opacity-30 backdrop-blur-2xl rounded-2xl"
        >
          <div className="">
            <h1 className="text-sm font-bold text-white md:mb-2 md:mr-0 hover:text-black md:text-2xl">
              {Label}
            </h1>
          </div>
        </Link>

    </div>
  );
}

export default ExamCard;
