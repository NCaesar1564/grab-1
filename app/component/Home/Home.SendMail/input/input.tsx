import React from 'react'

const input = ({ send }: any) => {
    return (
        <form className='w-[400px] h-[50px] not-lg:w-[320px] bg-white p-2.5 flex justify-end items-center rounded-2xl'>
            <input type="email" className='outline-none border-none not-lg:w-[300px]' placeholder='Type your email....' />
            <button className='h-[40px] w-[140px]  text-white bg-[#396C03] rounded-2xl p-2 uppercase cursor-pointer' type='submit' onClick={send}>subcribe</button>
        </form>
    )
}

export default input