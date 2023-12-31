import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import Banner from "../Banner/Banner";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import CounterOverview from "../CounterOverview/CounterOverview";
import OurColleges from "../OurColleges/OurColleges";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Reviews from "../Reviews/Reviews";

const Home = () => {
const {loading} = useContext(AuthContext)
  if (loading) {
    return <Spinner></Spinner>;
  }
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
      <OurColleges></OurColleges>
    </div>
  );
};

export default Home;
