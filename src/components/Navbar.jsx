import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/", icon: <ImHome /> },
    { name: "MyProfile", to: "/myprofile", icon: <FaUser /> },
    { name: "All Jobs", to: "/all-jobs" },
    { name: "Accepted Task", to: "/acceptedtask" },
    { name: "My Added Job", to: "/myaddedjob" },
  ];

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
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <div className="bg-[#825901] shadow-lg transition-colors duration-300 flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xl font-bold text-[#064e3b] dark:text-yellow-200"
        >
          <img
            className="w-10 h-10 rounded-3xl"
            src="https://i.ibb.co/8g1DRGXJ/brand.png"
            alt="logo"
          />
          NS TECH
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className="flex items-center gap-1 font-bold text-[#064e3b] dark:text-gray-200"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {user && (
            <img
              src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}

          {/* Dark mode */}
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

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-64 bg-gradient-to-b from-[#3b8d99] via-[#6b6b83] to-[#aa4b6b] shadow-lg z-50 p-6 flex flex-col gap-4 transition-transform duration-300"
          style={{ height: "auto" }}
        >
          {/* Close button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <HiX
              className="text-2xl text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Nav Items */}
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white font-semibold py-2 px-3 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          {/* Logout */}
          {user && (
            <button
              onClick={handleLogout}
              className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}
