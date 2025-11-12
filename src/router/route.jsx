

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Mainlayout from "../Mainlayout/Mainlayout";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../components/PrivateRoute";
import AcceptedTask from "../pages/AcceptedTask";
import AddJobs from "../pages/AddJobs";
import MyAddedJobs from "../pages/MyAddedJobs";
import UpdateJob from "../pages/UpdateJob";
import UpdateProfile from "../pages/UpdateProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://freelance-market-place-iota.vercel.app/all-jobs')
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
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/all-jobs',
        element: <AllJobs />,
        loader: () => fetch('https://freelance-market-place-iota.vercel.app/all-jobs')
      },
      {
        path: '/jobdetails/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://freelance-market-place-iota.vercel.app/all-jobs/${params.id}`)
      },
      {
        path: '/acceptedtask',
        element: <PrivateRoute><AcceptedTask /></PrivateRoute>,
        loader: () => fetch('https://freelance-market-place-iota.vercel.app/accepted')
      },
      {
        path: '/addjobs',
        element: <PrivateRoute><AddJobs /></PrivateRoute>
      },
      {
        path: '/myaddedjob',
        element: <PrivateRoute><MyAddedJobs /></PrivateRoute>,
        loader: () => fetch('https://freelance-market-place-iota.vercel.app/addjobs')
      },
      {
        path: '/updatejob/:id',
        element: <PrivateRoute><UpdateJob /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://freelance-market-place-iota.vercel.app/addjobs/${params.id}`)
      },


    ]
  },
]);