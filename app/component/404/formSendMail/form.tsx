import React from 'react'
import Label from './label/label'
import Input from './input/input'
const form = () => {
  return (
    <div className='h-[162px] w-full bg-[#E6E6E6] flex justify-center items-center'>
        <form className='flex gap-x-20'>
            <Label />
            <Input />
        </form>
    </div>
  )
}

export default form