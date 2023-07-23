import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error-img.png";
import logo from "../../assets/images/logo.png";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-scre py-10 lg:py-36 bg-gradient-to-r from-pink-100 to-sky-100">
      <div className="w-full p-4">
        <div className="flex flex-col space-y-4">
          <img
            src={logo}
            alt="Logo Image"
            className="mx-auto w-5/12 md:w-3/12 lg:w-2/12"
          />
          <img
            src={errorImg}
            alt="Error Image"
            className="mx-auto md:w-6/12 lg:w-5/12"
          />
        </div>
        <h2 className="text-center text-2xl lg:text-3xl text-[#e84766] font-bold mt-2">404 Not Found</h2>
        <p className="text-center text-gray-600 lg:font-medium mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center mt-4">
        <Link to="/">
              <button className="bg-[#e84766] hover:bg-[#bd1133] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-full">
                Back to Home
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
