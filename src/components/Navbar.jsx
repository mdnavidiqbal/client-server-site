// import React, { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthProvider";
// import { TbChartBarPopular } from "react-icons/tb";
// import { FaUser } from "react-icons/fa";
// import { ImHome } from "react-icons/im";
// import logo from '../assets/logo.png'
// import { title } from "framer-motion/client";
// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };

//   return (
//     <div className="navbar bg-[#825901] shadow-lg">
//       <div className="navbar-start">
//         <Link to="/" className="flex items-center gap-1.5 btn-ghost normal-case text-xl text-[#064e3b] font-bold"> <img className="w-10 h-10 rounded-3xl" src={"https://i.ibb.co.com/8g1DRGXJ/brand.png"} alt="" />NS TECH</Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <NavLink to="/" className="mx-2 text-[#064e3b] font-bold flex items-center gap-1"> <ImHome/> Home</NavLink>
//         <NavLink to="/myprofile" className="mx-2 text-[#064e3b] font-bold flex items-center gap-1"> <FaUser/> MyProfile</NavLink>
//         <NavLink to = "/all-jobs"  className="mx-2 text-[#064e3b] font-bold flex items-center gap-1">All Jobs</NavLink>
//         <NavLink to="/acceptedtask" className="mx-2 text-[#064e3b] font-bold flex items-center gap-1">Accepted Task</NavLink>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <div className="flex items-center gap-3">
//             <Link to="/myprofile" title="My Profile">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-all duration-200"
//               />
//             </Link>


//             <button onClick={handleLogout} className="btn btn-sm btn-outline bg-[#064e3b] text-white">
//               Logout
//             </button>
//           </div>
//         ) : (
//           <>
//             <Link to="/login" className="btn btn-sm btn-outline mr-2 bg-[#064e3b] text-white">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-sm bg-[#064e3b] text-white">
//               Register
//             </Link>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { TbChartBarPopular } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-[#825901] shadow-lg  transition-colors duration-300">
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-1.5 btn-ghost normal-case text-xl text-[#064e3b] font-bold dark:text-yellow-200"
        >
          <img
            className="w-10 h-10 rounded-3xl"
            src={"https://i.ibb.co.com/8g1DRGXJ/brand.png"}
            alt=""
          />
          NS TECH
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavLink
          to="/"
          className="mx-2 text-[#064e3b] font-bold flex items-center gap-1 dark:text-gray-200"
        >
          <ImHome /> Home
        </NavLink>
        <NavLink
          to="/myprofile"
          className="mx-2 text-[#064e3b] font-bold flex items-center gap-1 dark:text-gray-200"
        >
          <FaUser /> MyProfile
        </NavLink>
        <NavLink
          to="/all-jobs"
          className="mx-2 text-[#064e3b] font-bold flex items-center gap-1 dark:text-gray-200"
        >
          All Jobs
        </NavLink>
        <NavLink
          to="/acceptedtask"
          className="mx-2 text-[#064e3b] font-bold flex items-center gap-1 dark:text-gray-200"
        >
          Accepted Task
        </NavLink>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/myprofile" title="My Profile">
              <img
                src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-all duration-200"
              />
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline bg-[#064e3b] text-white dark:bg-purple-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm btn-outline mr-2 bg-[#064e3b] text-white dark:bg-purple-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm bg-[#064e3b] text-white dark:bg-purple-600"
            >
              Register
            </Link>
          </>
        )}

        {/* 🌙 Dark/Light Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-200"
          title="Toggle Dark Mode"
        >
          {darkMode ? (
            <span className="text-yellow-400 text-lg">☀️</span>
          ) : (
            <span className="text-gray-800 text-lg">🌙</span>
          )}
        </button>
      </div>
    </div>
  );
}


