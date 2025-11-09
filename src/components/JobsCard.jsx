import React from 'react'
import { Link } from 'react-router'

const JobsCard = ({ job }) => {
  const { title, postedBy, category, summary,
    coverImage, userEmai, _id } = job

  return (
    <div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Section  */}
      <div class="relative overflow-hidden">
        <img className='w-full h-[220px]' src={coverImage} alt="" />
        {/* Category Badge  */}
        <div class="absolute top-3 left-3">

        </div>
      </div>

      {/* Content Section  */}
      <div class="p-6">
        {/* Title  */}
        <h3 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-purple-600 transition-colors duration-200">
          {
            title
          }
        </h3>

        {/* Summary  */}
        <div>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {
              job.summary
            }
          </p>
          <p className='pb-7'>
            {
              category
            }
          </p>
        </div>

        {/* Posted By  */}
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-bold"></span>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-700">{job.postedBy}</p>
              <p class="text-xs text-gray-500">Startup.com</p>
            </div>
          </div>
        </div>

        {/* Action Buttons  */}
        <div class="flex space-x-3">
          <Link to={`/jobdetails/${_id}`} className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg btn btn-primary">Details</Link>
          <button class="w-12 h-12 bg-gray-100 hover:bg-green-50 border border-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 group">
            <svg class="w-5 h-5 text-gray-600 group-hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Footer  */}
      <div class="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <div class="flex justify-between items-center text-xs text-gray-500">
          <span>📍 Remote</span>
          <span>⏰ Full-time</span>
        </div>
      </div>
    </div>
  )
}

export default JobsCard
