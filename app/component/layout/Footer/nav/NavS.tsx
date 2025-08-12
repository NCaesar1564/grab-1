import React from 'react'

const NavS = ({ href, name }: any) => {
    return (
        <div className='col-span-5 flex justify-center items-center gap-3'>
            <a href={href} className='text-white not-md:text-xs'>{name}</a>
        </div>
    )
}

export default NavS