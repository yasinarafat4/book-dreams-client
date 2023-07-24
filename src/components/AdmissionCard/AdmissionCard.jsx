import React from "react";
import { Link } from "react-router-dom";

const AdmissionCard = ({ college }) => {
  const {_id, image, name } = college;

  return (
    <Link to={`/admissionForm/${_id}`}>
    <div
      title="Click to Admission"
      className="flex  justify-start items-center space-x-3 hover:bg-[#e84766] hover:text-white duration-1000 p-2 mt-5 mr-2  rounded-2xl cursor-pointer"
    >
      <div className="avatar">
        <div className="mask mask-squircle w-16 h-16 my-1">
          <img src={image} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
      <div>
        <div className="font-bold text-lg">{name}</div>
      </div>
    </div>
    
    </Link>
  );
};

export default AdmissionCard;
