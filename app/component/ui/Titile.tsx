import React from 'react'

const titile = ({bTitile, sTitile}: any) => {
  return (
    <div className='flex flex-col justify-center items-center w-full mt-15 mb-5'>
      <p className='text-[#396C03] font-serif'>{sTitile}</p>
      <p className='text-2xl font-bold text-center'>{bTitile}</p>
    </div>
  )
}

export default titile