import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((visible) => !visible);
  };
  return (
    <div>
      <Helmet>
        <title>BDreams | Register</title>
      </Helmet>

      <div className="card-body w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12 border 2xl:w-3/12 rounded-xl shadow-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Register Your Account
          </h2>

          {/* Social Login*/}
          <SocialLogin text={"Or Sign In with"}></SocialLogin>

          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Type Your Name"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
            />
            {errors.name && (
              <span className="text-red-700 font-semibold">
                Name is required! Please give your name.
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Email
              </span>
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="Enter Your Email"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
            />
            {errors.email && (
              <>
                {errors.email.type === "required" && (
                  <span className="text-red-700 font-semibold">
                    Email is required!
                  </span>
                )}
                {errors.email.type === "pattern" && (
                  <span className="text-red-700 font-semibold">
                    You must provide a valid email!
                  </span>
                )}
              </>
            )}
          </div>

          {/* Photo Url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              {...register("photoURL", {
                required: true,
                pattern: /^(ftp|http|https):\/\/[^ "]+$/,
              })}
              placeholder="Photo URL"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
            />
            {errors.photoURL && errors.photoURL.type === "required" && (
              <span className="text-red-700 font-semibold">
                Photo URL is required! Please provide a valid URL.
              </span>
            )}
          </div>

          {/* University Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                University
              </span>
            </label>
            <input
              type="text"
              {...register("university", { required: true })}
              placeholder="Enter Your University Name"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
            />
            {errors.name && (
              <span className="text-red-700 font-semibold">
                University is required! Please give your University name.
              </span>
            )}
          </div>

          {/* Address Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">
                Address
              </span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Your Current Address"
              className="input border-2 border-gray-400 focus:border-[#e84766]"
            />
            {errors.name && (
              <span className="text-red-700 font-semibold">
                Address is required! Please give your current address.
              </span>
            )}
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
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
              })}
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
            {errors.password && (
              <>
                {errors.password?.type === "required" && (
                  <span className="text-red-700 font-semibold">
                    Password is required!
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 font-semibold">
                    Your password must be at least 6 characters long!
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700 font-semibold">
                    Your password must not exceed 20 characters!
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 font-semibold">
                    Your password must have one uppercase, one lowercase, one
                    number and one special character!
                  </span>
                )}
              </>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Register"
              className="btn bg-[#0C8ED8] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-700 rounded-lg"
            />
          </div>
          <h3 className="font-medium mt-4">
            Already Have An Account?{" "}
            <Link to="/login">
              <span className="text-[#e84766] font-semibold">Login</span>
            </Link>{" "}
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Registration;
