import React from 'react'
import Image from 'next/image'
import Image404 from '@/public/images/Illustration.png'

const image = () => {
    return (
        <div className='w-full min-h-[30em] flex justify-center items-center'>
            <div className='w-[30em] h-[20em] flex  flex-col justify-center items-center gap-y-5'>
                <Image height={800} width={800} alt='Not Found' src={Image404} className='w-[30em] h-[20em]' />
                <div className='flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='text-3xl'>Oops!page not found</h1>
                    <p className='text-center text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. eos praesentium minus repellat</p>
                    <a href="/" className="font-bold text-white bg-[#396C03] px-10 py-3 rounded-3xl">Back To Home</a>
                </div>
            </div>
        </div>
    )
}

export default image