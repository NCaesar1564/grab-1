import React from 'react'
import { BiSolidCartAdd } from 'react-icons/bi'

const AddToCard = ({addToCard}: any) => {
    return (
        <button className='border border-green-500 flex items-center gap-x-3 px-8 py-2 bg-green-50 text-green-500 text-xl cursor-pointer' onClick={addToCard}>
            <BiSolidCartAdd />
            Add To Cart
        </button>
    )
}   

export default AddToCard