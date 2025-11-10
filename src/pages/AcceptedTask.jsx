import { div } from 'framer-motion/client'
import React from 'react'
import { useLoaderData } from 'react-router'
import AcceptCard from '../components/AcceptCard';

const AcceptedTask = () => {
    const data = useLoaderData();
    console.log(data)

    return (

        <div className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    data.map(accept => <AcceptCard key={accept._id} accept={accept} />)
                }

            </div>

        </div>

    )
}

export default AcceptedTask
