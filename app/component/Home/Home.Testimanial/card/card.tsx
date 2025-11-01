import Image from 'next/image'
import React from 'react'

const card = ({ uid, name, anotherName, avatar, comment }: any) => {
    return (
        <div className=' h-[350px] w-[650px] not-lg:w-[350px] flex flex-col justify-center items-center gap-10 shadow-[0, 0, 1px, 1px] px-5 rounded-2xl lg:py-16 not-lg:py-5 z-0' style={{ boxShadow: '0 0 5px rgba(0,0,0,0.5)' }}>
            <div className='flex justify-center items-center gap-2'>
                <Image height={800} width={800} alt={uid} src={avatar} className='h-10 w-10 rounded-[50%]' />
                <span className='flex flex-col'>
                    <p className='font-bold'>{name}</p>
                    <p className='font-thin text-xs'>{anotherName}</p>
                </span>
            </div>
            <div className='w-[]'>
                <p className='w-[550px] not-lg:w-[250px] not-lg:text-xs text-justify'>{comment}</p>
            </div>
        </div>
    )
}

export default card