import React from 'react'
import image from '@/public/images/burger_sandwich_PNG4135.png'
import Input from './input/input'
import Note from './note'
import Image from 'next/image'
const SendMail = () => {
    return (
        <div className='w-full flex justify-center my-30 h-[18em]'>
            <div className=' bg-black rounded-4xl flex justify-end items-center relative
            md:w-[80%]
            not-md:w-[90%]'>
                <Image height={800} width={800} alt='Image' src={image} className='absolute left-0 -top-40 h-[40em] w-[40em] not-md:hidden' />
                <div className='flex flex-col items-center justify-center gap-3 py-5
                md:w-1/3 md:pr-23
                not-md:w-full not-md:px-10'>
                    <Note />
                    <Input />
                </div>
            </div>
        </div>
    )
}

export default SendMail
