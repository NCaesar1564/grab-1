import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const btnNext = ({ next }: any) => {
    return (
        <div className='border rounded-[50%] bg-[#396C03] text-white p-1 cursor-pointer' onClick={next}>
            <GoArrowRight size={25} />
        </div>
    )
}


export default btnNext