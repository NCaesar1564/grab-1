import React from 'react'
const SmallTitle = () => {
    return (
        <p className='text-wrap text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facere ullam porro autem cumque id vero a. Adipisci ea tempora laudantium deleniti ratione voluptatibus! Laudantium modi doloribus animi ratione aliquam!</p>
    )
}
const RightTitile = () => {
    return (
        <>
            <div className='flex flex-col gap-0 w-full'>
                <h1 className='text-[95px] h-[116px] font-bold'>The Fastest</h1>
                <h1 className='text-[95px] h-[116px] font-bold'>Delivery</h1>
                <h1 className='text-[95px] h-[116px] font-bold flex gap-2'>
                    <p className='text-black'>In</p>
                    <p className='text-[#396C03]'>Your City</p>
                </h1>
            </div>
            <SmallTitle />
        </>
    )
}

export default RightTitile