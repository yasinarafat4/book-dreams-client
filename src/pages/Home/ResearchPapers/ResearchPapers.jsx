import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ResearchPapers = () => {
  const researchPapers = [
    {
      id: 1,
      title: "Machine Learning Techniques for Image Recognition",
      authors: "Lijuan Liu, Yanping Wang, Wanle Chi",
      link: "https://www.researchgate.net/publication/344562543_Image_Recognition_Technology_Based_on_Machine_Learning",
    },
    {
      id: 2,
      title: "Advancements in Renewable Energy Sources",
      authors: "Muneer Khan, Aayush Tripathi",
      link: "https://www.researchgate.net/publication/316788214_Advancements_in_Renewable_Energies_and_Technologies",
    },
    {
      id: 3,
      title: "Blockchain Technology and its Applications",
      authors: "Thomas Kitsantas, Athanasios Vazakidis, Evangelos Chytis",
      link: "https://www.researchgate.net/publication/334615432_A_Review_of_Blockchain_Technology_and_Its_Applications_in_the_Business_Environment",
    },
  ];

  return (
    <>
      <SectionTitle heading={"Research Papers"}></SectionTitle>
      <div className="py-12 bg-gray-100 dark:bg-slate-700">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {researchPapers.map((paper) => (
              <div key={paper.id} className="bg-white dark:bg-slate-700 dark:text-white shadow-lg p-6 rounded-lg mx-6">
                <h3 className="text-xl font-bold mb-4">{paper.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-white">
                  <span className="font-semibold">Authors:</span>{" "}
                  {paper.authors}
                </p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-500 hover:text-blue-700"
                >
                  Read Paper
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPapers;
