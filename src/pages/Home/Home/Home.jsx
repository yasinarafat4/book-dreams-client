import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import CounterOverview from "../CounterOverview/CounterOverview";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Reviews from "../Reviews/Reviews";

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
      <Reviews></Reviews>
      <CounterOverview></CounterOverview>
    </div>
  );
};

export default Home;
