import React from 'react'
import Images from '@/public/images/Delivery.png'
import Image from 'next/image'
const Delivery = (defaultImage: any) => {
  return (
    <div className='w-[270px] h-[63px] flex items-center justify-start pl-3 py-2 rounded-4xl bg-[#396C03] cursor-pointer'>
      <p className='text-white bg-transparent w-[200px]'>Bike Delivery</p>
      <Image height={54} width={54} alt='' src={Images || defaultImage} className='w-[54px] h-[54px] bg-white border rounded-[50%]'/>
    </div>
  )
}

export default Delivery