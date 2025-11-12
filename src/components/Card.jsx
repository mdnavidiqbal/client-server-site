import React from 'react'

const Card = ({ job }) => {
    const { title, requirements, category, coverImage } = job
    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs mx-auto bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-3 sm:p-4 md:p-5">

            {/* Image Section */}
            <div className="overflow-hidden flex justify-center">
                <img
                    className="w-[120px] sm:w-[140px] md:w-[150px] h-[90px] sm:h-[100px] my-4 sm:my-5 object-contain"
                    src={coverImage}
                    alt={title}
                />
            </div>

            {/* Content Section */}
            <div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 hover:text-purple-200 transition-colors duration-200 text-center sm:text-left">
                    {title}
                </h3>

                {/* Summary */}
                <p className="text-white text-sm sm:text-[15px] mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                    {job.summary}
                </p>

                <p className="pb-4 sm:pb-5 text-gray-200 text-sm">Category : {category}</p>

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
        </div>



    )
}

export default Card
