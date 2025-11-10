import React from 'react'

const AcceptCard = ({accept}) => {
    const {title,postedBy,requirements} = accept
    return (
        <div className="w-full  my-10 sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {
                    title
                }
            </h2>

            {/* Posted by */}
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
                Posted by: <span className="font-semibold text-gray-700">{postedBy}</span>
            </p>

            {/* Job details */}
            <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed">
                {accept.requirements.slice(0, 5).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </p>

            {/* ✅ Done & Cancel (Radio buttons, only one selectable) */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="jobStatus"
                        value="done"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 accent-green-600"
                    />
                    <span className="text-sm sm:text-base font-medium text-gray-700">Done</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="jobStatus"
                        value="cancel"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 accent-red-600"
                    />
                    <span className="text-sm sm:text-base font-medium text-gray-700">Cancel</span>
                </label>
            </div>
        </div>
    )
}

export default AcceptCard
