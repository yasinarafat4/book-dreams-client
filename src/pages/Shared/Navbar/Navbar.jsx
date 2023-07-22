import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  // Menu toggle functionality
  const onToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen ? "Closed" : "Opened");
  };

  // Dark Or Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark Or Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setNavbarVisible(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`lg:fixed lg:w-full lg:transition-transform duration-300 z-10 shadow-lg ${
          isNavbarVisible ? "lg:translate-y-0" : "lg:translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-2 md:px-8 md:py-4 bg-white dark:bg-slate-700">
          <Link to="/">
            <div>
              <img src={logo} className="w-28 lg:w-36" alt="Logo" />
            </div>
          </Link>
          <div
            className={`absolute lg:static bg-white dark:bg-slate-700 dark:text-white min-h-[60vh] lg:min-h-fit left-0 ${
              isMenuOpen ? "top-[19%] md:top-[22%]" : "top-[-100%]"
            } w-full lg:w-auto flex items-center px-5 duration-700 z-10 shadow-lg lg:shadow-none`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-[3vw] lg:gap-[2vw] xl:gap-[3vw] text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                  Home
                </p>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Colleges
                </p>
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                Admission
                </p>
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                  My College
                </p>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-[1vw]">
            <div>
              {isDarkMode ? (
                <div className="text-xl" onClick={handleThemeSwitch}>
                  <BsSun
                    title="Make Light"
                    className="text-xl md:text-2xl cursor-pointer"
                  />
                </div>
              ) : (
                <div className="text-xl" onClick={handleThemeSwitch}>
                  <BsMoonStars
                    title="Make Dark"
                    className="text-xl md:text-2xl cursor-pointer"
                  />
                </div>
              )}
            </div>
            <Link to="/login">
              <button className="bg-[#38B6FF] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-full">
                Login
              </button>
            </Link>
            {isMenuOpen ? (
              <IoMdClose
                onClick={onToggleMenu}
                className="text-xl md:text-2xl cursor-pointer lg:hidden"
              />
            ) : (
              <FiMenu
                onClick={onToggleMenu}
                className="text-xl md:text-2xl cursor-pointer lg:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
