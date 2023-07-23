import React, { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import Rating from "react-rating";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CollegeCard = ({ college }) => {
  const {
    image,
    name,
    events,
    rating,
    admission_date,
    research_count,
    sports,
  } = college;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleDetails = () => {
    if (user) {
      navigate("/details", { state: { from: location } });
    } else {
      Swal.fire({
        title: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0C8ED8",
        cancelButtonColor: "#e84766",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className="m-4 md:w-9/12 shadow-lg p-4 mx-auto cursor-pointer"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <img className="w-full rounded-md mx-auto mb-3" src={image} alt="" />
      <div className="space-y-5 md:space-y-3">
        <h2 className="font-medium text-xl text-center">{name}</h2>
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
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <p className="font-medium">{rating}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-medium">Admission:</span> {admission_date}
          </p>

         <button
            onClick={handleDetails}
            className="bg-[#e84766] hover:bg-[#bd1133] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-sm"
          >
            Details
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
