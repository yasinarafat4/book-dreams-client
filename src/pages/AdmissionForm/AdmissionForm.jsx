import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://book-dreams-server.vercel.app/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const collegeData = useLoaderData();
  const { image, name } = collegeData;
  return (
    <div className="lg:pt-28">
      <Helmet>
        <title>BDreams | Admission Form</title>
      </Helmet>
      <div className="bg-gradient-to-r from-pink-100 to-sky-100 dark:from-slate-700 dark:to-slate-700 dark:text-slate-300">
        <h2 className="text-center lg:text-start text-3xl font-bold py-10 px-4 lg:px-8 text-[#2E5879] dark:text-slate-300">
          Admission on {name}
        </h2>
        <div className="grid grid-cols lg:grid-cols-2">
          <div className="w-full flex justify-center px-3">
            <figure>
              <img className="rounded py-4" src={image} alt="Album" />
            </figure>
          </div>
          <div className="w-full max-w-md mx-auto p-6">
            <h2 className="text-center text-2xl font-semibold py-4">
              Fill Out The Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="candidateName"
                  className=" text-sm font-medium text-gray-700"
                >
                  Candidate Name
                </label>
                <input
                  type="text"
                  {...register("candidateName", {
                    required: "Candidate Name is required",
                  })}
                  id="candidateName"
                  className={`mt-1 p-2  w-full rounded-md border ${
                    errors.candidateName ? "border-red-500" : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.candidateName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.candidateName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="candidateEmail"
                  className=" text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  {...register("candidateEmail", {
                    required: "Candidate Email is required",
                  })}
                  id="candidateEmail"
                  className={`mt-1 p-2  w-full rounded-md border ${
                    errors.candidateEmail ? "border-red-500" : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.candidateEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.candidateEmail.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <label
                    htmlFor="candidatePhoto"
                    className="text-sm font-medium text-gray-700"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    {...register("candidatePhoto", {
                      required: "Candidate Photo is required",
                    })}
                    id="candidatePhoto"
                    className={`mt-1 p-2 w-full rounded-md border ${
                      errors.candidatePhoto
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.candidatePhoto && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.candidatePhoto.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Phone"
                    className=" text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    {...register("phone", { required: "Number is required" })}
                    id="subject"
                    className={`mt-1 p-2 w-full rounded-md border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className=" text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  id="subject"
                  className={`mt-1 p-2  w-full rounded-md border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth", {
                      required: "Date of Birth is required",
                    })}
                    id="dateOfBirth"
                    className={`mt-1 p-2 w-full rounded-md border ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    } focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className=" text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    id="address"
                    className={`mt-1 p-2 w-full rounded-md border ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
