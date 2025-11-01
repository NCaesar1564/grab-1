import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const ShowMoreButton = ({ onClick, max }: any) => {
  return (
    <button onClick={onClick} className={`flex justify-center items-center gap-2 border px-1 py-2 bg-[#396C03] rounded-4xl cursor-pointer ${max ? 'brightness-75': ''}`} disabled={max}>
      {max ? <p className='text-white text-lg px-5'>There are all</p> : <p className={`text-white px-1 text-lg `}>See More Product</p>}
      <MdOutlineKeyboardArrowRight className={`border rounded-[50%] bg-white text-black ${max ? 'hidden' : 'flex'}`} size={35} />
    </button>
  )
}

export default ShowMoreButton