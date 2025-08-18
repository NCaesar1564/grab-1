import React from 'react'
import { FaStar } from 'react-icons/fa'

const list = ({ name, image, price, vote, href }: any) => {
    return (
        <a className='w-full p-0.5' href={`/Dish/${href}`}>
            <img src={image} alt={name} />
            <p className='truncate px-1'>{name}</p>
            <div className='flex items-center text-lg px-1'>
                <p className='w-1/2 flex justify-start items-center'>{price} $</p>
                <p className='w-1/2 flex justify-end items-center gap-1'>{vote}<FaStar color='yellow' className='brightness-95'/></p>
            </div>
        </a>
    )
}

export default list