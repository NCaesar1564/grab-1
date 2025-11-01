import React from 'react'
import BtnPrev from './btnPrev'
import BtnNext from './btnNext'
const button = ({ btnPrev, btnNext }: any) => {
    return (
        <div className='w-[692px] not-lg:w-[372px] flex absolute -left-5 z-10'>
            <div className='w-1/2 flex justify-start cursor-pointer'>
                <BtnPrev prev={btnPrev} />
            </div>
            <div className='w-1/2 flex justify-end cursor-pointer'>
                <BtnNext next={btnNext} />
            </div>
        </div>
    )
}

export default button