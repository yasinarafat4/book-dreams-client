import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
