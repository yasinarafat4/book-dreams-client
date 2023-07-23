import React, { useContext, useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = ({text}) => {
  const [error, setError] = useState("");
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

// Google Signin
  const handleGoogleSignIn = () => {
    setError("");
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

    return (
        <div>
            <div className="flex justify-center items-center gap-4">
              <button onClick={handleGoogleSignIn} className="flex justify-center items-center w-6/12 border border-gray-400 rounded-md py-2 text-base font-semibold text-gray-600 dark:text-white duration-500">
                <FcGoogle className="mr-2 text-2xl" />
                <span>Google</span>
              </button>
              <button className="flex justify-center items-center w-6/12 border border-gray-400 rounded-md py-2 text-base font-semibold text-gray-600 dark:text-white duration-500">
                <BsGithub className="mr-2 text-xl text-gray-900" />
                <span>GitHub</span>
              </button>
            </div>
            <div className="flex flex-col w-full">
              <div className="divider h-10 text-base">{text}</div>
            </div>
          </div>
    );
};

export default SocialLogin;