import React from 'react'

const card = ({ icon, sNote, lNote }: any) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-1 px-24'>
                <div className='bg-[#396C03] p-2 rounded-[50%] text-white'>{icon}</div>
                <p className='font-bold text-center'>{lNote}</p>
                <p className='text-sm font-thin'>{sNote}</p>
            </div>
        </>
    )
}

export default card