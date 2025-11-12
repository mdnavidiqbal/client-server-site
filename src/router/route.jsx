

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Mainlayout from "../Mainlayout/Mainlayout";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Popular from "../pages/Popular";
import UpdateProfile from "../pages/UpdateProfile";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../components/PrivateRoute";
import AcceptedTask from "../pages/AcceptedTask";
import AddJobs from "../pages/AddJobs";
// import GameDetails from "../pages/GameDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:3000/all-jobs')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/notfound",
        element: <NotFound></NotFound>
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>
      },
      // {
      //   path: "/gamedetails/:id",
      //   element:<GameDetails></GameDetails>

      // },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/all-jobs',
        element: <AllJobs />,
        loader: () => fetch('http://localhost:3000/all-jobs')
      },
      {
        path: '/jobdetails/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      },
      {
        path:'/acceptedtask',
        element:<PrivateRoute><AcceptedTask/></PrivateRoute>,
        loader: () => fetch('http://localhost:3000/accepted')
      },
      {
        path:'/addjobs',
        element:<AddJobs/>
      }
    ]
  },
]);