import React from 'react'
import { FaPlay } from 'react-icons/fa'

const OrderProcess = () => {
    return (
        <>
            <a href="/" className='flex justify-center items-center gap-3'>
                <p className='border border-gray-100 shadow-md shadow-blue-100 rounded-[50%] w-16 h-16 flex justify-center items-center'>
                    <FaPlay size={30} color='#396C03' />
                </p>
                <p className='font-bold text-lg'>Order Process</p>
            </a>
        </>
    )
}

export default OrderProcess