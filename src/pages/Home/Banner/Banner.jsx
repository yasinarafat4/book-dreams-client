import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Book from "../../../assets/book.json";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 items-center bg-gradient-to-r from-pink-100  to-sky-100 dark:from-slate-700 dark:to-slate-700  px-4 md:px-10 py-8">
        <div className="col-span-3 space-y-3 lg:space-y-6">
          <h2 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
            Welcome
            <span>
              <Typewriter
                words={[" to Your Dream Journey!"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={110}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl w-11/12 md:w-6/12 lg:w-8/12 2xl:w-6/12 tracking-wide font-bold">
            Engaging & Accessible College Booking Services.
          </p>

          <div className="flex items-center gap-2">
            <Link to="/admission">
              <button className="btn btn-md btn-outline text-[#0C8ED8] hover:bg-[#0C8ED8] duration-700 normal-case">
                Admission
              </button>
            </Link>
            <Link to="/colleges">
              <button className="btn btn-md bg-[#e84766] hover:bg-[#db264a] text-white duration-700 normal-case">
                View Colleges
              </button>
            </Link>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="w-full md:w-7/12 mt-4 lg:w-96 mx-auto">
          <Lottie animationData={Book} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Banner;
