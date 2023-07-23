import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((visible) => !visible);
  };
 
  return (
    <div className="py-14">
      <Helmet>
        <title>BDreams | Login</title>
      </Helmet>

      <div className="card-body w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12 border 2xl:w-3/12 rounded-xl shadow-xl mx-auto">
        <form>
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} className="w-28 lg:w-40" alt="Logo" />
            </Link>
            <Link to="/">
              <p className="text-end underline font-semibold tracking-[-.2px] hover:text-[#e84766] duration-500">
                Back To Home
              </p>
            </Link>
          </div>
          <h2 className="text-3xl font-semibold text-gray-600 dark:text-white my-6">
            Login to Your Account
          </h2>

          {/* Social Login*/}
          <SocialLogin text={"Or Sign In with"}></SocialLogin>
          
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Password
              </span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
              required
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-gray-500" />
              ) : (
                <FiEye className="text-gray-500" />
              )}
            </div>
          </div>

          {/* <p className="text-red-600 text-sm m-1 font-semibold">{error}</p> */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-[#0C8ED8] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-700 rounded-lg"
            />
          </div>
          <h3 className="font-medium mt-4">
            Have Not Any Account?{" "}
            <Link to="/register">
              <span className="text-[#e84766] font-semibold">Register</span>
            </Link>{" "}
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
