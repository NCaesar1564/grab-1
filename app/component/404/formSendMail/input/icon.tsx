import React, { JSX } from 'react'

const icon = ({ ico, href }: { ico: JSX.Element, href: string }) => {
    return (
        <a href={href} className='h-[18px] w-[18px] flex justify-center items-center'>
            {ico}
        </a>
    )
}

export default icon