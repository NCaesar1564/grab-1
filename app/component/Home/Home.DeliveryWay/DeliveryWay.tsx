import Image from 'next/image'
import React from 'react'
import images from '@/public/images/DeliveryWay.png'
import Titile from '../../ui/Titile'

const DeliveryWay = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Titile bTitile="Food Us As Importaint Part Of A Balanced Diet" sTitile="How To Work" />
            <Image height={800} width={800} alt='' src={images}
            className='
            md:w-[80%] md:h-[20em] 
            not-md:h-[10em] not-md:w-[90%]
            '/>
        </div>
    )
}

export default DeliveryWay