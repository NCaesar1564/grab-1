import Image from 'next/image'
import React from 'react'
import images from '@/public/images/DeliveryWay.png'
import Title from '../../ui/Title'

const DeliveryWay = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Title bTitle="Food Us As Importaint Part Of A Balanced Diet" sTitle="How To Work" />
            <Image height={800} width={1300} alt='' src={images} className='lg:w-[1300px] lg:h-[20em] not-lg:h-[10em] not-lg:w-[90%]' />
        </div>
    )
}

export default DeliveryWay