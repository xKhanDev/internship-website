import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute top-0 z-10 bg-black/60 w-full h-full p-8 text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl font-semibold text-center">
          Looking for dream{" "}
          <span className="font-bold text-blue-500">internship</span>?
        </h1>
        <p className="w-1/2 text-center text-gray-200">
          Internship Pakistan kickstart student's tech careers with first
          internships, providing industry exposure, practical skills, and
          networking opportunities, paving the way for their success in the tech
          industry.
        </p>
        <Link
          to={"/internship-listing"}
          className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
        >
          Explore Internships
        </Link>
      </div>
      <img
        src="./main-man.jpg"
        alt=""
        className="absolute top-0 w-full h-full bg-cover bg-no-repeat bg-center"
      />
    </div>
  );
};

export default Hero;
