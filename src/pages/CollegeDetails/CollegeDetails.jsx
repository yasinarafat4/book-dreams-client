import React from "react";
import { Helmet } from "react-helmet-async";
import { GoDotFill } from "react-icons/go";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const collegeDetails = useLoaderData();
  const {
    image,
    name,
    events,
    admission_date,
    research_count,
    sports,
    details,
  } = collegeDetails;
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Details</title>
      </Helmet>
      <div className="bg-gradient-to-r from-pink-100 to-sky-100 dark:from-slate-700 dark:to-slate-700">
        <h2 className="text-center text-3xl md:text-4xl font-bold py-10 px-4 text-[#2E5879]">
          {name}
        </h2>
        <div className="grid grid-cols lg:grid-cols-2 2xl:grid-cols-1">
          <div className="flex justify-center px-3">
            <figure>
              <img className="rounded py-4" src={image} alt="Album" />
            </figure>
          </div>
          <div className="flex flex-col justify-start items-center space-y-5">
            <div className="flex justify-evenly items-center gap-4 md:gap-64 lg:gap-16 xl:gap-64">
              <p>
                <span className="font-bold">Admission Date:</span>{" "}
                {admission_date}
              </p>
              <p>
                <span className="font-bold">Research Works:</span>{" "}
                {research_count}
              </p>
            </div>
            <p className="text-start text-lg italic px-7 2xl:w-4/12">{details}</p>
            <div className="flex justify-start items-start my-2 gap-10 md:gap-64">
              <p>
                <span className="font-bold">Events:</span>{" "}
                <ul>
                  {events.map((event, index) => (
                    <li className="flex justify-start items-center" key={index}>
                      <GoDotFill />
                      {event}
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                <span className="font-bold">Sports:</span>
                <ul>
                  {sports.map((sport, index) => (
                    <li className="flex justify-start items-center" key={index}>
                      <GoDotFill />
                      {sport}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
