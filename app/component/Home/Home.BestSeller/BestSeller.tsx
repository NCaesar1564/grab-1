import React from 'react'
import Order from './button/OrderProcess'
import OrderProcess from './button/Order'
import RightTitile from './title/RightTitile'
import Middle from './background/Middle'
import Delivery from './button/Delivery'
import Card from './card/card'
import LeftBackground from './background/LeftBackground'

const BestSeller = ({ defaultImage }: any) => {
    return (
        <div className='w-full flex justify-center items-center mt-[70px] relative'>
            <div className='w-[90%] h-[837px] flex justify-center items-start relative mt-10'>
                <div className='
                flex flex-col justify-center gap-8
                md:w-1/2
                not-md:hidden'>
                    <Delivery defaultImage={defaultImage} />
                    <div className='flex flex-col justify-center gap-8 w-7/12'>
                        <RightTitile />
                    </div>
                    <div className='flex items-center justify-start gap-10'>
                        <OrderProcess />
                        <Order />
                    </div>
                </div>
                <div className='
                absolute left-[30%] top-[30%]
                not-md:hidden'>
                    <Middle />
                </div>
                <div className='h-full relative mt-6
                md:w-1/2
                not-md:w-full'>
                    <div className='grid grid-cols-2 grid-rows-2 gap-15'>
                        <Card />
                    </div>
                </div>
            </div>
            <LeftBackground />
        </div>
    )
}

export default BestSeller