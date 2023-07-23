import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurColleges = () => {
  // push Marquee when Mouse Over
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  const images = [
    "https://i.ibb.co/Qk2VRnG/logo1.png",
    "https://i.ibb.co/rv7GNFV/logo2.png",
    "https://i.ibb.co/njxjBSt/logo3.png",
    "https://i.ibb.co/wBzpxNL/logo4.png",
    "https://i.ibb.co/4mLwCym/logo5.png",
    "https://i.ibb.co/sHrDLR4/logo6.png",
  ];
  return (
    <>
      <SectionTitle heading={"Our Colleges"}></SectionTitle>
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={60}
        gradient={false}
        pauseOnHover={!isPaused}
      >
        <div className="grid grid-cols-6 bg-gray-100 dark:bg-slate-700">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              <img src={image} alt={`Image ${index + 1}`} className="w-7/12" />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default OurColleges;
