import React from 'react'

const checkbox = () => {
  return (
    <div className='h-[24px] w-full flex justify-start items-center gap-[7px]'>
        <input type="checkbox" className='w-[14px] h-[14px]'/>
        <p className='w-full h-[14px] size-[14px] font-medium text-[#828282]'>I accept the Terms of use & privay policy</p>
    </div>
  )
}

export default checkbox