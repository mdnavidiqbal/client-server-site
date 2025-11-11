// import React from 'react'
// import Swal from 'sweetalert2';

// const AcceptCard = ({ accept }) => {
//     const { title, postedBy, requirements} = accept
//     const handleSucesfull = (e) => {
//         e.preventDefault();
//         alert("Sucessfully Recived Your Application")
//     }

//     const handleDeleted = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 fetch(`http://localhost:3000/accepted/${accept._id}`, {
//                     method: "DELETE",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success"
//                         });
//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//             }
//         });
//     }

//     return (
//         <div className="w-full  my-10 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
//             {/* Title */}
//             <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                 {
//                     title
//                 }
//             </h2>

//             {/* Posted by */}
//             <p className="text-xs sm:text-sm text-gray-500 mb-3">
//                 Posted by: <span className="font-semibold text-gray-700">{postedBy}</span>
//             </p>

//             {/* Job details */}
//             <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
//                 {/* {accept.requirements.slice(0, 5).map((requirement, index) => (
//                 <li key={index}>{requirement}</li>
//               ))} */}
//             </p>

//             {/* ✅ Done & Cancel (Radio buttons, only one selectable) */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                 <button onClick={handleSucesfull} className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg'>Done</button>
//                 <button onClick={handleDeleted} className='bg-gradient-to-r from-[#e35d5b] to-[#e53935]  text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg'>Cancel</button>
//             </div>
//         </div>
//     )
// }

// export default AcceptCard

// Eita main
import React from 'react';
import Swal from 'sweetalert2';

const AcceptCard = ({ accept, acceptedList, setAcceptedList }) => {
    const { title, postedBy, requirements } = accept;

    const handleSucesfull = () => {
        alert("✅ Successfully Received Your Application");
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
                fetch(`http://localhost:3000/accepted/${accept._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Remove from UI
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
        <div className="w-full my-10 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
                Posted by: <span className="font-semibold text-gray-700">{postedBy}</span>
            </p>

            <ul className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed list-disc list-inside">
                {requirements?.slice(0, 5).map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <button onClick={handleSucesfull} className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg'>
                    Done
                </button>
                <button onClick={handleDeleted} className='bg-gradient-to-r from-[#e35d5b] to-[#e53935] text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg'>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AcceptCard;



