import React from 'react'
import Images from '@/public/images/Delivery.png'
import Image from 'next/image'
const Delivery = (defaultImage: any) => {
  return (
    <div className='w-40 flex items-center justify-start pl-3 gap-3 py-2 rounded-3xl bg-[#396C03] relative cursor-pointer'>
      <p className='text-white'>Bike Delivery</p>
      <Image height={800} width={800} alt='' src={Images || defaultImage} className='absolute right-0.5 w-10 h-10 p-1 border rounded-[50%]'/>
    </div>
  )
}

export default Delivery