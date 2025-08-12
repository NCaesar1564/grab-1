import React from 'react'

const input = ({ send }: any) => {
    return (
        <form className='w-[20em] bg-white p-2.5 flex justify-center rounded-2xl'>
            <input type="email" className='outline-none border-none' placeholder='Type your email....' />
            <button className='text-white w-[8em] bg-[#396C03] rounded-2xl p-2 uppercase cursor-pointer' type='submit' onClick={send}>subcribe</button>
        </form>
    )
}

export default input