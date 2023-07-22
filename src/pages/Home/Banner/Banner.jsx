import Lottie from "lottie-react";
import React from "react";
import { MdSearch } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
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
          <div className="mt-4 flex justify-center items-center">
            <button className="text-2xl text-[#e84766] -mr-10 z-10">
              <MdSearch />
            </button>
            <input
              type="text"
              placeholder="Search College..."
              className="w-full py-4 pl-12 border-2 border-1 focus:border-[#e84766] rounded-full focus:outline-none"
            />
            <button className="-ml-14 p-3 bg-[#e84766] hover:bg-[#c51b3d] text-white duration-700 text-2xl rounded-full">
              <RiArrowRightLine />
            </button>
          </div>
        </div>
        
        {/* Lottie Animation */}
        <div className="w-full md:w-7/12 mt-4 lg:w-96 mx-auto">
          <Lottie animationData={Book} loop={true} />
        </div>
      </div>
      <div className="bg-white">
        <div>
          <img src="" alt="" />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
