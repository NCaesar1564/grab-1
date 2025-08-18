import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const ShowMoreButton = ({ ShowMore, max }: any) => {
  return (
    <button onClick={ShowMore} className={`flex justify-center items-center gap-2 border px-1 py-2 bg-[#396C03] rounded-4xl cursor-pointer  ${max ? 'hidden' : 'flex'}`}>
      <p className='text-white px-1 text-lg '>See More Product</p>
      <MdOutlineKeyboardArrowRight className='border rounded-[50%] bg-white text-black' size={35} />
    </button>
  )
}

export default ShowMoreButton