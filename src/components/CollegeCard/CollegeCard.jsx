import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import Rating from "react-rating";

const CollegeCard = ({ college }) => {
  const {
    college_image,
    college_name,
    events,
    college_rating,
    admission_date,
    research_count,
    sports,
  } = college;
  return (
    <div className="m-4 md:w-9/12 shadow-lg p-4 mx-auto cursor-pointer">
      <img
        className="w-full rounded-md mx-auto mb-3"
        src={college_image}
        alt=""
      />
      <div className="space-y-5 md:space-y-3">
        <h2 className="font-medium text-xl text-center">{college_name}</h2>
        <div className="flex justify-around items-center">
          <div>
            <p className="font-medium">Events:</p>
            <ul>
              {events.map((event, index) => (
                <li className="flex justify-start items-center" key={index}>
                  <GoDotFill />
                  {event}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Sports:</p>
            <ul>
              {sports.map((sport, index) => (
                <li className="flex justify-start items-center" key={index}>
                  <GoDotFill />
                  {sport}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>
            {" "}
            <span className="font-medium">Research:</span> {research_count}
          </p>
          <div className="flex gap-2">
            <Rating
              placeholderRating={college_rating}
              emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <p className="font-medium">{college_rating}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-medium">Admission:</span>{" "}
            {admission_date}
          </p>
          <button className="bg-[#e84766] hover:bg-[#bd1133] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-sm">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
