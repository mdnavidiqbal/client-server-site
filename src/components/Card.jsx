import React from 'react'

const Card = ({ job }) => {
    const { title, requirements } = job
    return (
        <div className="w-[250px] mx-auto bg-gradient-to-r from-[#414d0b] to-[#727a17] rounded-xl overflow-hidden shadow-lg">
            {/* Card Title */}
            <div className="p-4 ">
                <h2 className="text-white text-lg font-bold">{title}</h2>
            </div>

            {/* Card Image */}
            <div className="w-[240px] mx-auto my-4 h-48 overflow-hidden rounded-sm bg-gradient-to-r from-[#799F0C] to-[#ACBB78]">
                <ul className="list-disc list-inside my-4 mx-2 text-gray-700">
                    {job.requirements.slice(0, 3).map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card
