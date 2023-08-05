import React from "react";

const TabularCollegeInfo = ({ studentInfo }) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th className="bg-[#e84766] text-white">#</th>
              <th className="bg-[#e84766] text-white">Candidate Image</th>
              <th className="bg-[#e84766] text-white">Candidate Name</th>
              <th className="bg-[#e84766] text-white">Candidate Email</th>
              <th className="bg-[#e84766] text-white">Address</th>
              <th className="bg-[#e84766] text-white">Date of Birth</th>
              <th className="bg-[#e84766] text-white">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {studentInfo.map((info, index) => (
              <tr key={info._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://picsum.photos/500/500" alt="Avatar" />
                    </div>
                  </div>
                </td>
                <td>{info.candidateName}</td>
                <td>{info.candidateEmail}</td>
                <td>{info.address}</td>
                <td>{info.dateOfBirth}</td>
                <td>{info.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabularCollegeInfo;
