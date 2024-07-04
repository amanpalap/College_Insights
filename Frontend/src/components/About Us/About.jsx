import React from "react";
import Poster from "./poster.jpeg";

function About() {
  return (


        <div className="flex flex-wrap items-center justify-center w-full bg">
          <div className="w-full p-2 mb-2 text-center bg-black bg-opacity-50 rounded-xl backdrop-blur-2xl md:mx-80">
            <h1 className="w-full text-2xl font-extrabold text-white">
              About This Website
            </h1>
          </div>
          <div className="px-10 py-4 text-center text-white bg-black bg-opacity-50 rounded-xl backdrop-blur-2xl md:mx-80">
            <p>
              This website is your one-stop shop for all things college events.
              Whether you are a student, faculty member, staff member, alumni,
              or member of the general public, we have something for everyone.
            </p>
            <br />
            <p>
              Our website features a comprehensive calendar of all upcoming and
              past college events, categorised by type (e.g., cultural,
              academic, athletic, social). Each event is described in detail,
              including date, time, location, cost, and registration
              information. We also have photos and videos from past events, as
              well as a blog section where students, faculty, staff, and alumni
              can share their experiences with college events. we hope that this
              website will make it easy for you to find out about and
              participate in college events. We encourage you to explore our
              website and discover all that the college has to offer.
            </p>
            <br />
            <p>
              Objective Provide a central location for students, faculty, staff,
              alumni, and the general public to find information about all
              upcoming and past college events, including sports events. Promote
              student engagement and participation in college events. Showcase
              the college's diverse range of events and activities. Make it easy
              for students, faculty, staff, and alumni to register for events
              and receive updates.
            </p>
            <br />
            <p>
              FEATURES AND WORKING
              <li>Exam Sitting Plan</li>
              <li>Event Information</li>
              <li>Society Recruitments</li>
              <li>Exam schedule</li>
            </p>
          </div>
        </div>


  );
}

export default About;
