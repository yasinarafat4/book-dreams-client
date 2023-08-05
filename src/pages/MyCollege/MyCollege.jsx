import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import TabularCollegeInfo from "../../components/TabularCollegeInfo/TabularCollegeInfo";

const MyCollege = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  useEffect(() => {
    fetch("https://book-dreams-server.vercel.app/student")
      .then((res) => res.json())
      .then((result) => {
        setStudentInfo(result);
      });
  }, []);
  console.log("Student Info", studentInfo);
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | MyCollege</title>
      </Helmet>
      <TabularCollegeInfo studentInfo={studentInfo}></TabularCollegeInfo>
    </div>
  );
};

export default MyCollege;
