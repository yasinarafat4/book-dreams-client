import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchPapers from "../ResearchPapers/ResearchPapers";

const Home = () => {
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularColleges></PopularColleges>
      <CollegeGallery></CollegeGallery>
      <ResearchPapers></ResearchPapers>
    </div>
  );
};

export default Home;
