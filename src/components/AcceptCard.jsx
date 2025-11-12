import React from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const AcceptCard = ({ accept, acceptedList, setAcceptedList }) => {
    const { title, postedBy, requirements } = accept;
    const navigate = useNavigate();

    const handleSucesfull = () => {
        toast.success("Successfully Received Your Application");
    };

    const handleDeleted = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://freelance-market-place-iota.vercel.app/accepted/${accept._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate('/all-jobs');
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong. Please try again.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className="w-11/12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto my-6 bg-gradient-to-r from-[#8360c3] to-[#2ebf91] shadow-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 mb-3">
                Posted by: <span className="font-semibold text-gray-700">{postedBy}</span>
            </p>

            <ul className="text-sm sm:text-base md:text-base text-gray-700 mb-5 leading-relaxed list-disc list-inside">
                {requirements?.slice(0, 5).map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <button
                    onClick={handleSucesfull}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Done
                </button>
                <button
                    onClick={handleDeleted}
                    className="bg-gradient-to-r from-[#e35d5b] to-[#e53935] hover:from-[#e15c5a] hover:to-[#e02e2d] text-white py-2 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Cancel
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AcceptCard;



