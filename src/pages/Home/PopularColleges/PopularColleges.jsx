import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const popular = colleges.filter((college) => college.category === "Popular");

  useEffect(() => {
    fetch("https://book-dreams-server.vercel.app/college")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  // For Search
  const handleSearch = () => {
    fetch(`https://book-dreams-server.vercel.app/searchCollege/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      })
  };

  useEffect(() => {
    const displayResults = searchText ? searchResults : popular;
    setSearchResults(displayResults);
  }, [searchText, popular, searchResults]);


  return (
    <>
      <SectionTitle heading={"Popular Colleges"}></SectionTitle>
      <div className="mt-4 flex justify-center items-center py-6 px-4">
        <button onClick={handleSearch()} className="text-2xl text-[#e84766] -mr-10 z-10">
          <MdSearch />
        </button>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search College..."
          className="w-full md:w-6/12 py-4 pl-12 border-2 border-1 focus:border-[#e84766] rounded-full focus:outline-none"
        />
        <button className="-ml-14 p-3 bg-[#e84766] hover:bg-[#c51b3d] text-white duration-700 text-2xl rounded-full">
          <RiArrowRightLine />
        </button>
      </div>
      <div className="bg-slate-50 dark:bg-slate-700 grid grid-cols-1 lg:grid-cols-3 mx-2">
        {searchResults.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div> 
    </>
  );
};

export default PopularColleges;
