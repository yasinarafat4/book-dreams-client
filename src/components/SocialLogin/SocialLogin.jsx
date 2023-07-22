import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({text}) => {
    return (
        <div>
            <div className="flex justify-center items-center gap-4">
              <button className="flex justify-center items-center w-6/12 border border-gray-400 rounded-md py-2 text-base font-semibold text-gray-600 dark:text-white duration-500">
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