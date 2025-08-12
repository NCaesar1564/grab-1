import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const ShowMoreButton = ({ ShowMore, max }: any) => {
  return (
    <div>
      <button onClick={ShowMore} className={`flex justify-center items-center gap-2 border py-2 bg-[#396C03] rounded-3xl cursor-pointer  ${max ? 'hidden' : 'flex'}`}>
        <p className='text-white px-1 text-lg '>See More Product</p>
        <MdOutlineKeyboardArrowRight className='border rounded-[50%] bg-white text-black' size={35} />
      </button>
    </div>
  )
}

export default ShowMoreButton