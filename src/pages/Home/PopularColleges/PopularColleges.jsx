import React from "react";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useColleges from "../../../hooks/useColleges";

const PopularColleges = () => {
  const [colleges] = useColleges();
  const popular = colleges.filter((college) => college.category === "Popular");
  return (
    <>
      <SectionTitle heading={"Popular Colleges"}></SectionTitle>
      <div className="bg-slate-50 dark:bg-slate-700 grid grid-cols-1 lg:grid-cols-3 mx-2">
        {popular.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </>
  );
};

export default PopularColleges;
