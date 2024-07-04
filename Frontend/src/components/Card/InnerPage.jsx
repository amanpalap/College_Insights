import React from "react";
import Poster from "./poster.jpeg"



function About({
  className,
  Heading = "UPDATES",
  Poster="",
  Coordinator1="Antriksh Bansal",
  Coordinator2="Ashi Gupta",
  Coordinator3="",
  Number1="9411205493",
  Number2="7302326983",
  Number3="8694030944",
  WhatsappLink = "https://www.instagram.com/ballers_akgec/",
  InstaPage = "https://www.instagram.com/ballers_akgec/",
  OfficialPage = "https://www.instagram.com/ballers_akgec/",
  linkName1 = "",
  linkName2 = "Instagram Handle",
  linkName3 = "",
  Description = "-VISION TO ENVISION THE UNSEEN -EVALUATE YOUR PERCEPTION -SEE THINGS HOLISTICALLY -ABILITY TO SEE THE HIDDEN MESSAGE-ENLIGHTEN DISCUSSION -BRAINSTORMING QUIZZES -REFRESHMENT WILL BE PROVIDED -REEVALUATE YOUR LIFE"
}) {
  return (
    <div className="h-fit">
      <div className="w-full h-6 md:flex hidden mb-5 md:mb-10 flex-wrap sticky top-0 bg-transparent"></div>

      <div className="flex flex-row flex-wrap justify-center rounded p-2 md:mx-52">
        <div className="w-full  py-3 rounded-lg md:pl-5 md:text-left text-center bg-white backdrop-blur-xl bg-opacity-70 mb-2">
          <h1 className="text-2xl text-black font-bold">{Heading}</h1>
        </div>
        
        <div className="w-full flex flex-wrap justify-center md:space-x-2">
          <div className="p-2 md:w-5/12 hover:scale-95 backdrop-blur-xl bg-white bg-opacity-40 rounded-lg">
            <img className="w-full" src={Poster} alt="" />
          </div>
          <div className="flex md:w-5/12 md:h-fit flex-wrap">
            <div className="w-full h-fit  p-2">
              <div className="bg-white p-2 mb-2 md:text-left md:pl-3 text-center bg-opacity-70 backdrop-blur-xl rounded-xl">
                <h1 className="font-semibold text-lg">Descriptions</h1>
              </div>
              <div className="bg-white hover:scale-105 pl-3 p-2 mb-2 md:text-left text-center bg-opacity-70 backdrop-blur-xl rounded-xl">
                <p className="text-sm">{Description}</p>
              </div>
            </div>

            
            <div className="w-full h-fit  p-2">
              <div className="bg-white p-2 mb-2 md:text-left md:pl-3 text-center bg-opacity-70 backdrop-blur-xl rounded-xl">
                <h1 className="font-semibold text-lg">Various Links</h1>
              </div>
              <div className="bg-white pl-3 p-3 hover:scale-105 mb-2 md:text-left text-center bg-opacity-70 flex flex-wrap backdrop-blur-xl rounded-xl">
                {/* <a className="text-blue-700 w-full" target="_blank" href={WhatsappLink}>
                  {`<${linkName1}>`}
                </a> */}
                <a className="text-blue-700 w-full" target="_blank" href={InstaPage}>
                {`<${linkName2}>`}
                </a>
                {/* <a className="text-blue-700 w-full" target="_blank" href={OfficialPage}>
                {`<${linkName2}>`}
                </a> */}
              </div>
            </div>

            
            
            <div className="w-full h-fit  p-2">
              <div className="bg-white p-2 md:pl-3 md:text-left text-center mb-2 bg-opacity-70 backdrop-blur-xl rounded-xl">
                <h1 className="font-semibold text-lg">Contact Details</h1>
              </div>
              <div className="bg-white pl-3 p-2 mb-2 hover:scale-105 md:text-left text-center bg-opacity-70 backdrop-blur-xl rounded-xl">
                <p>{Coordinator1}: {Number1}</p>
                <p>{Coordinator2}: {Number2}</p>
                {/* <p>{Coordinator3}: {Number3}</p> */}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default About;
