import React from "react";
import { Helmet } from "react-helmet-async";
import img from '../../assets/images/college-cover.jpg';
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import useColleges from "../../hooks/useColleges";
import Cover from "../Shared/Cover/Cover";

const Colleges = () => {
  const [colleges] = useColleges();
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Colleges</title>
      </Helmet>
      <Cover
        bgImg={img}
        title={"Colleges"}
        text={"Find Your Dream College!"}
      ></Cover>
       <div className="bg-slate-50 dark:bg-slate-700 grid grid-cols-1 lg:grid-cols-3 mx-2">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
