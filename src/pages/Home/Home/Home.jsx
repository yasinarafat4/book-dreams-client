import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularColleges from "../PopularColleges/PopularColleges";

const Home = () => {
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularColleges></PopularColleges>
    </div>
  );
};

export default Home;
