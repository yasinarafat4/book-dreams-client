// src/Reviews.js

import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <>
      <SectionTitle heading={"Reviews"}></SectionTitle>
      <div className="py-12 bg-gray-100 dark:bg-slate-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white dark:bg-slate-700 shadow-lg p-6 rounded-lg text-center"
              >
                <p className="dark:text-white text-gray-600 mb-4 italic">{review.review}</p>
                <img
                  src={review.image}
                  className="w-2/6 h-[105px] lg:h-[95px] xl:h-[120px] rounded-full mb-4 mx-auto"
                />
                <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-400 flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 fill-current ${
                          index < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0l2.46 6.3 6.63.19-5.05 3.9 1.84 6.71-5.88-4.55-5.88 4.54 1.85-6.71L.91 6.5l6.63-.2L10 0z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-white">
                    ({review.rating.toFixed(1)})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
