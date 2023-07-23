import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../pages/Admission/Admission";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Colleges from "../pages/Colleges/Colleges";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details",
        element: <CollegeDetails></CollegeDetails>,
      },
    ],
  },
]);
