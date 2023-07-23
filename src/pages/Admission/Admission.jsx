import React from "react";
import { Helmet } from "react-helmet-async";
import img from '../../assets/images/admission-cover.jpg';
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";
import useColleges from "../../hooks/useColleges";
import Cover from "../Shared/Cover/Cover";

const Admission = () => {
  const [colleges] = useColleges();
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Admission</title>
      </Helmet>
      <Cover
        bgImg={img}
        title={"Take Admission"}
        text={"Fill Up Your Dream Form!"}
      ></Cover>
      <div className="bg-slate-50 dark:bg-slate-700 grid grid-cols-1 lg:grid-cols-2 mx-2">
        {colleges.map((college) => (
          <AdmissionCard key={college._id} college={college}></AdmissionCard>
        ))}
      </div>
    </div>
  );
};

export default Admission;
