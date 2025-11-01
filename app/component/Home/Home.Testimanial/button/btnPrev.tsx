import React from 'react'
import { GoArrowLeft } from 'react-icons/go'

const btnPrev = ({ prev }: any) => {
    return (
        <div className='w-[42px] h-[42px] border rounded-[50%] bg-[#396C03] text-white p-1 cursor-pointer flex justify-center items-center' onClick={prev}>
            <GoArrowLeft size={25} />
        </div>
    )
}

export default btnPrev