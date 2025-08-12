import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Cart = ({ quality }: { quality: number }) => {
    return (
        <a href='/Cart' className='relative flex'>
            <HiOutlineShoppingBag size={25} />
            <p className={`w-3 h-3 rounded-[50%] flex justify-center items-center absolute -top-1 right-0 text-xs  bg-[#396C03] ${quality === 0 ? 'hidden' : ''}`}>{quality}</p>
        </a>
    )
}

export default Cart