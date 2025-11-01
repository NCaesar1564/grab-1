import React from 'react'

const input = ({ type, placeholder, onChange }: any) => {
    return (
        <div className='w-[562px] not-md:w-[400px] h-[54px] flex justify-start items-center bg-[#FFFFFF]'>
            <input className='ml-2.5 w-[484px] h-[24px] px-5 py-2 placeholder:text-gray-300 outline-none'
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                required
            />
        </div>
    )
}

export default input