import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
      setUniversity(user.university || "");
      setAddress(user.address || "");
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="py-24 lg:py-36 2xl:py-80 bg-gradient-to-r from-pink-100 to-sky-100 dark:from-slate-700 dark:to-slate-700">
      <img src={user?.photoURL} alt="User Photo" className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-2xl font-semibold text-center mt-4">{user?.displayName}</h2>
      <p className="text-center text-gray-500 dark:text-white"><span className="font-semibold">Email:</span> {user?.email}</p>
      <p className="text-center mt-2"><span className="font-semibold">Address:</span> {user?.address || "Dhaka, Bangladesh"}</p>
      <p className="text-center"><span className="font-semibold">University:</span>  {user?.university || "ABC University"}</p>
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 duration-700 px-4 py-2 rounded-md shadow-md mr-2"
          onClick={handleEditClick}
        >
          Edit Your Profile
        </button>
      </div>

      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white dark:bg-slate-700 rounded-md p-8 w-80">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border border-gray-300 dark:text-gray-400 px-3 py-2 mb-4 w-full rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-gray-300 dark:text-gray-400 px-3 py-2 mb-4 w-full rounded-md"
            />
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="University"
              className="border border-gray-300 dark:text-gray-400 px-3 py-2 mb-4 w-full rounded-md"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="border border-gray-300 dark:text-gray-400 px-3 py-2 mb-4 w-full rounded-md"
            />
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 duration-700 text-white px-4 py-2 rounded-md"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="bg-[#e84766] hover:bg-[#c51b3d] text-white duration-700 px-4 py-2 rounded-md ml-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
