import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const MyAddedJobs = () => {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, this job cannot be recovered!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`https://freelance-market-place-iota.vercel.app/addjobs/${id}`, {
                        method: 'DELETE',
                    });
                    const result = await res.json();

                    if (result.success) {
                        Swal.fire({
                            title: 'Deleted ✅',
                            text: 'The job has been successfully deleted!',
                            icon: 'success',
                            confirmButtonText: 'OK',
                        });
                        // Remove the job from the UI
                        setData((prev) => prev.filter((job) => job._id !== id));
                    } else {
                        Swal.fire({
                            title: 'Error ❌',
                            text: 'Failed to delete the job.',
                            icon: 'error',
                            confirmButtonText: 'OK',
                        });
                    }
                } catch (err) {
                    Swal.fire({
                        title: 'Server Error ⚠️',
                        text: 'There was a problem connecting to the server!',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            }
        });
    };


    return (
        <div className="p-10">
            {data.map(job => (
                <div
                    key={job._id}
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs mx-auto bg-gradient-to-r from-[#ff6e7f] to-[#753a88] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-3 sm:p-4 md:p-5"
                >
                    {/* Image Section */}
                    <div className="overflow-hidden flex justify-center">
                        <img
                            className="w-[120px] sm:w-[140px] md:w-[150px] h-[90px] sm:h-[100px] my-4 sm:my-5 object-contain"
                            src={job.coverImage}
                            alt=""
                        />
                    </div>

                    {/* Content Section */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 hover:text-purple-200 transition-colors duration-200 text-center sm:text-left">
                            {job.title}
                        </h3>
                        <p className="text-white text-sm sm:text-[15px] mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                            {job.summary}
                        </p>
                        <p className="pb-4 sm:pb-5 text-gray-200 text-sm">
                            Category : {job.category}
                        </p>

                        {/* Posted By */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold"></span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{job.postedBy}</p>
                                    <p className="text-xs text-gray-200">Startup.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col p-5 sm:flex-row sm:items-center sm:justify-between gap-3">
                        <Link
                            to={`/updatejob/${job._id}`}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Update
                        </Link>
                        <button
                            onClick={() => handleDelete(job._id)} // 🔥 এখানেই delete কাজ করছে
                            className="bg-gradient-to-r from-[#e35d5b] to-[#e53935] text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            <ToastContainer />
        </div>
    );
};

export default MyAddedJobs;
