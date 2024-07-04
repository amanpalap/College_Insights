import React, { useState } from "react";
import { AlignJustify,X } from "lucide-react";
import { NavLinks } from "../index"


function Nav() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <>
    <div className="w-2/5">
      <div className="hidden p-2 px-8 mr-8 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl md:block">
        <NavLinks />
      </div>
      <div className="flex justify-end mr-4 md:hidden">
        <button onClick={toggleNavbar}>{open ? <X/> : <AlignJustify color="white"/>}</button>
      </div>
    </div>
    {open &&(
        <div className="pb-2 md:hidden basis-full">
            <NavLinks
            className="flex-col items-center"
            classname="border-t-2"/>
        </div>

    )}
    </>
  );
}

export default Nav;
