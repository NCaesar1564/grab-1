import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const link = ({ name }: any) => {
    return (
        <div className='flex justify-start items-center bg-transparent text-sm py-2 '>
            <a href='/' className='text-blue-700'>Dish</a>
            <MdOutlineKeyboardArrowRight size={20} color='gray'/>
            <p className='text-blue-700'>{name}</p>
        </div>
    )
}

export default link