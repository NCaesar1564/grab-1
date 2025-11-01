import React from 'react'

const titile = ({ bTitle, sTitle, title }: any) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center mt-15 mb-8 ${title ? 'hidden' : ''}`}>
      <p className='text-[#396C03] font-serif'>{sTitle}</p>
      <p className='text-2xl font-bold text-center'>{bTitle}</p>
    </div>
  )
}

export default titile