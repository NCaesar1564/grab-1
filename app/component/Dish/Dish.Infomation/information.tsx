import React from 'react'
import { FaStar } from 'react-icons/fa'


const information = ({ name, vote, price, quantity, note, Inc, Dec }: any) => {
    return (
        <div className='flex flex-col items-start justify-center gap-y-3'>
            <div className='flex flex-col gap-3 justify-center items-start not-lg:gap-26 not-lg:flex-row not-lg:items-center not-lg:justify-start'>
                <p className='text-3xl text-wrap'>{name}</p>
                <p className='flex items-center gap-1 text-xl'>{vote}<FaStar color='yellow' /></p>
            </div>
            <div>{note}</div>
            <div className='w-full p-3 bg-gray-100 text-red-500 font-semibold text-3xl'>{price} $</div>
            <div className='flex'>
                <button onClick={Dec} className={`px-3 border cursor-pointer ${quantity <= 1 ? 'text-gray-500 border-gray-200' : ''}`}>-</button>
                <p className='border border-gray-200 px-5 py-1'>{quantity}</p>
                <button onClick={Inc} className='px-3 border cursor-pointer'>+</button>
            </div>
        </div>
    )
}

export default information