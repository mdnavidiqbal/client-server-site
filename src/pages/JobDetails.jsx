
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const data = useLoaderData();
    const details = data.result;
    const [isAccepted, setIsAccepted] = useState(false); // ✅ track if job is accepted
    const handleAccept = async (e) => {
        e.preventDefault();
        const formatData = details;

        try {
            const res = await fetch('http://localhost:3000/accepted', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formatData)
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                toast.success(data.message || "Job accepted successfully!");
                setIsAccepted(true); // ✅ disable button after success
            } else {
                toast.error(data.message || "This job is already accepted!");

            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="card shadow-lg bg-white rounded-xl overflow-hidden w-[450px] my-20 mx-auto">
            <div className="flex h-full">
                <div className="card-body w-full p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="card-title text-2xl font-bold text-gray-900 mb-2">
                            {details.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="font-medium">Posted by: {details.postedBy}</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                                {details.category}
                            </span>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {details.requirements.slice(0, 5).map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-3">Job Details:</h4>
                        <div className="grid grid-rows-1 gap-1 text-gray-700">
                            <div className="flex gap-1">
                                <span className="font-medium">Job Type:</span>
                                <p>{details.additionalInfo.jobType}</p>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-medium">Location:</span>
                                <p>{details.additionalInfo.location}</p>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-medium">Salary:</span>
                                <p>{details.additionalInfo.salaryRange}</p>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-medium">Benefits:</span>
                                <p>{details.additionalInfo.benefits.slice(0, 2).join(', ')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleAccept}
                            disabled={isAccepted} // ✅ disable button if already accepted
                            className={`flex-1 bg-gradient-to-r from-purple-500 to-pink-500 
                                hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 
                                rounded-lg font-semibold text-sm transition-all duration-200 transform 
                                hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isAccepted ? "Accepted" : "Accept"}
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;

