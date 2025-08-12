import Image from 'next/image'
import React from 'react'

const card = ({ uid, name, anotherName, avatar, comment, defaultImage }: any) => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 shadow-[0, 0, 1px, 1px] px-5 z-10 rounded-2xl
        md:py-16 
        not-md:py-5' style={{ boxShadow: '0 0 5px rgba(0,0,0,0.5)' }}>
            <div className='flex justify-center items-center gap-2'>
                <Image height={800} width={800} alt={uid} src={avatar || defaultImage} className='h-10 w-10 rounded-[50%]' />
                <span className='flex flex-col'>
                    <p className='font-bold'>{name}</p>
                    <p className='font-thin text-xs'>{anotherName}</p>
                </span>
            </div>
            <p className='text-center not-md:text-xs'>{comment}</p>
        </div>
    )
}

export default card