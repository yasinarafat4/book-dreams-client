import { useContext, useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const { user, logOut } = useContext(AuthContext);

  // Logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
        className={`lg:fixed lg:w-full lg:transition-transform duration-300 z-20 shadow-lg ${
          isNavbarVisible ? "lg:translate-y-0" : "lg:translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-2 md:px-8 md:py-4 bg-white bg-gradient-to-r from-pink-100 to-sky-100 dark:from-slate-700 dark:to-slate-700">
          <Link to="/">
            <div>
              <img src={logo} className="w-40 lg:w-48" alt="Logo" />
            </div>
          </Link>
          <div
            className={`absolute lg:static bg-[#f3ebed] dark:bg-slate-700 dark:text-white min-h-[45vh] lg:min-h-fit left-0 ${
              isMenuOpen ? "top-[16%] md:top-[19%]" : "top-[-100%]"
            } z-20 w-full lg:w-auto flex items-center px-5 duration-700 shadow-lg lg:shadow-none`}
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
                to="/colleges"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                  Colleges
                </p>
              </NavLink>
              <NavLink
                to="/admission"
                className={({ isActive }) =>
                  isActive ? "text-[#e84766]" : "text-slate-700 dark:text-white"
                }
              >
                <p className="hover:text-[#e84766] font-medium hover:duration-500">
                  Admission
                </p>
              </NavLink>
              <NavLink
                to="/myCollege"
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
                    className="text-xl md:text-2xl dark:text-white cursor-pointer"
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

            {user ? (
              <>
                {" "}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div title="User" className="w-8 md:w-10 rounded-full">
                      <img
                        title={user?.displayName || "User"}
                        src={user.photoURL || "https://picsum.photos/200/300"}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gradient-to-r from-pink-200 to-sky-200 dark:from-slate-700 dark:to-slate-700"
                  >
                    <Link to="/profile">
                      <li>
                        <a className="justify-start text-base font-medium">
                          <CgProfile className="text-lg" />
                          Profile
                        </a>
                      </li>
                    </Link>
                    <Link to="/">
                      <li>
                        <a
                          onClick={handleLogOut}
                          className="justify-start text-base font-medium"
                        >
                          <TbLogout className="text-xl" />
                          Logout
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-[#0C8ED8] hover:bg-[#e84766] text-white px-3 py-1 text-sm md:text-base md:px-5 md:py-2 duration-500 rounded-full">
                    Login
                  </button>
                </Link>
              </>
            )}

            {isMenuOpen ? (
              <IoMdClose
                onClick={onToggleMenu}
                className="text-xl md:text-2xl dark:text-white cursor-pointer lg:hidden"
              />
            ) : (
              <FiMenu
                onClick={onToggleMenu}
                className="text-xl md:text-2xl dark:text-white cursor-pointer lg:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
