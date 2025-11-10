// import React from 'react'
// import { Link, useLoaderData } from 'react-router'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const JobDetails = () => {
//   const data = useLoaderData()
//   const details = data.result
//   console.log(details)

//   const handleAccept = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/accepted', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(details)
//       })

//       const data = await response.json()
//       console.log('Inserted:', data)

//       toast.success('✅ Job Accepted Successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true
//       })
//     } catch (error) {
//       console.error('Error inserting job:', error)
//       toast.error('❌ Failed to accept job!')
//     }
//   }

//   return (
//     <div className="card shadow-lg bg-white rounded-xl overflow-hidden w-[450px] my-20 mx-auto">
//       <div className="flex h-ful">
//         <div className="card-body w-full p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="card-title text-2xl font-bold text-gray-900 mb-2">
//               {details.title}
//             </h3>
//             <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//               <span className="font-medium">Posted by: {details.postedBy}</span>
//               <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
//                 {details.category}
//               </span>
//             </div>
//           </div>

//           <div className="flex-grow">
//             <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               {details.requirements.slice(0, 5).map((requirement, index) => (
//                 <li key={index}>{requirement}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-4 pt-4 border-t border-gray-200">
//             <h4 className="font-semibold text-gray-800 mb-3">Job Details:</h4>
//             <div className="grid grid-rows-1 gap-1 text-gray-700">
//               <div className="flex gap-1">
//                 <span className="font-medium">Job Type:</span>
//                 <p>{details.additionalInfo.jobType}</p>
//               </div>
//               <div className="flex gap-1">
//                 <span className="font-medium">Location:</span>
//                 <p>{details.additionalInfo.location}</p>
//               </div>
//               <div className="flex gap-1">
//                 <span className="font-medium">Salary:</span>
//                 <p>{details.additionalInfo.salaryRange}</p>
//               </div>
//               <div className="flex gap-1">
//                 <span className="font-medium">Benefits:</span>
//                 <p>{details.additionalInfo.benefits.slice(0, 2).join(', ')}</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6">
//             <Link
//               onClick={handleAccept}
//               className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg btn btn-primary"
//             >
//               Accept
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 এখানে ToastContainer অবশ্যই রাখতে হবে */}
//       <ToastContainer />
//     </div>
//   )
// }

// export default JobDetails

import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JobDetails() {
  const { id } = useParams(); // gameDetails এর মতো dynamic id
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);

  // 🔐 Login check logic (GameDetails থেকে নেওয়া)
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { from: `/jobs/${id}` } });
    }
  }, [user, loading, navigate, id]);

  // 🎯 Backend থেকে specific job fetch করা
  useEffect(() => {
    fetch(`http://localhost:3000/alljobs/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.result))
      .catch((err) => console.error("Error loading job:", err));
  }, [id]);

  if (loading)
    return <div className="text-center py-10 text-gray-500">Checking login...</div>;

  if (!user) return null;

  if (!details)
    return (
      <div className="text-center py-10 text-gray-500">
        Loading job details...
      </div>
    );

  // ✅ Job accept handler (same as before)
  const handleAccept = async () => {
    try {
      const response = await fetch("http://localhost:3000/accepted", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const data = await response.json();
      console.log("Inserted:", data);

      toast.success("✅ Job Accepted Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error inserting job:", error);
      toast.error("❌ Failed to accept job!");
    }
  };

  // 🎨 UI (same design, but GameDetails-এর structure ব্যবহার করা হয়েছে)
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">{details.title}</h1>
      <img
        src={details.image || details.banner || "https://via.placeholder.com/800x400"}
        alt={details.title}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />

      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        {details.description}
      </p>

      <p className="mt-4 flex flex-wrap items-center gap-2 text-gray-600">
        <span>👤 Posted by: {details.postedBy}</span> •
        <span>📂 Category: {details.category}</span> •
        <span>💼 Type: {details.additionalInfo?.jobType}</span>
      </p>

      <div className="mt-6 text-gray-700">
        <h4 className="font-semibold text-xl mb-2">Requirements:</h4>
        <ul className="list-disc list-inside space-y-2">
          {details.requirements?.slice(0, 5).map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-gray-700">
        <h4 className="font-semibold text-xl mb-2">Job Details:</h4>
        <div className="grid gap-2">
          <p>
            <span className="font-medium">📍 Location:</span>{" "}
            {details.additionalInfo?.location}
          </p>
          <p>
            <span className="font-medium">💰 Salary:</span>{" "}
            {details.additionalInfo?.salaryRange}
          </p>
          <p>
            <span className="font-medium">🎁 Benefits:</span>{" "}
            {details.additionalInfo?.benefits?.slice(0, 2).join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          onClick={handleAccept}
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Accept Job
        </Link>
      </div>

      <ToastContainer />
    </div>
  );
}
