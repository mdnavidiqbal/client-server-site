import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddJobs() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "Web Development",
    summary: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to post a job");
      return;
    }

    // Prepare data to send
    const jobData = {
      ...formData,
      postedBy: user.displayName || "Anonymous",
      userEmail: user.email,
      postedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://freelance-market-place-iota.vercel.app/addjobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        toast.success("Job Posted Successfully!");
        setFormData({
          title: "",
          category: "Web Development",
          summary: "",
          coverImage: "",
        });

        // navigate("/all-jobs"); // redirect to all jobs page
      } else {
        toast.error("Failed to post job");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-lg my-5 mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Posted By (auto) */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Posted By
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          >
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data Science</option>
            <option>Digital Marketing</option>
            <option>Graphic Design</option>
            <option>Content Writing</option>
          </select>
        </div>

        {/* Summary */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* User Email (auto) */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            User Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Post Job
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

