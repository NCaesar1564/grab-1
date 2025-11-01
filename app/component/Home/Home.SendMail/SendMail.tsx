import React from 'react'
import image from '@/public/images/burger_sandwich_PNG4135.png'
import Input from './input/input'
import Note from './note'
import Image from 'next/image'
const SendMail = () => {
    return (
        <div className='w-[1300px] h-[300px] not-lg:w-[400px] flex justify-center my-15 '>
            <div className='w-[1300px] h-full not-lg:w-[400px] bg-black rounded-4xl flex justify-end items-center pr-23 relative'>
                <div className='absolute w-[600px] h-[600px] left-0 -top-[125px]'>
                    <Image height={800} width={800} alt='Image' src={image} className='not-lg:hidden h-full w-full [image-rendering:pixelated]' />
                </div>
                <div className='flex flex-col items-start justify-center gap-y-5 not-lg:w-full not-lg:px-10'>
                    <Note />
                    <Input />
                </div>
            </div>
        </div>
    )
}

export default SendMail
