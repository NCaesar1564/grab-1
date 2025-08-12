import React from 'react'

const label = ({ bLabel, sLable }: any) => {
    return (
        <div className='flex flex-col items-start gap-y-1'>
            <p className='text-xl text-[#396C03] font-bold'>{bLabel}</p>
            <p className='text-sm text-[#666666]'>{sLable}</p>
        </div>
    )
}

export default label