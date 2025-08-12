import React from 'react'

const button = ({ name }: any) => {
    return (
        <>
            <button type='submit' className='w-full bg-[#396C03] h-[52px] size-[20px] font-bold text-[#FFFFFF] cursor-pointer'>{name}</button>
        </>
    )
}

export default button