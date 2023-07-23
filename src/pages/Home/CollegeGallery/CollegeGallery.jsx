import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CollegeGallery = () => {
  const images = [
    "https://i.ibb.co/DMfvRV4/img8.png",
    "https://i.ibb.co/fkRPXC0/img1.jpg",
    "https://i.ibb.co/XxzDBQ4/img2-1.png",
    "https://i.ibb.co/z5nswn5/img3.png",
    "https://i.ibb.co/dchCQyV/img4.png",
    "https://i.ibb.co/9cd3T57/img5.png",
    "https://i.ibb.co/FbDfQjJ/img6.png",
    "https://i.ibb.co/GcQq3Mr/img7.png",
  ];
  return (
    <>
      <SectionTitle heading={"Take A Look"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-20 bg-gray-100 p-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden transform-gpu transition-transform duration-700 hover:scale-150 hover:z-10"
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default CollegeGallery;
