// import React from 'react'
// import { useLoaderData } from 'react-router'
// import AcceptCard from '../components/AcceptCard';

// const AcceptedTask = () => {
//     const data = useLoaderData();
//     console.log(data)

//     return (

//         <div className='p-1 w-full'>
//             <div className='w-full'>
//                 {
//                     data.map(accept => <AcceptCard key={accept._id} accept={accept} />)
//                 }

//             </div>

//         </div>

//     )
// }

// export default AcceptedTask

// Eita Main

import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AcceptCard from '../components/AcceptCard';

const AcceptedTask = () => {
    const loaderData = useLoaderData(); // data from backend
    const [acceptedList, setAcceptedList] = useState([]);

    useEffect(() => {
        setAcceptedList(loaderData || []);
    }, [loaderData]);

    return (
        <div className='p-1 w-full'>
            <div className='w-full'>
                {acceptedList.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">No accepted tasks found.</p>
                ) : (
                    acceptedList.map(accept => (
                        <AcceptCard 
                            key={accept._id} 
                            accept={accept} 
                            acceptedList={acceptedList} 
                            setAcceptedList={setAcceptedList} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AcceptedTask;


