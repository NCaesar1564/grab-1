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
        <div className='w-full flex justify-center items-center mt-10'>
            <div className='w-[1400px] h-[837px] flex justify-center items-start relative gap-x-[300px]'>
                <div className='w-[630px] h-[837px] text-start flex flex-col justify-start items-start gap-8 not-md:hidden '>
                    <Delivery defaultImage={defaultImage} />
                    <div className='flex flex-col justify-center gap-15'>
                        <RightTitile />
                    </div>
                    <div className='flex items-center justify-start gap-10 mt-10'>
                        <OrderProcess />
                        <Order />
                    </div>
                </div>
                <div className='absolute left-[498px] top-[225px] not-md:hidden'>
                    <Middle />
                </div>
                <div className='w-[589px] h-[837px] relative not-md:w-full z-50 pt-12 '>
                    <div className='grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-25'>
                        <Card />
                    </div>
                    <LeftBackground />
                </div>
            </div>
            
        </div>
    )
}

export default BestSeller